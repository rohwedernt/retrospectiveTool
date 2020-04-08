import React, { Fragment, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CategoryInput from './CategoryInput';

const styles = {
    button: {
        width: "145px"
    }
}

export default function RetroView(props) {
    const [numOfCategories, setNumOfCategories] = useState(1);
    const [title, setTitle] = useState("");
    const [categories, setCategories] = useState([]);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const setCategory = value => {
        setCategories([...categories, value]);
    }

    const addCategory = () => {
        setNumOfCategories(numOfCategories + 1);
    }

    const removeCategory = () => {
        setCategories(categories.pop());
        setNumOfCategories(numOfCategories - 1);
    }

    const renderCategoryInputs = () => {
        let inputs = []
        for (let i = 0; i < numOfCategories; i++) {
            inputs.push(<CategoryInput key={i} setCategory={setCategory}/>)
        }

        return inputs
    }

	return (
        <Fragment>
            <Modal.Header closeButton>
                <Modal.Title>Create New Retrospective</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* This form needs to gather this and send to backend and create retro item */}
                <Form>
                    <Form.Group controlId="formBasicEmail">
                    <Form.Label>Title</Form.Label>
                        <Form.Control value={title} onChange={(e) => handleTitleChange(e)} type="text" placeholder="Enter Title" />
                    </Form.Group>
                    <Form.Label>Categories</Form.Label>
                    {renderCategoryInputs()}
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <Button style={styles.button} variant="outline-primary" size="sm" onClick={() => addCategory()}>Add Category</Button>
                        <Button style={styles.button} variant="outline-danger" size="sm" onClick={() => removeCategory()}>Remove Category</Button>
                    </div>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Cancel
                </Button>
                {/* this will call method to create retro on backend then render retro board of id blah */}
                <Button variant="primary" onClick={() => props.changeView("retroview")}>
                    Create
                </Button>
            </Modal.Footer>
        </Fragment>
	);
}
