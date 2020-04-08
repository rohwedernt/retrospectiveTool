import React from 'react';
import RetroCategory from './RetroCategory';
import Button from 'react-bootstrap/Button';

const styles = {
    page: {
		padding: "2rem"
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
            <Button onClick={() => props.changeView("homeView")}>{`<- Home`}</Button>
            <div style={styles.categoriesContainer}>
                {categories.map(category => <RetroCategory category={category} />)}
            </div>
        </div>

	);
}
