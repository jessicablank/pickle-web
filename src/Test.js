import React from 'react';
import Form from 'react-bootstrap/Form';
import Gherkin from './Gherkin'

const Test =() => {
    return(
            <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Test:</Form.Label>
   <Gherkin />
  </Form.Group>
  </Form>
    )

}
export default Test;