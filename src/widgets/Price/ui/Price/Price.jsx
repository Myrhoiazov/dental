import React, {memo} from 'react';
import {useTranslation} from 'react-i18next';
import {classNames} from 'shared/lib/classNames/classNames';
import s from './Price.module.scss';
import Accordion from 'shared/ui/Accordion';
import 'i18next';
import Container from 'shared/ui/container';

const Price = ({className}) => {
	const {t} = useTranslation();

	return (
		<div className={classNames(s.Price, {}, [className])} id="price">
			<Container>
				<h1 className={s.title}>{t('price.title')}</h1>
				<Accordion />
			</Container>
		</div>
	);
};

export default memo(Price);
