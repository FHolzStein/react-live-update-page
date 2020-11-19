import React from 'react';
import { fireEvent, render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { FirstNameInput } from './FirstNameInput';
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
        userEvent.type(input, "50")
        await waitFor( () =>    
            expect(screen.getByDisplayValue('50')).toBeInTheDocument()
        )
        
    })
})

const renderInitialInput = () => {
    render(
        <UpdateFormContextReducer>
            <AgeNameInput />
        </UpdateFormContextReducer>
    )
}