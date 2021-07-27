import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

test('test home', () => {
  render(<Home />);
  const getElement = screen.getByText('Naufal Yukafi Ridlo');
  expect(getElement).toBeInTheDocument();
});
