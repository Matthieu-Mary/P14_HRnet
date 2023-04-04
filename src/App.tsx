import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateEmployee from "./pages/CreateEmployee/CreateEmployee";
import CurrentEmployees from "./pages/CurrentEmployees";
import { useReducer } from "react";
import {
  employeeContext,
  employeeReducer,
  initialState,
} from "./context/employeesContext";

function App() {
  const [state, dispatch] = useReducer(employeeReducer, initialState);

  return (
    <BrowserRouter>
      <employeeContext.Provider value={{ state, dispatch }}>
        <div className="App">
          <Routes>
            <Route path="/" element={<CreateEmployee />}></Route>
            <Route path="/employees" element={<CurrentEmployees />}></Route>
          </Routes>
        </div>
      </employeeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
