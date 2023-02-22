import React from "react";
import Pagea from "./route/pagea";
import Header from "./route/header";
import Sidebar from "./route/sidebar";
import { Route, Routes} from "react-router-dom";
function App() {
  return (
          <div className="App">
            <Header />
            <Sidebar />
            <Routes>
              <Route path="pagea" element={<Pagea />} />
              <Route path="pagea" element={<Pagea />} />
              <Route path="pagea" element={<Pagea />} />
            </Routes>
          </div>
  );
}

export default App;
