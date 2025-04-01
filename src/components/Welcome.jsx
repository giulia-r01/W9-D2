import { Col, Container, Row } from "react-bootstrap"
import Alert from "react-bootstrap/Alert"

const Welcome = function () {
  return (
    <Container className="pt-3">
      <Row className="justify-content-center">
        <Col xs={12} md={6} xl={6}>
          <Alert variant="warning" className="w-100 text-center testColor">
            <Alert.Heading className="fs-5">
              Benvenuto nella libreria più grande del mondo!
            </Alert.Heading>
            <hr />
            <p className="mb-0">
              Divertiti a navigare nel nostro Fantasy book store
            </p>
          </Alert>
        </Col>
      </Row>
    </Container>
  )
}

export default Welcome
