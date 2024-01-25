import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import {initReactI18next} from 'react-i18next';

import translationEN from 'locales/en/translation.json';
import translationPL from 'locales/pl/translation.json';

const resources = {
	en: {
		translation: translationEN,
	},
	pl: {
		translation: translationPL,
	},
};

i18n.use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources,
		fallbackLng: 'pl',
		whitelist: ['en', 'ru'],
		debug: false,
		detection: {
			order: ['localStorage', 'cookie'],
			cashes: ['localStorage', 'cookie'],
		},

		interpolation: {
			escapeValue: false,
		},

		backend: {
			loadPath: '/locales/{{lng}}/{{ns}}.json',
		},
	});

export default i18n;
