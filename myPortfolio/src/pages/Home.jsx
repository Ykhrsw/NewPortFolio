import React from 'react';
import HeroSection from '../components/HeroSection';
import ProfileSection from '../components/ProfileSection';
import projects from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import ServiceCard from '../components/ServiceCard';
import { useState } from 'react';
import ProjectModal from '../components/ProjectModal';
import { useTranslation } from 'react-i18next';

export default function Home(){
  const [open, setOpen] = useState(null);
  const { t } = useTranslation();

  return (
    <main>
      <HeroSection />
      <ProfileSection />
      <section className="section container" style={{marginLeft: '20px'}}>
        <h2>{t('works_title')}</h2>
        <div className="projects-grid">
          {projects.map(p => <ProjectCard p={p} key={p.id} onOpen={setOpen} />)}
        </div>
      </section>

      <section className="section container" style={{marginLeft: '20px'}}>
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
      </section>
      <ProjectModal project={open} onClose={() => setOpen(null)} />
    </main>
  );
}
