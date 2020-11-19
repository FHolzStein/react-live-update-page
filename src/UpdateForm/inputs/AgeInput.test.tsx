import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { UpdateFormContextReducer } from '../context';
import { AgeNameInput } from './AgeInput';

describe('AgeInput', () => {
    it('renders value from state', () => {
        renderInitialInput()
        expect(screen.getByDisplayValue('21')).toBeInTheDocument()
    })
    it('renders updates value to state', async () => {
        renderInitialInput()
        const input = screen.getByDisplayValue('21')
        expect(input).toBeInTheDocument()
        await userEvent.clear(input)
        await userEvent.type(input, "50")
        fireEvent.focusOut(input)
        const inputAfterUpdate = await screen.findByDisplayValue('50')
        expect(inputAfterUpdate).toBeInTheDocument()
        expect(inputAfterUpdate).toBeDisabled()
    })
})

const renderInitialInput = () => {
    render(
        <UpdateFormContextReducer>
            <AgeNameInput />
        </UpdateFormContextReducer>
    )
}