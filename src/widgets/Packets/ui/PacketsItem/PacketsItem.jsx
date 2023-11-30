import React from 'react';
import s from './PacketsItem.module.scss';

const PacketsItem = ({ packet }) => {
	const { count_people, packet: packetName, list, price, buy } = packet;

	return (
		<li key={price} className={s.item}>
			<h3 className={s.title}>{packetName}</h3>
			<p className={s.subtitle}>{count_people}</p>

			<ul>
				{list.map((el) => {
					return (
						<li className={s.elem} key={el}>
							{el}
						</li>
					);
				})}
			</ul>

			<p className={s.price}>
				{price.name} <span>{price.count}</span>
			</p>

			<a href="/" className={s.btn}>
				{buy}
			</a>
		</li>
	);
};

export default PacketsItem;
