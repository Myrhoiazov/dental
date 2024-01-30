import {useRef} from 'react';
import s from './Accordion.module.scss';
import {ReactComponent as Arrow} from 'shared/assets/icon/arrow.svg';

const AccordionItem = ({question, service, isOpen, onClick}) => {
	const contentHeight = useRef();
	return (
		<div className={s.wrapper}>
			<button
				className={`${s.question_container} ${isOpen ? s.active : ''}`}
				onClick={onClick}>
				<p className={s.question_content}>{question}</p>
				<Arrow className={`${s.arrow} ${isOpen ? s.active : ''}`} />
			</button>

			<ul
				ref={contentHeight}
				className={s.answer_container}
				style={
					isOpen
						? {height: contentHeight.current.scrollHeight}
						: {height: '0px'}
				}>
				{service.map((elem, index) => {
					return (
						<li className={s.item} key={index}>
							<div className={s.data}>
								<p className={s.answer_content}>{elem.name}</p>
								{elem.desc && (
									<p className={s.desc}>{elem.desc}</p>
								)}
							</div>
							<div className={s.price}>{elem.price}</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default AccordionItem;
