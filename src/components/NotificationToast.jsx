import React from "react";
import { useStudentContext } from "../context/StudentContext";
import {
  CheckCircleIcon,
  AlertCircleIcon,
  InfoIcon,
  CloseIcon
} from "./Icons";

export const NotificationToast = () => {
  const { toast, setToast } = useStudentContext();

  if (!toast) return null;

  const getIcon = () => {
    switch (toast.type) {
      case "warning":
        return <AlertCircleIcon className="toast-icon warning" size={20} />;
      case "info":
        return <InfoIcon className="toast-icon info" size={20} />;
      case "success":
      default:
        return <CheckCircleIcon className="toast-icon success" size={20} />;
    }
  };

  return (
    <div className={`notification-toast ${toast.type}`}>
      <div className="toast-content">
        {getIcon()}
        <span className="toast-message">{toast.message}</span>
      </div>
      <button
        onClick={() => setToast(null)}
        className="toast-close"
        aria-label="Close notification"
      >
        <CloseIcon size={16} />
      </button>
    </div>
  );
};
