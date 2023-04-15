import { render, screen, waitFor } from "@testing-library/react";
import { EmployeeProvider, EmployeeContext } from "../context/EmployeesContext";
import "@testing-library/jest-dom";

describe("EmployeeProvider", () => {
  test("should render children", () => {
    render(
      <EmployeeProvider>
        <div>Test Children</div>
      </EmployeeProvider>
    );
    const children = screen.getByText("Test Children");
    expect(children).toBeInTheDocument();
  });

  test("should initialize employees from localStorage", () => {
    const storedEmployees = [
      {
        firstName: "John",
        lastName: "Doe",
        dateOfBirth: new Date(1990, 0, 1),
        startDate: new Date(2021, 0, 1),
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
        zipCode: "12345",
        department: "Sales",
      },
    ];
    localStorage.setItem("employees", JSON.stringify(storedEmployees));

    render(
      <EmployeeProvider>
        <EmployeeContext.Consumer>
          {({ state }) => (
            <div>
              {state.employees.map((employee) => (
                <div key={employee.firstName}>{employee.firstName}</div>
              ))}
            </div>
          )}
        </EmployeeContext.Consumer>
      </EmployeeProvider>
    );

    const employee = screen.getByText("John");
    expect(employee).toBeInTheDocument();
  });

  test("should add employee to state and localStorage", async () => {
    render(
      <EmployeeProvider>
        <EmployeeContext.Consumer>
          {({ dispatch }) => (
            <button
              onClick={() =>
                dispatch({
                  type: "ADD_EMPLOYEE",
                  payload: {
                    firstName: "Jane",
                    lastName: "Doe",
                    dateOfBirth: new Date(1995, 0, 1),
                    startDate: new Date(2022, 0, 1),
                    street: "456 Elm St",
                    city: "Othertown",
                    state: "NY",
                    zipCode: "67890",
                    department: "Engineering",
                  },
                })
              }
            >
              Add Employee
            </button>
          )}
        </EmployeeContext.Consumer>
        <EmployeeContext.Consumer>
          {({ state }) => (
            <div>
              {state.employees.map((employee) => (
                <div key={employee.firstName}>{employee.firstName}</div>
              ))}
            </div>
          )}
        </EmployeeContext.Consumer>
      </EmployeeProvider>
    );

    const addButton = screen.getByText("Add Employee");
    addButton.click();

    await waitFor(() => {
        const employee = screen.queryByText("Jane");
        expect(employee).toBeInTheDocument();
      });

    const storedEmployees = JSON.parse(localStorage.getItem("employees")!);
    expect(storedEmployees).toHaveLength(2);
    expect(storedEmployees[1].firstName).toBe("Jane");
  });
});
