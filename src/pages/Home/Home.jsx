import {useEffect, memo, useCallback} from 'react';
import AOS from 'aos';
import AboutMe from 'widgets/AboutMe/';
import OurTeam from 'widgets/OurTeam';
import Services from 'widgets/Services';
import Hero from 'widgets/Hero';
import 'aos/dist/aos.css';
import Price from 'widgets/Price';
import Proposition from 'widgets/Proposition';
import ImageGallery from 'widgets/ImageGallery';

const Home = () => {
	const initEffect = useCallback(() => {
		AOS.init({
			offset: 120,
			delay: 500,
			duration: 1500,
			easing: 'ease',
		});
	}, []);

	useEffect(() => {
		initEffect();
	}, [initEffect]);

	return (
		<>
			<Hero />
			<AboutMe />
			<OurTeam />
			<Services />
			<Price />
			<ImageGallery />
			<Proposition />
		</>
	);
};

export default memo(Home);
