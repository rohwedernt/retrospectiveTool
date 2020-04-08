import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import MyRetros from './MyRetros';
import Analytics from './Analytics';
import Settings from './Settings';

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


export default function HomeView(props) {
	const [view, setView] = useState("my-retros");


	return (
		<div style={styles.page}>
			<h1 style={styles.header}>NoveList Retrospective Tool</h1>
			<div style={styles.buttonContainer}>
				<Nav style={{ width: "436px" }} fill variant="tabs" defaultActiveKey="my-retros">
					<Nav.Item>
						<Nav.Link eventKey="my-retros" onClick={() => setView("my-retros")}>My Retros</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link eventKey="analytics" onClick={() => setView("analytics")}>Analytics</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link eventKey="settings" onClick={() => setView("settings")}>Settings</Nav.Link>
					</Nav.Item>
					<NavDropdown title="Profile" id="nav-dropdown">
						<NavDropdown.Item eventKey="preferences">Preferences</NavDropdown.Item>
						<NavDropdown.Item eventKey="my-notes">My Notes</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item eventKey="logout">Logout</NavDropdown.Item>
					</NavDropdown>
				</Nav>
			</div>
			{view === "my-retros" && <MyRetros changeView={props.changeView} />}
			{view === "analytics" && <Analytics />}
			{view === "settings" && <Settings />}
		</div>
	);
}
