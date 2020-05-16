import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import typography from '../../assets/jss/typography';

const useStyles = makeStyles(typography);

export default function Text({ children }) {
	const classes = useStyles();
	return (
		<>
			<Typography variant="body2" className={classes.text}>
				{children}
			</Typography>
		</>
	);
}
