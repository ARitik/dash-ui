import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import PrimaryButton from './components/Buttons/PrimaryButton';
import DangerButton from './components/Buttons/DangerButton';

export default function App() {
	return (
		<Grid container direction="column">
			<Grid item></Grid>
			<Grid item container>
				<Grid item xs={false} sm={2}></Grid>
				<Grid item xs={12} sm={8}>
					<DangerButton>Deallocate</DangerButton>
					<PrimaryButton>Allocate</PrimaryButton>
				</Grid>
				<Grid item xs={false} sm={2}></Grid>
			</Grid>
		</Grid>
	);
}
