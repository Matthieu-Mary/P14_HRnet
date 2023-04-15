import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "../pages/CreateEmployee/Form";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import "./localStorage";

describe("Form component", () => {
  test("submits the form with correct data", () => {
    const onSubmit = jest.fn();
    render(
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Form onSubmit={onSubmit} />
      </LocalizationProvider>
    );

  const firstNameInput = screen.getByLabelText(/First Name/i);
  const lastNameInput = screen.getByLabelText(/Last Name/i);
  const dateOfBirthInput = screen.getByText(/Date of birth/i);
  const startDateInput = screen.getByText(/Start Date/i);
  const streetInput = screen.getByLabelText(/Street/i);
  const cityInput = screen.getByLabelText(/City/i);
  const stateInput = screen.getByLabelText(/State/i);
  const zipCodeInput = screen.getByLabelText(/Zip Code/i);

    fireEvent.change(firstNameInput, { target: { value: "John" } });
    fireEvent.change(lastNameInput, { target: { value: "Doe" } });
    fireEvent.change(streetInput, { target: { value: "123 Main St" } });
    fireEvent.change(cityInput, { target: { value: "Anytown" } });
    fireEvent.change(stateInput, { target: { value: "" } });
    fireEvent.change(zipCodeInput, { target: { value: "12345" } });
  
    const saveButton = screen.getByRole("button", { name: /Save/i });
    fireEvent.click(saveButton);
  
    expect(dateOfBirthInput).toBeInTheDocument();
    expect(startDateInput).toBeInTheDocument();
    expect(onSubmit).toHaveBeenCalled();
    expect(onSubmit).toHaveBeenCalledWith({
      firstName: "John",
      lastName: "Doe",
      dateOfBirth: null,
      startDate: null,
      street: "123 Main St",
      city: "Anytown",
      state: "",
      zipCode: "12345",
      department: "Sales",
    });
  });
});
