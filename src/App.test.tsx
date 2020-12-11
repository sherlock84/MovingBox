import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders the game playground', () => {
  const component = render(<App />);
  expect(component.baseElement).toBeInTheDocument();
});
