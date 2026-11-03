
import { useState } from "react";
import "./App.css";

import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Orders from "./pages/Orders";

function App() {
  const [activePage, setActivePage] = useState("Dashboard");

  return (
    <div className="app-layout">
      <aside className="sidebar">
        <h2>RetailOps Lite</h2>

        <nav>
          <button onClick={() => setActivePage("Dashboard")}>
            Dashboard
          </button>

          <button onClick={() => setActivePage("Products")}>
            Products
          </button>

          <button onClick={() => setActivePage("Orders")}>
            Orders
          </button>

          <button onClick={() => setActivePage("Inventory")}>
            Inventory
          </button>
        </nav>
      </aside>

      <main className="main-content">
        {activePage === "Dashboard" && <Dashboard />}

        {activePage === "Products" && <Products />}

        {activePage === "Orders" && <Orders />}

        {activePage === "Inventory" && <h1>Inventory Coming Soon</h1>}
      </main>
    </div>
  );
}

export default App;
