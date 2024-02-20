import React, {memo} from 'react';
import {Typography} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import s from './PortfolioCard.module.scss';

const PortfolioCard = ({el}) => {
	const renderImage = (sourse) => {
		const targetImage = `assets/images/teams/${sourse}`;
		return targetImage;
	};

	return (
		<div>
			<Card
				key={el.id}
				className={s.item}
				sx={{
					maxWidth: 350,
					padding: '12px',
					borderRadius: '10px',
					display: 'flex',
					flexDirection: 'column',
					backgroundColor: '#fff',
					paddingBottom: 2,
					boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;',
				}}
				data-aos="fade-up"
				data-aos-delay="300">
				<div className={s.img_thumb}>
					<img alt={el.title} width="250" src={renderImage(el.img)} />
				</div>

				<CardContent
					sx={{
						display: 'flex',
						flexDirection: 'column',
						height: '100%',
						paddingTop: '20px',
					}}>
					<Typography
						gutterBottom
						sx={{
							textAlign: 'center',
							fontSize: '1.2rem',
							marginBottom: 0.5,
							fontWeight: 700,
							textTransform: 'uppercase',
							color: 'black',
							lineHeight: 1.2,
							flex: 0,
						}}>
						{el.title}
					</Typography>
					<Typography
						variant="body2"
						color="text.secondary"
						sx={{
							textAlign: 'center',
							fontSize: '1rem',
							flex: 1,
							fontWeight: 400,
							color: '#4c4c4e',
						}}>
						{el.subtext}
					</Typography>
				</CardContent>
			</Card>
		</div>
	);
};

export default memo(PortfolioCard);
