import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../../config/i18n/i18next';
import s from './ToggleLang.module.scss';

const ToggleLang = () => {
	const { i18n } = useTranslation();
	const { language } = i18n.translator;
	const [lang, setLang] = useState(language);

	const changeLanguage = (lang) => {
		setLang(lang);
		i18n.changeLanguage(lang);
	};

	const activeLang = (name) => {
		return lang === name ? `${s.btn_lang} ${s.active}` : s.btn_lang;
	};
	return (
		<div className={s.btn_group}>
			<button
				className={activeLang('ua')}
				type="button"
				onClick={() => changeLanguage('ua')}
			>
				PL
			</button>
			<button
				className={activeLang('en')}
				type="button"
				onClick={() => changeLanguage('en')}
			>
				EN
			</button>
		</div>
	);
};

export default ToggleLang;
