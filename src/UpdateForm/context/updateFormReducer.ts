import { Actions, ActionType } from ".";
import { UpdateFormState } from "./types";

export const UpdateFormReducer = (state: UpdateFormState, action: Actions): UpdateFormState => {
    switch (action.type) {
        case ActionType.SET_FIRST_NAME: {
          if(action.value === state.firstName) return state
          else return {
              ...state,
              firstName: action.value
          }
        }
        case ActionType.SET_LAST_NAME: {
          if(action.value === state.lastName) return state
          else return {
              ...state,
              lastName: action.value
          }
        }
        case ActionType.SET_AGE: {
          if(action.value === state.age) return state
          else return {
              ...state,
              age: action.value
          }
        }
      default:
        return state;
    }
  };