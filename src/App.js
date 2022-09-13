/** @format */

import { useState } from "react";
import "./App.css";
import Cursor from "./components/Cursor";

const App = () => {
  const [scaling, setscaling] = useState(false);
  return (
    <div className="app">
      <Cursor scaling={scaling} />
      <section>
        <button
          onMouseEnter={() => setscaling(true)}
          onMouseLeave={() => setscaling(false)}>
          read more
        </button>
      </section>
    </div>
  );
};

export default App;
