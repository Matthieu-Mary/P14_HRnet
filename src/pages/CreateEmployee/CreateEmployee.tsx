import { Link } from "react-router-dom";
import Form from "./Form";

function CreateEmployee() {
  return (
    <section className="create-employee">
        <h1>HRnet</h1>
        <Link to={"/employees"}>View Current Employees</Link>
        <h3>Create Employee</h3>
        <Form />
    </section>
  )
}

export default CreateEmployee