import React, { Fragment, useState } from 'react';
import { sendPost } from '../HttpClient';
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

function generateBoardDates() {
    let dates = {};

    let currentDate=new Date();
    let futureDate=new Date(currentDate);
    futureDate.setDate(futureDate.getDate()+ 14);

    dates.current = currentDate;
    dates.future = futureDate;

    return dates;
}

function generateUid() {
    return `${Math.random().toString().slice(2,14)}` + `${Math.random().toString().slice(2,14)}`;
}

export default function RetroView(props) {
    const [boardName, setBoardName] = useState("");
    const [categories, setCategories] = useState([{id: "", text: "" }]);

    const createRetroBoard = () => {
        let dates = generateBoardDates();
        return sendPost('retroboard', { startDate: dates.current, endDate: dates.future, boardName: boardName})
            .then(data => {
                categories.forEach(category => sendPost('category', {id: category.id, retroBoardId: data.Id, name: category.text}))
                props.changeView("retroview", data.Id);
            });
    }

    const handleBoardNameChange = (e) => {
        setBoardName(e.target.value);
    }

    const handleChange = (i, event) => {
        const values = [...categories];
        values[i].text = event.target.value;
        if (values[i].id === "") {
            values[i].id = generateUid();
        }

        setCategories(values);
    }

    const handleAdd = () => {
        const values = [...categories];
        values.push({ id: generateUid(), text: "" });
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
                    <Form.Label>Board Name</Form.Label>
                        <Form.Control value={boardName} onChange={(e) => handleBoardNameChange(e)} type="text" placeholder="Enter Board Name" />
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
                <Button variant="primary" onClick={() => createRetroBoard()}>
                    Create
                </Button>
            </Modal.Footer>
        </Fragment>
    );
}
