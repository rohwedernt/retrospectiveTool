import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

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
		textAlign: "center"
	},
	buttonContainer: {
		display: "flex",
		justifyContent: "space-around"
	},
	button: {
		margin: "1rem"
	}
}

const retros = [{name: "Retro I1"}, {name: "Retro I2"}, {name: "Retro I3"}, {name: "Retro I4"}, {name: "Retro I5"}]

export default function HomeView(props) {

	const openRetro = (retro) => alert(`You opened the ${retro.name} board`);

	return (
		<div style={styles.page}>
			<h1 style={styles.header}>Welcome to NoveList Retrospective Tool Thingy</h1>
			<div style={styles.buttonContainer}>
			<Nav fill variant="tabs" defaultActiveKey="/home">
				<Nav.Item>
					<Nav.Link eventKey="link-1">My Retros</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link eventKey="link-2">Analytics</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link eventKey="link-3" disabled>Settings</Nav.Link>
				</Nav.Item>
				<NavDropdown title="Profile" id="nav-dropdown">
					<NavDropdown.Item eventKey="4.1">Preferences</NavDropdown.Item>
					<NavDropdown.Item eventKey="4.2">My Notes</NavDropdown.Item>
					<NavDropdown.Divider />
					<NavDropdown.Item eventKey="4.3">Logout</NavDropdown.Item>
				</NavDropdown>
			</Nav>
			</div>
			<div style={styles.retrosContainer}>
				<ListGroup defaultActiveKey="#link1">
					<h4 style={styles.header}>My Retrospectives</h4>
					<Button style={styles.button} variant="outline-primary" onClick={() => props.changeView("retroview")}>Create New Retrospective</Button>
					{retros.map(retro => (
						<ListGroup.Item key={retro.name} action onClick={() => openRetro(retro)}>
							{retro.name}
						</ListGroup.Item>
					))}
				</ListGroup>
			</div>
		</div>
	);
}
