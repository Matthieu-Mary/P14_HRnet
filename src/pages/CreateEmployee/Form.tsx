import { FormEvent, useState, useContext } from "react";
import states from "../../data/states";
import { employeeContext, Employee } from "../../context/employeesContext";

const Form = () => {
  const { state, dispatch } = useContext(employeeContext)

  console.log(state)

  const [employee, setEmployee] = useState<Employee>({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    department: "",
  });


  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setEmployee((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({
      type: "ADD_EMPLOYEE",
      payload: employee
    });
    // localStorage.setItem("employee", JSON.stringify(state.employees))
    setEmployee({
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      startDate: "",
      street: "",
      city: "",
      state: "",
      zipCode: "",
      department: "",
    })
  };

  return (
    <div className="form-container">
      <form action="#" id="create-employee" onSubmit={(e) => handleSubmit(e)}>
        <div className="names-container">
          <div className="first-name">
            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              id="first-name"
              name="firstName"
              value={employee.firstName}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="last-name">
            <label htmlFor="last-name">Last Name</label>
            <input
              type="text"
              id="last-name"
              name="lastName"
              value={employee.lastName}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>

        <div className="dates-container">
          <div className="birth-date">
            <label htmlFor="date-of-birth">Date of Birth</label>
            <input
              id="date-of-birth"
              type="text"
              name="dateOfBirth"
              value={employee.dateOfBirth}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="start-date">
            <label htmlFor="start-date">Start Date</label>
            <input
              id="start-date"
              type="text"
              name="startDate"
              value={employee.startDate}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>

        <fieldset className="address">
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input
            id="street"
            type="text"
            name="street"
            value={employee.street}
            onChange={(e) => handleChange(e)}
          />

          <label htmlFor="city">City</label>
          <input
            id="city"
            type="text"
            name="city"
            value={employee.city}
            onChange={(e) => handleChange(e)}
          />

          <label htmlFor="state">State</label>
          <select
            name="state"
            id="state"
            value={employee.state}
            onChange={(e) => handleChange(e)}
          >
            {states.map((state) => (
              <option value={state.abbreviation} key={state.abbreviation}>
                {state.name}
              </option>
            ))}
          </select>

          <label htmlFor="zip-code">Zip Code</label>
          <input
            id="zip-code"
            type="number"
            name="zipCode"
            value={employee.zipCode}
            onChange={(e) => handleChange(e)}
          />
        </fieldset>
        <div className="departments">
          <label htmlFor="department">Department</label>
          <select
            name="department"
            id="department"
            value={employee.department}
            onChange={(e) => handleChange(e)}
          >
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </select>
        </div>
        <button>Save</button>
      </form>
    </div>
  );
};

export default Form;
