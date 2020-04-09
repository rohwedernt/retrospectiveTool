import React, { useState, useEffect } from 'react';
import { sendGet, sendDelete, sendPost } from '../HttpClient';
import RetroCategory from './RetroCategory';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';

const styles = {
    retroActions: {
        background: "rgb(243, 243, 243)",
        display: "flex",
        justifyContent: "flex-end",
        paddingTop: "1rem",
        paddingRight: "2rem",
        paddingBottom: "1rem",
        marginBottom: "1rem",
        borderBottom: "1px solid rgba(0,0,0,.1)"
    },
    header: {
        marginBottom: "1rem",
        textAlign: "center"
    },
	categoriesContainer: {
		display: "flex", 
        flexDirection: "row",
        justifyContent: "space-around",
    },
    button: {
        marginLeft: "2rem"
    }
}

export default function RetroView(props) {
    const [board, setBoard] = useState({});
    const [categories, setCategories] = useState([]);
    const [actionItems, setActionItems] = useState([]);
    const [showActionItems, setShowActionItems] = useState(false);
    const [value, setValue] = useState("");

    const handleInputChange = (e) => {
        e.preventDefault();
        setValue(e.currentTarget.value);
    }

    const handleRemove = (idx, id) => {
        // need to update backend here
        const values = [...actionItems];
        values.splice(idx, 1);
        setActionItems(values);
        return sendDelete(`actionItem/${id}`);
    }

    const handleCloseActionItemModal = () => setShowActionItems(false);
    const handleShowActionItemModal = () => setShowActionItems(true);

    useEffect(() => {
        // Get Board
        sendGet(`retroboard/${props.retroBoardId}`).then(data => {
            setBoard(data);
        });

        // Get Categories
        sendGet(`category/${props.retroBoardId}`).then(data => {
            setCategories(data);
        });

        // Get Action Items
        sendGet(`actionItem`).then(data => {
            setActionItems(data);
        });
    }, []);

    const deleteBoard = () => {
        return sendDelete(`retroboard/${props.retroBoardId}`).then(() => {
            props.changeView();
        });
    }

    const postActionItem = () => {
        return sendPost('actionItem', {retroBoardId: props.retroBoardId, value: value, isResolved: false}).then(data => {
            setActionItems([...actionItems, data]);
            setValue("");
            handleCloseActionItemModal();
        });
    }

	return (
        <div>
            <div style={styles.retroActions}>
                <Button style={styles.button} onClick={() => props.changeView("homeView")} variant="secondary">{`🡰 Home`}</Button>
                <Button style={styles.button} onClick={() => handleShowActionItemModal()}>{`✚ Action Item`}</Button>
                <Button style={styles.button} onClick={() => deleteBoard()} variant="danger">{`✘ Delete`}</Button>
            </div>
            <h1 style={styles.header}>{board.BoardName}</h1>
            <div style={styles.categoriesContainer}>
                {categories.map(category => <RetroCategory key={category.Id} category={category} boardId={board.Id} />)}
            </div>
            <Modal show={showActionItems} onHide={() => handleCloseActionItemModal()}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Action Item</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {actionItems.length > 0 && (
                        <ListGroup style={{marginBottom: "2rem"}}>
                            <h6>Existing Items</h6>
                            {actionItems.map((item, idx) => {
                                return (
                                    <InputGroup key={`${item}-${idx}`} className="mb-3">
                                        <FormControl readOnly value={item.Value} />
                                        <InputGroup.Append>
                                            <Button variant="outline-danger" onClick={() => handleRemove(idx, item.Id)}>✘</Button>
                                        </InputGroup.Append>
                                    </InputGroup>
                                )}
                            )}
                        </ListGroup>
                    )}
                    <h6>New Item</h6>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control value={value} onChange={(e) => handleInputChange(e)} as="textarea" rows="2" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => handleCloseActionItemModal()}>
                        Cancel
                    </Button>
                    <Button variant="outline-primary" onClick={() => handleCloseActionItemModal()}>
                        Export
                    </Button>
                    <Button variant="primary" onClick={() => postActionItem()}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
	);
}
