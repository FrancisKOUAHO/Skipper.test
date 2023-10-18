import {FunctionComponent} from "react";

const Header: FunctionComponent = () => {
    return (
        <header
            className="sticky w-full flex flex-row justify-between items-center flex-wrap bg-white text-white px-8 py-6 rounded-xl shadow-xl">
            <div className="flex flex-row items-center">
                <img src="/skipper.png" alt="Skipper NDT Logo" className="w-14" />
                <h1 className="text-2xl font-bold mt-2 ml-6 text-gray-800">Skipper NDT - Inspections</h1>
            </div>
        </header>
    )
}

export default Header