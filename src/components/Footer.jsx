import React from "react";
import { Link } from "react-router-dom";
import {
  YouTubeIcon,
  InstagramIcon,
  LinkedInIcon,
  FacebookIcon,
  StarIcon,
  AwardIcon
} from "./Icons";

export const Footer = () => {
  return (
    <footer className="emc-site-footer">
      <div className="footer-content-container">
        <div className="footer-columns-grid">
          {/* Column 1: Our Free Courses */}
          <div className="footer-col">
            <h4 className="footer-col-title">Our Free Courses</h4>
            <ul className="footer-links-list">
              <li><Link to="/courses">FullStack</Link></li>
              <li><Link to="/courses">FrontEnd</Link></li>
              <li><Link to="/courses">Backend</Link></li>
              <li><Link to="/courses">Python</Link></li>
              <li><Link to="/courses">Java</Link></li>
              <li><Link to="/courses">GitHub</Link></li>
              <li><Link to="/courses">Html</Link></li>
              <li><Link to="/courses">CSS</Link></li>
              <li><Link to="/courses">JavaScript</Link></li>
            </ul>
          </div>

          {/* Column 2: Our Departments */}
          <div className="footer-col">
            <h4 className="footer-col-title">Our Departments</h4>
            <ul className="footer-links-list">
              <li><Link to="/students">Computer Science &amp; Engineering</Link></li>
              <li><Link to="/students">Information Technology</Link></li>
              <li><Link to="/students">Electronics &amp; Communication</Link></li>
              <li><Link to="/students">Mechanical Engineering</Link></li>
              <li><Link to="/students">Electrical &amp; Electronics</Link></li>
            </ul>
          </div>

          {/* Column 3: EMC College */}
          <div className="footer-col">
            <h4 className="footer-col-title">EMC College</h4>
            <ul className="footer-links-list">
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/contact">Privacy Policy</Link></li>
              <li><Link to="/contact">Refund Policy</Link></li>
              <li><Link to="/contact">Terms Of Use</Link></li>
              <li><Link to="/">Student Reviews</Link></li>
              <li><Link to="/contact">Careers</Link></li>
              <li><Link to="/login">Teacher Login</Link></li>
            </ul>
          </div>

          {/* Column 4: Badges (Social Eagle & Google 4.8) */}
          <div className="footer-col footer-badges-col">
            <div className="featured-badge-card">
              <div className="laurel-wreath">
                <AwardIcon size={28} className="wreath-icon" />
              </div>
              <div className="featured-text">
                <span className="featured-sub">Featured</span>
                <span className="featured-main">by Social Eagle</span>
              </div>
            </div>

            <div className="google-rating-card">
              <div className="google-g-logo">
                <span className="google-color-g">G</span>
              </div>
              <div className="rating-info">
                <div className="stars-row">
                  <StarIcon size={16} fill="#B8F23A" className="star-active" />
                  <StarIcon size={16} fill="#B8F23A" className="star-active" />
                  <StarIcon size={16} fill="#B8F23A" className="star-active" />
                  <StarIcon size={16} fill="#B8F23A" className="star-active" />
                  <StarIcon size={16} fill="#B8F23A" className="star-active" />
                </div>
                <span className="google-rating-text">Google (4.8)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Removed unwanted words as requested */}
        <div className="footer-bottom-bar">
          <div className="footer-legal-copy">
            <span>&copy; 2025 EMC College of Engineering and Technology</span>
          </div>

          <div className="footer-social-icons">
            <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
              <YouTubeIcon size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <InstagramIcon size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedInIcon size={20} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <FacebookIcon size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
