import React, { useState ,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
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
    },
    cardBody: {
        padding: "25px"
    },
    likes: {
        fontFamily: 'Josefin Sans',
        fontStyle: "italic",
        color: "#28a745",
        width: "25px",
        position: "absolute",
        top: -1,
        right: 0,
        borderLeft: "1px solid rgba(40,167,69,0.4)",
        borderBottom: "1px solid rgba(40,167,69,0.4)",
        borderRadius: "3px"
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
            <Card.Body style={styles.cardBody}>
                <div style={styles.likes}>{likeCount}</div>
                <Card.Text>{props.item.Value}</Card.Text>
            </Card.Body>
            <Card.Footer style={styles.cardFooter} className="text-muted">
                <ButtonGroup>
                    <Button style={styles.button} variant="outline-secondary" size="sm" onClick={() => updateItemLikes(props.item, -1)}>-1</Button>
                    <Button style={styles.button} variant="outline-success" size="sm" onClick={() => updateItemLikes(props.item, 1)}>+1</Button>
                </ButtonGroup>
                <Button style={styles.button} variant="outline-danger" size="sm" onClick={() => props.removeItem(props.item.Id)}>✘</Button>
            </Card.Footer>
        </Card>
	);
}
