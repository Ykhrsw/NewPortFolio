import React from 'react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e)=>e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <img src={project.image} alt={project.title} className="modal-image" />
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        {project.link && <a href={project.link} target="_blank" rel="noreferrer">Visit</a>}
      </div>
    </div>
  );
}
