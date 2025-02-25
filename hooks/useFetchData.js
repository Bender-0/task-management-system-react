import axios from "axios";
import { useEffect, useState } from "react";

const useFetchData = (url) => {
    const [data, setData] = useState([]);

    useEffect(() => {
      axios
        .get(url)
        .then(function (response) {
          if (response)
          setData(response.data.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }, [url]);

    return data;
};

export default useFetchData;