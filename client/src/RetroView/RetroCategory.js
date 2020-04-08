import React, { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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
    },
    item: {
        marginBottom: "1rem"
    }
}

export default function RetroView(props) {
    const [items, setItems] = useState([]);

    const addItem = () => {
        setItems([
          ...items,
          {
            id: items.length,
            value: "test card"
          }
        ]);
      };

	return (
        <div style={styles.categoryColumn}>
            <h2 style={styles.header}>{props.category.name}</h2>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <Button variant="outline-secondary" onClick={() => addItem("test-test-test")}>+</Button>
                </InputGroup.Prepend>
                <FormControl type="text" placeholder="Add Item" />
            </InputGroup>
            <div style={styles.itemsContainer}>
                {items.map(item => (
                    <Card key={item.id} style={styles.item} bg='light'>
                        <Card.Body>
                            <Card.Text>{item.value}</Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted">
                            <Button variant="outline-success" size="sm">+1</Button>
                        </Card.Footer>
                    </Card>
                ))}
            </div>

        </div>
	);
}
