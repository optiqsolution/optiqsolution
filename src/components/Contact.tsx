import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const ACCOUNT_PASSWORD = import.meta.env.VITE_MAILGUN_API_KEY;
    const { name = "", email, company = "", message = "" } = formState;

    if (!email) {
      alert("Your name and email address are required!");
      return;
    }

    if (!ACCOUNT_PASSWORD) {
      console.error("VITE_MAILGUN_API_KEY is missing.");
      alert("Server configuration error. Please contact support.");
      return;
    }

    const sendEmail = async (to: string, subject: string, text: string) => {
      try {
        const response = await fetch(
          "https://api.mailgun.net/v3/contact.virajbandara.com/messages",
          {
            method: "POST",
            headers: {
              Authorization: "Basic " + btoa(`api:${ACCOUNT_PASSWORD}`),
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
              from: "TechForge <noreply@contact.virajbandara.com>",
              to,
              subject,
              text,
            }),
          }
        );

        if (!response.ok) {
          const errorDetails = await response.json();
          console.error("Mailgun Error:", errorDetails);
          throw new Error(
            "We are unable to send your message. Please contact us via me@virajbandara.com."
          );
        }

        return true;
      } catch (error) {
        console.error("Error:", error);
        throw new Error(
          "An unexpected error occurred. Please try again later."
        );
      }
    };

    try {
      // Sending email to the user
      await sendEmail(
        `${name} <${email}>`,
        `Hello ${name}, Thank you for reaching out to TechForge`,
        `Dear ${name},\n\nThank you for contacting TechForge! We’ve received your message and will get back to you shortly. Our team is here to assist with any questions or needs you have about our services.\n\nIf there's anything urgent, feel free to reach us at +1 905 981 8019 or reply to this email directly.\n\nWe look forward to helping you!\n\nBest regards,\nTechForge Team`
      );

      // Sending email to the internal team
      await sendEmail(
        `TechForge - Contact Us <me@virajbandara.com>`,
        `[Attention] New inquiry received.`,
        `Hello Team,\n\nYou have received a new contact form submission:\n\n- Name: ${name}\n- Email: ${email}\n- Company: ${company}\n- Message:\n${message}\n\nPlease review and follow up as necessary.\n\nBest regards,\nTechForge Automated System`
      );

      alert(
        "Thank you for contacting us. We have successfully sent your message to our team."
      );
    } catch (error) {
      console.error("Error:", error);
      alert('Something went wrong! Please contact us via me@virajbandara.com');
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-gray-600">
            Have a project in mind? We'd love to hear about it. Drop us a
            message and we'll get back to you as soon as possible.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto bg-white rounded-xl shadow-lg p-8"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formState.name}
                onChange={(e) =>
                  setFormState({ ...formState, name: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formState.email}
                onChange={(e) =>
                  setFormState({ ...formState, email: e.target.value })
                }
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Company Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={formState.company}
              onChange={(e) =>
                setFormState({ ...formState, company: e.target.value })
              }
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              required
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={formState.message}
              onChange={(e) =>
                setFormState({ ...formState, message: e.target.value })
              }
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-blue-600 text-white py-3 rounded-lg flex items-center justify-center gap-2"
            type="submit"
          >
            Send Message
            <Send className="h-5 w-5" />
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
