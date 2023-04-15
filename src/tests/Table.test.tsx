import { render, screen } from "@testing-library/react";
import { EmployeeProvider, EmployeeContext } from "../context/EmployeesContext";
import Table from "../pages/CurrentEmployees/Table";
import "@testing-library/jest-dom";

describe("Table component", () => {
  const mockEmployees = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      startDate: null,
      department: "Sales",
      dateOfBirth: null,
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      zipCode: "12345",
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Doe",
      startDate: null,
      department: "Marketing",
      dateOfBirth: null,
      street: "456 Oak Ave",
      city: "Othertown",
      state: "NY",
      zipCode: "54321",
    },
  ];

  const mockState = { employees: mockEmployees };
  const mockDispatch = jest.fn();

  it("renders without crashing", () => {
    render(
      <EmployeeContext.Provider value={{ state: mockState, dispatch: mockDispatch }}>
          <Table />
      </EmployeeContext.Provider>
    );
  });

  it("renders a table with employee data", () => {
    render(
      <EmployeeContext.Provider value={{ state: mockState, dispatch: mockDispatch }}>
        <Table />
      </EmployeeContext.Provider>
    );
    const container = screen.getByTestId("container-table");
    expect(container).toBeInTheDocument();
  });

});
