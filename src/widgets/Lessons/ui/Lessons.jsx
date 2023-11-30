import React, { useCallback, useEffect, useState } from 'react';
import s from './Lessons.module.scss';
import Container from 'shared/ui/container/Container';
import exampl from 'shared/assets/images/lessons/2.png';
import Loader from 'shared/ui/loader/Loader';

const Lessons = ({ lessons }) => {
	const [listObj, setList] = useState([]);

	const lessonsFc = useCallback(() => {
		setList(lessons);
	}, [lessons]);

	useEffect(() => {
		lessonsFc();
	}, [lessonsFc]);

	if (!listObj.list) return <Loader />;

	const { title, subtitle, list } = listObj;

	return (
		<section id="lessons">
			<Container>
				<div className={s.inner}>
					<h2 className={s.title}>{title}</h2>
					<p className={s.subtitle}>{subtitle}</p>
					<div className={s.content}>
						<ul className={s.list}>
							{list.map((item, index) => {
								return (
									<li key={item.lesson} className={s.item}>
										<div className={s.data}>
											<h3 className={s.subtext}>
												{`${index + 1}`} {item.day}
											</h3>
											<p className={s.text}>
												{item.lesson}
											</p>
										</div>
									</li>
								);
							})}
						</ul>
						<div className={s.img_thumb}>
							<img src={exampl} alt="" />
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Lessons;
