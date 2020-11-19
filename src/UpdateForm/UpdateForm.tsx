import React, { useEffect } from "react";
import { SetState, useUpdateFormDispatch, useUpdateFormState } from "./context";
import { FormState } from "./context/types";
import { AgeNameInput as AgeInput } from "./inputs/AgeInput";
import { FirstNameInput } from "./inputs/FirstNameInput";
import { LastNameInput } from "./inputs/LastNameInput";

const delay = (ms: number) => {
  return new Promise( resolve => setTimeout(resolve, ms) );
}

const wait = async (ms: number) => {
  await delay(ms)
}



export const UpdateForm = () => {
  const { state } = useUpdateFormState()
  const { dispatch } = useUpdateFormDispatch()
  useEffect(() => {
    if(state.state === FormState.DIRTY) {
      dispatch(SetState(FormState.LOADING))
      setTimeout(() => dispatch(SetState(FormState.CLEAN)), 1000)
      
    }
  }, [state.state, dispatch])
  return (
    <div>
      <h1>UpdateForm</h1>
      <p>We are currently: {state.state.toString()}</p>
      <p>{state.firstName}</p>
      <p>{state.lastName}</p>
      <p>{state.age}</p>
      <FirstNameInput />
      <LastNameInput />
      <AgeInput />
    </div>
  );
};