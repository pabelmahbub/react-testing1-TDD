import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Login from './Login';

jest.mock("axios", ()=>({
    __esModule: true,

    default:{
        get: () => ({
            data:{id:1, name: "John"},
        }),
    },
}));

//following TDD:
test('In Login: username should be rendered', () => {
  render(<Login />);
  const userInputElement = screen.getByPlaceholderText(/username/i)
  expect(userInputElement).toBeInTheDocument()
});

test('In Login: password should be rendered', () => {
    render(<Login />);
    const passwordInputElement = screen.getByPlaceholderText(/password/i)
    expect(passwordInputElement).toBeInTheDocument()
  });

  test('In Login: button input  should be rendered', () => {
    render(<Login />);
    const buttonElement = screen.getByRole("button")
    expect(buttonElement).toBeInTheDocument()
  });

  test('In Login: username should be empty', () => {
    render(<Login />);
    const userInputElement = screen.getByPlaceholderText(/Username/i)
    expect(userInputElement.value).toBe("")
  });


  test('In Login: password should be empty', () => {
    render(<Login />);
    const passwordInputElement = screen.getByPlaceholderText(/password/i)
    expect(passwordInputElement.value).toBe("")
  });

  test('In Login: button should be disabled', () => {
    render(<Login />);
    const buttonElement = screen.getByRole("button")
    expect(buttonElement).toBeDisabled()
  });

  test('In Login: Loading should not be rendered', () => {
    render(<Login />);
    const buttonElement = screen.getByRole("button")
    expect(buttonElement).not.toHaveTextContent(/please wait .../i)
  });

  test('In Login: Error message should not be visible', () => {
    render(<Login />);
    const errorElement = screen.getByTestId("error");
    expect(errorElement).not.toBeVisible()
  });

  test('In Login: username value should be changed', () => {
    render(<Login />);
    const userInputElement = screen.getByPlaceholderText(/username/i)
    const testValue = 'test';
    fireEvent.change(userInputElement, { target : { value : testValue}})
    expect(userInputElement.value).toBe(testValue);
  });


  test('In Login: password value should be changed', () => {
    render(<Login />);
    const passwordInputElement = screen.getByPlaceholderText(/password/i)
    const testValue = 'test';
    fireEvent.change(passwordInputElement, { target : { value : testValue}})
    expect(passwordInputElement.value).toBe(testValue);
  });
  

  test('In Login: button should not be disabled when username and password exists', () => {
    render(<Login />);
    const buttonElement = screen.getByRole("button")
    const userInputElement = screen.getByPlaceholderText(/username/i)
    const passwordInputElement = screen.getByPlaceholderText(/password/i)
    const testValue = 'test';

    fireEvent.change(userInputElement, { target : { value : testValue}})
    fireEvent.change(passwordInputElement, { target : { value : testValue}})

    expect(buttonElement).not.toBeDisabled();
  });


  test('In Login: Loading should be rendered when clicked', () => {
    render(<Login />);
    const buttonElement = screen.getByRole("button")
    const userInputElement = screen.getByPlaceholderText(/username/i)
    const passwordInputElement = screen.getByPlaceholderText(/password/i)
    const testValue = 'test';

    fireEvent.change(userInputElement, { target : { value : testValue}})
    fireEvent.change(passwordInputElement, { target : { value : testValue}})
    fireEvent.click(buttonElement);

    expect(buttonElement).toHaveTextContent(/please wait.../i)
  });

  test('In Login: Loading should not be rendered after fetching', async() => {
    render(<Login />);
    const buttonElement = screen.getByRole("button")
    const userInputElement = screen.getByPlaceholderText(/username/i)
    const passwordInputElement = screen.getByPlaceholderText(/password/i)
    const testValue = 'test';

    fireEvent.change(userInputElement, { target : { value : testValue}})
    fireEvent.change(passwordInputElement, { target : { value : testValue}})
    fireEvent.click(buttonElement);

    await waitFor(()=> expect(buttonElement).not.toHaveTextContent(/please wait.../i));
  });

  test('In Login: User should be rendered after fetching', async() => {
    render(<Login />);
    const buttonElement = screen.getByRole("button")
    const userInputElement = screen.getByPlaceholderText(/username/i)
    const passwordInputElement = screen.getByPlaceholderText(/password/i)
    const testValue = 'test';

    fireEvent.change(userInputElement, { target : { value : testValue}})
    fireEvent.change(passwordInputElement, { target : { value : testValue}})
    fireEvent.click(buttonElement);

    const userItem = await screen.findByText("John");

    expect(userItem).toBeInTheDocument();
  });