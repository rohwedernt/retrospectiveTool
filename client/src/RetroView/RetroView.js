import React from 'react';
import RetroCategory from './RetroCategory';
import Button from 'react-bootstrap/Button';

const styles = {
    page: {
		padding: "2rem"
    },
    retroActions: {
        display: "flex",
        justifyContent: "space-between"
    },
    header: {
        marginBottom: "1rem",
        textAlign: "center"
    },
	categoriesContainer: {
		display: "flex", 
        flexDirection: "row",
        justifyContent: "space-around",
    }
}

const categories = [{name: "Liked"}, {name: "Learned"}, {name: "Lacked"}, {name: "Longed For"}]

export default function RetroView(props) {
	return (
        <div style={styles.page}>
            <div style={styles.retroActions}>
                <Button style={{ marginLeft: "2rem" }} onClick={() => props.changeView("homeView")}>{`🡰  Home`}</Button>
                <Button style={{ marginRight: "2rem" }} variant="danger">{`✘ Delete`}</Button>
            </div>
            <h1 style={styles.header}>Retro Title</h1>
            <div style={styles.categoriesContainer}>
                {categories.map(category => <RetroCategory key={category} category={category} />)}
            </div>
        </div>

	);
}
