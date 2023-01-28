//vs code wallaby.js and in code : command + shift + p and type wallaby.js:start
// li is should be tested as listitem:   https://www.w3.org/TR/html-aria/#docconformance
//https://jestjs.io/docs/expect


import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders 3 list items', () => {
  render(<App />);
  // li is should be tested as listitem:   https://www.w3.org/TR/html-aria/#docconformance
  const listItems = screen.getAllByRole("listitem");
  // same: expect(listItems).toHaveLength(3)
  // same: expect(listItems.length).toBe(3)
  expect(listItems.length).toEqual(3)
});
//https://jestjs.io/docs/expect 


test('renders h4 title', () => {
  render(<App />);
  const title = screen.getByTestId("custom-element");
  expect(title).toBeInTheDocument()
});

test('sum should be 30', () => {
  render(<App />);
  const sum = screen.getByTitle("sum");
  expect(sum.textContent).toBe("30")
});