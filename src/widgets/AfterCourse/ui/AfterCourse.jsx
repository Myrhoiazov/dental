import React, {useCallback, useEffect, useState, memo} from 'react';
import Container from 'shared/ui/container/Container';
import {useTranslation} from 'react-i18next';
import Loader from 'shared/ui/loader/Loader';
import s from './AfterCourse.module.scss';

function AfterCourse() {
	const [proposition, setProposition] = useState([]);

	const {t, i18n} = useTranslation();

	const propositionFnc = useCallback(() => {
		let res = t('get', {returnObjects: true});
		setProposition(res);
	}, [t]);

	useEffect(() => {
		propositionFnc();
	}, [i18n.language, t, propositionFnc]);

	if (!proposition) {
		return <Loader />;
	}

	return (
		<section id="after-course" className={s.section}>
			<Container>
				<h2 className={s.title}>{t('get_title')}</h2>
				<ul className={s.list}>
					{proposition?.map((item) => {
						return (
							<li key={item.proposition} className={s.item}>
								{item.proposition}
							</li>
						);
					})}
				</ul>
			</Container>
		</section>
	);
}

export default memo(AfterCourse);
