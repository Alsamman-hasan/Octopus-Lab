import { screen } from "@testing-library/react";
import { componentRender } from "shared/lib/tests/componentRender/componentRender";
import { Projects } from "./Projects";

describe("Projects", () => {
  test("rendreing Projects", () => {
    componentRender(<Projects />);
    expect(screen.getByTestId("Projects")).toBeInTheDocument();
  });
});
