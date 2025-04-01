const MyFooter = function () {
  return (
    <footer className="text-center small testColor py-2">
      <p className="mb-0">
        The Library - <span>{new Date().getFullYear()}</span>
      </p>
    </footer>
  )
}

export default MyFooter
