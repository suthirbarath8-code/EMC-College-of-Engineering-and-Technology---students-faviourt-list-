import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { StudentContext } from "../context/StudentContext";
import { StudentCard } from "../components/StudentCard";
import {
  SearchIcon,
  FilterIcon,
  SparklesIcon,
  HeartIcon,
  UsersIcon,
  PlusIcon,
  CloseIcon
} from "../components/Icons";

export const StudentListPage = () => {
  const { students, favourites, addStudent } = useContext(StudentContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDept, setSelectedDept] = useState("All");
  const [showAddModal, setShowAddModal] = useState(false);

  // Form state for adding new student
  const [formData, setFormData] = useState({
    name: "",
    rollNo: "",
    department: "Computer Science & Engineering",
    year: "1st Year",
    email: "",
    gpa: "3.85"
  });

  // Get unique departments for filter dropdown
  const departments = [
    "All",
    "Computer Science & Engineering",
    "Information Technology",
    "Electronics & Communication",
    "Mechanical Engineering",
    "Electrical & Electronics"
  ];

  // Filter students based on search term and selected department
  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.rollNo.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept =
      selectedDept === "All" || student.department === selectedDept;
    return matchesSearch && matchesDept;
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const result = addStudent(formData);
    if (result.success) {
      setFormData({
        name: "",
        rollNo: "",
        department: "Computer Science & Engineering",
        year: "1st Year",
        email: "",
        gpa: "3.85"
      });
      setShowAddModal(false);
    }
  };

  return (
    <main className="page-container student-list-page-view">
      {/* Page Hero Header */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">
            <SparklesIcon size={16} />
            <span>EMC College of Engineering and Technology</span>
          </div>
          <h1 className="page-title">Student Directory</h1>
          <p className="page-subtitle">
            Browse through all enrolled engineering students across departments. Faculty and mentors can curate their favourite student shortlist with real-time React Context synchronization.
          </p>
        </div>

        {/* Quick summary stats & Add Student button */}
        <div className="stats-container">
          <div className="stat-card">
            <span className="stat-number">{students.length}</span>
            <span className="stat-label">Total Students</span>
          </div>
          <div className="stat-card highlight">
            <span className="stat-number">{favourites.length}</span>
            <span className="stat-label">In Favourites</span>
          </div>
        </div>
      </section>

      {/* Control bar: Search, Department Filter, and Add Student Action */}
      <section className="controls-section">
        <div className="search-bar-wrapper">
          <SearchIcon size={18} className="search-icon" />
          <input
            type="text"
            placeholder="Search by student name or roll number..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="search-clear-btn"
              title="Clear search"
            >
              ×
            </button>
          )}
        </div>

        <div className="filter-wrapper">
          <FilterIcon size={18} className="filter-icon" />
          <select
            value={selectedDept}
            onChange={(e) => setSelectedDept(e.target.value)}
            className="filter-select"
          >
            {departments.map((dept) => (
              <option key={dept} value={dept}>
                {dept === "All" ? "All Departments" : dept}
              </option>
            ))}
          </select>
        </div>

        {/* Button to open Add New Student modal */}
        <button
          onClick={() => setShowAddModal(true)}
          className="btn btn-open-add-student"
          title="Add a new student to registry"
        >
          <PlusIcon size={18} />
          <span>Add New Student</span>
        </button>
      </section>

      {/* Student List Grid */}
      <section className="student-grid-section">
        <div className="section-header">
          <h2 className="section-title">
            Enrolled Students ({filteredStudents.length})
          </h2>
          {favourites.length > 0 && (
            <Link to="/favourites" className="link-button-accent">
              <HeartIcon size={16} fill="currentColor" />
              <span>View Favourites ({favourites.length})</span>
            </Link>
          )}
        </div>

        {filteredStudents.length > 0 ? (
          <div className="student-cards-grid">
            {filteredStudents.map((student) => (
              <StudentCard
                key={student.id}
                student={student}
                isFavouriteView={false}
              />
            ))}
          </div>
        ) : (
          <div className="empty-state-card">
            <UsersIcon size={48} className="empty-icon text-muted" />
            <h3 className="empty-title">No Students Found</h3>
            <p className="empty-description">
              No students match "{searchTerm}"{" "}
              {selectedDept !== "All" && `in ${selectedDept}`}. Try adjusting your search query or department filter.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedDept("All");
              }}
              className="btn btn-primary"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* Modal: Add New Student Form */}
      {showAddModal && (
        <div className="modal-backdrop-overlay" onClick={() => setShowAddModal(false)}>
          <div
            className="add-student-modal-card glass-panel"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header-row">
              <div className="modal-header-title-wrap">
                <span className="modal-pre-pill">Student Enrollment</span>
                <h3 className="modal-main-title">Add New Student</h3>
              </div>
              <button
                onClick={() => setShowAddModal(false)}
                className="modal-close-btn"
                aria-label="Close modal"
              >
                <CloseIcon size={20} />
              </button>
            </div>

            <form onSubmit={handleFormSubmit} className="add-student-form">
              <div className="form-group">
                <label className="form-label">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sundararajan K"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="form-input"
                  autoFocus
                />
              </div>

              <div className="form-row-2col">
                <div className="form-group">
                  <label className="form-label">Roll Number *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 24CSE021"
                    value={formData.rollNo}
                    onChange={(e) => setFormData({ ...formData, rollNo: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Academic Year</label>
                  <select
                    value={formData.year}
                    onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                    className="form-select"
                  >
                    <option value="1st Year">1st Year</option>
                    <option value="2nd Year">2nd Year</option>
                    <option value="3rd Year">3rd Year</option>
                    <option value="4th Year">4th Year</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Department *</label>
                <select
                  value={formData.department}
                  onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                  className="form-select"
                >
                  <option value="Computer Science & Engineering">Computer Science &amp; Engineering</option>
                  <option value="Information Technology">Information Technology</option>
                  <option value="Electronics & Communication">Electronics &amp; Communication</option>
                  <option value="Mechanical Engineering">Mechanical Engineering</option>
                  <option value="Electrical & Electronics">Electrical &amp; Electronics</option>
                </select>
              </div>

              <div className="form-row-2col">
                <div className="form-group">
                  <label className="form-label">Campus Email</label>
                  <input
                    type="email"
                    placeholder="sundar@campus.tn.edu"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Current GPA</label>
                  <input
                    type="text"
                    placeholder="e.g. 3.92"
                    value={formData.gpa}
                    onChange={(e) => setFormData({ ...formData, gpa: e.target.value })}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="modal-actions-row">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="btn btn-secondary modal-cancel-btn"
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary modal-submit-btn">
                  <PlusIcon size={18} />
                  <span>Enroll Student</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
};
