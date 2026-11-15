import React from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { StudentProvider } from "./context/StudentContext";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { NotificationToast } from "./components/NotificationToast";

// Pages
import { HomePage } from "./pages/HomePage";
import { CoursesPage } from "./pages/CoursesPage";
import { StudentListPage } from "./pages/StudentListPage";
import { FavouriteStudentsPage } from "./pages/FavouriteStudentsPage";
import { CeoPage } from "./pages/CeoPage";
import { ContactPage } from "./pages/ContactPage";
import { LoginPage } from "./pages/LoginPage";

import "./App.css";

function AppContent() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className={`app-layout ${isHome ? "is-home-theme" : "is-subpage-gray"}`}>
      {/* Ambient Glassmorphism Background Orbs (only on Home) */}
      {isHome && (
        <>
          <div className="glass-ambient-orb orb-1" aria-hidden="true" />
          <div className="glass-ambient-orb orb-2" aria-hidden="true" />
          <div className="glass-ambient-orb orb-3" aria-hidden="true" />
        </>
      )}

      <Navbar />
      <NotificationToast />

      <div className="main-content">
        <Routes>
          {/* Home Page with Hero, Achievements, Stats, Why Us, Placements, Courses, Reviews, Community */}
          <Route path="/" element={<HomePage />} />

          {/* Course Catalog Page */}
          <Route path="/courses" element={<CoursesPage />} />

          {/* Student Directory Page */}
          <Route path="/students" element={<StudentListPage />} />

          {/* Favourite Students Page */}
          <Route path="/favourites" element={<FavouriteStudentsPage />} />

          {/* CEO Leadership Page */}
          <Route path="/ceo" element={<CeoPage />} />

          {/* Contact & Admissions Page */}
          <Route path="/contact" element={<ContactPage />} />

          {/* Teacher Portal Login */}
          <Route path="/login" element={<LoginPage />} />

          {/* Fallback route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <StudentProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </StudentProvider>
  );
}

export default App;
