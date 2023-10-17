import { render, screen } from '@testing-library/react';
import Header from '../components/Header/Header.tsx';

describe('Header Component', () => {
    it('renders the header with the correct title', () => {
        render(<Header />);
        const headerElement = screen.getByRole('banner');
        const titleElement = screen.getByText('Skipper NDT - Inspections');

        expect(headerElement).toBeInTheDocument();
        expect(titleElement).toBeInTheDocument();
    });

    it('has the correct CSS classes', () => {
        render(<Header />);
        const headerElement = screen.getByRole('banner');

        expect(headerElement).toHaveClass('sticky');
        expect(headerElement).toHaveClass('w-full');
        expect(headerElement).toHaveClass('flex');
        expect(headerElement).toHaveClass('flex-row');
        expect(headerElement).toHaveClass('justify-between');
        expect(headerElement).toHaveClass('items-center');
        expect(headerElement).toHaveClass('flex-wrap');
        expect(headerElement).toHaveClass('bg-primary');
        expect(headerElement).toHaveClass('text-white');
        expect(headerElement).toHaveClass('h-20');
        expect(headerElement).toHaveClass('z-10');
        expect(headerElement).toHaveClass('p-2');
    });
});
