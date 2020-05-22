import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Box, Grid } from '@material-ui/core';
import { Text, Title } from '../Typography/index';
import ProgressBar from '../ProgressBars/ProgressBar';
import { makeStyles } from '@material-ui/core/styles';
import CardStyle from '../../assets/jss/CardStyle';

const useStyles = makeStyles(CardStyle);

export default function HostelCard({
	hostelName,
	hostelAddress,
	hostelCapacity,
}) {
	const [style, setStyle] = useState({});
	const classes = useStyles();
	setTimeout(() => {
		const newStyle = {
			opacity: '1',
		};
		setStyle(newStyle);
	}, 200);
	return (
		<Grid item sm={12} md={4}>
			<Card className={classes.cardStyle} style={style}>
				<CardMedia image="/hostel.jpg" className={classes.imageStyles} />
				<CardContent>
					<Box
						display="flex"
						justifyContent="space-between"
						alignItems="center"
					>
						<Title>{hostelName}</Title>
						<Text>{hostelAddress}</Text>
					</Box>
					<ProgressBar done={hostelCapacity} title={'Rooms'} />
				</CardContent>
			</Card>
		</Grid>
	);
}
