import React from "react";

import Home from "./pages/Home/Home";
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
