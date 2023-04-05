import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateEmployee from "./pages/CreateEmployee/CreateEmployee";
import CurrentEmployees from "./pages/CurrentEmployees/CurrentEmployees";
import { useReducer } from "react";
import {
  employeeContext,
  employeeReducer,
  initialState,
} from "./context/employeesContext";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

function App() {
  const [state, dispatch] = useReducer(employeeReducer, initialState);

  return (
    <BrowserRouter>
      <employeeContext.Provider value={{ state, dispatch }}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <div className="App">
            <Routes>
              <Route path="/" element={<CreateEmployee />}></Route>
              <Route path="/employees" element={<CurrentEmployees />}></Route>
            </Routes>
          </div>
        </LocalizationProvider>
      </employeeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
