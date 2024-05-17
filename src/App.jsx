import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AuthPage from "./pages/AuthPage/AuthPage";
import PayLayout from "./Layouts/PayLayout";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

function App() {
  return (
    <PayLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/:username" element={<ProfilePage />} />
      </Routes>
    </PayLayout>
  );
}

export default App;
