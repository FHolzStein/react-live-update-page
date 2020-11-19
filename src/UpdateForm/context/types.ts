export enum FormState {
    DIRTY = "DIRTY",
    LOADING = "LOADING",
    CLEAN = "CLEAN"
}

export interface UpdateFormState {
    firstName: string;
    lastName: string;
    age: number;
    state: FormState
}