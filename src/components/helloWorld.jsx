import React, { useEffect } from 'react'

const HelloWorld = () => {
  useEffect(() => {
    console.log("component updated");
    return () =>{
        console.log("unmounted");
        
    }
  }, []);
  return <div>helloWorld</div>;
}

export default HelloWorld