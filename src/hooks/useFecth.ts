import {useEffect, useState} from "react";
import axios from "axios";

const useFetch = <ResultType extends any>(
    url: string,
    formatResult: (result: any) => ResultType
) => {
    const [data, setData] = useState<ResultType>();
    useEffect(() => {
        axios.get(url)
            .then((response) => {
                setData(formatResult(response.data));
            })
    }, []);

    return {
        data,
    };
};
export default useFetch;
