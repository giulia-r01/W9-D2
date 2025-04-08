import { useState } from "react"
import { Col, Card, Button } from "react-bootstrap"
import CommentArea from "./CommentArea"

const SingleBook = function (props) {
  // state = {
  //   selected: false,
  // }

  const [selected, setselected] = useState(false)

  return (
    <Col
      xs={12}
      md={4}
      lg={3}
      className="justify-content-center d-flex align-items-stretch"
    >
      <Card
        className={`d-flex flex-column w-100 ${
          props.asinLibroSelezionato === props.book.asin ? "selectedBook" : ""
        }`}
      >
        <Card.Img
          variant="top"
          src={props.book.img}
          onClick={() => {
            // this.setState({
            //   selected: !this.state.selected,
            //  })

            // devo utilizzare l'asin per cambiare lo stato di mio padre, BookList
            //invoco
            props.cambiaAsin(props.book.asin) // invoca changeAsin in BookList
          }}
        />
        <Card.Body className="d-flex flex-column testColor">
          <Card.Title className="flex-grow-1">{props.book.title}</Card.Title>

          {/*this.state.selected && <CommentArea asin={this.props.book.asin} />*/}

          <Button variant="dark">Compralo!</Button>
        </Card.Body>
      </Card>
    </Col>
  )
}
export default SingleBook
