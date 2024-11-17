export async function onRequestPost(context) {
  // Check if the request method is POST
  if (context.request.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const MAILGUN_DOMAIN = "contact.virajbandara.com";
  const MAILGUN_URL = `https://api.mailgun.net/v3/${MAILGUN_DOMAIN}/messages`;
  const ACCOUNT_PASSWORD = context.env.MAILGUN_API_KEY;

  try {
    // Parse the JSON body
    const body = await context.request.json();
    const { name, email, company, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Name, email, and message are required." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Helper function to send emails
    const sendEmail = async (to, subject, text) => {
      const response = await fetch(MAILGUN_URL, {
        method: "POST",
        headers: {
          Authorization: `Basic ${btoa(`api:${ACCOUNT_PASSWORD}`)}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          from: "TechForge <noreply@contact.virajbandara.com>",
          to,
          subject,
          text,
        }),
      });

      if (!response.ok) {
        const errorDetails = await response.text();
        console.error("Mailgun Error:", errorDetails);
        throw new Error("Error sending email.");
      }
    };

    // Send email to the user
    await sendEmail(
      `${name} <${email}>`,
      `Hello ${name}, Thank you for reaching out to TechForge`,
      `Dear ${name},\n\nThank you for contacting TechForge! We’ve received your message and will get back to you shortly. Our team is here to assist with any questions or needs you have about our services.\n\nIf there's anything urgent, feel free to reach us at +1 905 981 8019 or reply to this email directly.\n\nWe look forward to helping you!\n\nBest regards,\nTechForge Team`
    );

    // Send email to the internal team
    await sendEmail(
      `TechForge - Contact Us <me@virajbandara.com>`,
      `[Attention] New inquiry received.`,
      `Hello Team,\n\nYou have received a new contact form submission:\n\n- Name: ${name}\n- Email: ${email}\n- Company: ${
        company || "N/A"
      }\n- Message:\n${message}\n\nPlease review and follow up as necessary.\n\nBest regards,\nTechForge Automated System`
    );

    // Success response
    return new Response(
      JSON.stringify({ success: "Emails sent successfully." }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error:", error.message);
    return new Response(
      JSON.stringify({ error: error.message || "Internal Server Error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
