import React, { useState ,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import * as HttpClient from '../HttpClient';

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
    const [likeCount, setLikes] = useState([]);

    const updateItemLikes = (item, likes) => {
        item.Likes = item.Likes + likes;
        HttpClient.sendPut(`boarditem/${item.Id}`, item);
        setLikes(item.Likes);
    }

    useEffect(() => {
        setLikes(props.item.Likes)
    }, []);

	return (
        <Card key={props.item.id} style={styles.item} bg='light'>
            <Card.Header>{likeCount}</Card.Header>
            <Card.Body>
                <Card.Text>{props.item.Value}</Card.Text>
            </Card.Body>
            <Card.Footer style={styles.cardFooter} className="text-muted">
                <Button style={styles.button} variant="outline-info" size="sm" onClick={() => updateItemLikes(props.item, 1)}>+1</Button>
                <Button style={styles.button} variant="outline-info" size="sm" onClick={() => updateItemLikes(props.item, -1)}>-1</Button>
                <Button style={styles.button} variant="outline-danger" size="sm" onClick={() => props.removeItem(props.item.Id)}>✘</Button>
            </Card.Footer>
        </Card>
	);
}
