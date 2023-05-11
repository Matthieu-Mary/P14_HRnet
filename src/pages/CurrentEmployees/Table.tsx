import { useContext, useState, useMemo } from "react";
import { EmployeeContext } from "../../context/EmployeesContext";
import { DataGrid } from "@mui/x-data-grid";
import TextField from "@mui/material/TextField";

function Table() {
  const { state, dispatch } = useContext(EmployeeContext);

  const { employees } = state;

  const [searchText, setSearchText] = useState("");
  
  const handleSearchTextChange = (event: any) => {
    setSearchText(event.target.value);
  };

  // Filter employee list to display searched employees in data table
  const employeesArr = useMemo(() => {
    return employees
      .filter(
        (employee) =>
          employee.firstName.toLowerCase().includes(searchText.toLowerCase()) ||
          employee.lastName.toLowerCase().includes(searchText.toLowerCase()) ||
          employee.department.toLowerCase().includes(searchText.toLowerCase()) ||
          employee.street.toLowerCase().includes(searchText.toLowerCase()) ||
          employee.city.toLowerCase().includes(searchText.toLowerCase()) ||
          employee.state.toLowerCase().includes(searchText.toLowerCase()) ||
          employee.zipCode.toLowerCase().includes(searchText.toLowerCase())
      )
      .map((employee, index) => {
        return { ...employee, id: index };
      });
  }, [employees, searchText]);

  // Display columns fields for data table
  const columns = [
    { headerName: "First Name", field: "firstName", width: 100 },
    { headerName: "Last Name", field: "lastName", width: 100 },
    { headerName: "Start Date", field: "startDate", width: 150 },
    { headerName: "Department", field: "department", width: 150 },
    { headerName: "Date of Birth", field: "dateOfBirth", width: 150 },
    { headerName: "Street", field: "street", width: 220 },
    { headerName: "City", field: "city", width: 100 },
    { headerName: "State", field: "state", width: 100 },
    { headerName: "Zip Code", field: "zipCode", width: 100 },
  ];

  return (
    <div className="data-grid-container" data-testid='container-table'>
      <TextField
        label="Search"
        value={searchText}
        onChange={handleSearchTextChange}
        variant="outlined"
        margin="normal"
      />
      <DataGrid
        columns={columns}
        rows={employeesArr}
        getRowId={(row) => row.id}
        autoHeight
        pageSizeOptions={[5, 10, 25, 50, 100]}
      />
    </div>
  );
}

export default Table;
