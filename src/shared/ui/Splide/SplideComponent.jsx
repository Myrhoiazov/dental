import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import { useTranslation } from 'react-i18next';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import '@splidejs/react-splide/css';
import s from './Splide.module.scss';

const SplideComponent = () => {
	const { t } = useTranslation();

	return (
		<div className={s.test}>
			<Splide
				options={{
					type: 'loop',
					drag: 'free',
					perPage: 3,
					pagination: false,
					arrows: false,
					autoScroll: {
						rewind: false,
						speed: 0.5,
					},
					breakpoints: {
						640: {
							perPage: 1,
						},
					},
				}}
				extensions={{ AutoScroll }}
			>
				<SplideSlide>
					<p className={s.splideTest}>
						{t('action.splide')} <LoyaltyIcon className={s.icon} />
					</p>
				</SplideSlide>
				<SplideSlide>
					<p className={s.splideTest}>
						{t('action.splide')} <LoyaltyIcon className={s.icon} />
					</p>
				</SplideSlide>
				<SplideSlide>
					<p className={s.splideTest}>
						{t('action.splide')} <LoyaltyIcon className={s.icon} />
					</p>
				</SplideSlide>
			</Splide>
		</div>
	);
};

export default SplideComponent;
