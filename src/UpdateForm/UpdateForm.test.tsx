import React from 'react';
import { render, screen } from '@testing-library/react';
import { UpdateForm } from './UpdateForm';

describe('UpdateForm', () => {
    it('renders title UpdateForm', async () => {
        render(<UpdateForm />)
        await screen.findByRole('heading', {name: 'UpdateForm'})
    })
    
})
