import React, { createContext, useContext, useReducer } from "react";
import { Actions } from "./actions";
import { UpdateFormState } from "./types";
import { UpdateFormReducer } from "./updateFormReducer";

const InitialUpdateFormState: UpdateFormState = {
  firstName: "John",
  lastName: "Doe",
  age: 21,
};

export interface UpdateFormDispatch {
  dispatch: (action: Actions) => void
}

export interface UpdateFormContext {
  state: UpdateFormState
}

const UpdateFormStateContext = createContext<UpdateFormContext | null>(
  null
);

const UpdateFormDispatchContext = createContext<UpdateFormDispatch | null>(
  null
);

export const useUpdateFormState = (): UpdateFormContext | never => {
  const context = useContext(UpdateFormStateContext)
  if (!context) {
    throw new Error('UpdateFormState used outside of UpdateFormStateContext')
  }
  return context
}

export const useUpdateFormDispatch = (): UpdateFormDispatch | never => {
  const context = useContext(UpdateFormDispatchContext)
  if (!context) {
    throw new Error('UpdateFormDispatch used outside of UpdateFormDispatchContext')
  }
  return context
}



const UpdateFormContextReducer = ({
  children,
}: {
  children: React.ReactNode
}): JSX.Element => {
    const [state, dispatch] = useReducer(UpdateFormReducer, InitialUpdateFormState)

  return (
    <>
      <UpdateFormDispatchContext.Provider value={{ dispatch }}>
        <UpdateFormStateContext.Provider value={{ state }}>
          {children}
        </UpdateFormStateContext.Provider>
      </UpdateFormDispatchContext.Provider>
    </>
  )
}
