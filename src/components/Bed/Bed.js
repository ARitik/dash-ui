import React, { useState } from 'react';
import '../../assets/css/Bed.css';

export default function Bed() {
	const [style, setStyle] = useState({});
	const [selected, setSelected] = useState(false);
	const handleClick = () => {
		if (!selected) {
			const select = {
				border: '2px solid var(--primary)',
			};
			setSelected(true);
			setStyle(select);
		} else {
			const select = {
				border: 'none',
			};
			setSelected(false);
			setStyle(select);
		}
	};

	return (
		<div className="bed-container" onClick={handleClick} style={style}>
			<div className="pillow"></div>
		</div>
	);
}
