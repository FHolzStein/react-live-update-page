import { UpdateFormState } from "./types"
import { UpdateFormReducer } from "./updateFormReducer"
import { ActionType } from './actions'

describe('UpdateFormReducer', () => {
    const initialState : UpdateFormState = {
        firstName: "John",
        lastName: "Doe",
        age: 21
    }
    it('updates first name', () => {

        const result = UpdateFormReducer(initialState, {
            type: ActionType.SET_FIRST_NAME,
            value: "Jane"
        })

        expect(result).toStrictEqual({
            ...initialState,
            firstName: "Jane"
        })
    })

    it('does not update first name if values are the same', () => {

        const result = UpdateFormReducer(initialState, {
            type: ActionType.SET_FIRST_NAME,
            value: "John"
        })

        expect(result).toBe(initialState)
    })

    it('updates last name', () => {

        const result = UpdateFormReducer(initialState, {
            type: ActionType.SET_LAST_NAME,
            value: "Travolta"
        })

        expect(result).toStrictEqual({
            ...initialState,
            lastName: "Travolta"
        })
    })

    it('does not update last name if values are the same', () => {

        const result = UpdateFormReducer(initialState, {
            type: ActionType.SET_LAST_NAME,
            value: "Doe"
        })

        expect(result).toBe(initialState)
    })

    it('updates age', () => {

        const result = UpdateFormReducer(initialState, {
            type: ActionType.SET_AGE,
            value: 50
        })

        expect(result).toStrictEqual({
            ...initialState,
            age: 50
        })
    })

    it('does not update lage if values are the same', () => {

        const result = UpdateFormReducer(initialState, {
            type: ActionType.SET_AGE,
            value: 21
        })

        expect(result).toBe(initialState)
    })
    
})
