import React from 'react';
import { useTranslation } from 'react-i18next';

export default function HeroSection() {
  const { t } = useTranslation();
  return (
    <section className="hero">
      <div className="hero-inner container">
        <div className="hero-text">
          <h1 className="hero-title">{t('name')}</h1>
          <h2 className="hero-sub">{t('title')}</h2>
          <p className="hero-intro">{t('intro')}</p>
          <p className="hero-intro"><strong>{t('home_additional')}</strong></p>
          <a className="cta" href="/contact">{t('contact_cta')}</a>
        </div>
        <div className="hero-image">
          <img src="/pic/YukiHirasawa.jpg" alt="Yuki" />
        </div>
      </div>
    </section>
  );
}
