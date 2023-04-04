import { createContext } from "react";

export type Employee = {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  startDate: string;
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

export const employeeContext = createContext<{
  state: State;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});


export const employeeReducer = (state: State, action: any) => {
  switch(action.type) {
    case 'ADD_EMPLOYEE':
      return {
        ...state,
        employees: [...state.employees, action.payload],
      };
      default:
        return state;
  }
}