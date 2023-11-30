import React, { useCallback, useEffect, useState } from 'react';
import Container from 'shared/ui/container';
import Loader from 'shared/ui/loader';
import s from './PacketsList.module.scss';
import PacketsItem from '../../PacketsItem/PacketsItem';

const PacketsList = ({ packets }) => {
	const [packetsArr, setPacketsArr] = useState(null);

	const projectFnc = useCallback(() => {
		setPacketsArr(packets);
	}, [packets]);

	useEffect(() => {
		projectFnc();
	}, [projectFnc]);

	if (!packetsArr) return <Loader />;

	const { title, text, list } = packetsArr;
	return (
		<section id="packets">
			<Container>
				<div className={s.inner}>
					<h2 className={s.title}>{title}</h2>
					<p className={s.text}>{text}</p>
					<ul className={s.list}>
						{list.map((item, index) => {
							return <PacketsItem key={index} packet={item} />;
						})}
					</ul>
				</div>
			</Container>
		</section>
	);
};

export default PacketsList;
