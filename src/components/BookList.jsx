import { Container, Form, Row, Col } from "react-bootstrap"
import SingleBook from "./SingleBook"
import { Component } from "react"
import CommentArea from "./CommentArea"

class BookList extends Component {
  state = {
    search: "", // il valore del campo di ricerca
    asin: "", // devo cambiare l'asin ad ogni click sul singlebook
  }

  changeAsin = (newAsin) => {
    // si esegue ad ogni click su singlebook
    // serve a ricevere l'asin del libro da singlebook e salvarlo dentro lo stato di booklist
    this.setState({
      asin: newAsin,
    })
  }

  render() {
    return (
      <Container className="pt-5">
        <Row className="justify-content-center my-5">
          <Col xs={12} md={6}>
            <Form.Control
              type="text"
              placeholder="Cerca qui"
              value={this.state.search}
              onChange={(e) => {
                this.setState({
                  search: e.target.value,
                })
              }}
            />
          </Col>
        </Row>
        <Row className="justify-content-center g-3">
          <Col xs={12} md={8}>
            <Row className="g-2">
              {this.props.arrayOfBooks
                .filter((libro) =>
                  libro.title
                    .toLowerCase()
                    .includes(this.state.search.toLowerCase())
                )
                .map((libro) => {
                  return (
                    <SingleBook
                      book={libro}
                      key={libro.asin}
                      cambiaAsin={this.changeAsin}
                      asinLibroSelezionato={this.state.asin}
                    />
                  )
                })}
            </Row>
          </Col>
          <Col xs={12} md={4}>
            <CommentArea asin={this.state.asin} />
          </Col>
        </Row>
      </Container>
    )
  }
}
export default BookList
