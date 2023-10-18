import { FunctionComponent, useEffect, useState } from 'react';
import Inspection from './Inspection.tsx';
import InspectionData from '../../data/InspectionData.json';
import {InspectionProps} from "../../types/InspectionProps.ts";

const InspectionList: FunctionComponent = () => {
    const [inspections, setInspections] = useState<InspectionProps[]>([]);

    useEffect(() => {
        setInspections(InspectionData.inspections);
    }, []);

    return (
        <div className="container mt-14">
            <h1 className="text-2xl font-bold mb-4">Liste des Inspections</h1>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 list-none">
                {inspections.map((inspection, index) => (
                    <li key={index} className="bg-white rounded-xl shadow-md p-8">
                        <Inspection data={inspection} />
                    </li>
                ))}
            </div>
        </div>
    );
}

export default InspectionList;
