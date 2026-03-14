import React, { useEffect, useState } from "react";

const FetchData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchApiData();
  }, []);

  async function fetchApiData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonData = await response.json();
    console.log(jsonData);
    setData(jsonData);
  }
  return (
    <>
      {data
        ? data.map((item) => <div key={item.id}>{item.name}</div>)
        : "Loading..."}
    </>
  );
};

export default FetchData;
