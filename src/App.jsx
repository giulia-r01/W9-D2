import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.min.css"
import Navbar from "./components/MyNav"
import MyFooter from "./components/MyFooter"
import Welcome from "./components/Welcome"
import AllTheBooks from "./components/AllTheBooks"
import "./index.css"
import InEvidenza from "./components/InEvidenza"
import SingleBook from "./components/SingleBook"
import BookList from "./components/BookList"
import fantasyBooks from "./data-books/fantasy.json"
function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="flex-grow-1 bg-black bg-gradient pb-5">
        <h1 className="text-gold text-center pt-4">
          <em>The Library</em>
        </h1>
        <Welcome />
        <SingleBook book={fantasyBooks[0]} />
        <BookList arrayOfBooks={fantasyBooks} />
        {/*<InEvidenza />
        <AllTheBooks />*/}
      </main>
      <MyFooter />
    </>
  )
}

export default App
