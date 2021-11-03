import React from 'react';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';

export default function SdApp (){

	const score=JSON.parse(localStorage.getItem("score"));
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};
	
	const handleClose = () => {
		setOpen(false);
	};
	return (
		<div align="center" style={{alignItems:"center"}}>
		<Button variant="outlined"
			raised="true"
			size="large"
			color="primary" onClick={handleClickOpen}>
			<label style={{fontSize:'15px'}}>Check Score</label>
		</Button>
		<Dialog open={open} onClose={handleClose} style={{fontSize:'15px',fontFamily: "Arial, Helvetica, sans-serif"}}>
			<DialogTitle >
			Your score is {score}
			</DialogTitle>
			<DialogContent>
			<DialogContentText>
				Enjoy Learning!
			</DialogContentText>
			</DialogContent>
			<DialogActions>
			<Button onClick={handleClose} color="primary">
			Close
			</Button>
		
			</DialogActions>
		</Dialog>
		</div>
	);
}

