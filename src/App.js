import React from "react";
import "./App.css";
import Feed from "./Feed";
import Header from "./Header";
import { Sidebar } from "./Sidebar";

function App() {
  return (
    <div className="App">
      {/* header */}
      <Header />
      {/* sidebar */}
      <div className="app_body">
        <Sidebar />
        {/* feed */}
        <Feed />
        {/* widgets */}
      </div>
    </div>
  );
}

export default App;
