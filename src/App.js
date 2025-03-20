import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import LoginPage from "./LoginPage";
import FoodOrderingApp from "./FoodOrderingApp";
import FoodOrderingConfirm from "./FoodOrderingConfirm";
import Summary from "./Summary";
import Dashboard from "./Dashboard";
import Report from "./Report";
import Decrease from "./Decrease";
import Decrease2 from "./Decrease2";
import Decreasesummary from "./Decreasesummary";
import ProductChanges from "./ProductChanges";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [customer_name, setCustomerName] = useState("");
  const [key, setKey] = useState("");
  const [agentId, setAgentId] = useState("");

  const handleLogin = (customer_name, key, agentId) => {
    setIsLoggedIn(true);
    setCustomerName(customer_name);
    setKey(key);
    setAgentId(agentId);
  };

  return (
    <Router>
      <Routes>
        {!isLoggedIn ? (
          <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
        ) : (
          <Route path="/" element={<Outlet />}>
            <Route index element={<FoodOrderingApp customer_name={customer_name} key={key} agentId={agentId} />} />
            <Route path="food-ordering-app" element={<FoodOrderingApp customer_name={customer_name} key={key} agentId={agentId} />} />
            <Route path="food-ordering-confirm" element={<FoodOrderingConfirm />} />
            <Route path="summary" element={<Summary />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="report" element={<Report />} />
            <Route path="decrease" element={<Decrease />} />
            <Route path="decrease2" element={<Decrease2 />} />
            <Route path="decreasesummary" element={<Decreasesummary />} />
            <Route path="product-changes" element={<ProductChanges />} />
          </Route>
        )}
      </Routes>
    </Router>
  );
}

export default App;
