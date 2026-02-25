import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Wypełnij wszystkie pola" },
        { status: 400 },
      );
    }

    await resend.emails.send({
      from: "TwojeImie <onboarding@resend.dev>",
      to: "snakedragon43@gmail.com",
      subject: `[Portfolio Contact] ${subject}`,
      html: `
        <h2>Nowa wiadomość z portfolio</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: "Coś poszło nie tak" }, { status: 500 });
  }
}
