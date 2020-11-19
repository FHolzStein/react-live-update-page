import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders UpdateForm', () => {
  render(<App />);
  const updateFormTitle = screen.getByText("UpdateForm");
  expect(updateFormTitle).toBeInTheDocument();
});
