import { Container, Form, Row, Col } from "react-bootstrap"
import SingleBook from "./SingleBook"
import { useState } from "react"
import CommentArea from "./CommentArea"

const BookList = function (props) {
  //state = {
  //  search: "", // il valore del campo di ricerca
  //  asin: "", // devo cambiare l'asin ad ogni click sul singlebook
  //}

  const [search, setSearch] = useState("")
  const [asin, setAsin] = useState("")

  const changeAsin = (newAsin) => {
    // si esegue ad ogni click su singlebook
    // serve a ricevere l'asin del libro da singlebook e salvarlo dentro lo stato di booklist
    //this.setState({
    //  asin: newAsin,
    //})
    setAsin(newAsin)
  }

  return (
    <Container className="pt-5">
      <Row className="justify-content-center my-5">
        <Col xs={12} md={6}>
          <Form.Control
            type="text"
            placeholder="Cerca qui"
            value={search}
            onChange={(e) => {
              //this.setState({
              //  search: e.target.value,
              //})
              setSearch(e.target.value)
            }}
          />
        </Col>
      </Row>
      <Row className="justify-content-center g-3">
        <Col xs={12} md={8}>
          <Row className="g-2" data-testid="eight-cards">
            {props.arrayOfBooks
              .filter((libro) =>
                libro.title.toLowerCase().includes(search.toLowerCase())
              )
              .slice(0, 8)
              .map((libro) => {
                return (
                  <SingleBook
                    book={libro}
                    key={libro.asin}
                    cambiaAsin={changeAsin}
                    asinLibroSelezionato={asin}
                  />
                )
              })}
          </Row>
        </Col>
        <Col xs={12} md={4}>
          <CommentArea asin={asin} />
        </Col>
      </Row>
    </Container>
  )
}
export default BookList
