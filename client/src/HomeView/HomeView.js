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
	svg: {
		maxHeight: "541px",
		position: "absolute",
		top: "-10px"
	},
	header: {
		fontFamily: 'Bellota Text', 
		fontSize: "27px"
	},
	logo: {
        width: "188px",
		height: "190px",
		marginTop: "40px",
		marginBottom: "15px",
        boxShadow: "0 0 8px 8px white inset",
        backgroundImage: `url("https://www.lakegeneva.lib.wi.us/wp-content/uploads/2019/08/novelist.jpg")`, 
        backgroundSize: "cover",
        backgroundPosition: "center"
    },
	contentContainer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-around",
	},
	buttonContainer: {
		zIndex: "1",
		display: "flex",
		justifyContent: "center"
	},
	button: {
		marginBottom: "1rem"
	},
	dropdown: {
		zIndex: "2 !important"
	}
}

function renderTitle() {}


export default function HomeView(props) {
	const [view, setView] = useState("my-retros");


	return (
		<div style={styles.page}>
			<div style={styles.logo} />
			{/* <h1 style={styles.header}>Placeholder for clever app name</h1> */}
			<svg style={styles.svg} viewBox="0 0 500 500">
				<path fill="transparent" id="curve" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
				<text width="500">
				<textPath style={styles.header} xlinkHref="#curve">
					Placeholder For A Clever App Name
				</textPath>
				</text>
			</svg>
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
					<NavDropdown style={styles.dropdown} title="Profile" id="nav-dropdown" disabled />
				</Nav>
			</div>
			{view === "my-retros" && <MyRetros changeView={props.changeView} />}
			{view === "analytics" && <Analytics />}
			{view === "settings" && <Settings />}
		</div>
	);
}
