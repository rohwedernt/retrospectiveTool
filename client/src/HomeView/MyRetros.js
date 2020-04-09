import React, { useState, Fragment } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CreateRetroForm from './CreateRetroForm';
import {sendGet} from '../HttpClient';

const styles = {
	page: {
		display: "flex", 
		flexDirection: "column", 
		alignItems: "center", 
		padding: "2rem"
	},
	header: {
		marginBottom: "1rem"
	},
	contentContainer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-around",
	},
	retrosContainer: {
		width: "30%", 
		border: "1px solid lightgrey",
		borderTop: "none",
		borderRadius: "8px", 
		padding: "2rem",
		display: "flex",
		justifyContent: "center",
		boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
		textAlign: "center",
		width: "450px"
	},
	buttonContainer: {
		display: "flex",
		justifyContent: "center"
	},
	button: {
		marginBottom: "1rem"
	}
}

const dummyRetros = [{BoardName: "Retro I1", Id: 1}, {BoardName: "Another Retro", Id: 2}, {BoardName: "Retro for another team", Id: 3}, {BoardName: "Retro I4", Id: 4}, {BoardName: "samis retro", Id:5}]

export default function HomeView(props) {
	const [retros, setAvailableRetros] = useState(dummyRetros);
	const [showCreateDialog, setShowCreatedialog] = useState(false);

	const handleCloseCreateDialog = () => setShowCreatedialog(false);
	const handleShowCreateDialog = () => setShowCreatedialog(true);

	const openRetro = (retro) => alert(`You opened the ${retro.name} board`);

	sendGet('RetroBoard').then(boards => {
		if(JSON.stringify(boards) !== JSON.stringify(retros)){
			setAvailableRetros(boards)
		}
	});
	return (
        <Fragment>
			<div style={styles.retrosContainer}>
				<ListGroup defaultActiveKey="#link1">
					<h4 style={styles.header}>My Retrospectives</h4>
					<Button style={styles.button} variant="outline-primary" onClick={() => handleShowCreateDialog()}>Create New Retrospective</Button>
					{retros.map(retro => (
						<ListGroup.Item key={retro.Id} action onClick={() => openRetro(retro)}>
							{retro.BoardName}
						</ListGroup.Item>
					))}
				</ListGroup>
			</div>
			<Modal show={showCreateDialog} onHide={handleCloseCreateDialog}>
				<CreateRetroForm
					handleClose={handleCloseCreateDialog}
					changeView={props.changeView}
				/> 
      		</Modal>
        </Fragment>
	);
}
