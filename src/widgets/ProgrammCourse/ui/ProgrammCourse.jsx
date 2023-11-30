import React, { useCallback, useEffect, useState } from 'react';
import s from './ProgrammCourse.module.scss';
import Container from 'shared/ui/container/Container';
import Loader from 'shared/ui/loader/Loader';

const ProgrammCourse = ({ programm }) => {
	const [programmObj, setProgrammObj] = useState([]);

	const projectFnc = useCallback(() => {
		setProgrammObj(programm);
	}, [programm]);

	useEffect(() => {
		projectFnc();
	}, [projectFnc]);

	if (!programmObj.list) return <Loader />;

	const { title, lesson, list } = programmObj;

	return (
		<section id="programm-course" className={s.section}>
			<Container>
				<h2 className={s.title}>{title}</h2>

				<ul className={s.list}>
					{list.map((el, index) => {
						return (
							<li key={index} className={s.item}>
								<h4>{`${lesson} ${index + 1} ${el.title}`}</h4>

								{el.text === 'нужен текст' ? null : (
									<p>{el.text}</p>
								)}
							</li>
						);
					})}
				</ul>
			</Container>
		</section>
	);
};

export default ProgrammCourse;
