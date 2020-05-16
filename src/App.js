import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import PrimaryButton from './components/Buttons/PrimaryButton';
import DangerButton from './components/Buttons/DangerButton';
import NavBar from './components/NavBar/NavBar';
import ProgressBar from './components/ProgressBars/ProgressBar';
import Text from './components/Typography/Text';
import Title from './components/Typography/Title';
export default function App() {
	return (
		<Grid container direction="column">
			<Grid item>
				<NavBar />
			</Grid>
			<Grid item container>
				<Grid item xs={false} sm={2}></Grid>
				<Grid item xs={12} sm={8}>
					<DangerButton>Deallocate</DangerButton>
					<PrimaryButton>Allocate</PrimaryButton>
					<ProgressBar done={50} />
					<ProgressBar done={90} />
					<Text>This is some text</Text>
					<Title>This is some title</Title>
				</Grid>
				<Grid item xs={false} sm={2}></Grid>
			</Grid>
		</Grid>
	);
}
