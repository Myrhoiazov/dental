import React from 'react';
import { socialList } from './SosialList.js';
import s from './SosialList.module.scss';

const SosialList = () => {
	return (
		<ul className={s.list}>
			{socialList.map(({ Icon, link }) => {
				return (
					<li key={link} className={s.item}>
						<a href={link} className={s.link}>
							{Icon}
						</a>
					</li>
				);
			})}
		</ul>
	);
};

export default SosialList;
