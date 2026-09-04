import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { google } from 'googleapis';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    // Google Sheets Integration
    if (process.env.GOOGLE_CLIENT_EMAIL && process.env.GOOGLE_PRIVATE_KEY && process.env.GOOGLE_SPREADSHEET_ID) {
      try {
        const auth = new google.auth.GoogleAuth({
          credentials: {
            client_email: process.env.GOOGLE_CLIENT_EMAIL,
            private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
          },
          scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const client = await auth.getClient();
        const sheets = google.sheets({ version: 'v4', auth: client as any });

        await sheets.spreadsheets.values.append({
          spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
          range: 'Sheet1!A2:B',
          valueInputOption: 'USER_ENTERED',
          insertDataOption: 'INSERT_ROWS',
          requestBody: {
            values: [[email, new Date().toISOString()]],
          },
        });
      } catch (sheetError: any) {
        console.error('Google Sheets append error:', sheetError?.message || sheetError);
        // Continue to save locally to fallback
      }
    }

    // Local file fallback
    // const filePath = path.join(process.cwd(), 'emails.json');
    // let emails: string[] = [];

    // if (fs.existsSync(filePath)) {
    //   const fileData = fs.readFileSync(filePath, 'utf8');
    //   emails = JSON.parse(fileData);
    // }

    // if (!emails.includes(email)) {
    //   emails.push(email);
    //   fs.writeFileSync(filePath, JSON.stringify(emails, null, 2));
    // }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Waitlist API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
