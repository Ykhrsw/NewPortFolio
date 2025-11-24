import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';

export default function ContactForm() {
  const { t } = useTranslation();
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const vals = Object.fromEntries(data);

    // NOTE: Set your EmailJS userID / serviceID / templateID in the placeholders below
    const serviceID = 'YOUR_EMAILJS_SERVICE_ID';
    const templateID = 'YOUR_EMAILJS_TEMPLATE_ID';
    const userID = 'YOUR_EMAILJS_USER_ID';

    emailjs.send(serviceID, templateID, vals, userID)
      .then(() => setStatus('success'))
      .catch(()=> setStatus('error'));
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
        </select></label>
        <label>{t('contact_form_message')}<textarea name="message" rows="6" required/></label>
        <button type="submit" className="btn-primary">{t('contact_form_submit')}</button>
      </form>
      {status === 'success' && <div className="toast success">{t('contact_form_success')}</div>}
      {status === 'error' && <div className="toast error">{t('contact_form_error')}</div>}
    </div>
  );
}
