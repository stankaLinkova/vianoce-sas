import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import NotFound from "./components/NotFound";


function App() {

  return (
    <>
      <div className="root">
        <BrowserRouter>

         <div className="main-components">
          <Routes>
            <Route path="/xcabiszk" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

         </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;