import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateEmployee from "./pages/CreateEmployee/CreateEmployee";
import CurrentEmployees from "./pages/CurrentEmployees/CurrentEmployees";
import { EmployeeProvider } from "./context/EmployeesContext";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

function App() {
  return (
    <BrowserRouter>
      <EmployeeProvider>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <div className="App">
            <Routes>
              <Route path="/" element={<CreateEmployee />}></Route>
              <Route path="/employees" element={<CurrentEmployees />}></Route>
            </Routes>
          </div>
        </LocalizationProvider>
      </EmployeeProvider>
    </BrowserRouter>
  );
}

export default App;
