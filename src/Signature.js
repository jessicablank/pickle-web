import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Row';

const Signature = () => {
    
  return (
    <Container>
          <Form>
          <Form.Group className="mb-3">
            <Row>
            <Col className="m-3">
            <Form.Select aria-label="Test Results">
                  <option> Test Results</option>
                  <option value="1">Pass</option>
                  <option value="2">Fail</option>
                  <option value="3">Protocol Fail</option>
                  <option value="4">N/A</option>
              </Form.Select>
              </Col>
            </Row>
              <Row>
                <Col className="m-3">
                <Form.Label>Test Performed By:</Form.Label>
                <Form.Control placeholder="Tester Name" />
               </Col>
               <Col className="m-3">
                <Form.Label>Signature:</Form.Label>
                <Form.Control type="text" />
                </Col>
                <Col className="m-3">
                <Form.Label>Date:</Form.Label>
                <Form.Control type="date" name="date" />
                </Col>
                
                </Row>
                </Form.Group>
          </Form>
          </Container>
  )
}
export default Signature;