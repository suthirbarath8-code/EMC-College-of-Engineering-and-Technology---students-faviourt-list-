import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StudentContext } from "../context/StudentContext";
import {
  LockIcon,
  MailIcon,
  GraduationCapIcon,
  CheckCircleIcon,
  LogOutIcon,
  UsersIcon,
  HeartIcon,
  SparklesIcon
} from "../components/Icons";

export const LoginPage = () => {
  const { teacher, loginTeacher, logoutTeacher } = useContext(StudentContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("teacher@emccollege.edu.in");
  const [password, setPassword] = useState("emc123");

  const handleLogin = (e) => {
    e.preventDefault();
    const result = loginTeacher(email, password);
    if (result.success) {
      navigate("/students");
    }
  };

  const handleQuickDemo = () => {
    setEmail("teacher@emccollege.edu.in");
    setPassword("emc123");
    const result = loginTeacher("teacher@emccollege.edu.in", "emc123");
    if (result.success) {
      navigate("/students");
    }
  };

  return (
    <main className="page-container">
      <div className="login-page-center">
        {teacher ? (
          /* Already Logged-in Teacher Dashboard Card */
          <div className="teacher-profile-card glass-panel">
            <div className="profile-badge-top">
              <CheckCircleIcon size={24} className="profile-verified-icon" />
              <span>Faculty Portal Active</span>
            </div>

            <div className="profile-avatar-big">
              {teacher.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
            </div>

            <h2 className="profile-name">{teacher.name}</h2>
            <span className="profile-role">{teacher.role}</span>
            <span className="profile-dept">{teacher.department}</span>

            <div className="profile-meta-pills">
              <span className="meta-pill">ID: {teacher.facultyId}</span>
              <span className="meta-pill">{teacher.email}</span>
            </div>

            <div className="profile-action-links">
              <Link to="/students" className="btn btn-primary">
                <UsersIcon size={18} />
                <span>Manage Student Directory</span>
              </Link>
              <Link to="/favourites" className="btn btn-secondary">
                <HeartIcon size={18} fill="currentColor" />
                <span>View Shortlisted Favourites</span>
              </Link>
              <button onClick={logoutTeacher} className="btn btn-outline-danger">
                <LogOutIcon size={18} />
                <span>Logout Faculty Account</span>
              </button>
            </div>
          </div>
        ) : (
          /* Teacher Login Form */
          <div className="login-form-card glass-panel">
            <div className="login-card-header">
              <div className="login-icon-box">
                <LockIcon size={28} />
              </div>
              <span className="login-card-tag">EMC Faculty Authentication</span>
              <h1 className="login-card-title">Teacher Portal Login</h1>
              <p className="login-card-subtitle">
                Access student registries, manage department shortlists, and grade academic milestones.
              </p>
            </div>

            <form onSubmit={handleLogin} className="teacher-auth-form">
              <div className="form-group">
                <label className="form-label">Institutional Faculty Email</label>
                <div className="input-with-icon">
                  <MailIcon size={18} className="field-icon" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="teacher@emccollege.edu.in"
                    className="form-input with-left-icon"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Password</label>
                <div className="input-with-icon">
                  <LockIcon size={18} className="field-icon" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    className="form-input with-left-icon"
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-primary btn-login-submit">
                <span>Sign In to Teacher Portal</span>
              </button>

              <button
                type="button"
                onClick={handleQuickDemo}
                className="btn btn-demo-fill"
              >
                <SparklesIcon size={16} />
                <span>One-Click Demo Faculty Login</span>
              </button>
            </form>

            <div className="demo-credentials-helper">
              <span className="helper-label">Demo Credentials:</span>
              <code className="helper-code">teacher@emccollege.edu.in / emc123</code>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};
