import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  { title: "Graph Algorithm Simulator", description: "Visualized Dijkstra's shortest path algorithm..." },
  { title: "Packaging System App", description: "An open-source project for a robust app..." }
];

const Projects = () => {
  return (
    <div>
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            whileHover={{ scale: 1.05 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
