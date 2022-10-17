/* eslint-disable i18next/no-literal-string */
import { screen } from "@testing-library/react"
import { componentRender } from "shared/lib/tests/componentRender/componentRender";
import { Footer } from "./Footer";

describe("Footer", () => {
  test("rendreing Button", () => {
    componentRender(<Footer/>);
    expect(screen.getByTestId("footer")).toBeInTheDocument()
  })
})