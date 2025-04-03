import { Component } from "react"
import { Form, Row, Col, Button } from "react-bootstrap"

class AddComment extends Component {
  render() {
    return (
      <Form>
        {/* ho collegato al submit del form*/}
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <Form.Group className="mb-3">
              <Form.Label>Inserisci la tua recensione</Form.Label>
              <Form.Control
                type="text"
                placeholder="Scrivi la tua recensione"
                required
              />
            </Form.Group>
            <Button variant="success" type="submit">
              Invia recensione
            </Button>
          </Col>
        </Row>
      </Form>
    )
  }
}

export default AddComment
