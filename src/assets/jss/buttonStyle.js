const buttonStyle = {
	primaryButton: {
		backgroundColor: 'var(--primary)',
		minWidth: '195px',
		color: 'var(--bg)',
		transition: 'transform 0.3s ease-in-out',
		'&:hover': {
			transform: 'translateY(-5px)',
			backgroundColor: '#8D93D3',
		},
	},
	dangerButton: {
		backgroundColor: 'var(--danger)',
		minWidth: '195px',
		color: 'var(--bg)',
		transition: 'transform 0.3s ease-in-out',
		'&:hover': {
			tranform: 'translateY(-5px)',
			backgroundColor: '#CC6262',
		},
	},
};

export default buttonStyle;
