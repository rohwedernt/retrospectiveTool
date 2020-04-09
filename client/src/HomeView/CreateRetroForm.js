import React, { Fragment, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

const styles = {
    button: {
        width: "145px"
    }
}

export default function RetroView(props) {
    const [title, setTitle] = useState("");
    const [categories, setCategories] = useState([{ text: null }]);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleChange = (i, event) => {
        const values = [...categories];
        values[i].text = event.target.value;
        setCategories(values);
    }

    const handleAdd = () => {
        const values = [...categories];
        values.push({ text: null });
        setCategories(values);
    }

    const handleRemove = (i) => {
        const values = [...categories];
        values.splice(i, 1);
        setCategories(values);
    }

    return (
        <Fragment>
            <Modal.Header closeButton>
                <Modal.Title>Create New Retrospective</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                    <Form.Label>Title</Form.Label>
                        <Form.Control value={title} onChange={(e) => handleTitleChange(e)} type="text" placeholder="Enter Title" />
                    </Form.Group>
                    <Form.Label>Categories</Form.Label>
                    {categories.map((category, idx) => {
                        return (
                            <InputGroup key={`${category}-${idx}`} className="mb-3">
                                <FormControl 
                                    type="text" 
                                    value={category.text} 
                                    placeholder="Enter Category Name" 
                                    onChange={(e) => handleChange(idx, e)} 
                                />
                                <InputGroup.Append>
                                    <Button variant="outline-danger" onClick={() => handleRemove(idx)}>✘</Button>
                                </InputGroup.Append>
                            </InputGroup>
                        )}
                    )}
                    <Button style={styles.button} variant="outline-primary" size="sm" onClick={() => handleAdd()}>Add Category</Button>
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
