import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import PrimaryButton from './components/Buttons/PrimaryButton';
import DangerButton from './components/Buttons/DangerButton';
import NavBar from './components/NavBar/NavBar';
import ProgressBar from './components/ProgressBars/ProgressBar';
import Text from './components/Typography/Text';
import Title from './components/Typography/Title';
import HostelCard from './components/Cards/HostelCard';
import RoomCard from './components/Cards/RoomCard';
import RoomLayout from './layouts/RoomLayout';
import ToEditCard from './components/Cards/ToEditCard';
import InputField from './components/Form/InputField';
import LoginCard from './components/Cards/LoginCard';
import LoginPage from './layouts/LoginPage';
import Table from './components/Table/Table';
import HostelSelectionPage from './layouts/HostelSelectionPage';

export default function App() {
	return (
		<Grid container direction="column" spacing={8}>
			<Grid item>
				<NavBar />
			</Grid>
			<Grid item container>
				<Grid item xs={false} sm={2}></Grid>
				<Grid item container xs={12} sm={8}>
					<HostelSelectionPage />
				</Grid>
				<Grid item xs={false} sm={2}></Grid>
			</Grid>
		</Grid>
	);
}
