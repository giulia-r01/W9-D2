import { Component } from "react"
import AddComment from "./AddComment"
import CommentsList from "./CommentsList"
const URL = `https://striveschool-api.herokuapp.com/api/comments/`
const auth =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RkMWU5YTM4MzRiZjAwMTUwMDA2ZjEiLCJpYXQiOjE3NDM2ODA5NjUsImV4cCI6MTc0NDg5MDU2NX0.tnXW5S11pIK7c0Sb9UKGk6u8ZLI2UUN2wMCbXQT7K5o"

class CommentArea extends Component {
  state = {
    reviews: [],
  }

  getReviews = () => {
    fetch(URL + this.props.asin, {
      headers: {
        authorization: auth,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("recensioni non recuperate")
        }
      })
      .then((data) => {
        console.log("tutto ok", data)
        this.setState({
          reviews: data,
        })
      })
      .catch((err) => {
        console.log("errore", err)
      })
  }

  componentDidMount = () => {
    this.getReviews()
  }

  render() {
    return (
      <div>
        <AddComment asin={this.props.asin} />
        <CommentsList reviews={this.state.reviews} />
      </div>
    )
  }
}

export default CommentArea
