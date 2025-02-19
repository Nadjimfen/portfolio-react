import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
            (result) => {
                alert("Message envoyé !");
                console.log(result.text);
                form.current.reset();
            },
            (error) => {
                alert("Une erreur est survenue.");
                console.log(error.text);
            }
        );
    };
    const resetForm = () => {
        form.current.reset();  
    };

    return (
        <div className="contact" style={{ backgroundColor: "#000", color: "#fff", padding: "50px", textAlign: "center" }}>
            <h1>Contactez-moi</h1>
            <p>Je suis disponible pour discuter de nouvelles opportunités. N'hésitez pas à me joindre !</p>
            
            <form ref={form} onSubmit={sendEmail} style={{ display: "flex", flexDirection: "column", maxWidth: "500px", margin: "0 auto" }}>
                <input type="text" name="user_name" placeholder="Votre Nom" required style={{ padding: "10px", marginBottom: "10px" }} />
                <input type="email" name="user_email" placeholder="Votre Email" required style={{ padding: "10px", marginBottom: "10px" }} />
                <textarea name="message" placeholder="Votre Message" required style={{ padding: "10px", marginBottom: "10px" }}></textarea>
                <button type="submit" style={{ padding: "12px", backgroundColor: "#ff9800", color: "white", fontSize: "1rem", border: "none", borderRadius: "5px", cursor: "pointer" }}>
                    Envoyer
                </button>
                <button type="button" onClick={resetForm} style={{ padding: "12px", backgroundColor: "#ff3333", color: "white", fontSize: "1rem", border: "none", borderRadius: "5px", cursor: "pointer" }}>
                        Réinitialiser
                </button>
            </form>

            <div className="contact-links" style={{ marginTop: "30px" }}>
                <a href="mailto:nadjimfennouch24@gmail.com" style={{ color: "white", fontSize: "1.2rem", marginRight: "15px" }}>
                    <FaEnvelope /> Email
                </a>
                <a href="https://www.linkedin.com/in/nadjim-fennouch-98731529b/" target="_blank" rel="noopener noreferrer" style={{ color: "white", fontSize: "1.2rem", marginRight: "15px" }}>
                    <FaLinkedin /> LinkedIn
                </a>
                <a href="https://github.com/Nadjimfen" target="_blank" rel="noopener noreferrer" style={{ color: "white", fontSize: "1.2rem" }}>
                    <FaGithub /> GitHub
                </a>
            </div>
        </div>
    );
}

export default Contact;
