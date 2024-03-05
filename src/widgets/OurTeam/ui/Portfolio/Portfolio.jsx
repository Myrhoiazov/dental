import {useEffect, useState, memo, useCallback} from 'react';
import {Box} from '@mui/material';
import Container from 'shared/ui/container/Container';
import {useTranslation} from 'react-i18next';
import Loader from 'shared/ui/loader/Loader';
import PortfolioCard from '../PortfolioCard/ui/PortfolioCard';
import s from '../PortfolioCard/ui/PortfolioCard.module.scss';
import 'shared/config/i18n/i18next';

const Portfolio = () => {
	const [courses, setCourses] = useState([]);
	const {t, i18n, ready} = useTranslation();

	const projectFnc = useCallback(() => {
		let res = t('masters.list', {returnObjects: true});
		setCourses(res);
	}, [t]);

	const renderImage = (sourse) => {
		const targetImage = `assets/images/teams/${sourse}`;
		return targetImage;
	};

	useEffect(() => {
		projectFnc();
	}, [i18n.language, projectFnc]);

	if (!ready) {
		return <Loader />;
	}

	return (
		<section id="masters">
			<Container>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						padding: '50px 0',
					}}>
					<h2 className={s.title}>{t('masters.title')}</h2>
					<p className={s.subtitle}>{t('masters.subtitle')}</p>

					<div className={s.director}>
						<div
							className={s.item}
							data-aos="fade-up"
							data-aos-delay="300">
							<div className={s.img_thumb}>
								<img
									alt={t('masters.director.title')}
									width="250"
									src={renderImage(t('masters.director.img'))}
								/>
								<p className={s.data}>
									{' '}
									{t('masters.director.desc')}
								</p>
							</div>

							<div className={s.data}>
								<p className={s.name}>
									{t('masters.director.title')}
								</p>
								<p>{t('masters.director.subtext')}</p>
							</div>
						</div>
					</div>

					<Box
						sx={{
							display: 'flex',
							flexWrap: 'wrap',
							justifyContent: 'center',
							gap: 3,
						}}>
						{courses?.map((el) => {
							return <PortfolioCard el={el} key={el.id} />;
						})}
					</Box>
				</Box>
			</Container>
		</section>
	);
};

export default memo(Portfolio);
