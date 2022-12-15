import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../src/pages/home/home';

test('renders learn react link', () => {
  render(<Home />);
  const linkElement = screen.getByText(/front-end developer at heart/i);
  expect(linkElement).toBeInTheDocument();
});
