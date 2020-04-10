import React, { useState ,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';
import * as HttpClient from '../HttpClient';
import { InlineIcon } from '@iconify/react';
import deleteOutline from '@iconify/icons-mdi/delete-outline';
import thumbsUp from '@iconify/icons-uil/thumbs-up';
import thumbsDown from '@iconify/icons-uil/thumbs-down';

const styles = {
    item: {
        marginBottom: "1rem"
    },
    cardFooter: {
        display: "flex",
        justifyContent: "space-between"
    },
    button: {
        width: "30px"
    },
    removeButton: {
        color: "#de6666",
        padding: "0px"
    },
    cardBody: {
        padding: "25px"
    },
    likes: {
        fontFamily: `'Work Sans', cursive`,
        color: "#007bff",
        width: "35px",
        paddding: "3px",
        position: "absolute",
        top: -1,
        right: 0,
        borderLeft: "1px solid lightgrey",
        borderBottom: "1px solid lightgrey",
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
                    <Button style={styles.button} variant="outline-secondary" size="sm" onClick={() => updateItemLikes(props.item, -1)}>
                        <InlineIcon icon={thumbsDown} width="1em" height="1em"/>
                    </Button>
                    <Button style={styles.button} variant="outline-primary" size="sm" onClick={() => updateItemLikes(props.item, 1)}>
                        <InlineIcon icon={thumbsUp} width="1em" height="1em"/>
                    </Button>
                </ButtonGroup>
                <Button style={styles.removeButton} variant="link" size="sm" onClick={() => props.removeItem(props.item.Id)}>
                    <InlineIcon icon={deleteOutline} width="2em" height="2em"/>
                </Button>
            </Card.Footer>
        </Card>
	);
}
