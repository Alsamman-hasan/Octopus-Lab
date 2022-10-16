/* eslint-disable i18next/no-literal-string */
import { render, screen } from "@testing-library/react"
import { ButtonBgColor, ButtonSize } from "../types";
import { Button } from "./Button"

describe("Button", () => {
  test("rendreing Button", () => {
    render(<Button >TEST</Button>);
    expect(screen.getByText("TEST")).toBeInTheDocument()
  })

  test("Testing bacground color", () => {
    render(<Button btnBg={ButtonBgColor.PURPLE}>TEST</Button>);
    expect(screen.getByText("TEST")).toHaveClass("Purple")
    screen.debug()
  })

  test("Testing button sizes", () => {
    render(<Button  sizes={ButtonSize.SMALL}>TEST</Button>);
    expect(screen.getByText("TEST")).toHaveClass("Small")
    screen.debug()
  })


  test("Testing class name ", () => {
    render(<Button className="Test">TEST</Button>);
    expect(screen.getByText("TEST")).toHaveClass("Test")
    screen.debug()
  })

})