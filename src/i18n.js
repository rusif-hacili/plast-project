import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './translation/en.json';
import azTranslation from './translation/az.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      az: { translation: azTranslation },
    },
    lng: 'az', // Default language
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
