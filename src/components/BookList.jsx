import { Container, Form, Row, Col } from "react-bootstrap"
import SingleBook from "./SingleBook"
import { Component } from "react"

class BookList extends Component {
  state = {
    search: "", // il valore del campo di ricerca
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
          {this.props.arrayOfBooks
            .filter((libro) =>
              libro.title
                .toLowerCase()
                .includes(this.state.search.toLowerCase())
            )
            .map((libro) => {
              return <SingleBook book={libro} key={libro.asin} />
            })}
        </Row>
      </Container>
    )
  }
}
export default BookList
