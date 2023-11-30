import React, { useEffect, useState} from 'react';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import s from './ScrollUp.module.scss';

const ScrollUp = () => {
	const [isVisible, setIsVisible] = useState(false);

	const scrollUp = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	const isActiveClass = () => {
		return isVisible ? `${s.btn} ${s.active}` : `${s.btn}`;
	};

	useEffect(() => {
		const handleScrollButtonVisability = () => {
			window.pageYOffset > 300 ? setIsVisible(true) : setIsVisible(false);
		};
		window.addEventListener('scroll', handleScrollButtonVisability);
		return () => {
			window.removeEventListener('scroll', handleScrollButtonVisability);
		};
	}, []);

	return (
		<>
			<button
				type="button"
				onClick={scrollUp}
				className={isActiveClass()}
				data-aos-delay="100"
				data-aos-duration="1000"
				data-aos-easing="ease-in-out"
			>
				<ExpandLessIcon className={s.icon} />
			</button>
		</>
	);
};

export default ScrollUp;
