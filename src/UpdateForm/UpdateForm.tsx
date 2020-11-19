import React from "react";
import { useUpdateFormState } from "./context";

export const UpdateForm = () => {
  const {state } = useUpdateFormState()
  return (
    <div>
      <h1>UpdateForm</h1>
      <p>{state.firstName}</p>
      <p>{state.lastName}</p>
      <p>{state.age}</p>
    </div>
  );
};
