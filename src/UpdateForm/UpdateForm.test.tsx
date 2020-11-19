import React from 'react';
import { render, screen } from '@testing-library/react';
import { UpdateForm } from './UpdateForm';
import { UpdateFormContextReducer } from './context';

describe('UpdateForm', () => {
    it('renders title UpdateForm', async () => {
        renderInitialForm()
        const formHeading = await screen.findByRole('heading', {name: 'UpdateForm'})
        expect(formHeading).toBeInTheDocument()
        // Display first name
        screen.getByText("John")
        // Display last name
        screen.getByText("Doe")
        // Display age
        screen.getByText("21")
    })
    
})

const renderInitialForm = () => {
    render(
        <UpdateFormContextReducer>
            <UpdateForm />
        </UpdateFormContextReducer>
    )
}