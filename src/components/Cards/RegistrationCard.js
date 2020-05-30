import React, { useState } from 'react';
import { Card, CardMedia, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InputField from '../Form/InputField';
import { PrimaryButton } from '../Buttons/index';
import CardStyle from '../../assets/jss/CardStyle';
import { Title } from '../Typography/index';

const useStyles = makeStyles(CardStyle);

export default function RegistrationCard() {
	const classes = useStyles();
	const [style, setStyle] = useState({});
	const customMargin = {
		margin: '30px 0',
	};
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
						<Title>Register</Title>
						<Box style={customMargin}>
							<InputField
								type="input"
								id="username"
								heading="Username"
								placeholder="eg. Alex Grisham"
							/>
						</Box>
						<Box style={customMargin}>
							<InputField
								type="email"
								id="email"
								heading="Email"
								placeholder="eg. alexgrisham@dash.com"
							/>
						</Box>
						<Box style={customMargin}>
							<InputField type="password" id="password" heading="Password" />
						</Box>
						<Box
							display="flex"
							justifyContent="center"
							alignItems="center"
							width="100%"
						>
							<PrimaryButton>Register</PrimaryButton>
						</Box>
					</form>
				</Box>
			</CardMedia>
		</Card>
	);
}
