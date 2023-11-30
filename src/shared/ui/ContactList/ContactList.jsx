import React from 'react';
import { contactList } from './ContactList.js';
import s from './ContactList.module.scss';

const ContactList = () => {
	return (
		<ul className={s.list}>
			{contactList.map(({ elem, Icon, link }) => {
				return (
					<li key={elem} className={s.item}>
						<a href={link} className={s.link}>
							{Icon}
							<span className={s.text}>{elem}</span>
						</a>
					</li>
				);
			})}
		</ul>
	);
};

export default ContactList;
