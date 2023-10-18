import { render, screen, waitFor } from '@testing-library/react';
import { vi } from 'vitest'
import InspectionList from "../components/Inspection/InspectionList.tsx";

describe('InspectionList Component', () => {
    it('renders loading message initially', () => {
        render(<InspectionList endpoint="InspectionData" />);
        const loadingElement = screen.getByText('Liste des Inspections');
        expect(loadingElement).toBeInTheDocument();
    });

    it('renders inspections when data is loaded', async () => {
        // Mock the data response with inspection data
        global.fetch = vi.fn().mockResolvedValueOnce({
            ok: true,
            json: () => Promise.resolve({ inspections: [
                {
                    name: 'Inspection 1',
                    installationType: 'Type A',
                    constructionYear: 2020,
                    company: 'ABC Inc.',
                    type: 'Type X',
                    diameter: 10,
                    material: 'Metal',
                    coating: 'Painted',
                }
                ] }),
        });

        render(<InspectionList endpoint="InspectionData" />);

        await waitFor(() => {
            const inspectionElement = screen.getByText('Inspection 1');
            expect(inspectionElement).toBeInTheDocument();
        });
    });

    it('displays an error message on failed data fetch', async () => {
        global.fetch = vi
            .fn()
            .mockResolvedValue({
                ok: false,
                statusText: 'Failed',
            })

        render(<InspectionList endpoint="InspectionData-zaae"/> );
        const errorElement = await screen.findByText('Error fetching data Failed');
        expect(errorElement).toBeInTheDocument();
    });
});
