# 🎓 EMC College of Engineering and Technology
### Autonomous Institution &bull; Error Makes Clever Ecosystem &bull; Academic Portal

A modern, responsive multi-page web portal demonstrating **React Router (v7)**, global state management with **useContext**, conditional rendering, **Glassmorphism design**, and the **Lora** typography.

---

## 🌟 Pages & Architecture

1. **Home Page (`/`)**:
   - **Hero Section**: EMC College title, mission statement, metrics ribbon (96% placement rate, ₹18 LPA highest package, 50+ hiring partners, ISO certified).
   - **Achievements & Awards (Image 1)**: ISO 9001:2015, Social Eagle Promising Tech Educator, YouTube Silver Creator Awards, AIESEC Creator for Change, TED by MIT Anna University.
   - **Platform Stats & Support Network (Image 2)**:
     - 5,000+ Learners
     - 805k+ Subscribers on YouTube
     - 5,000+ Students on WhatsApp
     - 10,000+ Followers on LinkedIn
     - "An always-on support network" & "Choose your language" tech stack matrix.
   - **Why Us (Image 4)**: 4 colored cards:
     - Simplified Teaching (Soft Green)
     - 24/7 Doubt Support (Soft Yellow)
     - Experienced Educators (Soft Blue)
     - Placement Assistance (Soft Purple)
   - **Placements & Recruiter Network**: Top recruiters (Zoho, Accenture, Infosys, Amazon, Microsoft, TCS, Cognizant, Freshworks).
   - **Featured Courses**: Highlights of top industry specializations.
   - **Student Reviews**: Testimonials from placed students.
   - **Community (Image 4)**: "Join a global movement." with student avatar gallery.

2. **Course Catalog Page (`/courses`)**:
   - Comprehensive course specializations (Full Stack, AI & Data Science, Cloud & DevOps, Master DSA, Embedded IoT, CAD/CAM).
   - Filter by technology domain, course duration, skills covered, and enrollment links.

3. **Student Directory Page (`/students`)**:
   - 100 students across 5 engineering departments (20 students in each department).
   - Instant search by name or roll number, department filter (clean without `(20 each)`).
   - "Add to Favourite" button with global duplicate prevention.

4. **Favourite Students Page (`/favourites`)**:
   - Synchronized globally using `StudentContext` (`createContext()` + `useContext()`).
   - Real-time removal with toast feedback.
   - Required empty state: *"No favourite students added yet"*.

5. **Teacher Portal Login Page (`/login`)**:
   - Dedicated authentication portal for faculty and teachers.
   - Pre-configured demo credentials: `teacher@emccollege.edu.in` / `emc123` with a one-click demo login button.
   - Displays active faculty badge and profile when signed in, with one-click logout.

6. **CEO Leadership Page (`/ceo`)**:
   - Visionary message from Founder & CEO Shanmugarajan.
   - Educational milestones, TEDx journey, and core principles.

7. **Contact & Admissions Page (`/contact`)**:
   - Campus address (Sriperumbudur, Tamil Nadu), helpline numbers, and email contacts.
   - Interactive inquiry submission form with instant feedback state.

8. **Footer (Image 3)**:
   - 4-column layout: Our Free Courses, Quick Links, EMC College, Social Eagle & Google 4.8 star badges.
   - Legal copyright & social media icons (YouTube, Instagram, LinkedIn, Facebook).

---

## 🎨 Color Palette & Themes

- **Base Colors**:
  - **Ink Black** (`#030407`): Deep nocturnal background base for Home, footer, and high-contrast text on Lime buttons
  - **Silver Glass** (`#AAB0C4`): Frosted glass borders, subtle specular highlights, secondary text, and inactive pills
  - **Lime** (`#B8F23A`): Radiant neon green primary action buttons, hover glows, metrics highlights, and active status badges
  - **Subpage Gray** (`#E5E7EB`): Clean modern gray background applied to all subpages (`/courses`, `/students`, `/favourites`, `/ceo`, `/contact`, `/login`) with high-contrast frosted white glass panels (`rgba(255, 255, 255, 0.95)`), dark ink typography, and crisp borders
- **Hero Section Background (Reference: Orbis Neon UI)**:
  - Left side in solid **Ink Black (`#030407`)** transitioning smoothly across to the vertical glowing neon light tubes (`/hero-neon-bg.jpg`) on the right half.
  - Features an **Orbis-inspired floating frosted glass live telemetry dashboard card** reflecting the glowing neon green & blue vertical lights behind it.
- **Student Enrollment Feature**:
  - Interactive **"+ Add New Student"** modal dialog allowing faculty/mentors to enroll new students with Name, Roll Number, Department, Academic Year, Email, and GPA.
  - Real-time React Context synchronization, duplicate roll number validation, and persistent storage.
- **Navbar & Footer Consistency**:
  - Logo icon removed from navbar for clean typography.
  - Quick links block replaced with "Our Departments" linking directly to the Student Directory.
  - **Footer Section Colors**: Unified across all pages to match the dark Ink Black translucent glass Home footer (`rgba(3, 4, 7, 0.94)` with white titles, silver links, lime hover, laurel & Google badges).
  - **Student Card Layout**: Clean typography-first design with student avatar initials box removed across all directory and favorites cards.
  - **Button Color Refinements**:
    - "Add to Favourite" styled with clean white background (`#ffffff`), subtle border, and vibrant neon green text & icon (`var(--lime)` / `#B8F23A`) matching the home section.
    - "+ Add New Student" and modal enrollment actions styled with clean white background (`#ffffff`), subtle border, and matching neon green text & icon (`var(--lime)` / `#B8F23A`).
- **Typography**: `Lora` (Google Fonts + offline TTF `@font-face` fallback)
- **Icons**: 100% custom inline SVG icons (no external icon dependencies)

---

## 🚀 How to Run

1. Open your terminal in this directory:
   ```powershell
   cd "f:\student faviourt list"
   ```

2. Start the Vite development server:
   ```powershell
   npm run dev
   ```

3. Open `http://localhost:5173/` in your browser.
