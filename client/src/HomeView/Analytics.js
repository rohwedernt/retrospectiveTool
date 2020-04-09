import React from 'react';

const styles = {
	analyticsContainer: {
		width: "30%", 
		border: "1px solid lightgrey",
		borderTop: "none",
		borderRadius: "8px", 
		padding: "2rem",
		boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
		width: "450px"
	}
}

export default function RetroView(props) {
	return (
        <div style={styles.analyticsContainer}>
			<div style={{ height: "480px", backgroundImage: `url("https://piximus.net/media2/60607/funny-pie-charts-1.jpg")`, backgroundSize: "contain" }} />
		</div>
	);
}
