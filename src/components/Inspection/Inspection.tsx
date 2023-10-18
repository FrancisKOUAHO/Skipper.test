import {FunctionComponent} from "react";
import {InspectionProps} from "../../types/InspectionProps.ts";

const Inspection: FunctionComponent<{data?: InspectionProps}> = ({data}) => {

    if (!data) return <>Loading ...</>;

    return (
        <div>
            <h3 className="text-lg font-medium mb-2">{data.name}</h3>
            <div>
                <span className="flex flex-row items-center">
                    <i className="ri-hammer-line mr-2 text-xl text-indigo-700"></i>
                    Type d'installation : {data.installationType}
                </span>
            </div>
            <div>
                <span className="flex flex-row items-center">
                    <i className="ri-calendar-line  mr-2 text-xl text-indigo-700"></i>
                    Année de construction : {data.constructionYear}
                </span>
            </div>
            <hr className="my-4"></hr>
            <div className="tag">
                <ul className="flex flex-wrap gap-3 list-none">
                    <li>
                    <span className="bg-indigo-200 text-indigo-700 hover:bg-indigo-700 hover:text-white flex flex-row items-center py-1 px-4 rounded-3xl cursor-pointer transition-all">
                        <i className="ri-building-4-line mr-3 text-xl"></i>
                        {data.company}
                    </span>
                    </li>
                    <li>
                    <span className="bg-indigo-200 text-indigo-700 hover:bg-indigo-700 hover:text-white flex flex-row items-center py-1 px-4 rounded-3xl cursor-pointer transition-all">
                        <i className="ri-calendar-line mr-3 text-xl"></i>
                        {data.type}
                    </span>
                    </li>
                    <li>
                    <span className="bg-indigo-200 text-indigo-700 hover:bg-indigo-700 hover:text-white flex flex-row items-center py-1 px-4 rounded-3xl cursor-pointer transition-all">
                        <i className="ri-ruler-2-line mr-3 text-xl"></i>
                        {data.diameter}
                    </span>
                    </li>
                    <li>
                    <span className="bg-indigo-200 text-indigo-700 hover:bg-indigo-700 hover:text-white flex flex-row items-center py-1 px-4 rounded-3xl cursor-pointer transition-all">
                        <i className="ri-box-3-line mr-3 text-xl"></i>
                        {data.material}
                    </span>
                    </li>
                    <li>
                    <span className="bg-indigo-200 text-indigo-700 hover:bg-indigo-700 hover:text-white flex flex-row items-center py-1 px-4 rounded-3xl cursor-pointer transition-all">
                        <i className="ri-file-paper-2-line mr-3 text-xl"></i>
                        {data.coating}
                    </span>
                    </li>
                </ul>
            </div>
            <hr className="mt-6 mb-4"></hr>
            <button className="w-full bg-indigo-700 text-white hover:bg-indigo-900 py-3 rounded-2xl text-xl transition-all">Consulter</button>
        </div>
    );
};

export default Inspection;
