import React from 'react';
import CareerSection from '../components/CareerSection';
import { useTranslation } from 'react-i18next';
import ContactBtn from '../components/ContactBtn';


export default function About(){
  const { t } = useTranslation();
  
  const skills = (t('about_skills') || 'HTML / CSS / JavaScript / React / Python').split(' / ').map(s => s.trim());
  const hobbies = (t('about_hobbies') || '旅行 / 読書 / 運動').split(' / ').map(h => h.trim());

  return (
    <main className="container section" style={{marginLeft: '20px'}}>
      <div className="page-header">
        <h1>{t('about_title')}</h1>
        <p className="tagline">{t('about_tagline')}</p>
      </div>

      <div className="about-grid">
        <div className="about-photo">
          <img src="/pic/aboutPhoto.jpg" alt="Yuki" />
        </div>
        <div className="about-text">
          <h2>{t('about_career_intro_title')}</h2>
          <div className="about-more">
            <p>{t('about_career_intro')}</p>
            <p>{t('about_bg_1')}</p>
            <p>{t('about_bg_2')}</p>
            <p>{t('about_bg_3')}</p>
            <p>{t('about_bg_4')}</p>
          </div>
        </div>
      </div>
      <CareerSection />
      <ContactBtn />
    </main>
  );
}
