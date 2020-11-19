import React, { useState } from 'react'
import { SetLastName, useUpdateFormDispatch, useUpdateFormState } from '../context'

export const LastNameInput = () : JSX.Element => {
    const {state} = useUpdateFormState()
    const [value, setValue] = useState(state.lastName)
    const { dispatch } = useUpdateFormDispatch()
    const valueChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setValue(e.target.value)
    }
    const onBlur = (e: React.ChangeEvent<HTMLInputElement>): void => {
        dispatch(SetLastName(e.target.value))
    }
    return <input type="text" value={value} onChange={valueChange} onBlur={onBlur}></input>
}