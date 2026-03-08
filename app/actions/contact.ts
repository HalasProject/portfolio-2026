"use server";

import { Resend } from "resend";

export type ContactResult = { success: boolean; message: string };

const resend = new Resend(process.env.RESEND_API_KEY);

export async function contactAction(
  formData: FormData
): Promise<ContactResult> {
  const name = formData.get("name") as string | null;
  const email = formData.get("email") as string | null;
  const message = formData.get("message") as string | null;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return { success: false, message: "Please fill in all fields." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, message: "Please enter a valid email address." };
  }

  try {
    await resend.emails.send({
      from:
        process.env.CONTACT_FROM ?? "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_TO ?? "bentayebtech@gmail.com",
      replyTo: email ?? undefined,
      subject: `New message from ${name} – Portfolio contact`,
      text: [`Name: ${name}`, `Email: ${email}`, "", "Message:", message].join(
        "\n"
      ),
    });

    return {
      success: true,
      message: "Thank you! Your message has been sent successfully.",
    };
  } catch (error) {
    console.error("Error sending contact email", error);
    return {
      success: false,
      message:
        "Something went wrong while sending your message. Please try again later.",
    };
  }
}
