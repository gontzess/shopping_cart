import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import AddForm from "../components/AddForm";

describe("AddForm", () => {
  let func;
  beforeEach(() => {
    func = jest.fn();
    render(<AddForm onAddProduct={func} />);
  });
  it("shows an 'Add a Product' anchor button by default", () => {
    const anchor = screen.getAllByRole("link", { name: "Add A Product" });
    expect(anchor).toBeInTheDocument();
  });
});

// test theres an "Add a Product" anchor button
// test when "Add a Product" anchor button is clicked, form shows

// nest another before each to toggle from start
// test form submits with valid data
// test form clears and hides once submitted
