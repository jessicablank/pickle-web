import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

const Notes =() => {
    return(
      <Container>
            <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label> Tester Notes:</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  </Form>
  </Container>
    )

}
export default Notes;