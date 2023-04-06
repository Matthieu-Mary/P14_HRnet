import { createContext } from "react";

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
  employees: localStorage.getItem("employees")
    ? JSON.parse(localStorage.getItem("employees") || "")
    : [],
};

export const employeeContext = createContext<{
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
    default:
      return state;
  }
};
