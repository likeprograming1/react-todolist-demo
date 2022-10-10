import { useState, useEffect } from 'react';

const useFetch = (url) => {

  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
      .then(res => {return res.json();})
      .then(data => {setData(data);})
      .catch(err => {
        console.error(err);
      })
    }, 1000);
  }, [url])
  
  return [data];
}

 
export default useFetch;