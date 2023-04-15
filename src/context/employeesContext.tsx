import { createContext, useReducer, useEffect } from "react";

export type Employee = {
  firstName: string;
  lastName: string;
  dateOfBirth: Date | null;
  startDate: Date | null;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  department: string;
};

export type State = {
  employees: Employee[];
};

export const initialState: State = {
  employees: [],
};

export const EmployeeContext = createContext<{
  state: State;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const employeeReducer = (state: State, action: any) => {
  switch (action.type) {
    case "ADD_EMPLOYEE":
      const newState = {
        ...state,
        employees: [...state.employees, action.payload],
      };
      localStorage.setItem("employees", JSON.stringify(newState.employees));
      return newState;
    case "SET_EMPLOYEES":
      return {
        ...state,
        employees: action.payload,
      };
    default:
      return state;
  }
};

type Props = {
  children: React.ReactNode;
};

export const EmployeeProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(employeeReducer, initialState);

  useEffect(() => {
    const storedEmployees = localStorage.getItem("employees");
    if (storedEmployees) {
      const parsedEmployees = JSON.parse(storedEmployees) as Employee[];
      dispatch({ type: "SET_EMPLOYEES", payload: parsedEmployees });
    }
  }, []);

  return (
    <EmployeeContext.Provider value={{ state, dispatch }}>
      {children}
    </EmployeeContext.Provider>
  );
};
