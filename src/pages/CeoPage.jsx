import React from "react";
import { Link } from "react-router-dom";
import {
  SparklesIcon,
  AwardIcon,
  CheckCircleIcon,
  BookOpenIcon,
  PhoneIcon,
  ArrowRightIcon,
  StarIcon,
  UsersIcon
} from "../components/Icons";

export const CeoPage = () => {
  return (
    <main className="page-container">
      {/* Header */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">
            <SparklesIcon size={16} />
            <span>Leadership &amp; Vision</span>
          </div>
          <h1 className="page-title">Chief Executive Officer</h1>
          <p className="page-subtitle">
            Meet the visionary mind behind EMC College of Engineering and Technology &amp; the Error Makes Clever ecosystem.
          </p>
        </div>
      </section>

      {/* CEO Profile Card */}
      <section className="ceo-profile-section glass-panel">
        <div className="ceo-grid">
          {/* Avatar / Portrait Column */}
          <div className="ceo-portrait-wrap">
            <div className="ceo-avatar-frame">
              <div className="ceo-avatar-initials">EMC</div>
              <div className="ceo-verified-badge">
                <CheckCircleIcon size={20} className="check-icon" />
              </div>
            </div>

            <div className="ceo-quick-tags">
              <span className="tag-pill">Founder &amp; CEO</span>
              <span className="tag-pill">Tech Educator</span>
              <span className="tag-pill">TEDx Speaker</span>
            </div>
          </div>

          {/* Bio & Details Column */}
          <div className="ceo-bio-details">
            <span className="ceo-role-title">Founder, Chairman &amp; CEO</span>
            <h2 className="ceo-name">Shanmugarajan</h2>
            <p className="ceo-institution">
              EMC College of Engineering and Technology &bull; Error Makes Clever
            </p>

            <blockquote className="ceo-quote">
              "We believe that true engineering excellence is not about rote memorization or exam scores.
              It's about having the courage to embrace mistakes, innovate relentlessly, and write code that solves real-world human problems."
            </blockquote>

            <p className="ceo-paragraph">
              Having trained over <strong>805,000+ engineers</strong> on YouTube and impacted thousands through structured coding bootcamps,
              Shanmugarajan established EMC College of Engineering &amp; Technology to revolutionize higher engineering education in Tamil Nadu.
              His practical pedagogy blends university syllabus with real-world industry projects, 24/7 doubt resolution, and personalized placement coaching.
            </p>

            <div className="ceo-milestones-grid">
              <div className="milestone-box">
                <strong className="milestone-val">805k+</strong>
                <span className="milestone-lbl">Learners Guided</span>
              </div>
              <div className="milestone-box">
                <strong className="milestone-val">TEDx</strong>
                <span className="milestone-lbl">Anna Univ Speaker</span>
              </div>
              <div className="milestone-box">
                <strong className="milestone-val">ISO 9001</strong>
                <span className="milestone-lbl">Certified Quality</span>
              </div>
              <div className="milestone-box">
                <strong className="milestone-val">96%</strong>
                <span className="milestone-lbl">Campus Placement</span>
              </div>
            </div>

            <div className="ceo-action-buttons">
              <Link to="/courses" className="btn btn-hero-primary">
                <BookOpenIcon size={18} />
                <span>Explore Curated Courses</span>
              </Link>
              <Link to="/contact" className="btn btn-hero-secondary">
                <PhoneIcon size={18} />
                <span>Schedule a Campus Visit</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Pillars */}
      <section className="leadership-pillars-section">
        <h2 className="section-title text-center mb-4">Core Principles of EMC Education</h2>
        <div className="pillars-grid">
          <div className="pillar-card glass-panel">
            <div className="pillar-num">01</div>
            <h3 className="pillar-title">Learn by Doing</h3>
            <p className="pillar-desc">
              Every theoretical concept in the lecture hall is immediately backed by code commits, lab experiments, and live cloud deployments.
            </p>
          </div>

          <div className="pillar-card glass-panel">
            <div className="pillar-num">02</div>
            <h3 className="pillar-title">24/7 Mentor Access</h3>
            <p className="pillar-desc">
              Learning shouldn't stop when class ends. Our faculty and peer community ensure doubts are cleared around the clock.
            </p>
          </div>

          <div className="pillar-card glass-panel">
            <div className="pillar-num">03</div>
            <h3 className="pillar-title">Outcome-Obsessed</h3>
            <p className="pillar-desc">
              We measure success by student placements in high-tier engineering roles at companies like Zoho, Freshworks, and Amazon.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
