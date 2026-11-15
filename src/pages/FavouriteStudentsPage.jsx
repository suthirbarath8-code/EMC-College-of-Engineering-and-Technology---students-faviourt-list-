import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StudentContext } from "../context/StudentContext";
import { StudentCard } from "../components/StudentCard";
import {
  HeartCrackIcon,
  HeartIcon,
  ArrowLeftIcon,
  TrashIcon
} from "../components/Icons";

export const FavouriteStudentsPage = () => {
  const { favourites, clearFavourites } = useContext(StudentContext);

  return (
    <main className="page-container">
      {/* Header */}
      <section className="hero-section fav-hero">
        <div className="hero-content">
          <Link to="/students" className="back-link">
            <ArrowLeftIcon size={16} />
            <span>Back to Student Directory</span>
          </Link>
          <div className="hero-badge fav-badge-style">
            <HeartIcon size={16} fill="currentColor" />
            <span>Curated Shortlist</span>
          </div>
          <h1 className="page-title">Favourite Students</h1>
          <p className="page-subtitle">
            Manage your shortlisted students. The data is synchronized globally across the application via React Context.
          </p>
        </div>

        {favourites.length > 0 && (
          <div className="fav-hero-actions">
            <button
              onClick={clearFavourites}
              className="btn btn-outline-danger"
              title="Remove all from favourites"
            >
              <TrashIcon size={16} />
              <span>Clear All Favourites</span>
            </button>
          </div>
        )}
      </section>

      {/* Main Content Area */}
      <section className="student-grid-section">
        {favourites.length === 0 ? (
          // Required Empty State: Display "No favourite students added yet"
          <div className="empty-state-card empty-fav-state">
            <div className="empty-icon-wrapper">
              <HeartCrackIcon size={56} className="empty-fav-icon" />
            </div>
            <h2 className="empty-title">No favourite students added yet</h2>
            <p className="empty-description">
              You haven't marked any students as your favourite yet. Explore the student directory and click <strong>"Add to Favourite"</strong> on any student to add them here!
            </p>
            <Link to="/students" className="btn btn-primary btn-explore">
              <ArrowLeftIcon size={18} />
              <span>Browse Student List</span>
            </Link>
          </div>
        ) : (
          <>
            <div className="section-header">
              <h2 className="section-title">
                Your Saved Favourites ({favourites.length})
              </h2>
              <span className="section-note">
                Click "Remove from Favourites" on any card to update the list instantly.
              </span>
            </div>

            <div className="student-cards-grid">
              {favourites.map((student) => (
                <StudentCard
                  key={student.id}
                  student={student}
                  isFavouriteView={true}
                />
              ))}
            </div>
          </>
        )}
      </section>
    </main>
  );
};
