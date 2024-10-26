import { useEffect, useState } from 'react';

interface IUseFetch {
  url: string;
  method?: string;
  body?: any;
}
interface IBlog {
  id: number;
  title: string;
  author: string;
  body: string;
}
const useFetch = ({ url, method = 'GET', body = null }: IUseFetch) => {
  const [data, setData] = useState<IBlog[] | null>(null);  // Expect an array of Blog or null
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(true);


  useEffect(() => {
    if (method == 'GET') {
      const fetchData = async () =>
        fetch(url, { method })
          .then(result => {
            if (!result.ok) {
              throw Error("Could not fetch data");
            }
            return result.json();
          })
          .then(data => {
            setData(data);
            setIsPending(false);
            setError(null);
          })
          .catch((e) => {
            setIsPending(false);
            setError(e.message);
          });
      setTimeout(fetchData, 1000);
    }
    else if (method == 'POST') {
      const addData = async () => {
        setIsPending(true);
  
        try {
          const options: RequestInit = {
            method,
            headers: {
              'Content-Type': 'application/json',
            },
            body: method === 'POST' && body ? JSON.stringify(body) : null,
          };
  
          const response = await fetch(url, options);
  
          if (!response.ok) {
            console.log(response.json());
          }
          else{
            console.log(response.json());
          }
  
          const result = await response.json();
          setData(result);
          setError(null);
        } catch (error: any) {
          setError(error.message);
        } finally {
          setIsPending(false);
        }
      }
      setTimeout(addData,1000); // Optional delay
    }
  }, [url, method, body]);

return { data, error, isPending };  // Return an object, not an array
};

export default useFetch;
