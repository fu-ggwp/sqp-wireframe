# Smart Quiz Platform Frontend Prototype

Frontend prototype for the Smart Quiz Platform (SQP) SRS. The goal of this project is to provide complete UI screens, fields, states, and mock interactions so Section 3 - Functional Requirements can be written and illustrated with screenshots.

This is not a production backend implementation. Authentication, payment, AI, email, import validation, report export, exam auto-save, and persistence are mocked locally in React state or mock data.

## Demo Accounts and Role Workspaces

The prototype separates the interface by role. Use the login screen to enter one demo account at a time:

| Role | Demo Email | Demo Password | Workspace |
| ---- | ---------- | ------------- | --------- |
| Learner | `linh@sqp.edu.vn` | `learner123` | `/learner/dashboard` |
| Teacher | `an.teacher@sqp.edu.vn` | `teacher123` | `/teacher/dashboard` |
| Admin | `admin@sqp.edu.vn` | `admin123` | `/admin/dashboard` |

Each workspace has its own sidebar, account context, search placeholder, dashboard fields, and role-specific feature shortcuts. After login, users cannot switch roles from the app shell. To use another role, logout and choose another demo account.

## Tech Stack

- React + Vite
- TypeScript
- Tailwind CSS
- React Router
- lucide-react icons
- Local mock data only

## Requirements

- Node.js 20+
- npm 10+

## Run Locally

```bash
npm install
npm run dev
```

Default local URL:

```text
http://127.0.0.1:5173/
```

Useful checks:

```bash
npm run typecheck
npm run build
```

## Project Structure

```text
src/
  components/
    layout/        App shell, header, sidebar navigation
    ui/            Reusable Button, Card, Input, Select, Table, Modal, etc.
  data/            Local mock data for users, classes, study sets, exams, etc.
  pages/           Page-level screen prototypes by feature group
  styles/          Tailwind entry CSS
  types/           Shared TypeScript types
  App.tsx          Router provider
  router.tsx       Route definitions
  main.tsx         React entrypoint

docs/
  SECTION_3_SCREEN_MAPPING.md
  SECTION_3_TEMPLATE.md
```

## Documentation Files

- `docs/SECTION_3_SCREEN_MAPPING.md` maps every screen to route, actor, related use case, main components, actions, and suggested Section 3 subsection.
- `docs/SECTION_3_TEMPLATE.md` provides a copy-ready template for writing each Functional Requirement subsection in the SRS.

## Covered Screen Groups

### A. Public Access & Discovery

- `/`
- `/search/study-sets`
- `/search/users`
- `/sets/:id/public`

### B. Authentication & Profile

- `/auth/register`
- `/auth/login`
- `/auth/forgot-password`
- `/auth/reset-password`
- `/profile`
- `/profile/edit`
- `/profile/change-password`

### C. Learner Class Management

- `/learner/dashboard`
- `/learner/classes`
- `/learner/classes/join`
- `/learner/classes/:id`

### D. Study Set Learning

- `/learner/study-sets`
- `/learner/study-sets/:id`
- `/learner/study-sets/:id/flashcards`
- `/learner/study-sets/:id/quiz`
- `/learner/study-sets/:id/result`
- `/learner/study-sets/:id/review`
- `/learner/progress`

### E. Learner Exam Session

- `/learner/exams`
- `/learner/exams/:id/info`
- `/learner/exams/:id/take`
- `/learner/exams/:id/result`

### F. Teacher Class Management

- `/teacher/dashboard`
- `/teacher/classes`
- `/teacher/classes/create`
- `/teacher/classes/:id`
- `/teacher/classes/:id/invitation`
- `/teacher/classes/:id/members`
- `/teacher/classes/:id/join-requests`
- `/teacher/classes/:id/assign-study-set`

### G. Question Bank Management

- `/teacher/question-banks`
- `/teacher/question-banks/create`
- `/teacher/question-banks/:id`
- `/teacher/question-banks/:id/edit`
- `/teacher/question-banks/:id/questions/create`
- `/teacher/question-banks/:id/questions/:questionId/edit`
- `/teacher/question-banks/:id/import`
- `/teacher/question-banks/:id/import/errors`
- `/teacher/question-banks/:id/import/preview`
- `/teacher/question-banks/:id/ai-generate`

### H. Teacher Study Set & Exam

- `/teacher/study-sets`
- `/teacher/study-sets/create`
- `/teacher/exams`
- `/teacher/exams/create`
- `/teacher/exams/:id/configure`
- `/teacher/exams/:id/info`
- `/teacher/exams/:id/monitor`

### I. Analytics & Reporting

- `/teacher/analytics`
- `/teacher/reports/export`

### J. Payment & Subscription

- `/premium`
- `/premium/upgrade`
- `/premium/payment-result`

### K. Admin Management & System Monitoring

- `/admin/dashboard`
- `/admin/users`
- `/admin/users/:id`
- `/admin/resources`
- `/admin/system-status`

### L. Shared / Utility

- `/notifications`
- `/access-denied`
- `/not-found`

## Mock Interactions Included

- Local search/filter for public study sets, users, question banks, classes, and exams
- Flashcard flip, previous, next
- Study set quiz answer selection and inline feedback
- Wrong-answer review with AI explanation mock and non-premium upgrade message
- Join class form with pending request state
- Excel import upload preview, validation summary, error table, and preview table
- Admin role dropdown with local state update
- Exam answer selection and submit confirmation modal
- Payment success result screen
- Notification mark-as-read state
- Delete/hide/remove actions with local status messages

## Mock-only Backend Notes

The following are intentionally not integrated:

- Supabase authentication and sessions
- Google OAuth
- Database persistence
- Payment gateway
- Gemini API
- Email service
- Excel parser
- Real exam auto-save or auto-submit
- Real report export files
- Real authorization enforcement

## Recommended Workflow for SRS Section 3

1. Run the prototype with `npm run dev`.
2. Open the required route from `docs/SECTION_3_SCREEN_MAPPING.md`.
3. Adjust UI state if needed by using visible buttons and filters.
4. Capture the screen manually.
5. Copy `docs/SECTION_3_TEMPLATE.md` into the SRS and fill fields/components/actions/business rules.

## Current Verification

The project has been verified with:

```bash
npm run typecheck
npm run build
```
