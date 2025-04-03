import { Button, ListGroup } from "react-bootstrap"

const URL = "https://striveschool-api.herokuapp.com/api/comments/"
const auth =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RkMWU5YTM4MzRiZjAwMTUwMDA2ZjEiLCJpYXQiOjE3NDM2ODA5NjUsImV4cCI6MTc0NDg5MDU2NX0.tnXW5S11pIK7c0Sb9UKGk6u8ZLI2UUN2wMCbXQT7K5o"

const SingleComment = function (props) {
  const deleteComment = () => {
    fetch(URL + props.recensione._id, {
      method: "DELETE",
      headers: {
        authorization: auth,
      },
    })
      .then((response) => {
        if (response.ok) {
          alert("recensione eliminata!")
        } else {
          throw new Error("non eliminata")
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <ListGroup.Item className="d-flex justify-content-between">
      <div className="d-flex flex-wrap align-content-center">
        {props.recensione.comment} | {props.recensione.rate}/5
      </div>
      <Button variant="danger" onClick={deleteComment}>
        <i className="bi bi-trash-fill"></i>
      </Button>
    </ListGroup.Item>
  )
}

export default SingleComment
