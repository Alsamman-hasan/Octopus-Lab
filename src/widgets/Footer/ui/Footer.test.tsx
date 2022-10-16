/* eslint-disable i18next/no-literal-string */
import { render, screen } from "@testing-library/react"
import { Footer } from "./Footer";

describe("Footer", () => {
  test("rendreing Button", () => {
    render(<Footer/>);
    expect(screen.getByTestId("footer")).toBeInTheDocument()
  })
})