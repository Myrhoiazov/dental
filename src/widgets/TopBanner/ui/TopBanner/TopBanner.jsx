import React from 'react';
import s from './TopBanner.module.scss';
import Container from 'shared/ui/container';
import ContactList from 'shared/ui/ContactList/ContactList.jsx';
import SosialList from 'shared/ui/SosialList/SosialList.jsx';
import {useMediaQuery} from 'react-responsive';

const TopBanner = () => {
	const isDesktop = useMediaQuery({minWidth: 776});

	return (
		<div className={s.wrapper}>
			<Container>
				<div className={s.inner}>
					{isDesktop && <ContactList />}
					{isDesktop && <SosialList />}
				</div>
			</Container>
		</div>
	);
};

export default TopBanner;
