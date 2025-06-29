import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9ct0xqe",
        "template_kqcrx7s",
        form.current!,
        "TOJrrkk5ov65xl5Uj"
      )
      .then(
        () => {
          alert("Message envoyé avec succès !");
          form.current?.reset();
        },
        (error) => {
          alert("Erreur lors de l'envoi : " + error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 max-w-md mx-auto">
      <input type="text" name="name" placeholder="Votre nom" required className="border p-2" />
      <input type="email" name="email" placeholder="Votre email" required className="border p-2" />
      <textarea name="message" placeholder="Votre message" required rows={5} className="border p-2" />
      <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        Envoyer
      </button>
    </form>
  );
}
