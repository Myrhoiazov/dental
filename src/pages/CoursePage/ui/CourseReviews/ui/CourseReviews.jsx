import React, {useCallback, useEffect, useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import AfterCourse from 'widgets/AfterCourse/';
import ProgrammCourse from 'widgets/ProgrammCourse/';
import Loader from 'shared/ui/loader/Loader';
import Proposition from 'widgets/Proposition';
import Lessons from 'widgets/Lessons/';
import ProjectDescription from 'widgets/ProjectDescription';
import Info from 'widgets/Info/ui/Info';
import PacketsList from 'widgets/Packets';

const CourseReviews = () => {
	const [project, setProject] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const {t, i18n} = useTranslation();
	const {id} = useParams();
	const navigate = useNavigate();

	const projectItem = useCallback(
		(res) => {
			setIsLoading(true);
			const item = res?.filter((elem) => elem.id.toString() === id);
			if (item.length <= 0) {
				console.log('course review before navigate');
				navigate('/');
				setIsLoading(false);
				return;
			} else {
				setProject(item[0]);
			}
			setIsLoading(false);
		},
		[id, navigate]
	);

	useEffect(() => {
		let res = t('courses', {returnObjects: true});
		projectItem(res);
	}, [i18n.language, projectItem, t]);

	if (
		!project.dates ||
		!project.lessons ||
		!project.info ||
		!project.programm.list
	) {
		return <Loader />;
	}

	if (isLoading) {
		return <Loader />;
	}

	return (
		<section>
			<ProjectDescription projectEl={project} />
			<Proposition proposition={project.for_who} />
			<AfterCourse />
			<Lessons lessons={project.lessons} />
			<ProgrammCourse programm={project.programm} />
			{project.packets && <PacketsList packets={project.packets} />}
			<Info info={project.info} />
		</section>
	);
};

export default CourseReviews;
