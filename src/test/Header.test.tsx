import { render, screen } from '@testing-library/react';
import Header from "../components/Header/Header.tsx";

describe('Header Component', () => {
    it('renders the header with the correct text and logo', () => {
        render(<Header />);
        const headerElement = screen.getByRole('banner');
        const logoElement = screen.getByAltText('Skipper NDT Logo');
        const titleElement = screen.getByText('Skipper NDT - Inspections');

        expect(headerElement).toBeInTheDocument();
        expect(logoElement).toBeInTheDocument();
        expect(titleElement).toBeInTheDocument();

        expect(headerElement).toHaveClass('sticky');
        expect(headerElement).toHaveClass('rounded-xl');
        expect(logoElement).toHaveAttribute('src', '/skipper.png');
        expect(titleElement).toHaveTextContent('Skipper NDT - Inspections');
    });

    it('handles missing logo', () => {
        render(<Header />);
        const headerElement = screen.getByRole('banner');
        const logoElement = screen.queryByAltText('Skipper NDT Logo');
        const titleElement = screen.getByText('Skipper NDT - Inspections');

        expect(headerElement).toBeInTheDocument();
        expect(logoElement).not.toBeInTheDocument();
        expect(titleElement).toBeInTheDocument();

        // Vous pouvez également vérifier des styles ou des classes spécifiques si nécessaire
        expect(headerElement).toHaveClass('sticky');
        expect(headerElement).toHaveClass('rounded-xl');
        expect(titleElement).toHaveTextContent('Skipper NDT - Inspections');
    });
});
