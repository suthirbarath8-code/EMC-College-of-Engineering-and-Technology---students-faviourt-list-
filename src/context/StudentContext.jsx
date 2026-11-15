import React, { createContext, useContext, useState, useEffect } from "react";
import { initialStudents } from "../data/studentsData";

// 1. Create the Student Context
export const StudentContext = createContext();

// 2. Create the Provider Component
export const StudentProvider = ({ children }) => {
  // All registered students (persisted in localStorage)
  const [students, setStudents] = useState(() => {
    try {
      const saved = localStorage.getItem("emc_students");
      return saved ? JSON.parse(saved) : initialStudents;
    } catch (e) {
      return initialStudents;
    }
  });

  // Global state for favourite students
  const [favourites, setFavourites] = useState(() => {
    try {
      const saved = localStorage.getItem("favourite_students");
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  // Global Teacher Authentication state
  const [teacher, setTeacher] = useState(() => {
    try {
      const savedTeacher = localStorage.getItem("emc_teacher");
      return savedTeacher ? JSON.parse(savedTeacher) : null;
    } catch (e) {
      return null;
    }
  });

  // Global notification toast state
  const [toast, setToast] = useState(null);

  // Persist students to localStorage whenever updated
  useEffect(() => {
    try {
      localStorage.setItem("emc_students", JSON.stringify(students));
    } catch (e) {
      console.error("Failed to save students to localStorage", e);
    }
  }, [students]);

  // Persist favourites to localStorage whenever updated
  useEffect(() => {
    try {
      localStorage.setItem("favourite_students", JSON.stringify(favourites));
    } catch (e) {
      console.error("Failed to save favourites to localStorage", e);
    }
  }, [favourites]);

  // Persist teacher auth to localStorage
  useEffect(() => {
    try {
      if (teacher) {
        localStorage.setItem("emc_teacher", JSON.stringify(teacher));
      } else {
        localStorage.removeItem("emc_teacher");
      }
    } catch (e) {
      console.error("Failed to save teacher auth state", e);
    }
  }, [teacher]);

  // Toast trigger helper
  const showToast = (message, type = "success") => {
    setToast({ message, type, id: Date.now() });
    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  // Add a new student
  const addStudent = (studentData) => {
    if (!studentData.name || !studentData.rollNo || !studentData.department) {
      showToast("Please provide Student Name, Roll Number, and Department.", "warning");
      return { success: false, error: "Missing required fields" };
    }

    // Check duplicate roll number
    const isDuplicateRoll = students.some(
      (s) => s.rollNo.trim().toLowerCase() === studentData.rollNo.trim().toLowerCase()
    );
    if (isDuplicateRoll) {
      showToast(`Roll number "${studentData.rollNo}" is already registered!`, "warning");
      return { success: false, error: "Duplicate roll number" };
    }

    const newStudent = {
      id: Date.now(),
      name: studentData.name.trim(),
      rollNo: studentData.rollNo.trim().toUpperCase(),
      department: studentData.department,
      year: studentData.year || "1st Year",
      email: studentData.email?.trim() || `${studentData.name.toLowerCase().replace(/\s+/g, ".")}@campus.tn.edu`,
      gpa: studentData.gpa ? String(studentData.gpa) : "3.85"
    };

    setStudents((prev) => [newStudent, ...prev]);
    showToast(`Student "${newStudent.name}" enrolled successfully!`, "success");
    return { success: true, student: newStudent };
  };

  // Teacher Login Function
  const loginTeacher = (email, password) => {
    if (email && password) {
      const loggedUser = {
        name: "Prof. Anitha Selvan",
        role: "Senior Professor & Faculty Lead",
        department: "Computer Science & Engineering",
        facultyId: "EMC-FAC-104",
        email: email
      };
      setTeacher(loggedUser);
      showToast(`Welcome back, ${loggedUser.name}! Login successful.`, "success");
      return { success: true, user: loggedUser };
    }
    showToast("Invalid credentials. Please enter email and password.", "warning");
    return { success: false, error: "Invalid credentials" };
  };

  // Teacher Logout Function
  const logoutTeacher = () => {
    setTeacher(null);
    showToast("Logged out of teacher portal.", "info");
  };

  // Add student to favourites with duplicate prevention
  const addToFavourites = (student) => {
    const isAlreadyFavourite = favourites.some((item) => item.id === student.id);

    if (isAlreadyFavourite) {
      showToast(`"${student.name}" is already in your favourites!`, "warning");
      return false;
    }

    setFavourites((prev) => [...prev, student]);
    showToast(`Added "${student.name}" to favourites!`, "success");
    return true;
  };

  // Remove student from favourites
  const removeFromFavourites = (studentId) => {
    const studentToRemove = favourites.find((s) => s.id === studentId);
    setFavourites((prev) => prev.filter((item) => item.id !== studentId));
    
    if (studentToRemove) {
      showToast(`Removed "${studentToRemove.name}" from favourites.`, "info");
    }
  };

  // Check if a student is already marked as favourite
  const isFavourite = (studentId) => {
    return favourites.some((item) => item.id === studentId);
  };

  // Clear all favourites
  const clearFavourites = () => {
    setFavourites([]);
    showToast("Cleared all favourite students.", "info");
  };

  const contextValue = {
    students,
    addStudent,
    favourites,
    addToFavourites,
    removeFromFavourites,
    isFavourite,
    clearFavourites,
    teacher,
    loginTeacher,
    logoutTeacher,
    toast,
    setToast,
  };

  return (
    <StudentContext.Provider value={contextValue}>
      {children}
    </StudentContext.Provider>
  );
};

// Custom hook for convenient usage of StudentContext
export const useStudentContext = () => {
  const context = useContext(StudentContext);
  if (!context) {
    throw new Error("useStudentContext must be used within a StudentProvider");
  }
  return context;
};
