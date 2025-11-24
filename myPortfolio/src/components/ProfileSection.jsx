import React from 'react';
import { useTranslation } from 'react-i18next';

export default function ProfileSection() {
  const { t } = useTranslation();
  
  const skills = (t('home_skills') || 'HTML / CSS / JavaScript / React / Python').split(' / ');
  const hobbies = (t('home_hobbies') || '旅行 / 読書 / 運動、スポーツ').split(' / ');
  const values = [
    t('home_value_1'),
    t('home_value_2'),
    t('home_value_3'),
    t('home_value_4')
  ];

  return (
    <section className="profile-section container section" >
      <div className="profile-grid">
        <div className="profile-column">
          <h3>{t('home_skills_title')}</h3>
          <div className="skills-list">
            {skills.map((skill, i) => (
              <span key={i} className="skill-tag">{skill.trim()}</span>
            ))}
          </div>
        </div>

        <div className="profile-column">
          <h3>{t('home_hobbies_title')}</h3>
          <div className="hobbies-list">
            {hobbies.map((hobby, i) => (
              <span key={i} className="hobby-tag">{hobby.trim()}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="values-section">
        <h3>{t('home_values_title')}</h3>
        <ol className="values-list">
          {values.map((value, i) => (
            <li key={i}>{value}</li>
          ))}
        </ol>
      </div>
    </section>
  );
}
