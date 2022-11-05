import { screen } from "@testing-library/react";
import { componentRender } from "shared/lib/tests/componentRender/componentRender";
import { SenderEmailForm } from "./SenderEmailform";

describe("SenderEmailForm", () => {
  test("rendreing SenderEmailForm", () => {
    componentRender(<SenderEmailForm />, {
      initialState: {
        counter: { value: 0 },
        senderEmailes: {
          email: "test",
        },
      },
    });
    expect(screen.getByTestId("SenderEmailForm")).toBeInTheDocument();
  });
});
