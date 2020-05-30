import React from 'react';
import { Grid } from '@material-ui/core';
import HostelCard from '../components/Cards/HostelCard';
import { PrimaryButton } from '../components/Buttons/index';

export default function HostelSelectionPage() {
	return (
		<Grid container item spacing={4} justify="center">
			<Grid item xs={12}>
				<PrimaryButton>Add more Hostels</PrimaryButton>
			</Grid>
			<HostelCard
				hostelName="BA-143"
				hostelAddress="Medchal"
				hostelCapacity="86"
			/>
			<HostelCard
				hostelName="A-601"
				hostelAddress="Suchitra"
				hostelCapacity="42"
			/>
			<HostelCard
				hostelName="CZ-124"
				hostelAddress="Kompally"
				hostelCapacity="12"
			/>
			<HostelCard
				hostelName="CZ-124"
				hostelAddress="Kompally"
				hostelCapacity="12"
			/>
		</Grid>
	);
}
