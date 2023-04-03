type Props = {};

const Form = (props: Props) => {

  const handleSubmit = () => {
    console.log("c'est submit")
  }

  return (
    <div className="form-container">
      <form action="#" id="create-employee" onSubmit={handleSubmit}>
        <div className="names-container">
          <div className="first-name">
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" />
          </div>

          <div className="last-name">
            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" />
          </div>
        </div>

        <div className="dates-container">
          <div className="birth-date">
            <label htmlFor="date-of-birth">Date of Birth</label>
            <input id="date-of-birth" type="text" />
          </div>
          <div className="start-date">
            <label htmlFor="start-date">Start Date</label>
            <input id="start-date" type="text" />
          </div>
        </div>

        <fieldset className="address">
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input id="street" type="text" />

          <label htmlFor="city">City</label>
          <input id="city" type="text" />

          <label htmlFor="state">State</label>
          <select name="state" id="state"></select>

          <label htmlFor="zip-code">Zip Code</label>
          <input id="zip-code" type="number" />
        </fieldset>
        <div className="departments">
          <label htmlFor="department">Department</label>
          <select name="department" id="department">
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
