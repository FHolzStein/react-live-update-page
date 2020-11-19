import React from 'react'
import { SetLastName, useUpdateFormDispatch, useUpdateFormState } from '../context'

export const LastNameInput = () : JSX.Element => {
    const {state} = useUpdateFormState()
    const { dispatch } = useUpdateFormDispatch()
    const valueChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        dispatch(SetLastName(e.target.value))
    }
    return <input type="text" value={state.lastName} onChange={valueChange}></input>
}