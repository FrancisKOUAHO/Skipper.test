import {render, screen} from '@testing-library/react';
import Inspection from "../components/Inspection/Inspection.tsx";

const mockInspectionData: any = {
    name: 'Inspection 1',
    installationType: 'Type A',
    constructionYear: 2020,
    company: 'ABC Inc.',
    type: 'Type X',
    diameter: 10,
    material: 'Metal',
    coating: 'Painted',
};

describe('Inspection Component', () => {
    it('renders "Loading..." when no data is provided', () => {
        render(<Inspection/>);
        const loadingElement = screen.getByText('Loading ...');
        expect(loadingElement).toBeInTheDocument();
    });

    it('renders inspection data correctly', () => {
        render(<Inspection data={mockInspectionData}/>);

        const nameElement = screen.getByText('Inspection 1');
        const typeElement = screen.getByText('Type d\'Installation:');
        const constructionYearElement = screen.getByText('Année de Construction:');
        const companyElement = screen.getByText('Entreprise:');
        const typeInspectionElement = screen.getByText('Type d\'Inspection:');
        const diameterElement = screen.getByText('Diamètre:');
        const materialElement = screen.getByText('Matériau:');
        const coatingElement = screen.getByText('Revêtement:');

        expect(nameElement).toBeInTheDocument();
        expect(typeElement).toBeInTheDocument();
        expect(constructionYearElement).toBeInTheDocument();
        expect(companyElement).toBeInTheDocument();
        expect(typeInspectionElement).toBeInTheDocument();
        expect(diameterElement).toBeInTheDocument();
        expect(materialElement).toBeInTheDocument();
        expect(coatingElement).toBeInTheDocument();

        // Vérifier si les valeurs des données sont affichées correctement
        expect(screen.getByText('Type A')).toBeInTheDocument();
        expect(screen.getByText('2020')).toBeInTheDocument();
        expect(screen.getByText('ABC Inc.')).toBeInTheDocument();
        expect(screen.getByText('Type X')).toBeInTheDocument();
        expect(screen.getByText('10')).toBeInTheDocument();
        expect(screen.getByText('Metal')).toBeInTheDocument();
        expect(screen.getByText('Painted')).toBeInTheDocument();
    });
});
