import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Calculator from './';

describe('List calculator mode', () => {
    test('Increments', () => {
        const { container } = render(<Calculator />);
        expect(container.getElementsByClassName('input').length).toBe(2);
        userEvent.click(screen.getByText(/Increment/i));
        expect(container.getElementsByClassName('input').length).toBe(3);
    })

    test('Decrements', () => {
        const { container } = render(<Calculator />);
        expect(container.getElementsByClassName('input').length).toBe(2);
        userEvent.click(screen.getByText(/Increment/i));
        expect(container.getElementsByClassName('input').length).toBe(3);
        userEvent.click(screen.getByText(/Decrement/i));
        expect(container.getElementsByClassName('input').length).toBe(2);
    })

    test('Gets a total', () => {
        const { container } = render(<Calculator />);
        userEvent.click(screen.getByText(/Increment/i));
        const inputs = container.getElementsByClassName('input');
        userEvent.type(inputs[0], '1');
        userEvent.type(inputs[1], '2');
        userEvent.type(inputs[2], '1');
        userEvent.click(screen.getByText(/Calculate/i));

        const printedTotal = screen.getByTestId('total');
        expect(printedTotal.innerHTML).toBe("4");
        expect(printedTotal.innerHTML).not.toBe("-4");
    });
})