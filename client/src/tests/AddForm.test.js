import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddForm from "../components/AddForm";

describe("AddForm", () => {
  let func;
  beforeEach(() => {
    func = jest.fn();
    render(<AddForm onAddProduct={func} />);
  });

  it("shows 'Add a Product' anchor button by default", () => {
    const anchor = screen.getByRole("link", { name: "Add A Product" });
    expect(anchor).toBeInTheDocument();
  });

  it("shows form when 'Add a Product' anchor button clicked", () => {
    const anchor = screen.getByRole("link", { name: "Add A Product" });
    userEvent.click(anchor);
    const submitAnchor = screen.getByRole("link", { name: "Add" });
    expect(submitAnchor).toBeInTheDocument();
  });

  describe("with form visible", () => {
    beforeEach(() => {
      const anchor = screen.getByRole("link", { name: "Add A Product" });
      userEvent.click(anchor);
    });

    it("onAddProduct called when anchor button clicked", () => {
      const anchor = screen.getByRole("link", { name: "Add" });
      userEvent.click(anchor);
      expect(func.mock.calls.length).toBe(1);
    });
  });
});

// test theres an "Add a Product" anchor button
// test when "Add a Product" anchor button is clicked, form shows

// nest another before each to toggle from start
// test form submits with valid data
// test form clears and hides once submitted
