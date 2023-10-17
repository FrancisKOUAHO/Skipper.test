import InspectionList from "../components/Inspection/InspectionList.tsx";
import Header from "../components/Header/Header.tsx";

const App = () => {
    return (
        <>
            <Header/>
            <InspectionList endpoint="inspection"/>
        </>
    )
}

export default App
