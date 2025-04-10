import { describe, it, expect } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react"
import Welcome from "../components/Welcome"

describe("Welcome testing", () => {
  it("mounts correctly the component", () => {
    //1
    render(<Welcome />)
    //2
    const benvenuto = screen.getByText(
      /Benvenuto nella libreria più grande del mondo!/i
    )
    //4
    expect(benvenuto).toBeInTheDocument()
  })
})
