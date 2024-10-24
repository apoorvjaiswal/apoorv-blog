import { useEffect, useState } from 'react';

interface IUseFetch {
  url: string;
  method?: string;
}
interface Blog {
    id: number;
    title: string;
    author: string;
    body: string;
  }
const useFetch = ({ url, method = 'GET' }: IUseFetch) => {
  const [data, setData] = useState<Blog[] | null>(null);  // Expect an array of Blog or null
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    setTimeout(()=>{
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
      })},1000);
  }, [url, method]);

  return { data, error, isPending };  // Return an object, not an array
};

export default useFetch;
