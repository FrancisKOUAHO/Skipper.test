import { render, screen } from '@testing-library/react';
import Inspection from "../components/Inspection/Inspection.tsx";

const mockInspectionData = {
    name: 'Inspection 1',
    installationType: 'Type A',
    constructionYear: 2020,
    company: 'ABC Inc.',
    type: 'Type X',
    diameter: '10',
    material: 'Metal',
    coating: 'Painted',
};

describe('Inspection Component', () => {
    it('renders "Loading..." when no data is provided', () => {
        render(<Inspection />);
        const loadingElement = screen.getByText('Loading ...');
        expect(loadingElement).toBeInTheDocument();
    });

    it('renders inspection data correctly', () => {
        render(<Inspection data={mockInspectionData} />);

        const nameElement = screen.getByText('Inspection 1');
        const installationTypeElement = screen.getByText('Type d\'installation : Type A');
        const constructionYearElement = screen.getByText('Année de construction : 2020');
        const companyElement = screen.getByText('ABC Inc.');
        const typeElement = screen.getByText('Type X');
        const diameterElement = screen.getByText('10');
        const materialElement = screen.getByText('Metal');
        const coatingElement = screen.getByText('Painted');
        const consultButton = screen.getByText('Consulter');

        expect(nameElement).toBeInTheDocument();
        expect(installationTypeElement).toBeInTheDocument();
        expect(constructionYearElement).toBeInTheDocument();
        expect(companyElement).toBeInTheDocument();
        expect(typeElement).toBeInTheDocument();
        expect(diameterElement).toBeInTheDocument();
        expect(materialElement).toBeInTheDocument();
        expect(coatingElement).toBeInTheDocument();
        expect(consultButton).toBeInTheDocument();
    });
});
