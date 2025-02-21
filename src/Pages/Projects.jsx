import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedScreenshot, setSelectedScreenshot] = useState(null);

  const projects = [
    {
      id: 1,
      img: "/vL.jpeg",
      title: "Application de gestion de location de véhicules",
      desc: "Développement avec JavaScript, CSS, HTML et PHP.",
      screenshots: []
    },
    {
      id: 2,
      img: "/Cab.jpg",
      title: "Application de gestion d'un cabinet médical",
      desc: "Développement avec Bootstrap et Laravel.",
      screenshots: [
        "/projet_laravel/Capture d’écran 2024-06-20 113740.png",
        "/projet_laravel/Capture d’écran 2024-06-20 113853.png",
        "/projet_laravel/Capture d’écran 2024-06-20 113945.png",
        "/projet_laravel/Capture d’écran 2024-06-20 114129.png",
        "/projet_laravel/Capture d’écran 2024-06-20 114241.png",
        "/projet_laravel/Capture d’écran 2024-06-20 114454.png",
        "/projet_laravel/Capture d’écran 2024-06-20 114713.png",
        "/projet_laravel/Capture d’écran 2024-06-20 115004.png",
        "/projet_laravel/ajrdv.png",
        "/projet_laravel/Capture d’écran 2024-06-20 115105.png",
        "/projet_laravel/Capture d’écran 2024-06-20 115706.png",
        "/projet_laravel/Capture d’écran 2024-06-29 131800.png",
        "/projet_laravel/faycel_mb.png",
        "/projet_laravel/Capture d’écran 2024-06-20 114358.png"
      ]
    }
  ];

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
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="project-card"
            style={{ backgroundColor: "#222", padding: "20px", borderRadius: "10px", textAlign: "left", width: "300px", cursor: "pointer" }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            onClick={() => setSelectedProject(project)}
          >
            <motion.img
              src={project.img}
              alt={project.title}
              className="project-image"
              style={{ width: "100%", borderRadius: "10px" }}
            />
            <motion.h2 style={{ fontSize: "1.5rem", marginTop: "15px" }}>
              {project.title}
            </motion.h2>
            <motion.p style={{ fontSize: "1rem", marginTop: "10px" }}>
              {project.desc}
            </motion.p>
          </motion.div>
        ))}
      </div>

      {/* Modal des captures d'écran */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="modal"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.9)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              zIndex: 1000
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Bouton de fermeture */}
            <button
              onClick={() => {
                setSelectedProject(null);
                setSelectedScreenshot(null);
              }}
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                background: "transparent",
                border: "none",
                color: "#fff",
                fontSize: "2rem",
                cursor: "pointer"
              }}
            >
              &times;
            </button>

            {/* Galerie des captures */}
            <div
              style={{
                display: "flex",
                gap: "20px",
                overflowX: "auto",
                padding: "20px",
                maxWidth: "80%"
              }}
            >
              {selectedProject.screenshots.map((screenshot, i) => (
                <motion.img
                  key={i}
                  src={screenshot}
                  alt={`Capture ${i + 1}`}
                  onClick={() => setSelectedScreenshot(screenshot)}
                  style={{
                    width: "300px",
                    borderRadius: "10px",
                    cursor: "pointer",
                    border: selectedScreenshot === screenshot ? "3px solid #fff" : "none"
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                />
              ))}
            </div>

            {/* Affichage de la capture sélectionnée en grand */}
            {selectedScreenshot && (
              <motion.img
                src={selectedScreenshot}
                alt="Capture en grand"
                style={{
                  marginTop: "20px",
                  width: "60%",
                  borderRadius: "10px",
                  border: "3px solid #fff"
                }}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Projects;
