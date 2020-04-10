import React, { useState, useEffect } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import RetroCard from './RetroCard';
import * as HttpClient from '../HttpClient';

const styles = {
    header: {
		marginBottom: "1rem"
	},
    categoryColumn: {
        width: "50%",
        height: "100%",
        textAlign: "center",
        border: "1px solid #d8d8d8",
        borderRadius: "2px",
        padding: "2rem",
        margin: "2rem",
        display: "flex",
        flexDirection: "column",
		boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)"
    },
    itemsContainer: {
        display: "flex",
        flexDirection: "column"
    }
}

export default function RetroView(props) {
    const [value, setValue] = useState("");
    const [items, setItems] = useState([]);

    const handleInputChange = (e) => {
        e.preventDefault();
        setValue(e.currentTarget.value);
    }

    const addItem = (categoryId, boardId) => {
        var newItem = {
            categoryId: categoryId,
            retroBoardId: boardId,
            value: value,
            likes: 0
        };
        HttpClient.sendPost('boarditem', newItem).then(data => {
            setItems([...items, data]);
            setValue("");
        });

    };

    const removeItem = (id) => {
        HttpClient.sendDelete(`BoardItem/${id}`);
        setItems(items.filter(item => item.id !== id));
    }

    useEffect(() => {
        HttpClient.sendGet(`BoardItem/${props.category.Id}`).then(boardItems => {
            if(JSON.stringify(boardItems) !== JSON.stringify(items)){
                setItems(boardItems)
            }
        });
    }, [items]);

	return (
        <div style={styles.categoryColumn}>
            <h2 style={styles.header}>{props.category.Name}</h2>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <Button variant="outline-secondary" onClick={() => addItem(props.category.Id, props.boardId)}>+</Button>
                </InputGroup.Prepend>
                <FormControl value={value} onChange={(e) => handleInputChange(e)} type="text" placeholder="Add Item" />
            </InputGroup>
            <div style={styles.itemsContainer}>
                   {items.map(item => <RetroCard key={item.Id} item={item} removeItem={removeItem} />)}
            </div>

        </div>
	);
}
