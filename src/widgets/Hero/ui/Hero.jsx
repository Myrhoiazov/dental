import {memo} from 'react';
import {useTranslation} from 'react-i18next';
import Dr from 'shared/assets/images/hero/marinaBg.png';
import 'shared/config/i18n/i18next';
import s from './Hero.module.scss';

const Hero = () => {
	const {t} = useTranslation();

	return (
		<section id="hero">
			<div className={s.container}>
				<div className={s.wrapper}>
					<div className={s.info_hero}>
						<div className={s.hero_title}>
							<p
								className={s.name_text}
								data-aos="fade-up"
								data-aos-delay="700"
								data-i18n="[html]content.body">
								{t('hero.hello')}
								<span className={s.name_accent}>
									{t('hero.hello-accent')}
								</span>
							</p>

							<h1 className={s.name} data-aos="fade-right">
								{t('hero.name')}
							</h1>
						</div>
					</div>
					<div className={s.thumb} data-aos="fade-left">
						<img
							src={Dr}
							alt="Marina Lalakina"
							width="450"
							className={s.heroImg}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default memo(Hero);
