import { useState } from "react";
import "./App.css";
import HelloWorld from "./components/helloWorld";
import FetchData from "./components/fetchData";

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <button onClick={() => setToggle((prev) => !prev)}>Toggle</button>
      {toggle && <HelloWorld />}
      
      <FetchData />
    </>
  );
}

export default App;
