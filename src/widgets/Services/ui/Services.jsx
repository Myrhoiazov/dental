import React, {useCallback, useEffect, useState, memo} from 'react';
import {useTranslation} from 'react-i18next';
import {Splide, SplideSlide} from '@splidejs/react-splide';
import Container from 'shared/ui/container/Container';
import Loader from 'shared/ui/loader/Loader';

import '@splidejs/react-splide/css';

import s from './Services.module.scss';

function Services() {
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
		<section id="services" className={s.section}>
			<Container>
				<h2 className={s.title}>{t('get_title')}</h2>
				<Splide
					className={s.splide}
					options={{
						type: 'slide',
						perPage: 3,
						pagination: false,
						arrows: true,
						gap: '1rem',
						focus: 'center',
						breakpoints: {
							640: {
								perPage: 1,
							},
						},
					}}>
					{proposition?.map((item) => {
						return (
							<SplideSlide
								key={item.proposition}
								className={s.splideSlide}>
								<p className={s.splideTest}>
									{item.proposition}
								</p>
								<p className={s.text}>{item.text}</p>
							</SplideSlide>
						);
					})}
				</Splide>
			</Container>
		</section>
	);
}

export default memo(Services);
