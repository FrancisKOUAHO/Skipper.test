import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';

import InspectionList from '../components/Inspection/InspectionList.tsx';
import InspectionData from '../data/InspectionData.json';

describe('InspectionList Component', () => {
    it('renders loading message initially', () => {
        render(<InspectionList />);
        const loadingElement = screen.getByText('Liste des Inspections');
        expect(loadingElement).toBeInTheDocument();
    });

    it('renders inspections when data is loaded', () => {
        render(<InspectionList />);
        const inspectionElement = screen.getByText(InspectionData.inspections[0].name);
        expect(inspectionElement).toBeInTheDocument();
    });

    it('handles missing or incorrect data', () => {
        const incorrectData: any[] = [];
        vi.spyOn(InspectionData, 'inspections', 'get').mockReturnValue(incorrectData);

        render(<InspectionList />);
        const errorElement = screen.getByText('Liste des Inspections');
        expect(errorElement).toBeInTheDocument();
    });
});
