import { useState, useEffect } from "react"
import AddComment from "./AddComment"
import CommentsList from "./CommentsList"
const URL = `https://striveschool-api.herokuapp.com/api/comments/`
const auth =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RkMWU5YTM4MzRiZjAwMTUwMDA2ZjEiLCJpYXQiOjE3NDM2ODA5NjUsImV4cCI6MTc0NDg5MDU2NX0.tnXW5S11pIK7c0Sb9UKGk6u8ZLI2UUN2wMCbXQT7K5o"

const CommentArea = function (props) {
  //state = {
  //  reviews: [],
  //}

  const [reviews, setReviews] = useState([])

  const getReviews = () => {
    fetch(URL + props.asin, {
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

        //  this.setState({
        //    reviews: data,
        // })

        setReviews(data)
      })

      .catch((err) => {
        console.log("errore", err)
      })
  }

  //componentDidMount = () => {
  //  this.getReviews()
  // }

  // dovremmo recuperare i commenti del nuovo libro cliccato non appena lo selezioniamo
  //quando clicchiamo su un singleBook settiamo lo stato di booklist con l'asin del libro cliccato
  // e commentArea riceve una nuova prop

  //componentDidUpdate = (prevProps) => {
  //  if (prevProps.asin !== this.props.asin) {
  //    this.getReviews()
  //  }
  //}

  useEffect(() => {
    if (props.asin) {
      getReviews()
    }
  }, [props.asin])

  return (
    <div>
      <AddComment asin={props.asin} />
      <CommentsList reviews={reviews} />
    </div>
  )
}

export default CommentArea
