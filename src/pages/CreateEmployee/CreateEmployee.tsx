import { Link } from "react-router-dom";
import Form from "./Form";
import { useState } from "react";
import {Modale} from "typescript-simple-react-modale-mm"
import closeBtn from "../../assets/icons/close-button.svg"

function CreateEmployee() {
  const [modal, setModal] = useState(false);
  const handleSubmit = () => {
    setModal(true);
  };

  const handleClose = () => {
    setModal(false);
  };
  return (
    <section className="create-employee">
        <h1>HRnet</h1>
        <Link to={"/employees"}>View Current Employees</Link>
        <h3>Create Employee</h3>
        <Form onSubmit={handleSubmit} />
        {modal && <Modale onClose={handleClose} imageSrc={closeBtn} imageName="close button" text="Employee added successfully" linkText="View Current Employees" linkPath="/employees"/>}
    </section>
  )
}

export default CreateEmployee