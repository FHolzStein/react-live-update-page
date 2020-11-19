import React from 'react';
import { render, screen} from '@testing-library/react';
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
        const inputAfterUpdate = screen.getByDisplayValue('Travolta')
        expect(inputAfterUpdate).toBeInTheDocument()
    })
})

const renderInitialInput = () => {
    render(
        <UpdateFormContextReducer>
            <LastNameInput />
        </UpdateFormContextReducer>
    )
}