import React from 'react';
import { Grid } from '@material-ui/core';
import HostelCard from '../components/Cards/HostelCard';
import { Text } from '../components/Typography/index';

export default function HostelSelectionPage() {
	return (
		<Grid item container spacing={4}>
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
			<Text>Add more hostels</Text>
		</Grid>
	);
}
