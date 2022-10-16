/* eslint-disable i18next/no-literal-string */
import { render, screen } from "@testing-library/react"
import { FirstBlock } from "./FirstBlock";

describe("FirstBlock", () => {
  test("rendreing FirstBlock", () => {
    render(<FirstBlock/>);
    expect(screen.getByTestId("FirstBlock")).toBeInTheDocument()
  })
})