import { useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="p-8 mx-auto">
      <Header />
      <Main />
    </div>
  );
}

export default App;
