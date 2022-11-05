import { screen } from "@testing-library/react";
import { componentRender } from "shared/lib/tests/componentRender/componentRender";
import { FirstBlock } from "./FirstBlock";

describe("FirstBlock", () => {
  test("rendreing FirstBlock", () => {
    componentRender(<FirstBlock />);
    expect(screen.getByTestId("FirstBlock")).toBeInTheDocument();
  });
});
