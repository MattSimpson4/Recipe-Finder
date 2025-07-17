import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders the welcome message', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText(/welcome to recipe finder/i)).toBeInTheDocument();
});
test('renders the sign up button', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByRole('button', { name: /sign up/i })).toBeInTheDocument();
});
test('renders the log in button', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByRole('button', { name: /log in/i })).toBeInTheDocument();
});
