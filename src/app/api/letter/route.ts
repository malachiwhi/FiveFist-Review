import type { NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

export async function POST(req: Request, res: NextApiResponse) {
  const { email } = await req.json();
  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  const MailchimpKey = process.env.MAIL_CHIMP_API;
  const MailchimpAudience = process.env.MAILCHIMP_AUDIENCE_ID;

  const url = `https://us22.api.mailchimp.com/3.0/lists/${MailchimpAudience}/members`; 
  

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `apikey ${MailchimpKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email_address: email,
      status: "subscribed",
    }),
  });

  if(!response.ok) {
    const errorData = await response.json(); 
    throw new Error(`Mailchimp API error: ${errorData.detail}`);
  }

  console.log("User subscription suc");

  console.log(response)
  const received = await response.json();
  return NextResponse.json(received);
}