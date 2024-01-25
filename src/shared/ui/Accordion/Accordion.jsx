import React, {memo, useEffect, useState} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import s from './Accordion.module.scss';
import AccordionItem from './AccordionItem';
import {useTranslation} from 'react-i18next';

const Accordion = ({className}) => {
	const [activeIndex, setActiveIndex] = useState(null);
	const [priceList, setPriceList] = useState([]);
	const {t, i18n} = useTranslation();

	const handleItemClick = (index) => {
		setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
	};

	useEffect(() => {
		let res = t('price.list', {returnObjects: true});
		setPriceList(res);
	}, [i18n.language, t]);

	return (
		<div className={classNames(s.Accordion, {}, [className])}>
			{priceList.map((item, index) => (
				<AccordionItem
					key={item.title}
					question={item.title}
					service={item.services}
					isOpen={activeIndex === index}
					onClick={() => handleItemClick(index)}
				/>
			))}
		</div>
	);
};

export default memo(Accordion);
