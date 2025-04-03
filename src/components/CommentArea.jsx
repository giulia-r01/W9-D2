import { Component } from "react"
import { ListGroup, ListGroupItem, Col } from "react-bootstrap"
import AddComment from "./AddComment"
import CommentList from "./CommentsList"
const URL = `https://striveschool-api.herokuapp.com/api/comments/`
const auth =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RkMWU5YTM4MzRiZjAwMTUwMDA2ZjEiLCJpYXQiOjE3NDM2ODA5NjUsImV4cCI6MTc0NDg5MDU2NX0.tnXW5S11pIK7c0Sb9UKGk6u8ZLI2UUN2wMCbXQT7K5o"

class CommentArea extends Component {
  getReviews = () => {
    fetch(URL, {
      headers: {
        Authorization: auth,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("errore nella fetch")
        }
      })
      .then((data) => {
        console.log("tutto ok", data)
      })
      .catch((err) => {
        console.log("errore", err)
      })
  }
  state = {
    reviewsId: [],
  }

  componentDidMount = () => {
    this.getReviews()
  }

  render() {
    return <CommentList />
  }
}

export default CommentArea
