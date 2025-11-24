import React, { useState } from 'react';
import projects from '../data/projects';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import ContactBtn from '../components/ContactBtn';
import { useTranslation } from 'react-i18next';

export default function Works() {
  const [open, setOpen] = useState(null);
  const { t } = useTranslation();
  return (
    <div>
      <main className="container section" style={{marginLeft: '20px'}}>
        <h1 className='work_service_tagline'>{t('works_and_service_title')}</h1>
        <div className='works_and_service_intro'>
          <div className="page-intro">{t('works_and_service_intro_1')}</div>
          <div className="page-intro">{t('works_and_service_intro_2')}</div>
          <div className="page-intro">{t('works_and_service_intro_3')}</div>
        </div>
        <div className="projects-grid">
          {projects.map(p => <ProjectCard p={p} key={p.id} onOpen={setOpen} />)}
        </div>
        <ProjectModal project={open} onClose={() => setOpen(null)} />
      </main>
      <main className="container section" style={{marginRight: '20px'}}>
        <h2 className='container-margin'>{t('services_title')}</h2>
        <div className="services-grid">
          <ServiceCard image={'/pic/userInterface.jpg'} title={t('service_ux')}>
            {t('service_ux_desc')}
          </ServiceCard>
          <ServiceCard image={'/pic/kaizenReview.jpg'} title={t('service_review')}>
            {t('service_review_desc')}
          </ServiceCard>
          <ServiceCard image={'/pic/navigation.jpg'} title={t('service_navigation')}>
            {t('service_navigation_desc')}
          </ServiceCard>
          <ServiceCard image={'/pic/tagengo.jpg'} title={t('service_translation')}>
            {t('service_translation_desc')}
          </ServiceCard>
        </div>
      </main>
      <div className="container section">
        <ContactBtn />
      </div>
    </div>
  );
}

