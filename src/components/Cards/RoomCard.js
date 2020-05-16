import React, { useState } from 'react';
import { Card, CardContent, Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Bed from '../Bed/Bed';
import { Text } from '../Typography/index';
import CardStyle from '../../assets/jss/CardStyle';

const useStyles = makeStyles(CardStyle);

export default function RoomCard() {
	const classes = useStyles();
	const [style, setStyle] = useState({});
	setTimeout(() => {
		const newStyle = {
			opacity: '1',
		};
		setStyle(newStyle);
	}, 100);
	return (
		<Grid item xs={12} sm={2}>
			<Card className={classes.RoomCardStyle} style={style}>
				<CardContent>
					<Box
						display="flex"
						flexDirection="column"
						alignItems="center"
						justifyContent="center"
					>
						<Text>A101</Text>
						<Box mt={2} display="flex" alignItems="space-around">
							<Bed />
							<Bed />
						</Box>
					</Box>
				</CardContent>
			</Card>
		</Grid>
	);
}
