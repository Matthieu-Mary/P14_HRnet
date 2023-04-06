import { Link } from "react-router-dom";
import Form from "./Form";
import { useState } from "react";
import Modale from "../../components/Modale";

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
        {modal && <Modale onClose={handleClose}/>}
    </section>
  )
}

export default CreateEmployee