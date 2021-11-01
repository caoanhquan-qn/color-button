import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { replaceCamelWithSpace } from "./App";

test("button has correct initial color and turns blue when clicked", () => {
  render(<App />);

  //find an element with a role of button and test id = "change-color-button"
  const button = screen.getByTestId("change-color-button");

  expect(button).toHaveStyle({
    backgroundColor: "mediumVioletRed",
  });

  // click button
  fireEvent.click(button);

  // expect the button color changes to midnight blue
  expect(button).toHaveStyle({
    backgroundColor: "midnightBlue",
  });
  // expect the button text changes to 'Change to Medium Violet Red'
  expect(button).toHaveTextContent("Change to Medium Violet Red");
});

test("initial conditions", () => {
  render(<App />);
  const button = screen.getByTestId("change-color-button");
  const checkbox = screen.getByRole("checkbox");
  expect(button).toBeEnabled();
  expect(checkbox).not.toBeChecked();
});

test("when checkbox is checked, button should be disabled", () => {
  render(<App />);
  const button = screen.getByTestId("change-color-button");
  const checkbox = screen.getByLabelText("Disable button");
  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(button).toBeDisabled();

  fireEvent.click(checkbox);
  expect(checkbox).not.toBeChecked();
  expect(button).toBeEnabled();
});

test("button turn grey when disabled", () => {
  render(<App />);
  const button = screen.getByTestId("change-color-button");
  const checkbox = screen.getByLabelText("Disable button");

  fireEvent.click(checkbox);
  expect(button).toHaveClass("disabled");

  fireEvent.click(checkbox);
  expect(button).not.toHaveClass("disabled");
});

// UT function
describe("space before camel-case capital letters", () => {
  test("Works for no inner capital letters", () => {
    expect(replaceCamelWithSpace("Red")).toBe("Red");
  });
  test("Works for one inner capital letter", () => {
    expect(replaceCamelWithSpace("MidnightBlue")).toBe("Midnight Blue");
  });
  test("Works for multiple inner capital letters", () => {
    expect(replaceCamelWithSpace("mediumVioletRed")).toBe("Medium Violet Red");
  });
});
