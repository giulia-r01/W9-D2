const MyFooter = function () {
  return (
    <footer className="text-center mt-4 small testColor py-2">
      <p className="mb-0">
        The Library - <span>{new Date().getFullYear()}</span>
      </p>
    </footer>
  )
}

export default MyFooter
