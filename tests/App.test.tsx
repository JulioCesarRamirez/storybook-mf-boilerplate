import React from 'react';
import { render, screen } from './test-utils'; // Adjust path as per your project structure
import App from '../src/App';

test('renders hello world text', () => {
  render(<App />);
  const helloWorldElement = screen.getByText(/Hello World!/i);
  expect(helloWorldElement).toBeInTheDocument();
});


