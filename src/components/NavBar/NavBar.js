import React, { useState } from 'react';
import {
	AppBar,
	Toolbar,
	Box,
	Menu,
	MenuItem,
	IconButton,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../../assets/jss/navStyle';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles(styles);

export default function NavBar() {
	const [anchorEl, setAnchorEl] = useState(null);

	const handleClick = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const classes = useStyles();
	return (
		<AppBar position="static" className={classes.navBar}>
			<Toolbar>
				<Box>
					<IconButton className={classes.navItems}>
						<EditIcon />
					</IconButton>
				</Box>

				<Box>
					<IconButton className={classes.navItems}>
						<AccountTreeIcon />
					</IconButton>
				</Box>
				<Box
					aria-controls="simple-menu"
					aria-haspopup="true"
					onClick={handleClick}
				>
					<IconButton className={classes.navItems}>
						<AccountCircleIcon />
					</IconButton>
				</Box>
				<Menu
					id="simple-menu"
					anchorEl={anchorEl}
					keepMounted
					open={Boolean(anchorEl)}
					onClose={handleClose}
				>
					<MenuItem onClick={handleClose}>Profile</MenuItem>
					<MenuItem onClick={handleClose}>My account</MenuItem>
					<MenuItem onClick={handleClose}>Logout</MenuItem>
				</Menu>
			</Toolbar>
		</AppBar>
	);
}
