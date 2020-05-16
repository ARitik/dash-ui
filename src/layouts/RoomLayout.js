import React from 'react';
import { Grid } from '@material-ui/core';
import RoomCard from '../components/Cards/RoomCard';

export default function RoomLayout() {
	return (
		<Grid container direction="column">
			<Grid item container>
				<Grid item xs={false} sm={1}></Grid>
				<Grid item container xs={12} sm={10} spacing={3}>
					<RoomCard />
					<RoomCard />
					<RoomCard />
					<RoomCard />
					<RoomCard />
					<RoomCard />
					<RoomCard />
					<RoomCard />
				</Grid>
				<Grid item xs={false} sm={1}></Grid>
			</Grid>
		</Grid>
	);
}
