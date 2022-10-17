/* eslint-disable i18next/no-literal-string */
import { render, screen } from "@testing-library/react"
import { componentRender } from "shared/lib/tests/componentRender/componentRender";
import { Header } from "./Header";


describe("header", () => {
  test("rendreing header", () => {
    componentRender(<Header />);
    expect(screen.getByTestId("header")).toBeInTheDocument()
  })
})