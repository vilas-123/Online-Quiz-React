import React from "react";
import Page from "./Page";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Firstpage from "./Firstpage";

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Page />} >
        </Route>
      </Routes>

      <Routes>
        <Route path="/firstpage" element={<Firstpage />} >
        </Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
