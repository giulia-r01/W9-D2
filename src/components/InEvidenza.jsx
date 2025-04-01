import books from "../data-books/inevidenza.json"
import { Component } from "react"
import { Container, Row, Col, Carousel } from "react-bootstrap"

class InEvidenza extends Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6} className="text-center">
            <Carousel
              onSlide={(i) => {
                console.log("funziona?", i) // i è l'indice della slide che sta arrivando e della pasta
                // che sta per comparire, perché genero le slides a partire dalle paste
                console.log(books[i])
                // dovrei settare pastasciutte[i] come nuova activePasta
                // c'è un metodo apposito per cambiare lo stao di un componente
                this.setState({
                  activeBook: books[i],
                })
              }}
            >
              {books.map((book) => {
                return (
                  <Carousel.Item key={book.asin}>
                    <img
                      src={book.img}
                      className="w-100"
                      alt={"immagine di " + book.title}
                    />
                    <Carousel.Caption className="testColorBg">
                      <h3>{book.title}</h3>
                      <p>{book.category}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                )
              })}
            </Carousel>
          </Col>
        </Row>
      </Container>
    )
  }
}
export default InEvidenza
