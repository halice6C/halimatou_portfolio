import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contact.scss";


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
<form ref={form} onSubmit={sendEmail} className="contact-form">
  <h2>Contactez-moi</h2>

  <input type="text" name="name" placeholder="Votre nom" required />
  <input type="email" name="email" placeholder="Votre email" required />
  <textarea name="message" placeholder="Votre message" required rows={5} />

  <button className = "contact-btn" type="submit">Envoyer</button>
</form>
  );
}
