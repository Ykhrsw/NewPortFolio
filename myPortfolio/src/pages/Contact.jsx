import React from 'react';
import ContactForm from '../components/ContactForm';
import { useTranslation } from 'react-i18next';

export default function Contact(){
  const { t } = useTranslation();
  return (
    <main className="container section">
      <h1 className="contact_tagline">{t('contact_title')}</h1>
      <ContactForm />
    </main>
  );
}
