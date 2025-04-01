import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/MyNav"
import MyFooter from "./components/MyFooter"
import Welcome from "./components/Welcome"
import AllTheBooks from "./components/AllTheBooks"
import "./index.css"
import InEvidenza from "./components/InEvidenza"

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="flex-grow-1 bg-black bg-gradient">
        <h1 className="text-gold text-center pt-4">
          <em>The Library</em>
        </h1>
        <Welcome />
        <InEvidenza />
        <AllTheBooks />
      </main>
      <MyFooter />
    </>
  )
}

export default App
