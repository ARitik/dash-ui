import React, { useState } from 'react';
import { Card, CardMedia, Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InputField from '../Form/InputField';
import { PrimaryButton } from '../Buttons/index';
import CardStyle from '../../assets/jss/CardStyle';
import { Title } from '../Typography/index';

const useStyles = makeStyles(CardStyle);

export default function LoginCard() {
	const classes = useStyles();
	const [style, setStyle] = useState({});
	setTimeout(() => {
		const newStyle = {
			opacity: '1',
		};
		setStyle(newStyle);
	}, 100);
	return (
		<Card className={classes.loginCardStyle} style={style}>
			<CardMedia>
				<Box
					display="flex"
					flexDirection="column"
					alignItems="center"
					justifyContent="center"
				>
					<form>
						<Title>Login</Title>
						<InputField
							type="input"
							id="username"
							heading="Username"
							placeholder="eg. Alex Grisham"
						/>
						<InputField type="password" id="password" heading="Password" />
						<Box
							display="flex"
							justifyContent="center"
							alignItems="center"
							width="100%"
						>
							<PrimaryButton>Login</PrimaryButton>
						</Box>
					</form>
				</Box>
			</CardMedia>
		</Card>
	);
}
