import {memo, useState} from 'react';
import s from './Footer.module.scss';
import Container from '../container/Container';

const getFullYear = () => {
	return new Date().getFullYear();
};

const Footer = () => {
	// eslint-disable-next-line no-unused-vars
	const [year, setYear] = useState(() => getFullYear());

	return (
		<>
			<div className={s.container}>
				<Container>
					<div className={s.content}>
						<p className={s.text}>
							© {year} Innovation Dental Clinic | All Rights
							Reserved.
						</p>
					</div>
				</Container>
			</div>
		</>
	);
};

export default memo(Footer);
