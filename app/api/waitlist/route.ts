import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    const filePath = path.join(process.cwd(), 'emails.json');
    let emails: string[] = [];

    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, 'utf8');
      emails = JSON.parse(fileData);
    }

    if (!emails.includes(email)) {
      emails.push(email);
      fs.writeFileSync(filePath, JSON.stringify(emails, null, 2));
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Waitlist API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
