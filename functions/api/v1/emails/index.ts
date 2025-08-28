export async function onRequestPost(context) {
  // Check if the request method is POST
  if (context.request.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const RESEND_API_KEY = context.env.RESEND_API_KEY;

  try {
    // Parse the JSON body
    const body = await context.request.json();
    const { name, email, company, message, type } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Name, email, and message are required." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Helper function to send emails via Resend
    const sendEmail = async (to, subject, html, text) => {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "OptiqSolution <noreply@dev.optiqsolution.com>",
          to: [to],
          subject,
          html,
          text,
        }),
      });

      if (!response.ok) {
        const errorDetails = await response.text();
        console.error("Resend Error:", errorDetails);
        throw new Error("Error sending email via Resend.");
      }

      return await response.json();
    };

    // Determine if it's a project inquiry or regular contact
    const isProjectInquiry = type === "project_inquiry";
    const inquiryType = isProjectInquiry ? "Project Inquiry" : "Contact Form";

    // Send confirmation email to the user
    const userSubject = isProjectInquiry 
      ? `Thank you for your project inquiry, ${name}!`
      : `Hello ${name}, Thank you for reaching out to OptiqSolution`;

    const userHtmlContent = isProjectInquiry
      ? `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Thank you for your project inquiry!</h2>
          <p>Dear ${name},</p>
          <p>We've received your project inquiry and are excited about the opportunity to work with you! Our team will review your requirements and get back to you within 24 hours with:</p>
          <ul>
            <li>Initial project assessment</li>
            <li>Recommended approach and timeline</li>
            <li>Next steps for moving forward</li>
          </ul>
          <p>Your project description:</p>
          <blockquote style="background: #f3f4f6; padding: 15px; border-left: 4px solid #2563eb; margin: 20px 0;">
            ${message.replace(/\n/g, '<br>')}
          </blockquote>
          <p>If you have any urgent questions, feel free to reach us at <a href="tel:+19059818019">+1 905 981 8019</a> or reply to this email directly.</p>
          <p>We look forward to bringing your vision to life!</p>
          <br>
          <p>Best regards,<br><strong>OptiqSolution Team</strong></p>
        </div>
      `
      : `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Thank you for contacting OptiqSolution!</h2>
          <p>Dear ${name},</p>
          <p>We've received your message and will get back to you shortly. Our team is here to assist with any questions or needs you have about our services.</p>
          <p>If there's anything urgent, feel free to reach us at <a href="tel:+19059818019">+1 905 981 8019</a> or reply to this email directly.</p>
          <p>We look forward to helping you!</p>
          <br>
          <p>Best regards,<br><strong>OptiqSolution Team</strong></p>
        </div>
      `;

    const userTextContent = isProjectInquiry
      ? `Dear ${name},\n\nThank you for your project inquiry! We've received your project details and are excited about the opportunity to work with you. Our team will review your requirements and get back to you within 24 hours.\n\nYour project description:\n${message}\n\nIf there's anything urgent, feel free to reach us at +1 905 981 8019 or reply to this email directly.\n\nWe look forward to bringing your vision to life!\n\nBest regards,\nOptiqSolution Team`
      : `Dear ${name},\n\nThank you for contacting OptiqSolution! We've received your message and will get back to you shortly. Our team is here to assist with any questions or needs you have about our services.\n\nIf there's anything urgent, feel free to reach us at +1 905 981 8019 or reply to this email directly.\n\nWe look forward to helping you!\n\nBest regards,\nOptiqSolution Team`;

    await sendEmail(email, userSubject, userHtmlContent, userTextContent);

    // Send notification email to the internal team
    const teamSubject = `[${inquiryType}] New inquiry from ${name}`;
    const teamHtmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #dc2626;">🚨 New ${inquiryType} Received</h2>
        <p>Hello Team,</p>
        <p>You have received a new ${inquiryType.toLowerCase()} submission:</p>
        <table style="border-collapse: collapse; width: 100%; margin: 20px 0;">
          <tr style="background: #f9fafb;">
            <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold;">Name:</td>
            <td style="padding: 12px; border: 1px solid #e5e7eb;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold;">Email:</td>
            <td style="padding: 12px; border: 1px solid #e5e7eb;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr style="background: #f9fafb;">
            <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold;">Company:</td>
            <td style="padding: 12px; border: 1px solid #e5e7eb;">${company || "N/A"}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold;">Type:</td>
            <td style="padding: 12px; border: 1px solid #e5e7eb;">${inquiryType}</td>
          </tr>
        </table>
        <h3>Message/Project Description:</h3>
        <div style="background: #f3f4f6; padding: 15px; border-left: 4px solid #2563eb; margin: 20px 0;">
          ${message.replace(/\n/g, '<br>')}
        </div>
        <p><strong>Action Required:</strong> Please review and follow up as necessary.</p>
        <br>
        <p>Best regards,<br><strong>OptiqSolution Automated System</strong></p>
      </div>
    `;

    const teamTextContent = `Hello Team,\n\nYou have received a new ${inquiryType.toLowerCase()} submission:\n\n- Name: ${name}\n- Email: ${email}\n- Company: ${company || "N/A"}\n- Type: ${inquiryType}\n- Message/Project Description:\n${message}\n\nPlease review and follow up as necessary.\n\nBest regards,\nOptiqSolution Automated System`;

    await sendEmail("contact@optiqsolution.com", teamSubject, teamHtmlContent, teamTextContent);

    // Success response
    return new Response(
      JSON.stringify({ success: "Emails sent successfully via Resend." }),
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
