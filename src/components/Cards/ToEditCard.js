import React, { useState } from 'react';
import { Card, CardContent, Box } from '@material-ui/core';
import { Text } from '../Typography/index';
import { DangerButton } from '../Buttons/index';
import { makeStyles } from '@material-ui/core/styles';
import CardStyle from '../../assets/jss/CardStyle';

const useStyles = makeStyles(CardStyle);

export default function ToEditCard() {
	const classes = useStyles();
	const [style, setStyle] = useState({});
	setTimeout(() => {
		const newStyle = {
			opacity: '1',
		};
		setStyle(newStyle);
	}, 400);

	return (
		<Card className={classes.ToEditCardStyle} style={style}>
			<CardContent>
				<Box display="flex" justifyContent="center" alignItems="center">
					<Text>Link to Report Generation/ Editable Information Interface</Text>
					<DangerButton>Button</DangerButton>
				</Box>
			</CardContent>
		</Card>
	);
}
