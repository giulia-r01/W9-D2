import { describe, it, expect } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react"
import BookList from "../components/BookList"
import fantasy from "../data-books/fantasy.json"

describe("how many books", () => {
  it("count how many cards in booklist", () => {
    render(<BookList arrayOfBooks={fantasy} />)
    const cardNumber = screen.queryAllByTestId("card-test")
    expect(cardNumber).toHaveLength(8)
  })
})
