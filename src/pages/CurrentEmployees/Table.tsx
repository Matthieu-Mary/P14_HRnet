import { useContext } from "react";
import { employeeContext } from "../../context/employeesContext";
import { DataGrid } from "@mui/x-data-grid";

function Table() {
  const { state, dispatch } = useContext(employeeContext);
  
  const { employees } = state;
  
  const employeesArr = [
    ...new Set(
      employees.map((employee, index) => {
        return { ...employee, id: index };
      })
      ),
    ];
    
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
    <div className="data-grid-container">
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
