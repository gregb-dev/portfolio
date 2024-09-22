import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import englishLocale from './locales/en/translation.json';
import frenchLocale from './locales/fr/translation.json';

/**
 * This configuration is made to use locale in the website.
 */
i18next
    .use(initReactI18next) // Passes i18next instance to react-i18next.
    .init({
        resources: {
            en: {
                translation: englishLocale,
            },
            fr: {
                translation: frenchLocale,
            },
        },
        lng: 'en', // Default language
        fallbackLng: 'en', // Fallback language if key not found
        interpolation: {
            escapeValue: false, // React already escapes values
        },
    });

export default i18next;
