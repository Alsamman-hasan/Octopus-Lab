import { screen } from "@testing-library/react"
import { componentRender } from "shared/lib/tests/componentRender/componentRender";
import { SecondBlock } from "./SecondBlock";

describe("SecondBlock", () => {
  test("rendreing SecondBlock", () => {
    componentRender(<SecondBlock />);
    expect(screen.getByTestId("SecondBlock")).toBeInTheDocument()
  })
})