import React from 'react';
import { fireEvent, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { FirstNameInput } from './FirstNameInput';
import { UpdateFormContextReducer } from '../context';

describe('FristNameInput', () => {
    it('renders value from state', () => {
        renderInitialInput()
        expect(screen.getByDisplayValue('John')).toBeInTheDocument()
    })
    it('renders updates value to state', async () => {
        renderInitialInput()
        const input = screen.getByDisplayValue('John')
        expect(input).toBeInTheDocument()
        await userEvent.clear(input)
        await userEvent.type(input, "Jane")
        await fireEvent.focusOut(input)
        const inputAfterUpdate = screen.getByDisplayValue('Jane')
        expect(inputAfterUpdate).toBeInTheDocument()
        expect(inputAfterUpdate).toBeDisabled()
    })
})

const renderInitialInput = () => {
    render(
        <UpdateFormContextReducer>
            <FirstNameInput />
        </UpdateFormContextReducer>
    )
}