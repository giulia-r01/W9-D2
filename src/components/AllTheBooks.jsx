import books from "../data-books/fantasy.json"
import { Container, Row, Col, Card, Button } from "react-bootstrap"

const AllTheBooks = function () {
  return (
    <Container>
      <h3 className="text-center text-gold pb-3 pt-5">
        Scopri la nostra collezione fantasy
      </h3>
      <Row className="justify-content-center g-3">
        {books.slice(0, 10).map((fantasy) => {
          return (
            <Col
              xs={12}
              md={4}
              lg={3}
              key={fantasy.asin}
              className="justify-content-center d-flex align-items-stretch"
            >
              <Card className="d-flex flex-column w-100">
                <Card.Img variant="top" src={fantasy.img} />
                <Card.Body className="d-flex flex-column testColor">
                  <Card.Title>{fantasy.title}</Card.Title>
                  <Card.Text className="flex-grow-1">{fantasy.price}</Card.Text>
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

export default AllTheBooks
