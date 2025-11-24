import React from 'react';
import { useTranslation } from 'react-i18next';

export default function ProjectCard({ p, onOpen }) {
  const { t } = useTranslation();
  const title = p.titleKey ? t(p.titleKey) : p.title;
  const desc = p.descKey ? t(p.descKey) : p.description;

  return (
    <article className="project-card" onClick={() => onOpen(p)}>
      <div className="project-media">
        <img src={p.image} alt={title} />
      </div>
      <div className="project-body">
        <h4>{title}</h4>
        <p className="muted">{desc}</p>
      </div>
    </article>
  );
}
