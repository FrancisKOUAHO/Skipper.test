import {FunctionComponent, useEffect, useState} from 'react';
import {buildUrl} from '../../utils/url.ts';
import Inspection from "./Inspection.tsx";

interface EndpointProps {
    endpoint: string;
}

const InspectionList: FunctionComponent<EndpointProps> = ({endpoint}) => {
    const [inspections, setInspections] = useState([]);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async () => {
        try {
            const response = await fetch(buildUrl(endpoint));

            if (response.ok) {
                const data = await response.json();
                const mappedInspections = data.inspections;
                setInspections(mappedInspections);
            } else {
                setError(`Error fetching data ${response.statusText}`);
            }
        } catch (error) {
            setError(`Error fetching data: ${error}`);
        }
    };

    useEffect(() => {
        fetchData();
    }, [endpoint]);

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="container mt-14">
            <h1 className="text-2xl font-bold mb-4">Liste des Inspections</h1>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 list-none">
                {inspections.map((inspection, index) => (
                    <li key={index} className="bg-white rounded-xl shadow-md p-8">
                        <Inspection data={inspection}/>
                    </li>
                ))}
            </div>
        </div>
    );
}

export default InspectionList;
