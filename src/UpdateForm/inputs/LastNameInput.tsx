import React, { useState } from 'react'
import { SetLastName, useUpdateFormDispatch, useUpdateFormState } from '../context'
import { FormState } from '../context/types'

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

    const shouldBeDisabled = () => state.state === FormState.LOADING || state.state === FormState.DIRTY

    return <input type="text" value={value} onChange={valueChange} onBlur={onBlur} disabled={shouldBeDisabled()}></input>
}