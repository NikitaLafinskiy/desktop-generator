import axios from 'axios';
import { useState, useEffect } from 'react';

const useAllApps = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_ROUTE}/findAllApps`)
      .then((doc) => {
        setData(doc.data.allApps);
      });
  }, [null]);
  // console.log(data);
  return { apps: data };
};

export default useAllApps;
