import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
    return (
        <div className="contact" style={{ backgroundColor: "#000", color: "#fff", padding: "50px", textAlign: "center" }}>
            <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>Contactez-moi</h1>
            <p style={{ fontSize: "1.2rem", marginBottom: "30px" }}>Je suis disponible pour discuter de nouvelles opportunités. N'hésitez pas à me joindre !</p>
            <form className="contact-form" style={{ display: "flex", flexDirection: "column", maxWidth: "500px", margin: "0 auto" }}>
                <input type="text" placeholder="Votre Nom" required style={{ padding: "10px", marginBottom: "10px", borderRadius: "5px", border: "none" }} />
                <input type="email" placeholder="Votre Email" required style={{ padding: "10px", marginBottom: "10px", borderRadius: "5px", border: "none" }} />
                <textarea placeholder="Votre Message" required style={{ padding: "10px", marginBottom: "10px", borderRadius: "5px", border: "none" }}></textarea>
                <button type="submit" style={{ padding: "12px", backgroundColor: "#ff9800", color: "white", fontSize: "1rem", border: "none", borderRadius: "5px", cursor: "pointer" }}>Envoyer</button>
            </form>
            <div className="contact-links" style={{ marginTop: "30px" }}>
                <a href="mailto:nadjimfennouch@gmail.com" className="contact-icon" style={{ color: "white", fontSize: "1.2rem", marginRight: "15px" }}>
                    <FaEnvelope /> Email
                </a>
                <a href="https://www.linkedin.com/in/nadjim-fennouch-98731529b/" className="contact-icon" target="_blank" rel="noopener noreferrer" style={{ color: "white", fontSize: "1.2rem", marginRight: "15px" }}>
                    <FaLinkedin /> LinkedIn
                </a>
                <a href="https://github.com/Nadjimfen" className="contact-icon" target="_blank" rel="noopener noreferrer" style={{ color: "white", fontSize: "1.2rem" }}>
                    <FaGithub /> GitHub
                </a>
            </div>
        </div>
    );
}

export default Contact;
