import books from "../data-books/fantasy.json"
import { Container, Row, Col, Card, Button } from "react-bootstrap"

const BookList = function () {
  return (
    <Container className="pt-5">
      <Row className="justify-content-center g-3">
        {books.map((props) => {
          return (
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
          )
        })}
      </Row>
    </Container>
  )
}
export default BookList
