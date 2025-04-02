import { Component } from "react"
import { Container, Row, Col, Card, Button } from "react-bootstrap"

class SingleBook extends Component {
  state = {
    bookState: {
      selected: false,
    },
  }

  eventoTest = () => {
    {
      this.state.bookState.selected === true && console.log("qualcosa funziona")
    }
  }

  render() {
    return (
      <Container>
        <Row className="justify-content-center g-3">
          <Col
            xs={12}
            md={4}
            lg={3}
            key={this.props.asin}
            className="justify-content-center d-flex align-items-stretch"
          >
            <Card className="d-flex flex-column w-100">
              <Card.Img
                variant="top"
                src={this.props.img}
                onClick={this.eventoTest}
              />
              <Card.Body className="d-flex flex-column testColor">
                <Card.Title className="flex-grow-1">
                  {this.props.title}
                </Card.Title>
                <Button variant="dark">Compralo!</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}
export default SingleBook
