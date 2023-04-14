import React from "react";

import { Footer, Loader, NavBar, Services, Transactions, Welcome } from "./components"

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <NavBar />
        <Welcome />
      </div>
    </div>
  );
};

export default App;
