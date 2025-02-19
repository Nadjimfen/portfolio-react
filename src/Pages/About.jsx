import React from "react";
import { motion } from "framer-motion";

function About() {
    return (
        <motion.div 
            className="about" 
            style={{ backgroundColor: "#000", color: "#fff", padding: "50px", textAlign: "center" }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <motion.h1 
                style={{ fontSize: "2.5rem", marginBottom: "20px" }}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                À Propos de Moi
            </motion.h1>
            <motion.p 
                style={{ fontSize: "1.2rem", marginBottom: "30px" }}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                Développeur Full Stack passionné par l'innovation technologique, spécialisé en React.js et Node.js.
            </motion.p>
            <div className="about-content" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "20px" }}>
                <motion.img 
                    src="/Myphoto.jpg" 
                    alt="Mon Portrait" 
                    className="about-image" 
                    style={{ width: "200px", borderRadius: "50%" }}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                />
                <motion.div 
                    className="about-text" 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <h2>Mon Parcours</h2>
                    <p>Avec plusieurs années d'expérience dans le développement web, j'ai travaillé sur divers projets incluant des applications web interactives et des plateformes de gestion adaptées aux besoins spécifiques des clients.</p>
                    <h2>Mes Compétences</h2>
                    <motion.ul 
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0, y: 10 },
                            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } }
                        }}
                    >
                        <motion.li>Développement Front-end : React.js, CSS, Bootstrap</motion.li>
                        <motion.li>Développement Back-end : Node.js, Express, MySQL, Laravel</motion.li>
                        <motion.li>La maîtrise de Java</motion.li>
                        <motion.li>CI/CD et Cloud : GitHub Actions</motion.li>
                    </motion.ul>
                    <h2>Objectif Professionnel</h2>
                    <p>Je suis à la recherche d'opportunités pour collaborer avec des entreprises innovantes et contribuer à des projets ambitieux.</p>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default About;
