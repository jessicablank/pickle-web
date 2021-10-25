import React, {useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Row';

const Signature = () => {
    const [startDate, setStartDate] = useState(new Date());
  return (
          <Form>
              <Row className="mb-3">
                  <Col xs={5}>
                <Form.Label>Test Performed By</Form.Label>
                <Form.Control type="text" placeholder="Tester Name" />
                </Col>
                <Col xs={5}>
                <Form.Label>Signature</Form.Label>
                <Form.Control type="text" />
               </Col>
               <Col>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            </Col>
            </Row>
          </Form>
  )
}
export default Signature;