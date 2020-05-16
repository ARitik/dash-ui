import React, { useState } from 'react';
import '../../assets/css/ProgressBar.css';

export default function ProgressBar({ done }) {
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
		<div className="progress">
			<div className="progress-done" style={style}>
				{done}%
			</div>
		</div>
	);
}
