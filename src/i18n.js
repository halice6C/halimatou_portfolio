import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from './locales/en.json';
import translationFR from './locales/fr.json';

const resources = {
  en: {
    translation: translationEN
  },
  fr: {
    translation: translationFR
  }
};

i18n
  .use(LanguageDetector) // <== Ajout du détecteur ici
  .use(initReactI18next)
  .init({
    resources: resources,
    fallbackLng: 'fr', // langue par défaut si rien détecté
    interpolation: { escapeValue: false }
  });

export default i18n;
