import React, { useState } from 'react'
import { SetFirstName, useUpdateFormDispatch, useUpdateFormState } from '../context'

export const FirstNameInput = () : JSX.Element => {
    const {state} = useUpdateFormState()
    const [value, setValue] = useState(state.firstName)
    const { dispatch } = useUpdateFormDispatch()
    const valueChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setValue(e.target.value)
    }
    const onBlur = (e: React.ChangeEvent<HTMLInputElement>): void => {
        dispatch(SetFirstName(e.target.value))
    }
    return <input type="text" value={value} onChange={valueChange} onBlur={onBlur}></input>
}