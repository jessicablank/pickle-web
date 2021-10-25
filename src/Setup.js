import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';

const Setup =() => {
  return (
    <Navbar>
    <Container>
        <Navbar.Text>
        <Form.Label>Test Environment</Form.Label>
        <Form.Control type="test" placeholder="Enter Test Environment" />
        </Navbar.Text>
    </Container>
    </Navbar>
  );
}

export default Setup;
