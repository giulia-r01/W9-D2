import { Component } from "react"
import { Container, Row, Col, Card, Button, CardText } from "react-bootstrap"
import CommentArea from "./CommentArea"

class SingleBook extends Component {
  state = {
    selected: false,
  }

  render() {
    return (
      <Col
        xs={12}
        md={4}
        lg={3}
        className="justify-content-center d-flex align-items-stretch"
      >
        <Card
          className={`d-flex flex-column w-100 ${
            this.state.selected ? "selectedBook" : ""
          }`}
        >
          <Card.Img
            variant="top"
            src={this.props.book.img}
            onClick={() => {
              this.setState({
                selected: !this.state.selected,
              })
            }}
          />
          <Card.Body className="d-flex flex-column testColor">
            <Card.Title className="flex-grow-1">
              {this.props.book.title}
            </Card.Title>

            {this.state.selected && <CommentArea asin={this.props.book.asin} />}

            <Button variant="dark">Compralo!</Button>
          </Card.Body>
        </Card>
      </Col>
    )
  }
}
export default SingleBook
