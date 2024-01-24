import React, {memo} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import s from './Map.module.scss';

const Map = ({className}) => {
	return (
		<div className={classNames(s.Map, {}, [className])}>
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2562.1692961752615!2d21.977840976673324!3d50.04565981642689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473cfb0d487f28c5%3A0x4aba23023194e7fb!2zS2Fyb2xhIExld2Frb3dza2llZ28gMTAsIDM1LTExOSBSemVzesOzdywg0J_QvtC70YzRiNCw!5e0!3m2!1sru!2snl!4v1706118978982!5m2!1sru!2snl"
				className={s.mapElement}
				allowfullscreen=""
				loading="lazy"
				id="studioMap"
				title="Studio Map"
				referrerpolicy="no-referrer-when-downgrade"></iframe>
		</div>
	);
};

export default memo(Map);
