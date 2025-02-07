import { useEffect, useState } from "react";

// 커스텀훅 만들기
const useFetch = (url) =>{
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch(url)
          .then((res) => res.json())
          .then((data) => setData(data));
      }, [url]);

      return [data]; // 
}

export default useFetch;
