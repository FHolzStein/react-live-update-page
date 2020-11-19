import React from 'react'
import { SetAge, useUpdateFormDispatch, useUpdateFormState } from '../context'

export const AgeNameInput = () : JSX.Element => {
    const {state} = useUpdateFormState()
    const { dispatch } = useUpdateFormDispatch()
    const valueChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        dispatch(SetAge(e.target.value ? parseFloat(e.target.value) : 0))
    }
    return <input type="text" pattern="[0-9]*" value={state.age} onChange={valueChange}></input>
}