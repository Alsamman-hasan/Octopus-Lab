import { screen } from "@testing-library/react";
import { componentRender } from "shared/lib/tests/componentRender/componentRender";
import { Properties } from "./Properties";

describe("Properties", () => {
  test("rendreing Properties", () => {
    componentRender(<Properties />);
    expect(screen.getByTestId("Properties")).toBeInTheDocument();
  });
});
