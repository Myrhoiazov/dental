import Container from 'shared/ui/container/Container';
import s from './Proposition.module.scss';
import { useCallback, useEffect, useState } from 'react';
import Loader from 'shared/ui/loader/Loader';

const Proposition = ({ proposition }) => {
	const [propositionArr, setPropositionArr] = useState(null);

	const projectFnc = useCallback(() => {
		setPropositionArr(proposition);
	}, [proposition]);

	useEffect(() => {
		projectFnc();
	}, [projectFnc]);

	if (!propositionArr) return <Loader />;

	const { title, list } = propositionArr;

	return (
		<section id="proposition">
			<Container>
				<div className={s.inner}>
					<h2 className={s.title}>{title}</h2>

					<ul className={s.list}>
						{list.map((el, index) => {
							return (
								<li key={el.subtitle} className={s.item}>
									<span className={s.index}>{index + 1}</span>
									<div className={s.data}>
										<h3 className={s.subtitle}>
											{el.subtitle}
										</h3>
										<p className={s.text}>{el.text}</p>
									</div>
								</li>
							);
						})}
					</ul>
				</div>
			</Container>
		</section>
	);
};

export default Proposition;
