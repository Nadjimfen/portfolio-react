import React from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useNavigate } from "react-router-dom";
function Home() {
    const particlesInit = async (engine) => {
        await loadSlim(engine);
      };
      
      const navigate = useNavigate();

  return (
    <div className="home">
      <Particles
        id="particles-js"
        init={particlesInit}
        options={{
          particles: {
            number: { value: 100 },
            size: { value: 3 },
            move: { speed: 1 }
          }
        }}
      />
      <div className="home-content">
        {/* <img src="/stillife.jpg" alt="Profil" className="profile-image" /> */}
        <h1>Hi, I'm <span className="highlight">Fennouch Nadjim</span></h1>
        <h2>Web Developer</h2>
        <p>Passionné par le développement web moderne et interactif.</p>
            

        <button onClick={()=>navigate("/Contact")}className="btn">Me Contacter</button>
      </div>
      <div className="technologies">
                <h2>Technologies que je maîtrise</h2>
                <ul>
                    <li>Laravel</li>
                    <li>Express js</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>PHP</li>
                    <li>Java</li>
                </ul>
            </div>

            {/* Section IDEs */}
            <div className="ides">
                <h2>Environnements de développement (IDE)</h2>
                <ul>
                    <li>Visual Studio Code (VSC)</li>
                    <li>NetBeans</li>
                    <li>Eclipse</li>
                    <li>Cisco Packet Tracer</li>
                    <li>Wireshark</li>
                </ul>
            </div>
    </div>
  );
}

export default Home;