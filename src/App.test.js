import { render, screen } from '@testing-library/react';
import App from './App';
import Add from './Page/Dashboard/Add';
import { isValidPhoneNumber } from './Add';
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
//const isValidPhoneNumber = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/;
test('isValidPhoneNumber returns true for valid phone numbers', () => {
  expect(isValidPhoneNumber('(123) 456-7890')).toBe(true);
  expect(isValidPhoneNumber('1234567890')).toBe(true); // No "-"
  expect(isValidPhoneNumber('9876543210')).toBe(true); // No "-"
});

test('isValidPhoneNumber returns false for invalid phone numbers', () => {
  expect(isValidPhoneNumber('123-456-7890')).toBe(false); // With "-"
  expect(isValidPhoneNumber('12-34-5678')).toBe(false);  // With "-"
});