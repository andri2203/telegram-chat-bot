import React from "react";
import "./App.css";
import Sidebar from "./sidebar";
import AppHeader from "./AppHeader";
import Dashboard from "./content/dashboard";

function App() {
  return (
    <div className="App">
      <input id="check" type="checkbox" />
      <Sidebar />
      <main className="App-content">
        <AppHeader />
        <section className="Content">
          <Dashboard />
        </section>
      </main>
    </div>
  );
}

export default App;
