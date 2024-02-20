import {useTranslation} from 'react-i18next';
import Container from 'shared/ui/container/Container';
import s from './Proposition.module.scss';
import 'shared/config/i18n/i18next';

import Img from 'shared/assets/change-life.png';

const Proposition = () => {
	const {t} = useTranslation();

	return (
		<section className="">
			<Container>
				<div className={s.inner}>
					<h2 className={s.title}>{t('proposition.title')}</h2>

					<img src={Img} alt="Change your life" />
				</div>
			</Container>
		</section>
	);
};

export default Proposition;
