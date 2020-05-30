const buttonStyle = {
	primaryButton: {
		margin: '4px',
		marginTop: '40px',
		marginLeft: '30px',
		textTransform: 'none',
		backgroundColor: 'var(--primary)',
		minWidth: '150px',
		color: 'var(--bg)',
		transition: 'transform 0.3s ease-in-out',
		padding: '12px 2px',
		boxShadow: 'var(--shadow)',
		'&:hover': {
			transform: 'translateY(-5px)',
			backgroundColor: '#8D93D3',
		},
	},
	dangerButton: {
		margin: '4px',
		marginLeft: '30px',
		marginTop: '40px',
		textTransform: 'none',
		marginTop: '40px',
		backgroundColor: 'var(--danger)',
		minWidth: '150px',
		color: 'var(--bg)',
		padding: '12px 2px',
		transition: 'transform 0.3s ease-in-out',
		boxShadow: 'var(--shadow)',
		'&:hover': {
			transform: 'translateY(-5px)',
			backgroundColor: '#CC6262',
		},
	},
	baseFont: {
		fontFamily: 'var(--base-font)',
	},
};

export default buttonStyle;
