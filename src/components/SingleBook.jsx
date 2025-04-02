import { Container, Row, Col, Card, Button } from "react-bootstrap"

const SingleBook = function (props) {
  return (
    <Container>
      <Row className="justify-content-center g-3">
        <Col
          xs={12}
          md={4}
          lg={3}
          key={props.asin}
          className="justify-content-center d-flex align-items-stretch"
        >
          <Card className="d-flex flex-column w-100">
            <Card.Img variant="top" src={props.img} />
            <Card.Body className="d-flex flex-column testColor">
              <Card.Title className="flex-grow-1">{props.title}</Card.Title>
              <Button variant="dark">Compralo!</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
export default SingleBook
