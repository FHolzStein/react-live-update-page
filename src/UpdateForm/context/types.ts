export enum FormState {
    DIRTY,
    LOADING,
    CLEAN
}

export interface UpdateFormState {
    firstName: string;
    lastName: string;
    age: number;
    state: FormState
}