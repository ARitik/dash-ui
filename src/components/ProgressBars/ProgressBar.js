import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { Text } from '../Typography/index';
import '../../assets/css/ProgressBar.css';

export default function ProgressBar({ done, title }) {
	const [style, setStyle] = useState({});

	setTimeout(() => {
		if (done > 70) {
			const newStyle = {
				opacity: 1,
				width: `${done}%`,
				background: 'var(--danger)',
			};
			setStyle(newStyle);
		} else {
			const newStyle = {
				opacity: 1,
				width: `${done}%`,
			};
			setStyle(newStyle);
		}
	}, 200);

	return (
		<Box mt={2}>
			<Text>{title}</Text>
			<div className="progress">
				<div className="progress-done" style={style}></div>
			</div>
		</Box>
	);
}
