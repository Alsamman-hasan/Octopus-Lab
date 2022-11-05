import { screen } from "@testing-library/react";
import { componentRender } from "shared/lib/tests/componentRender/componentRender";
import { OurWorks } from "./OurWorks";

describe("OurWorks", () => {
  test("rendreing OurWorks", () => {
    componentRender(<OurWorks />);
    expect(screen.getByTestId("OurWorks")).toBeInTheDocument();
  });
});
