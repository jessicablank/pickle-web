import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Gherkin from './Gherkin'

const Test =() => {
    return(
      <Container>
            <Form>
            <Form.Group className="mb-3" controlId="controlTestArea">
    <Form.Label>Test:</Form.Label>
   <Gherkin />
  </Form.Group>
  </Form>
  </Container>
    )

}
export default Test;