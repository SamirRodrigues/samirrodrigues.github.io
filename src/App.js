import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import AboutUs from "./pages/AboutUs";
import GamesListPage from "./pages/GamesListPage";
import GamePage from "./pages/GamePage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details" element={<DetailsPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/games" element={<GamesListPage />} />
          <Route path="/games/:slug" element={<GamePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />

          {/* Legacy (Portuguese) routes kept so old links keep working */}
          <Route path="/jogos" element={<Navigate to="/games" replace />} />
          <Route path="/contato" element={<Navigate to="/contact" replace />} />
          <Route path="/privacypolicy" element={<Navigate to="/privacy-policy" replace />} />
          <Route path="/termsconditions" element={<Navigate to="/terms-conditions" replace />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
