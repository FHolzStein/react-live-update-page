import React from 'react'
import { SetFirstName, useUpdateFormDispatch, useUpdateFormState } from '../context'

export const FirstNameInput = () : JSX.Element => {
    const {state} = useUpdateFormState()
    const { dispatch } = useUpdateFormDispatch()
    const valueChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        dispatch(SetFirstName(e.target.value))
    }
    return <input type="text" value={state.firstName} onChange={valueChange}></input>
}