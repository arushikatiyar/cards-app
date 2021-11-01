import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welCome message', () => {
  render(<App />);
  const welComeElement = screen.getByText(/Welcome/i);
  expect(welComeElement).toBeInTheDocument();
});
