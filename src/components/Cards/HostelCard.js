import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Box } from '@material-ui/core';
import { Text, Title } from '../Typography/index';
import ProgressBar from '../ProgressBars/ProgressBar';
import { makeStyles } from '@material-ui/core/styles';
import CardStyle from '../../assets/jss/CardStyle';

const useStyles = makeStyles(CardStyle);

export default function HostelCard() {
	const [style, setStyle] = useState({});
	const classes = useStyles();
	setTimeout(() => {
		const newStyle = {
			opacity: '1',
		};
		setStyle(newStyle);
	}, 200);
	return (
		<div>
			<Card className={classes.cardStyle} style={style}>
				<CardMedia image="/hostel.jpg" className={classes.imageStyles} />
				<CardContent>
					<Box
						display="flex"
						justifyContent="space-between"
						alignItems="center"
					>
						<Title>BA-473</Title>
						<Text>Medchal</Text>
					</Box>
					<ProgressBar done={42} title={'Rooms'} />
				</CardContent>
			</Card>
		</div>
	);
}
