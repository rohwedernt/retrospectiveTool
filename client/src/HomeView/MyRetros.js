import React, { useState, Fragment } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CreateRetroForm from './CreateRetroForm';

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
		border: "2px solid lightgrey",
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

const retros = [{name: "Retro I1"}, {name: "Another Retro"}, {name: "Retro for another team"}, {name: "Retro I4"}, {name: "samis retro"}]

export default function HomeView(props) {
	const [showCreateDialog, setShowCreatedialog] = useState(false);

	const handleCloseCreateDialog = () => setShowCreatedialog(false);
	const handleShowCreateDialog = () => setShowCreatedialog(true);

	const openRetro = (retro) => alert(`You opened the ${retro.name} board`);

	return (
        <Fragment>
			<div style={styles.retrosContainer}>
				<ListGroup defaultActiveKey="#link1">
					<h4 style={styles.header}>My Retrospectives</h4>
					<Button style={styles.button} variant="outline-primary" onClick={() => handleShowCreateDialog()}>Create New Retrospective</Button>
					{retros.map(retro => (
						<ListGroup.Item key={retro.name} action onClick={() => openRetro(retro)}>
							{retro.name}
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
