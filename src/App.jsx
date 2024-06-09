import React from "react";

import Home from "./containers/Home/Home";
import TimeContextProvider from "./context/TimeContextProvider";

function App() {
  return (
    <>
      <TimeContextProvider>
        <Home />
      </TimeContextProvider>
    </>
  );
}

export default App;
