import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { StudentContext } from "../context/StudentContext";
import {
  GraduationCapIcon,
  UsersIcon,
  HeartIcon,
  BookOpenIcon,
  PhoneIcon,
  AwardIcon,
  LogInIcon,
  LogOutIcon
} from "./Icons";

export const Navbar = () => {
  const { favourites, teacher, logoutTeacher } = useContext(StudentContext);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        {/* Brand without logo */}
        <Link to="/" className="navbar-brand">
          <div className="brand-text">
            <span className="brand-title">EMC College</span>
            <span className="brand-subtitle">Engineering &amp; Technology</span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="navbar-nav">
          <Link to="/" className={`nav-link ${isActive("/") ? "active" : ""}`}>
            <span>Home</span>
          </Link>

          <Link to="/courses" className={`nav-link ${isActive("/courses") ? "active" : ""}`}>
            <BookOpenIcon size={16} />
            <span>Courses</span>
          </Link>

          <Link to="/students" className={`nav-link ${isActive("/students") ? "active" : ""}`}>
            <UsersIcon size={16} />
            <span>Students</span>
          </Link>

          <Link to="/favourites" className={`nav-link ${isActive("/favourites") ? "active" : ""}`}>
            <HeartIcon
              size={16}
              fill={favourites.length > 0 || isActive("/favourites") ? "currentColor" : "none"}
            />
            <span>Favourites</span>
            <span className={`fav-badge ${favourites.length > 0 ? "has-items" : "empty"}`}>
              {favourites.length}
            </span>
          </Link>

          <Link to="/ceo" className={`nav-link ${isActive("/ceo") ? "active" : ""}`}>
            <AwardIcon size={16} />
            <span>CEO</span>
          </Link>

          <Link to="/contact" className={`nav-link ${isActive("/contact") ? "active" : ""}`}>
            <PhoneIcon size={16} />
            <span>Contact</span>
          </Link>

          {/* Teacher Login / Profile */}
          {teacher ? (
            <div className="teacher-logged-wrapper">
              <span className="teacher-badge-pill" title={teacher.role}>
                {teacher.name.split(" ")[1] || "Faculty"}
              </span>
              <button
                onClick={logoutTeacher}
                className="btn-nav-logout"
                title="Logout from Faculty Portal"
              >
                <LogOutIcon size={16} />
              </button>
            </div>
          ) : (
            <Link to="/login" className={`nav-link nav-btn-login ${isActive("/login") ? "active" : ""}`}>
              <LogInIcon size={16} />
              <span>Teacher Login</span>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};
