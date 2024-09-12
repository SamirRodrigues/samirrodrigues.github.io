import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import PrivacyPolicy from "./pages/PrivacyPolicy"; // Nova página de Política de Privacidade
import TermsConditions from "./pages/TermsConditions"; // Nova página de Termos e Condições

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details" element={<DetailsPage />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />{" "}
          {/* Nova rota */}
          <Route path="/termsconditions" element={<TermsConditions />} />{" "}
          {/* Nova rota */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
