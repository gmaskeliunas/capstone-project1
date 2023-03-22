import { render, screen, fireEvent } from "@testing-library/react";
import BookingPage from './pages/BookingPage';

test('Renders the BookingForm heading', () => {
    render(<BookingPage />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
})

describe('BookingPage', () => {
  it('validates the form input correctly', () => {
    const { getByLabelText, getByText } = render(<BookingPage />);

    const input = getByLabelText('Email *');
    fireEvent.change(input, { target: { value: 'invalid-email' }});
    fireEvent.submit(getByText('Book Now'));

    const error = getByText('* Email not valid!');
    expect(error).toBeInTheDocument();
  });
});