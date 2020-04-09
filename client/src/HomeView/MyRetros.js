import React, { useState, useEffect, Fragment } from 'react';
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
        zIndex: "1",
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
	button: {
		marginBottom: "1rem"
	}
}

export default function HomeView(props) {
	const [retros, setAvailableRetros] = useState([]);
	const [showCreateDialog, setShowCreatedialog] = useState(false);

	const handleCloseCreateDialog = () => setShowCreatedialog(false);
	const handleShowCreateDialog = () => setShowCreatedialog(true);

	const openRetro = (retro) => alert(`You opened the ${retro.name} board`);

    useEffect(() => {
        sendGet('RetroBoard').then(boards => {
            if(JSON.stringify(boards) !== JSON.stringify(retros)){
                setAvailableRetros(boards)
            }
        });
    }, []);

	return (
        <Fragment>
			<div style={styles.retrosContainer}>
				<ListGroup defaultActiveKey="#link1">
					<h4 style={styles.header}>My Retrospectives</h4>
					<Button style={styles.button} variant="outline-primary" onClick={() => handleShowCreateDialog()}>Create New Retrospective</Button>
					{retros.length >= 1 ? (
                        retros.map(retro => (
						<ListGroup.Item key={retro.Id} action onClick={() =>props.changeView("retroview", retro.Id)}>
							{retro.BoardName}
						</ListGroup.Item>
                    ))) : 
                        <span>Could Not Load Retros :(</span>
                    }
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
