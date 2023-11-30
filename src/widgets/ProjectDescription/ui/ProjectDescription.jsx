import { useCallback } from 'react';
import React, { useEffect, useState } from 'react';
import s from './ProjectDescription.module.scss';
import Container from 'shared/ui/container/Container';
import Loader from 'shared/ui/loader/Loader';

const ProjectDescription = ({ projectEl }) => {
	const [project, setProject] = useState(null);

	const projectFnc = useCallback(() => {
		setProject(projectEl);
	}, [projectEl]);

	useEffect(() => {
		projectFnc();
	}, [projectFnc]);

	const renderImage = (sourse) => {
		const targetImage = `/assets/images/products/${sourse}`;
		return targetImage;
	};

	if (!project) return <Loader />;

	const isDate = project.dates[0] !== '0';

	return (
		<section id="projcetDescription">
			<Container>
				<div className={s.box}>
					<div className={s.box__inner}>
						<div className={s.box__img_thumb}>
							<img
								src={renderImage(project.img)}
								alt={project.title}
								className={s.box__img}
							/>
							<span
								className={
									project.format === 'online'
										? `${s.badge} ${s.online}`
										: `${s.badge} ${s.offline}`
								}
							>
								{project.format}
							</span>
						</div>
						<div className={s.box__data}>
							{project.study && (
								<p
									className={
										project.format === 'online'
											? `${s.study} ${s.online}`
											: `${s.study} ${s.offline}`
									}
								>
									{project.study}
								</p>
							)}
							<h1 className={s.box__data_title}>
								{project.title}
							</h1>
							<p className={s.box__data_subtext}>
								{project.text}
							</p>

							{isDate && (
								<p className={`${s.box__data_text} ${s.date}`}>
									{project.date_start}
									{project.dates.map((day) => (
										<span
											key={day}
											className={s.box__data_text_accent}
										>
											{day}
										</span>
									))}
								</p>
							)}
							<p className={`${s.box__data_text} ${s.play}`}>
								{project.count_time.text}
								<span className={s.box__data_text_accent}>
									{project.count_time.time}
								</span>
							</p>
							<p className={`${s.box__data_text} ${s.time}`}>
								{project.count_lessons.text}
								<span className={s.box__data_text_accent}>
									{project.count_lessons.time}
								</span>
							</p>
							<p className={`${s.box__data_text} ${s.price}`}>
								{project.price.text}
								<span className={s.box__data_text_accent}>
									{project.price.count}
								</span>
								<span className={s.box__currency}>
									{project.price.currency}
								</span>
							</p>
							<div className={s.buttons_group}>
								<a
									href="https://t.me/+Nw4CvgCWpCs5MDBi"
									className={s.buy}
								>
									{project.link}
								</a>
								<a
									href={`${project.buy_link}`}
									className={s.buy}
								>
									{project.buy}
								</a>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default ProjectDescription;
