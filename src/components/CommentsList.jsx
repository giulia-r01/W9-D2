import { Component } from "react"
import { ListGroup } from "react-bootstrap"

class CommentList extends Component {
  state = {
    reviewsId: [
      {
        comment: "",
        rate: "",
        asin: "",
      },
    ],
  }

  render() {
    return (
      <ListGroup>
        {this.state.reviewsId.map((reviewsObj) => {
          ;<ListGroup.Item key={reviewsObj.asin}>
            <div>{reviewsObj.comment}</div>
          </ListGroup.Item>
        })}
      </ListGroup>
    )
  }
}

export default CommentList
