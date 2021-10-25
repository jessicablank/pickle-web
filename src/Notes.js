import React from 'react';
import Form from 'react-bootstrap/Form';

const Notes =() => {
    return(
            <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label> Tester Notes</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  </Form>
    )

}
export default Notes;