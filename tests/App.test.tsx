import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/pages/home/home';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to ChristopherWood.dev/i);
  expect(linkElement).toBeInTheDocument();
});
