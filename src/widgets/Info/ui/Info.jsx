import React, { useCallback, useEffect, useState, memo } from 'react';
import Container from 'shared/ui/container/Container';
import s from './Info.module.scss';
import Loader from 'shared/ui/loader/Loader';

const Info = ({ info }) => {
	const [infoList, setInfoList] = useState([]);

	const infoFc = useCallback(() => {
		setInfoList(info);
	}, [info]);

	useEffect(() => {
		infoFc();
	}, [infoFc]);

	if (!infoList) return <Loader />;

	return (
		<div className={s.proposition}>
			<Container>
				<ul>
					{infoList.map(({ title, text }) => {
						return (
							<li key={title}>
								<h3 className={s.subtitle}>{title}</h3>
								<p className={s.subtext}>{text}</p>
							</li>
						);
					})}
				</ul>
			</Container>
		</div>
	);
};

export default memo(Info);
