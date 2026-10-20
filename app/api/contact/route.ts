import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, contact, category, message } = body;

    // 입력값 유효성 검사
    if (!name || !contact || !message) {
      return NextResponse.json(
        { error: "이름, 연락처, 문의 내용을 모두 입력해주세요." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey || apiKey === "re_your_api_key_here") {
      return NextResponse.json(
        {
          error:
            "Resend API 키가 설정되지 않았습니다. .env.local 파일에 RESEND_API_KEY를 입력해주세요.",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const toEmail = process.env.CONTACT_EMAIL_TO || "delivered@resend.dev";
    const fromEmail = process.env.CONTACT_EMAIL_FROM || "onboarding@resend.dev";

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: contact.includes("@") ? contact : undefined,
      subject: `[웹페이지 문의] ${name}님의 ${category || "문의사항"}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
          <h2 style="color: #003566; margin-top: 0; border-bottom: 2px solid #06D6A0; padding-bottom: 12px;">
            새로운 문의사항이 도착했습니다
          </h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr>
              <td style="padding: 10px 0; font-weight: bold; width: 120px; color: #4a5568;">보낸 사람:</td>
              <td style="padding: 10px 0; color: #1a202c;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #4a5568;">연락처 / 이메일:</td>
              <td style="padding: 10px 0; color: #1a202c;">${contact}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #4a5568;">문의 유형:</td>
              <td style="padding: 10px 0; color: #1a202c;">${category || "일반 문의"}</td>
            </tr>
          </table>

          <div style="margin-top: 24px; padding: 16px; background-color: #f7fafc; border-radius: 8px; border: 1px solid #edf2f7;">
            <p style="font-weight: bold; margin-top: 0; margin-bottom: 8px; color: #2d3748;">문의 내용:</p>
            <p style="white-space: pre-wrap; margin: 0; line-height: 1.6; color: #2d3748;">${message}</p>
          </div>

          <div style="margin-top: 28px; padding-top: 14px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #a0aec0; text-align: center;">
            본 메일은 개인 웹페이지 문의 폼을 통해 발송되었습니다.
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json(
        { error: error.message || "이메일 전송 중 오류가 발생했습니다." },
        { status: 400 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (err: unknown) {
    console.error("Server Error:", err);
    return NextResponse.json(
      { error: "서버 처리 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
