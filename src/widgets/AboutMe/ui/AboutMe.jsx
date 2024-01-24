import {useState, memo} from 'react';
import ReactPlayer from 'react-player';
import {useTranslation} from 'react-i18next';
import Video from 'shared/assets/video/innovation-promo.mp4';
import bckGround from 'shared/assets/images/Marina-about.jpeg';
import Container from 'shared/ui/container/Container';
import SplideComponent from 'shared/ui/Splide/SplideComponent';
import 'shared/config/i18n/i18next';
import s from './AboutMe.module.scss';

const AboutMe = () => {
	const [isPlay, setIsPlay] = useState(false);
	const {t} = useTranslation();

	return (
		<section id="about">
			<SplideComponent />
			<Container>
				<div className={s.wrapper}>
					<h1 className={s.title}>{t('about.title')}</h1>
					<div className={s.content}>
						<div className={s.about} data-aos="fade-right">
							<h2 className={s.subtitle}>
								{t('about.subtitle')}
							</h2>
							<p className={s.text}>{t('about.list.text_1')}</p>
							<p className={s.text}>{t('about.list.text_2')}</p>
							<p className={s.text}>{t('about.list.text_3')}</p>
							<p className={s.text}>{t('about.list.text_4')}</p>
							<p className={s.text}>{t('about.list.text_5')}</p>
							<p className={s.text}>{t('about.list.text_6')}</p>
						</div>
						<div
							className={s.videoWrapper}
							onClick={() => setIsPlay(!isPlay)}
							data-aos="fade-left">
							<ReactPlayer
								url={Video}
								width="300px"
								height="533px"
								playing={isPlay}
								light={bckGround}
							/>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default memo(AboutMe);
