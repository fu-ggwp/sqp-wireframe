# Section 3 Screen Mapping - Smart Quiz Platform

This mapping follows the updated SRS DOCX. Study Set is the primary learning object. Question Bank is Teacher-only repository. Legacy role-prefixed Study Set routes are kept only as redirects and are not used for Section 3.

| Section 3 | Screen | Route | Actor | Related UC | Main Visible Fields / Components |
| --------- | ------ | ----- | ----- | ---------- | -------------------------------- |
| 3.1.1 | Home Page | / | Guest | UC-01 | Hero search, subject cards, public Study Set cards, login/register/create entry buttons |
| 3.1.2 | Search Public Study Sets | /search/study-sets | Guest, Learner, Teacher | UC-02 | Keyword, subject filter, level filter, public Study Set result cards, compact pagination |
| 3.1.3 | Search Public User Accounts | /search/users | Guest, Learner, Teacher | UC-03 | Keyword, role filter, premium/status badges, user table |
| 3.1.4 | Public Study Set Detail | /sets/:id/public | Guest, Learner, Teacher | UC-04, UC-05 | Cover image, title, description, subject, topic, tags, preview questions, flashcard action |
| 3.2.1 | Register Account | /auth/register | Guest | UC-07 | Full name, email, phone, requested role, password, confirm password, Google button |
| 3.2.2 | Login With Account | /auth/login | Guest, Learner, Teacher, Admin | UC-08, UC-09, UC-11 | Email, password, remember option, Google button, forgot password link, login status message |
| 3.2.3 | Forgot Password | /auth/forgot-password | Guest | UC-10 | Registered email, delivery method, send code button, verification code, verify button, continue reset button |
| 3.2.4 | Reset Password | /profile/reset-password | Learner, Teacher, Admin | UC-10 | Account email, delivery method, verification token, new password, confirm password, logout devices checkbox |
| 3.2.5 | View Personal Profile | /profile | Learner, Teacher, Admin | UC-12, UC-11 | Avatar, full name, username, role, premium status, email, phone, account status, bio, logout action |
| 3.2.6 | Edit Personal Profile | /profile/edit | Learner, Teacher, Admin | UC-13 | Full name, phone, avatar initials, username, bio/profile details, save/cancel actions |
| 3.2.7 | Change Password | /profile/change-password | Learner, Teacher, Admin | UC-14 | Current password, new password, confirm password, validation message, update button |
| 3.2.8 | Notification Center | /notifications | Learner, Teacher, Admin | Shared | Notification table, actor, created date, read/unread status, mark as read action |
| 3.3.1 | Learner Dashboard | /learner/dashboard | Learner | UC-16, UC-18, UC-22, UC-23 | Continue Study Set cards, joined classes, available exams, progress metrics, study preferences |
| 3.3.2 | View Joined Classes | /learner/classes | Learner | UC-16 | Search, subject filter, status filter, class table, open class action |
| 3.3.3 | Join Class | /learner/classes/join | Learner | UC-17 | Class code, invitation link, request type, learner email, section, guardian contact, request message, pending message |
| 3.3.4 | Learner Class Detail | /learner/classes/:id | Learner | UC-16 | Class metadata, material filters, assigned Study Set cards, progress indicators |
| 3.3.5 | Teacher Dashboard | /teacher/dashboard | Teacher | UC-27, UC-33, UC-46, UC-49 | Teaching metrics, class health, teaching workflow, class table, quick create buttons |
| 3.3.6 | View Created Classes | /teacher/classes | Teacher | UC-27 | Search, subject filter, status filter, join policy filter, class table |
| 3.3.7 | Create Class | /teacher/classes/create | Teacher | UC-28 | Class name, subject, grade, academic year, class code, capacity, due time, language, join policy, status, dates, description |
| 3.3.8 | Teacher Class Detail | /teacher/classes/:id | Teacher | UC-27, UC-29, UC-30, UC-45 | Class metadata, content filters, assigned Study Set table, invitation/member/assignment actions |
| 3.3.9 | Generate Class Invitation | /teacher/classes/:id/invitation | Teacher | UC-29 | Class code, invitation link, recipient emails, expiry date, maximum uses, approval rule, email message |
| 3.3.10 | View Class Member List | /teacher/classes/:id/members | Teacher | UC-30, UC-32 | Search, member status filter, premium filter, learner table, remove action |
| 3.3.11 | Approve Class Join Request | /teacher/classes/:id/join-requests | Teacher | UC-31 | Search, request status filter, requested date filter, request table, approve/reject actions |
| 3.4.1 | View Question Banks | /teacher/question-banks | Teacher | UC-33 | Keyword, subject, visibility, review status, sort, Question Bank table, open action, pagination |
| 3.4.2 | Create Question Bank | /teacher/question-banks/create | Teacher | UC-34 | Title, subject, topic, chapter, lesson, tags, grade, score, estimated time, visibility, workflow, description |
| 3.4.3 | Question Bank Detail | /teacher/question-banks/:id | Teacher | UC-33, UC-37, UC-38, UC-41, UC-42, UC-43 | Metadata, question filters, question table, create/import/generate/edit/delete actions |
| 3.4.4 | Update Question Bank Information | /teacher/question-banks/:id/edit | Teacher | UC-35, UC-36 | Title, subject, topic, chapter, lesson, tags, grade, score, estimated time, visibility, review status, description, save/delete messages |
| 3.4.5 | Add Question Manually To Study Set | /study-sets/:id/questions/create | Learner, Teacher | UC-37, UC-40 | Destination Study Set, question status, type, content, options, correct answer, score, difficulty, subject, topic, chapter, lesson, tags, explanation |
| 3.4.6 | Add Question Manually To Question Bank | /teacher/question-banks/:id/questions/create | Teacher | UC-37, UC-40 | Destination Question Bank, question status, type, content, options, correct answer, score, difficulty, subject, topic, chapter, lesson, tags, explanation |
| 3.4.7 | Update Question | /study-sets/:id/questions/:questionId/edit | Learner, Teacher | UC-41, UC-40 | Existing question fields, metadata fields, update button, saved message |
| 3.4.8 | Import Questions From Excel | /study-sets/:id/import | Learner, Teacher | UC-38 | Excel file, worksheet name, header row, import mode, duplicate handling, default difficulty, default tags, uploaded file preview |
| 3.4.9 | View Question Import Errors | /study-sets/:id/import/errors | Learner, Teacher | UC-39 | Error search, error field filter, severity filter, error table, pagination |
| 3.4.10 | Preview Questions Before Saving | /study-sets/:id/import/preview | Learner, Teacher | UC-40 | Search, question type filter, import status filter, preview question table, save imported questions button |
| 3.4.11 | Generate Questions From Material | /study-sets/:id/ai-generate | Premium Learner, Premium Teacher | UC-43, UC-40 | Material file, material text, question type, number, Bloom level, difficulty, topic focus, answer key/explanation checkboxes, generated preview |
| 3.5.1 | View Accessible Study Sets | /study-sets | Learner, Teacher | UC-18 | Search, subject filter, topic filter, ownership filter, assignment filter, visibility filter, learning status, sort, Study Set cards |
| 3.5.2 | Create Study Set | /study-sets/create | Learner, Teacher | UC-44, UC-37, UC-38, UC-43 | Title, subject, topic, visibility, estimated time, target accuracy, card order, practice mode, tags, description, optional Teacher copy block |
| 3.5.3 | Study Set Detail | /study-sets/:id | Learner, Teacher | UC-18, UC-37, UC-41, UC-42, UC-45 | Description, question table, metadata, progress, study settings, add/import/AI/edit/delete/assign actions |
| 3.5.4 | Flashcard Study | /study-sets/:id/flashcards | Guest, Learner, Teacher | UC-05, UC-18 | Card order, answer mode, confidence, review checkbox, card counter, flashcard, previous/next buttons |
| 3.5.5 | Take Study Set Quiz | /study-sets/:id/quiz | Learner | UC-19 | Question count, question type filter, answer feedback mode, explanation checkbox, question cards, answer controls, submit button |
| 3.5.6 | Quiz Result | /study-sets/:id/result | Learner | UC-19, UC-20 | Score metrics, answer review filters, answer review table, review wrong answers button |
| 3.5.7 | Review Wrong Answers | /study-sets/:id/review | Learner | UC-20, UC-21 | Study Set summary, wrong answer filters, wrong answer cards, AI explanation button, reviewed/retry actions, AI/upgrade message |
| 3.5.8 | Assign Study Set To Class | /teacher/classes/:id/assign-study-set | Teacher | UC-45 | Class, Study Set, assign-to, selected learners, due date, release date, completion rule, target accuracy, instructions, notify checkbox |
| 3.6.1 | View Available Exams | /learner/exams | Learner | UC-23 | Search, status filter, class filter, exam table, info action |
| 3.6.2 | View Exam Information | /learner/exams/:id/info | Learner | UC-24 | Access code, attempt selection, rules checkbox, class, start time, duration, attempts, result visibility, randomization |
| 3.6.3 | Take Exam | /learner/exams/:id/take | Learner | UC-25 | Timer, auto-save status, attempt badge, candidate, exam code, filters, question cards, answer options, submit modal |
| 3.6.4 | View Exam Result | /learner/exams/:id/result | Learner | UC-26 | Score, accuracy, status, result filters, result detail table |
| 3.6.5 | Teacher Exam Sessions | /teacher/exams | Teacher | UC-46, UC-48 | Search, status filter, class filter, result visibility filter, exam table, configure/info/monitor/report actions |
| 3.6.6 | Create Exam Session | /teacher/exams/create | Teacher | UC-46 | Exam title, class, question source, status, time, duration, attempts, passing score, access code, result settings, instructions |
| 3.6.7 | Configure Exam Settings | /teacher/exams/:id/configure | Teacher | UC-47 | Existing exam fields, randomization checkboxes, auto-save, full-screen warning, navigation lock, notification checkbox |
| 3.6.8 | View Exam Information As Teacher | /teacher/exams/:id/info | Teacher | UC-48 | Exam title, class, question source, time, duration, attempts, randomization, visibility, status, configure/monitor/report actions |
| 3.6.9 | Monitor Exam Session | /teacher/exams/:id/monitor | Teacher | Exam Monitoring | Status metrics, attempt filters, learner attempt table, view attempt/send reminder actions |
| 3.7.1 | View Personal Learning Progress | /learner/progress | Learner | UC-22 | Progress metrics, subject filter, period filter, weak topic table |
| 3.7.2 | View Exam Analytics | /teacher/analytics | Teacher | UC-49 | Exam analytics cards, performance table, weak topic data, export action |
| 3.7.3 | Export Exam Report | /teacher/reports/export | Teacher | UC-50 | Exam selector, report type, format, date range, summary, attempt table, export status |
| 3.8.1 | View Premium Plans | /premium | Guest, Learner, Teacher | UC-06 | Role-specific plan cards, price, audience, benefits, selected plan action |
| 3.8.2 | Upgrade To Premium | /premium/upgrade | Learner, Teacher | UC-15 | Plan selector, payment method, billing email, promotion code, gateway status, proceed button |
| 3.8.3 | Payment Result | /premium/payment-result | Learner, Teacher | UC-15 | Payment status, transaction id, plan, amount, paid at, activation message |
| 3.9.1 | Admin Dashboard | /admin/dashboard | Admin | UC-51, UC-53, UC-54 | User/resource/service metrics, system table, resource summary |
| 3.9.2 | View User List | /admin/users | Admin | UC-51 | Search, role filter, status filter, user table, open detail action |
| 3.9.3 | User Detail And Role Update | /admin/users/:id | Admin | UC-52 | Profile data, role dropdown, account status dropdown, save message |
| 3.9.4 | Resource Management | /admin/resources | Admin | UC-53 | Resource search/filter, public resource table, hide action, hidden message |
| 3.9.5 | View System Status | /admin/system-status | Admin | UC-54 | Service table, uptime, response time, last checked, status badges |
| 3.9.6 | Access Denied | /access-denied | Learner, Teacher, Admin | Authorization | Access denied message, return action |
| 3.9.7 | Not Found | /not-found | Guest, Learner, Teacher, Admin | Utility | Not found message, return home, search Study Sets action |

## Mock-only integration notes

- Authentication, Google login, payment, Gemini generation, AI explanation, email sending, notification delivery, import validation, exam auto-save, report export, role update, resource hide, and delete actions are local UI mocks only.
- No backend, database, payment gateway, Supabase integration, or Gemini API call is implemented.