import React from "react";
import "./TechStack.css";
import { motion } from "framer-motion";

// Importăm icon-urile existente
import htmlIcon from "../../assets/html.jpg";
import cssIcon from "../../assets/css.png";
import jsIcon from "../../assets/js.png";
import reactIcon from "../../assets/react.png";
import nodeIcon from "../../assets/npm.png";          
import postgresIcon from "../../assets/project_weather3.png"; 
import gitIcon from "../../assets/git.png";
import bootstrapIcon from "../../assets/bootstrap.png";
import figmaIcon from "../../assets/figma.png";
import PostmanIcon from "../../assets/postman.png";
import npmIcon from "../../assets/npm.png";
import vscodeIcon from "../../assets/vscode.png";
// import tailwindIcon from "../../assets/tailwind.jpg";

const tech = [
  { name: "HTML5", icon: htmlIcon },
  { name: "CSS3", icon: cssIcon },
  { name: "JavaScript", icon: jsIcon },
  { name: "React", icon: reactIcon },
  { name: "Node.js", icon: nodeIcon },
  { name: "PostgreSQL", icon: postgresIcon },
  { name: "Git", icon: gitIcon },
  { name: "Bootstrap", icon: bootstrapIcon },
  { name: "Figma", icon: figmaIcon },
  { name: "Postman", icon: PostmanIcon },
  { name: "vscode", icon: vscodeIcon },
  { name: "npm", icon: npmIcon },
  // { name: "tailwind", icon: tailwindIcon },

];

const TechStack = () => {
  return (
    <section id="tech-stack" className="tech-stack">
      <h2 className="tech-title">Tech Stack</h2>
      <div className="tech-grid">
        {tech.map((item, index) => (
          <motion.div
            key={item.name}
            className="tech-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
          >
            <div className="tech-icon">
              <img src={item.icon} alt={item.name} />
            </div>
            <p className="tech-name">{item.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
