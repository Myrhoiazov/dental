import {useEffect, useState, memo, useCallback} from 'react';
import {Box, Typography} from '@mui/material';
import Container from 'shared/ui/container/Container';
import {useTranslation} from 'react-i18next';
import Loader from 'shared/ui/loader/Loader';
import PortfolioCard from '../PortfolioCard/ui/PortfolioCard';
import 'shared/config/i18n/i18next';

const Portfolio = () => {
	const [courses, setCourses] = useState([]);
	const {t, i18n, ready} = useTranslation();

	const projectFnc = useCallback(() => {
		let res = t('courses', {returnObjects: true});
		setCourses(res);
	}, [t]);

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
					<Typography
						variant="h2"
						sx={{
							fontSize: '48px',
							textAlign: 'center',
							color: '#36b393',
							fontWeight: 700,
							marginBottom: '10px',
							textTransform: 'uppercase',
						}}>
						{t('section.products')}
					</Typography>
					<Typography
						variant="h4"
						sx={{
							fontSize: '18px',
							textAlign: 'center',
							fontWeight: 300,
							marginBottom: '60px',
							maxWidth: '600px',
						}}>
						{t('section.subtext')}
					</Typography>
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
