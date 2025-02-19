import React from "react";
import { motion } from "framer-motion";

function Projects() {
    return (
      <motion.div 
        className="projects" 
        style={{ backgroundColor: "#000", color: "#fff", padding: "50px", textAlign: "center" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          style={{ fontSize: "2.5rem", marginBottom: "20px" }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Mes Projets
        </motion.h1>
        <p>Voici une sélection de mes projets récents.</p>
        <div className="projects-list" style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
          {[
            { id: 1, img: "/vL.jpeg", title: "Application web pour la gestion de location de véhicules", desc: "Développement avec JavaScript, CSS, HTML et PHP." },
            { id: 2, img: "/Cab.jpg", title: "Application pour la gestion d'un cabinet médical", desc: "Développement avec Bootstrap et Laravel." }
          ].map((project, index) => (
            <motion.div 
              key={project.id} 
              className="project-card" 
              style={{ backgroundColor: "#222", padding: "20px", borderRadius: "10px", textAlign: "left", width: "300px" }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <motion.img 
                src={project.img} 
                alt={project.title} 
                className="project-image" 
                style={{ width: "100%", borderRadius: "10px" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.4 }}
              />
              <motion.h2 
                style={{ fontSize: "1.5rem", marginTop: "15px" }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.6 }}
              >
                {project.title}
              </motion.h2>
              <motion.p 
                style={{ fontSize: "1rem", marginTop: "10px" }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.8 }}
              >
                {project.desc}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
}
  
export default Projects;
