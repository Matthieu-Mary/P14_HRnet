import { Link } from "react-router-dom";
import Form from "./Form";

type Props = {}

function CreateEmployee({}: Props) {
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