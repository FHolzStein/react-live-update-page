import React, { useState } from 'react'
import { SetAge, useUpdateFormDispatch, useUpdateFormState } from '../context'

export const AgeNameInput = () : JSX.Element => {
    const {state} = useUpdateFormState()
    const [value, setValue] = useState(state.age)
    const { dispatch } = useUpdateFormDispatch()
    const valueChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setValue(e.target.value ? parseFloat(e.target.value) : 0)
    }
    const onBlur = (e: React.ChangeEvent<HTMLInputElement>): void => {
        dispatch(SetAge(parseFloat(e.target.value)))
    }
    return <input type="text" value={value} onChange={valueChange} onBlur={onBlur}></input>
}