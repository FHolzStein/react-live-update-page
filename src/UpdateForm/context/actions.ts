export enum ActionType {
  SET_FIRST_NAME,
  SET_LAST_NAME,
  SET_AGE,
}

interface ISetFirstName {
  type: ActionType.SET_FIRST_NAME;
  value: string;
}

interface ISetLastName {
  type: ActionType.SET_LAST_NAME;
  value: string;
}

interface ISetAge {
  type: ActionType.SET_AGE;
  value: number;
}

export type Actions = ISetFirstName | ISetLastName | ISetAge;

export const SetFirstName = (value: string): ISetFirstName => ({
    type: ActionType.SET_FIRST_NAME,
    value: value,
  });

export const SetLastName = (value: string): ISetLastName => ({
    type: ActionType.SET_LAST_NAME,
    value: value,
  });

export const SetAge = (value: number): ISetAge => ({
  type: ActionType.SET_AGE,
  value: value,
});
