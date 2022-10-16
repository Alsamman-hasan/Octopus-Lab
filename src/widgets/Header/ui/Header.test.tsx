/* eslint-disable i18next/no-literal-string */
import { render, screen } from "@testing-library/react"
import { Header } from "./Header";


describe("header", () => {
  test("rendreing header", () => {
    render(<Header />);
    expect(screen.getByTestId("header")).toBeInTheDocument()
  })
})