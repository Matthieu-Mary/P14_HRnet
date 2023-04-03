import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateEmployee from "./pages/CreateEmployee/CreateEmployee";
import CurrentEmployees from "./pages/CurrentEmployees";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<CreateEmployee />}></Route>
          <Route path="/employees" element={<CurrentEmployees />}></Route>
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
