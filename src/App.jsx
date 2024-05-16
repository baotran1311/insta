import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AuthPage from "./pages/AuthPage/AuthPage";
import PayLayout from "./Layouts/PayLayout";

function App() {
  return (
    <PayLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </PayLayout>
  );
}

export default App;
