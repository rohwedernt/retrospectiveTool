import React, { useState, useEffect } from 'react';
import { sendGet, sendDelete } from '../HttpClient';
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

export default function RetroView(props) {
    const [board, setBoard] = useState({});
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // Get Board
        sendGet(`retroboard/${props.retroBoardId}`).then(data => {
            setBoard(data);
        });

        // Get Categories
        sendGet(`category/${props.retroBoardId}`).then(data => {
            setCategories(data);
        });
    }, []);

    const deleteBoard = () => {
        return sendDelete(`retroboard/${props.retroBoardId}`).then(() => {
            props.changeView();
        });
    }

	return (
        <div style={styles.page}>
            <div style={styles.retroActions}>
                <Button style={{ marginLeft: "2rem" }} onClick={() => props.changeView("homeView")}>{`🡰 Home`}</Button>
                <Button style={{ marginRight: "2rem" }} onClick={() => deleteBoard()} variant="danger">{`✘ Delete`}</Button>
            </div>
            <h1 style={styles.header}>{board.BoardName}</h1>
            <div style={styles.categoriesContainer}>
                {categories.map(category => <RetroCategory key={category.Id} category={category} boardId={board.Id} />)}
            </div>
        </div>
	);
}
