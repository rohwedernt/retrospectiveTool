import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const styles = {
	settingsContainer: {
		zIndex: "1",
		width: "30%", 
		border: "1px solid lightgrey",
		borderTop: "none",
		borderRadius: "8px", 
		padding: "2rem",
		boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
		width: "450px"
	}
}

export default function Settings(props) {
	return (
		<div style={styles.settingsContainer}>
			<Form>
				<Form.Group as={Row} controlId="formHorizontalEmail">
					<Form.Label column sm={2}>
					Email
					</Form.Label>
					<Col sm={10}>
					<Form.Control type="email" placeholder="Email" />
					</Col>
				</Form.Group>

				<Form.Group as={Row} controlId="formHorizontalPassword">
					<Form.Label column sm={2}>
					Password
					</Form.Label>
					<Col sm={10}>
					<Form.Control type="password" placeholder="Password" />
					</Col>
				</Form.Group>
				<fieldset>
					<Form.Group as={Row}>
					<Form.Label as="legend" column sm={2}>
						Radios
					</Form.Label>
					<Col sm={10}>
						<Form.Check
						type="radio"
						label="first radio"
						name="formHorizontalRadios"
						id="formHorizontalRadios1"
						/>
						<Form.Check
						type="radio"
						label="second radio"
						name="formHorizontalRadios"
						id="formHorizontalRadios2"
						/>
						<Form.Check
						type="radio"
						label="third radio"
						name="formHorizontalRadios"
						id="formHorizontalRadios3"
						/>
					</Col>
					</Form.Group>
				</fieldset>
				<Form.Group as={Row} controlId="formHorizontalCheck">
					<Col sm={{ span: 10, offset: 2 }}>
					<Form.Check label="This thing right here" />
					</Col>
				</Form.Group>

				<Form.Group as={Row}>
					<Col sm={{ span: 10, offset: 2 }}>
					<Button type="submit">Save</Button>
					</Col>
				</Form.Group>
			</Form>
		</div>
	);
}
