import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';

export default function ContactForm() {
  const { t } = useTranslation();
  const [status, setStatus] = useState(null);

  // EmailJS keys provided
  const SERVICE_ID = 'service_26mi73j';
  const TEMPLATE_ID = 'template_bg1h0cm';
  const PUBLIC_KEY = 'QIAZXPyfH0zjrDYe2';

  // Initialize EmailJS (safe to call multiple times)
  if (typeof window !== 'undefined' && emailjs && !emailjs._initialized) {
    try {
      emailjs.init(PUBLIC_KEY);
      // mark initialized to avoid re-init (simple flag)
      emailjs._initialized = true;
    } catch {
      // initialization error ignored; send will still accept public key as 4th arg
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const vals = Object.fromEntries(data);

    emailjs.send(SERVICE_ID, TEMPLATE_ID, vals, PUBLIC_KEY)
      .then(() => {
        setStatus('success');
        // show localized alert in user's language
        window.alert(t('contact_form_success'));
      })
      .catch(() => {
        setStatus('error');
        window.alert(t('contact_form_error'));
      });
  };

  return (
    <div className="contact-form-wrapper">
      <form onSubmit={handleSubmit} id="contactForm">
        <label>{t('contact_form_name')}<input name="from_name" required/></label>
        <label>{t('contact_form_email')}<input type="email" name="reply_to" required/></label>
        <label>{t('contact_form_inquiry')}<select name="inquiry" required>
          <option value="">{t('contact_form_select')}</option>
          <option value="general">{t('contact_form_inquiry_general')}</option>
          <option value="technical">{t('contact_form_inquiry_technical')}</option>
          <option value="billing">{t('contact_form_inquiry_billing')}</option>
          <option value="other">{t('contact_form_inquiry_other')}</option>
        </select></label>
        <label>{t('contact_form_message')}<textarea name="message" rows="6" required/></label>
        <button type="submit" className="btn-primary">{t('contact_form_submit')}</button>
      </form>
      {status === 'success' && <div className="toast success">{t('contact_form_success')}</div>}
      {status === 'error' && <div className="toast error">{t('contact_form_error')}</div>}
    </div>
  );
}
