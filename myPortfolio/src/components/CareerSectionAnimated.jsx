import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function CareerSection() {
  const { t } = useTranslation();
  const [visibleItems, setVisibleItems] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idx = entry.target.getAttribute('data-index');
          setVisibleItems(prev => new Set([...prev, idx]));
        }
      });
    }, { threshold: 0.3 });

    const items = document.querySelectorAll('[data-index]');
    items.forEach(item => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const timelineData = [
    { year: 1997, key: 'about_1997' },
    { year: 2010, key: 'about_2010' },
    { year: 2020, key: 'about_2020' },
    { year: 2023, key: 'about_2023' },
    { year: 2024, key: 'about_2024' },
    { year: 2025, key: 'about_2025' },
  ];

  return (
    <section className="career-section container section">
      <div className="career-intro">
        <h2>{t('about_career_intro_title')}</h2>
        <p>{t('about_career_intro')}</p>
      </div>

      <div className="timeline-section">
        <h3>{t('about_timeline_title')}</h3>
        <div className="timeline">
          {timelineData.map((item, idx) => (
            <div
              key={idx}
              className={`timeline-item ${visibleItems.has(String(idx)) ? 'visible' : ''}`}
              data-index={idx}
              style={{
                opacity: visibleItems.has(String(idx)) ? 1 : 0,
                transform: visibleItems.has(String(idx)) ? 'translateX(0)' : 'translateX(-20px)',
                transition: 'all 0.6s ease forwards',
                transitionDelay: `${idx * 0.1}s`,
              }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-year">{item.year}</span>
                <p>{t(item.key)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="values-section">
        <h3>{t('about_values_title')}</h3>
        <ol className="values-list">
          <li>{t('about_value_1')}</li>
          <li>{t('about_value_2')}</li>
          <li>{t('about_value_3')}</li>
          <li>{t('about_value_4')}</li>
        </ol>
      </div>

      <div className="skills-hobbies">
        <div>
          <h4>{t('about_skills_title')}</h4>
          <p>{t('about_skills')}</p>
        </div>
        <div>
          <h4>{t('about_hobbies_title')}</h4>
          <p>{t('about_hobbies')}</p>
        </div>
      </div>
    </section>
  );
}
