import { screen } from "@testing-library/react";
import { componentRender } from "shared/lib/tests/componentRender/componentRender";
import { Illustrations } from "./Illustrations";

describe("Illustrations", () => {
  test("rendreing Illustrations", () => {
    componentRender(<Illustrations />);
    expect(screen.getByTestId("Illustrations")).toBeInTheDocument();
  });
});
