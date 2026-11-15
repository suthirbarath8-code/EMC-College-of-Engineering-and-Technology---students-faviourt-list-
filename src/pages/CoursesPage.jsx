import React, { useState } from "react";
import { Link } from "react-router-dom";
import { coursesList } from "../data/coursesData";
import {
  BookOpenIcon,
  StarIcon,
  CheckCircleIcon,
  SparklesIcon,
  ClockIcon,
  AwardIcon,
  ArrowRightIcon
} from "../components/Icons";

export const CoursesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(coursesList.map((c) => c.category))];

  const filteredCourses =
    selectedCategory === "All"
      ? coursesList
      : coursesList.filter((c) => c.category === selectedCategory);

  return (
    <main className="page-container">
      {/* Header */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">
            <SparklesIcon size={16} />
            <span>Academic Curriculum &amp; Specializations</span>
          </div>
          <h1 className="page-title">Industry-Aligned Courses</h1>
          <p className="page-subtitle">
            Curated by Error Makes Clever educators and tech practitioners to equip EMC College engineering students
            with enterprise-grade software, AI, cloud, and embedded technologies.
          </p>
        </div>

        <div className="stats-container">
          <div className="stat-card">
            <span className="stat-number">{coursesList.length}</span>
            <span className="stat-label">Specializations</span>
          </div>
          <div className="stat-card highlight">
            <span className="stat-number">100%</span>
            <span className="stat-label">Free for Students</span>
          </div>
        </div>
      </section>

      {/* Category Pills Filter */}
      <section className="courses-filter-bar">
        <div className="category-pills-list">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`cat-pill-btn ${selectedCategory === cat ? "active" : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Courses Grid */}
      <section className="courses-catalog-grid">
        {filteredCourses.map((course) => (
          <div key={course.id} className="course-detail-card glass-panel">
            <div className="course-card-top">
              <span className="course-cat-tag">{course.category}</span>
              <span className="course-badge-pill">{course.badge}</span>
            </div>

            <h2 className="course-catalog-title">{course.title}</h2>
            <p className="course-catalog-desc">{course.description}</p>

            <div className="course-rating-row">
              <div className="stars-group">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} size={15} fill="#FF693D" className="star-active" />
                ))}
              </div>
              <span className="rating-val">{course.rating}</span>
              <span className="enrolled-val">({course.enrolled})</span>
            </div>

            <div className="course-specs-bar">
              <div className="spec-item">
                <ClockIcon size={14} />
                <span>{course.duration}</span>
              </div>
              <div className="spec-item">
                <AwardIcon size={14} />
                <span>{course.level}</span>
              </div>
            </div>

            <div className="skills-tags-wrap">
              <span className="skills-heading">Key Skills Covered:</span>
              <div className="skills-badges-list">
                {course.skills.map((skill, idx) => (
                  <span key={idx} className="skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="course-card-footer">
              <div className="fee-info">
                <span className="fee-label">Student Access:</span>
                <strong className="fee-highlight">{course.fee}</strong>
              </div>
              <Link to="/contact" className="btn btn-enroll">
                <span>Enroll Now</span>
                <ArrowRightIcon size={16} />
              </Link>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};
