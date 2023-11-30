import React from 'react';
import s from './MyLink.module.scss';

const MyLink = ({ link, children }) => {
	return (
		<a href={link} className={s.link}>
			{children}
		</a>
	);
};

export default MyLink;
