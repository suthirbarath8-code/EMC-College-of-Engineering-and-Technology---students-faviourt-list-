import React from "react";
import { Link } from "react-router-dom";
import {
  awardsData,
  platformStats,
  whyUsData,
  recruitersData,
  studentReviews,
  communityAvatars
} from "../data/homeData";
import { coursesList } from "../data/coursesData";
import {
  GraduationCapIcon,
  SparklesIcon,
  ArrowRightIcon,
  UsersIcon,
  BriefcaseIcon,
  StarIcon,
  AwardIcon,
  CheckCircleIcon,
  BookOpenIcon,
  HeartIcon
} from "../components/Icons";

export const HomePage = () => {
  return (
    <div className="home-page-wrapper">
      {/* 1. HERO SECTION */}
      <section className="emc-hero-section">
        <div className="emc-hero-container">
          <div className="hero-pill-tag">
            <SparklesIcon size={16} />
            <span>EMC College of Engineering and Technology</span>
          </div>
          <h1 className="emc-hero-title">
            Empowering Next-Gen Engineers Through{" "}
            <span className="hero-title-highlight">Hands-On Innovation</span> &amp; Industry Excellence
          </h1>
          <p className="emc-hero-subtitle">
            Autonomous institution affiliated with Anna University. Partnered with the Error Makes Clever ecosystem,
            empowering students with modern skills, 24/7 doubt resolution, and guaranteed placement guidance.
          </p>

          <div className="emc-hero-cta-group">
            <Link to="/courses" className="btn btn-hero-primary">
              <BookOpenIcon size={15} />
              <span>Explore Courses</span>
            </Link>
            <Link to="/students" className="btn btn-hero-secondary">
              <UsersIcon size={15} />
              <span>Student Directory</span>
            </Link>
            <Link to="/login" className="btn btn-hero-outline">
              <span>Teacher Portal</span>
              <ArrowRightIcon size={14} />
            </Link>
          </div>

          {/* Orbis-inspired Floating Live Dashboard Card */}
          <div className="hero-orbis-dashboard-card glass-panel">
            <div className="dashboard-top-nav">
              <div className="dash-tabs">
                <span className="dash-tab active">Overview</span>
                <span className="dash-tab">Departments</span>
                <span className="dash-tab">Placements</span>
              </div>
              <div className="dash-status-indicator">
                <span className="pulse-dot-lime" />
                <span>Live Campus Cluster</span>
              </div>
            </div>

            <div className="dashboard-header-block">
              <span className="dash-sub-pill">100 Registered Students</span>
              <h2 className="dash-main-title">EMC Academic Cluster, live</h2>
              <p className="dash-subtitle-text">Live telemetry from 5 engineering departments</p>
            </div>

            <div className="dashboard-metrics-inner-card">
              <div className="inner-metric-circle-box">
                <div className="circular-lime-ring">
                  <strong className="ring-num">96%</strong>
                  <small className="ring-sub">Placement</small>
                </div>
                <span className="ring-label-bottom">100 Students Enrolled</span>
              </div>

              <div className="inner-metric-stats-box">
                <div className="live-status-chip">
                  <span className="pulse-dot-lime" />
                  <span>Anna University • Autonomous • healthy</span>
                </div>
                <div className="main-stat-reading">
                  <span className="stat-reading-num">₹18 LPA</span>
                  <div className="stat-reading-sub">
                    <span>Highest CTC: Amazon</span>
                    <span>Average: ₹6.5 LPA</span>
                  </div>
                </div>
                <div className="dash-action-bar">
                  <div className="rating-pill">
                    <StarIcon size={14} fill="#B8F23A" />
                    <strong>4.9 Rating</strong>
                    <span>From 2,400+ reviews</span>
                  </div>
                  <Link to="/students" className="btn-dash-logs">
                    <UsersIcon size={14} />
                    <span>Directory</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ACHIEVEMENTS: AWARDS & RECOGNITION (IMAGE 1) */}
      <section className="awards-section">
        <div className="section-container">
          <div className="section-title-header text-center">
            <span className="section-pre-tag gold">ACHIEVEMENTS</span>
            <h2 className="section-main-heading">Awards &amp; Recognition</h2>
            <p className="section-sub-heading">
              We have been recognized by the following for our reputation
            </p>
          </div>

          <div className="awards-cards-grid">
            {awardsData.map((award) => (
              <div key={award.id} className="award-card glass-panel">
                <span className="award-recognized-label">{award.recognizedBy}</span>
                <div className="award-badge-emblem">
                  {award.iconName === "iso" && (
                    <div className="emblem-circle iso-circle">
                      <span className="emblem-sub">CERTIFIED</span>
                      <strong className="emblem-main">ISO</strong>
                      <span className="emblem-sub">9001:2015</span>
                      <span className="emblem-sub">COMPANY</span>
                    </div>
                  )}
                  {award.iconName === "social-eagle" && (
                    <div className="emblem-circle eagle-circle">
                      <strong className="eagle-logo-text">SE</strong>
                      <span className="eagle-sub-text">SOCIAL EAGLE</span>
                    </div>
                  )}
                  {award.iconName === "youtube" && (
                    <div className="emblem-rect youtube-rect">
                      <div className="yt-play-triangle" />
                    </div>
                  )}
                  {award.iconName === "aiesec" && (
                    <div className="emblem-rect aiesec-rect">
                      <strong className="aiesec-text">AIESEC</strong>
                    </div>
                  )}
                  {award.iconName === "ted" && (
                    <div className="emblem-circle ted-circle">
                      <strong className="ted-text">TED</strong>
                    </div>
                  )}
                </div>
                <h4 className="award-card-title">{award.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PLATFORM STATS & NETWORK (IMAGE 2) */}
      <section className="stats-and-network-section">
        <div className="section-container">
          {/* Top 4 Stat Blocks */}
          <div className="platform-stats-grid">
            {platformStats.map((stat, idx) => (
              <div key={idx} className="platform-stat-card glass-panel">
                <h3 className="stat-big-number">{stat.count}</h3>
                <p className="stat-big-label">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Two Wide Cards */}
          <div className="dual-network-grid">
            {/* Left Card: An always-on support network */}
            <div className="network-card glass-panel">
              <h3 className="network-card-title">An always-on support network</h3>
              <p className="network-card-subtitle">
                Swap setups and share tips in over 149 online communities.
              </p>
              <div className="social-bubbles-illustration">
                <div className="bubble-item fb">FB</div>
                <div className="bubble-item tw">TW</div>
                <div className="bubble-item dc">DC</div>
                <div className="bubble-item sl">SL</div>
                <div className="bubble-item rd">RD</div>
                <div className="bubble-item chat1">💬</div>
                <div className="bubble-item clap">👏</div>
                <div className="bubble-item chat2">💭</div>
              </div>
            </div>

            {/* Right Card: Choose your language */}
            <div className="network-card glass-panel">
              <h3 className="network-card-title">Choose your language</h3>
              <p className="network-card-subtitle">
                Master industry-standard stacks with project-oriented modules.
              </p>
              <div className="tech-stack-matrix">
                <span className="tech-badge">HTML5</span>
                <span className="tech-badge">CSS3</span>
                <span className="tech-badge">JavaScript</span>
                <span className="tech-badge">React</span>
                <span className="tech-badge">Node.js</span>
                <span className="tech-badge">Express</span>
                <span className="tech-badge">MongoDB</span>
                <span className="tech-badge">Python</span>
                <span className="tech-badge">Firebase</span>
                <span className="tech-badge">GitHub</span>
                <span className="tech-badge">REST API</span>
                <span className="tech-badge">Next.js</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY US: BEST CHOICE FOR LEARNING (IMAGE 4) */}
      <section className="why-us-section">
        <div className="section-container">
          <div className="section-title-header text-center">
            <span className="section-pre-tag gold">WHY US</span>
            <h2 className="section-main-heading">
              Why We're the Best Choice for Your Learning
            </h2>
          </div>

          <div className="why-us-grid">
            {whyUsData.map((item) => (
              <div
                key={item.id}
                className="why-us-card"
                style={{
                  backgroundColor: item.bgColor,
                  border: `1px solid ${item.borderColor}`
                }}
              >
                <h3 className="why-us-card-title" style={{ color: item.titleColor }}>{item.title}</h3>
                <p className="why-us-card-desc" style={{ color: "#374151" }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PLACEMENTS & WHERE OUR STUDENTS WORK */}
      <section className="placement-section">
        <div className="section-container">
          <div className="section-title-header text-center">
            <span className="section-pre-tag gold">PLACEMENTS</span>
            <h2 className="section-main-heading">Where Our Students Work</h2>
            <p className="section-sub-heading">
              Top technology giants and multinational product enterprises actively hire EMC College graduates.
            </p>
          </div>

          <div className="recruiters-grid">
            {recruitersData.map((recruiter, idx) => (
              <div key={idx} className="recruiter-card glass-panel">
                <div className="recruiter-icon-box">
                  <BriefcaseIcon size={20} className="recruiter-icon" />
                </div>
                <div className="recruiter-details">
                  <h4 className="recruiter-name">{recruiter.name}</h4>
                  <span className="recruiter-role">{recruiter.role}</span>
                  <span className="recruiter-package">{recruiter.package}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FEATURED COURSES PREVIEW */}
      <section className="featured-courses-section">
        <div className="section-container">
          <div className="section-header-flex">
            <div>
              <span className="section-pre-tag gold">ACADEMIC OFFERINGS</span>
              <h2 className="section-main-heading">Top Industry Courses</h2>
            </div>
            <Link to="/courses" className="link-arrow-btn">
              <span>View All Courses</span>
              <ArrowRightIcon size={16} />
            </Link>
          </div>

          <div className="courses-showcase-grid">
            {coursesList.slice(0, 3).map((course) => (
              <div key={course.id} className="course-card glass-panel">
                <div className="course-card-top">
                  <span className="course-cat-tag">{course.category}</span>
                  <span className="course-badge-pill">{course.badge}</span>
                </div>
                <h3 className="course-title">{course.title}</h3>
                <p className="course-desc">{course.description}</p>
                <div className="course-meta-row">
                  <span>Duration: {course.duration}</span>
                  <span>&bull;</span>
                  <span>{course.enrolled}</span>
                </div>
                <div className="course-footer-cta">
                  <span className="course-fee-tag">{course.fee}</span>
                  <Link to="/courses" className="btn btn-sm-primary">
                    View Syllabus
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. STUDENT REVIEWS */}
      <section className="student-reviews-section">
        <div className="section-container">
          <div className="section-title-header text-center">
            <span className="section-pre-tag gold">TESTIMONIALS</span>
            <h2 className="section-main-heading">What Our Students Say</h2>
            <p className="section-sub-heading">
              Real feedback from students who transformed their engineering careers with EMC College.
            </p>
          </div>

          <div className="reviews-grid">
            {studentReviews.map((rev) => (
              <div key={rev.id} className="review-card glass-panel">
                <div className="review-stars-row">
                  {[...Array(rev.rating)].map((_, i) => (
                    <StarIcon key={i} size={16} fill="#FF693D" className="star-active" />
                  ))}
                </div>
                <p className="review-quote">"{rev.text}"</p>
                <div className="review-author-meta">
                  <div className="review-avatar-circle">
                    {rev.name.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <h4 className="author-name">{rev.name}</h4>
                    <span className="author-dept">{rev.dept}</span>
                    <span className="author-company">{rev.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. COMMUNITY: JOIN A GLOBAL MOVEMENT (IMAGE 4) */}
      <section className="community-movement-section">
        <div className="section-container text-center">
          <span className="section-pre-tag gold">COMMUNITY</span>
          <h2 className="section-main-heading">Join a global movement.</h2>
          <p className="section-sub-heading max-w-600">
            Our vibrant community produces content, teaches courses, and leads events all over.
          </p>

          <div className="community-avatars-row">
            {communityAvatars.map((person, index) => (
              <div
                key={index}
                className="community-face-circle"
                style={{ backgroundColor: person.color }}
                title={`${person.name} - ${person.role}`}
              >
                <span>{person.initials}</span>
              </div>
            ))}
          </div>

          <div className="community-join-cta">
            <Link to="/courses" className="btn btn-hero-primary">
              Join Our Community Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
