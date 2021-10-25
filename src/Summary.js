import React from 'react';
import Container from 'react-bootstrap/Container';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Row';

const Summary = () => {
  return (
      <Container>
          <Form>
              <Row className="mb-3">
                <Col xs={3}>
              {/* <FloatingLabel controlID="floatingSummary" label="Summary"> */}
              <Form.Select aria-label="Test Results">
                  <option> Test Results</option>
                  <option value="1">Pass</option>
                  <option value="2">Fail</option>
                  <option value="3">Protocol Fail</option>
                  <option value="4">N/A</option>
              </Form.Select>
              {/* </FloatingLabel> */}
              </Col>
              </Row>
              </Form>
          </Container>
  )
}
export default Summary;