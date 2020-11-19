import React from "react";
import { useUpdateFormState } from "./context";
import { AgeNameInput as AgeInput } from "./inputs/AgeInput";
import { FirstNameInput } from "./inputs/FirstNameInput";
import { LastNameInput } from "./inputs/LastNameInput";

export const UpdateForm = () => {
  const {state } = useUpdateFormState()
  return (
    <div>
      <h1>UpdateForm</h1>
      <p>{state.firstName}</p>
      <p>{state.lastName}</p>
      <p>{state.age}</p>
      <FirstNameInput />
      <LastNameInput />
      <AgeInput />
    </div>
  );
};
