import React, { useContext } from "react";
import { StudentContext } from "../context/StudentContext";
import {
  HeartIcon,
  TrashIcon,
  CheckIcon,
  IdCardIcon,
  BookOpenIcon,
  MailIcon,
  AwardIcon
} from "./Icons";

export const StudentCard = ({ student, isFavouriteView = false }) => {
  const { addToFavourites, removeFromFavourites, isFavourite } = useContext(StudentContext);
  const alreadyFav = isFavourite(student.id);

  return (
    <div className={`student-card ${alreadyFav && !isFavouriteView ? "is-favourite-card" : ""}`}>
      <div className="card-header">
        <div className="card-title-group">
          <h3 className="student-name" title={student.name}>{student.name}</h3>
          <span className="student-roll">
            <IdCardIcon size={14} />
            {student.rollNo}
          </span>
        </div>
        {alreadyFav && !isFavouriteView && (
          <span className="badge-favourite-pill" title="In your favourites">
            <HeartIcon size={12} fill="currentColor" /> Favorited
          </span>
        )}
      </div>

      <div className="card-body">
        <div className="info-row">
          <BookOpenIcon size={15} className="info-icon" />
          <span className="info-label">Dept:</span>
          <span className="info-value">{student.department}</span>
        </div>

        <div className="info-row">
          <MailIcon size={15} className="info-icon" />
          <span className="info-label">Email:</span>
          <span className="info-value">{student.email}</span>
        </div>

        <div className="info-footer-badges">
          <span className="badge-tag year-tag">{student.year}</span>
          <span className="badge-tag gpa-tag">
            <AwardIcon size={13} /> GPA: {student.gpa}
          </span>
        </div>
      </div>

      <div className="card-actions">
        {isFavouriteView ? (
          <button
            onClick={() => removeFromFavourites(student.id)}
            className="btn btn-remove"
            title="Remove from favourites"
          >
            <TrashIcon size={16} />
            <span>Remove from Favourites</span>
          </button>
        ) : (
          <button
            onClick={() => addToFavourites(student)}
            disabled={alreadyFav}
            className={`btn ${alreadyFav ? "btn-already-fav" : "btn-add-fav"}`}
            title={alreadyFav ? "Already added to your favourites" : "Add to favourites"}
          >
            {alreadyFav ? (
              <>
                <CheckIcon size={16} />
                <span>Added to Favourite</span>
              </>
            ) : (
              <>
                <HeartIcon size={16} fill="none" />
                <span>Add to Favourite</span>
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
};
