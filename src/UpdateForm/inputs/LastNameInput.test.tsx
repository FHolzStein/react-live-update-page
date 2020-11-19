import React from 'react';
import { fireEvent, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { UpdateFormContextReducer } from '../context';
import { LastNameInput } from './LastNameInput';

describe('LastNameInput', () => {
    it('renders value from state', () => {
        renderInitialInput()
        expect(screen.getByDisplayValue('Doe')).toBeInTheDocument()
    })
    it('renders updates value to state', async () => {
        renderInitialInput()
        const input = screen.getByDisplayValue('Doe')
        expect(input).toBeInTheDocument()
        await userEvent.clear(input)
        await userEvent.type(input, "Travolta")
        await fireEvent.focusOut(input)
        const inputAfterUpdate = screen.getByDisplayValue('Travolta')
        expect(inputAfterUpdate).toBeInTheDocument()
        expect(inputAfterUpdate).toBeDisabled()
    })
})

const renderInitialInput = () => {
    render(
        <UpdateFormContextReducer>
            <LastNameInput />
        </UpdateFormContextReducer>
    )
}