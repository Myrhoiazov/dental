import React, {memo, useEffect, useState} from 'react';
import {gsap} from 'gsap';
import {classNames} from 'shared/lib/classNames/classNames';
import s from './ImageGallery.module.scss';
import Container from 'shared/ui/container';
import {data} from './imageList';
import 'i18next';
import {useTranslation} from 'react-i18next';

const ImageGallery = ({className}) => {
	const [imgLink, setImhLink] = useState('');
	const [isOpen, setIsOpen] = useState(false);
	const [isIntersected, setIsIntersected] = useState(false);
	const {t} = useTranslation();

	const getImg = (img) => {
		setImhLink(img);
		setIsOpen(true);
		document.body.style.overflow = 'hidden';
	};

	const cleanImg = () => {
		setImhLink(false);
		setIsOpen(false);
		document.body.style.overflow = '';
	};

	useEffect(() => {
		const imgEl = document.getElementById('image-gallery');

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting && !isIntersected) {
					// Элемент видим во вьюпорте
					setIsIntersected(true);

					data.forEach((elem, index) => {
						gsap.from(`[data-id="${elem.id}"]`, 1, {
							y: '200px',
							opacity: 0,
							delay: index * 0.5,
						});
					});
				} else {
					// Элемент не видим во вьюпорте
				}
			});
		});

		observer.observe(imgEl);

		return () => {
			observer.disconnect();
		};
	}, [isIntersected]);

	return (
		<div
			id="image-gallery"
			className={classNames(s.ImageGallery, {[s.open]: isOpen}, [
				className,
			])}>
			<Container>
				<h2 className={s.title}>{t('image.title')}</h2>

				<div
					className={classNames(s.modal, {[s.open]: isOpen}, [
						className,
					])}
					onClick={cleanImg}>
					<div className={classNames(s.inner, {}, [className])}>
						{isOpen && (
							<img
								src={imgLink}
								alt="Studio Dr. Rusakova"
								onClick={cleanImg}
							/>
						)}
					</div>
				</div>

				<ul className={s.list}>
					{data.map(({link, id, alt}) => {
						return (
							<li
								className={s.imgWrap}
								key={id}
								onClick={() => getImg(link)}
								data-id={id}>
								<img
									alt={alt}
									src={link}
									width="500"
									height="300"
								/>
							</li>
						);
					})}
				</ul>
			</Container>
		</div>
	);
};

export default memo(ImageGallery);
