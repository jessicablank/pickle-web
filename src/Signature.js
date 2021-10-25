import React, {useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Container from 'react-bootstrap/Container';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Row';

const Signature = () => {
    const [startDate, setStartDate] = useState(new Date());
  return (
      <Container>
              <Row>
              <FloatingLabel controlID="floatingSummary" label="Summary">
              <Form.Select aria-label="Test Results">
                  <option> Test Results</option>
                  <option value="1">Pass</option>
                  <option value="2">Fail</option>
                  <option value="3">Protocol Fail</option>
                  <option value="4">N/A</option>
              </Form.Select>
              </FloatingLabel>
              </Row>
              <Form>
              <Row className="mb-3">
                <Form.Group as={Col} controlID="formGridName" >
                <Form.Label>Test Performed By</Form.Label>
                <Form.Control type="text" placeholder="Tester Name" />
                </Form.Group>
                <Form.Group as={Col} controlID="formGridSig" >
                <Form.Label>Signature</Form.Label>
                <Form.Control type="text" />
                </Form.Group>
                
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            </Row>
          </Form>
          </Container>
  )
}
export default Signature;