import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ja from './ja.json';
import en from './en.json';
import ko from './ko.json';
import cn from './cn.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ja: { translation: ja },
      en: { translation: en },
      ko: { translation: ko },
      cn: { translation: cn }
    },
    lng: 'ja',
    fallbackLng: 'ja',
    interpolation: { escapeValue: false }
  });

export default i18n;
