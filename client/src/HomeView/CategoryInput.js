import React, { Fragment, useState } from 'react';
import Form from 'react-bootstrap/Form';

export default function RetroView(props) {
    const [value, setValue] = useState("");

    const handleInputChange = (e) => {
        e.preventDefault();
        setValue(e.currentTarget.value);
    }

	return (
        <Form.Group controlId="formBasicEmail">
            <Form.Control value={value} onBlur={() => props.setCategory(value)} onChange={(e) => handleInputChange(e)} type="text" placeholder="Enter Category Name" />
        </Form.Group>
	);
}
