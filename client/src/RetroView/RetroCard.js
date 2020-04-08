import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const styles = {
    item: {
        marginBottom: "1rem"
    },
    cardFooter: {
        display: "flex",
        justifyContent: "space-between"
    },
    button: {
        width: "45px"
    }
}

export default function RetroCard(props) {
    const [numOfVotes, setNumOfVotes] = useState(0);

	return (
        <Card key={props.item.id} style={styles.item} bg='light'>
            {numOfVotes ? (<Card.Header>{numOfVotes}</Card.Header>) : null}
            <Card.Body>
                <Card.Text>{props.item.value}</Card.Text>
            </Card.Body>
            <Card.Footer style={styles.cardFooter} className="text-muted">
                <Button style={styles.button} variant="outline-info" size="sm" onClick={() => setNumOfVotes(numOfVotes + 1)}>+1</Button>
                <Button style={styles.button} variant="outline-info" size="sm" onClick={() => setNumOfVotes(numOfVotes - 1)}>-1</Button>
                <Button style={styles.button} variant="outline-danger" size="sm" onClick={() => props.removeItem(props.item.id)}>X</Button>
            </Card.Footer>
        </Card>
	);
}
