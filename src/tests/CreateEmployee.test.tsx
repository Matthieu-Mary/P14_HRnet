import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CreateEmployee from "../pages/CreateEmployee/CreateEmployee";
import Form from "../pages/CreateEmployee/Form";
import App from "../App";
import Modale from "../components/Modale";

describe("CreateEmployee", () => {
  test("renders the form", () => {
    const {container} = render(<App/>);
    console.log(container)
    // expect(screen.getByLabelText("First Name")).toBeInTheDocument();
    // expect(screen.getByLabelText("Last Name")).toBeInTheDocument();
    // expect(screen.getByLabelText("Date of Birth")).toBeInTheDocument();
    // expect(screen.getByLabelText("Start Date")).toBeInTheDocument();
    // expect(screen.getByLabelText("Street")).toBeInTheDocument();
    // expect(screen.getByLabelText("City")).toBeInTheDocument();
    // expect(screen.getByLabelText("State")).toBeInTheDocument();
    // expect(screen.getByLabelText("Zip Code")).toBeInTheDocument();
    // expect(screen.getByLabelText("Department")).toBeInTheDocument();
  });

  // test("submits the form with the input values", () => {
  //   const addEmployeeMock = jest.fn();
  //   render(<CreateEmployee addEmployee={addEmployeeMock} />);

  //   fireEvent.change(screen.getByLabelText("First Name"), {
  //     target: { value: "John" },
  //   });
  //   fireEvent.change(screen.getByLabelText("Last Name"), {
  //     target: { value: "Doe" },
  //   });
  //   fireEvent.change(screen.getByLabelText("Date of Birth"), {
  //     target: { value: "1980-01-01" },
  //   });
  //   fireEvent.change(screen.getByLabelText("Start Date"), {
  //     target: { value: "2022-01-01" },
  //   });
  //   fireEvent.change(screen.getByLabelText("Street"), {
  //     target: { value: "123 Main St" },
  //   });
  //   fireEvent.change(screen.getByLabelText("City"), {
  //     target: { value: "New York" },
  //   });
  //   fireEvent.change(screen.getByLabelText("State"), {
  //     target: { value: "NY" },
  //   });
  //   fireEvent.change(screen.getByLabelText("Zip Code"), {
  //     target: { value: "10001" },
  //   });
  //   fireEvent.change(screen.getByLabelText("Department"), {
  //     target: { value: "Sales" },
  //   });

  //   fireEvent.click(screen.getByText("Submit"));

  //   expect(addEmployeeMock).toHaveBeenCalledWith({
  //     firstName: "John",
  //     lastName: "Doe",
  //     dateOfBirth: new Date("1980-01-01"),
  //     startDate: new Date("2022-01-01"),
  //     street: "123 Main St",
  //     city: "New York",
  //     state: "NY",
  //     zipCode: "10001",
  //     department: "Sales",
  //   });
  // });
});
