import { useState, useEffect } from "react";
import axios from "axios";
import { JobType } from "../utils/types/JobsType";

interface Props {
  endpoint: string;
  query: {
    query?: string;
    num_pages?: number;
    job_id?: string;
  };
}

// const raoidApiKey = process.env.RAPID_API_KEY;

export const useFetch = ({ endpoint, query }: Props) => {
  const [data, setData] = useState<JobType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  //   const axios = require("axios");

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: { ...query },
    headers: {
      "X-RapidAPI-Key": "",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);
      if (response.data.status === "OK") {
        // console.log("==================================");
        // console.log("response.data");
        // console.log(response.data);
        setData(response.data.data);
        // console.log("==================================");
      }
      setIsLoading(false);
    } catch (error) {
      setError(error);
      alert("There is an error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};
