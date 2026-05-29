# Section 3 Screen Mapping - Smart Quiz Platform

This mapping follows SRS Section 1.3 Use Cases, Section 1.4 Screen Authorization, and Section 2 Use Case Specifications. Suggested subsection numbers can be copied into Section 3 Functional Requirements.

| Section 3 | Screen | Route | Actor | Related UC | Main Fields / Components | Main Actions |
| --------- | ------ | ----- | ----- | ---------- | ------------------------ | ------------ |
| 3.1.1 | Home Page | / | Guest, Learner, Teacher, Admin | UC-01 | Hero/search area, public study set cards, actor navigation, metrics | Search, Login, Register, open dashboards |
| 3.1.2 | Search Public Study Sets | /search/study-sets | Guest, Learner | UC-02 | Keyword, subject filter, public set cards, empty state | Search, filter, open public set detail |
| 3.1.3 | Search Public User Accounts | /search/users | Guest, Learner, Teacher | UC-03 | Keyword, role filter, user table, premium/status badges | Search, filter, view public account rows |
| 3.1.4 | Public Study Set Detail | /sets/:id/public | Guest, Learner | UC-04, UC-05 | Cover image, title, description, subject, topic, tags, question preview | Study flashcards, register to save progress |
| 3.2.1 | Register Account | /auth/register | Guest | UC-07 | Full name, email, phone, requested role, password, confirm password, Google button | Create account, Google login mock, go login |
| 3.2.2 | Login with Account | /auth/login | Guest, Learner, Teacher, Admin | UC-08, UC-09, UC-11 | Email, password, mock role, Google login button, login message | Login, Google login mock, forgot password, logout target |
| 3.2.3 | Forgot Password | /auth/forgot-password | Learner, Teacher, Admin | UC-10 | Registered email, queued email status | Send reset link, back to login |
| 3.2.4 | Reset Password | /auth/reset-password | Learner, Teacher, Admin | UC-10 | Reset token, new password, confirm password, success state | Reset password, go login |
| 3.2.5 | View Personal Profile | /profile | Learner, Teacher, Admin | UC-12, UC-11 | Avatar, full name, username, role, premium, email, phone, status, bio | Edit profile, logout mock |
| 3.2.6 | Edit Personal Profile | /profile/edit | Learner, Teacher, Admin | UC-13 | Full name, phone, avatar initials, username, profile details | Save changes, cancel |
| 3.2.7 | Change Password | /profile/change-password | Learner, Teacher, Admin | UC-14 | Current password, new password, confirm password, validation errors | Update password |
| 3.3.1 | Learner Dashboard | /learner/dashboard | Learner | UC-16, UC-18, UC-22, UC-23 | Progress metrics, joined class table, available exam table | Join class, continue study, open exam info |
| 3.3.2 | View Joined Classes | /learner/classes | Learner | UC-16 | Class table, teacher, code, members, action | Open class detail, join class |
| 3.3.3 | Join Class | /learner/classes/join | Learner | UC-17 | Class code, invitation link, request message, pending state | Send join request |
| 3.3.4 | Learner Class Detail | /learner/classes/:id | Learner | UC-16 | Class metadata, teacher, code, members, assigned study sets | Open assigned study set, return classes |
| 3.4.1 | View Joined Study Sets | /learner/study-sets | Learner | UC-18 | Study set search, cards, visibility badges, progress | Search, open detail, flashcards |
| 3.4.2 | Study Set Detail | /learner/study-sets/:id | Learner, Teacher | UC-18, UC-19 | Description, question preview, subject, topic, progress | Start flashcards, take quiz |
| 3.4.3 | Flashcard Study | /learner/study-sets/:id/flashcards | Guest, Learner | UC-05 | Flashcard, question/answer face, progress, previous/next | Flip, next, previous |
| 3.4.4 | Take Study Set Quiz | /learner/study-sets/:id/quiz | Learner | UC-19 | Questions, options, written answer, inline feedback, score state | Select answer, submit quiz, open result |
| 3.4.5 | Quiz Result | /learner/study-sets/:id/result | Learner | UC-19, UC-20 | Score cards, answer review table, status pills | Review wrong answers |
| 3.4.6 | Review Wrong Answers | /learner/study-sets/:id/review | Learner | UC-20, UC-21 | Wrong answer cards, learner answer, correct answer, explanation, AI message | Request AI explanation, show upgrade required |
| 3.4.7 | View Personal Learning Progress | /learner/progress | Learner | UC-22 | Practiced questions, accuracy, repeated mistakes, weak topics table | Review recommended action |
| 3.5.1 | View Available Exams | /learner/exams | Learner | UC-23 | Search exam, exam table, status, empty state | Search, open exam info |
| 3.5.2 | View Exam Information | /learner/exams/:id/info | Learner | UC-24 | Class, start time, duration, attempts, result visibility, randomization | Start exam |
| 3.5.3 | Take Exam | /learner/exams/:id/take | Learner | UC-25 | Timer, auto-save status, attempt badge, questions, submit modal | Select answers, submit, confirm submit |
| 3.5.4 | View Exam Result | /learner/exams/:id/result | Learner | UC-26 | Score, accuracy, attempt status, detailed table or hidden result empty state | View results allowed by teacher |
| 3.6.1 | Teacher Dashboard | /teacher/dashboard | Teacher | UC-27, UC-33, UC-46, UC-49 | Metrics, class table, join request count | Create class, create question bank, open class |
| 3.6.2 | View Created Classes | /teacher/classes | Teacher | UC-27 | Search classes, class table, status | Search, create class, open class detail |
| 3.6.3 | Create Class | /teacher/classes/create | Teacher | UC-28 | Class name, subject, class code, status, description | Create class |
| 3.6.4 | Class Detail | /teacher/classes/:id | Teacher | UC-27, UC-29, UC-30, UC-45 | Class metadata, assigned study set table, management links | Generate invitation, members, assign study set |
| 3.6.5 | Generate Class Invitation | /teacher/classes/:id/invitation | Teacher | UC-29 | Class code, invitation link, recipient emails, action status | Copy link, send invitation email mock |
| 3.6.6 | View Class Member List | /teacher/classes/:id/members | Teacher | UC-30, UC-32 | Learner table, email, premium, status, remove action | Remove learner mock, open join requests |
| 3.6.7 | Approve Class Join Request | /teacher/classes/:id/join-requests | Teacher | UC-31 | Request table, learner, message, requested date, status | Approve request |
| 3.6.8 | Assign Study Set to Class | /teacher/classes/:id/assign-study-set | Teacher | UC-45 | Class, study set, assign-to selector, due date | Assign study set, send notification mock |
| 3.7.1 | View Question Banks | /teacher/question-banks | Teacher | UC-33 | Keyword, subject filter, question bank table | Search, filter, create/open bank |
| 3.7.2 | Create Question Bank | /teacher/question-banks/create | Teacher | UC-34 | Title, subject, topic, visibility, description | Create question bank |
| 3.7.3 | Question Bank Detail | /teacher/question-banks/:id | Teacher | UC-33, UC-40, UC-41, UC-42 | Metadata, question table, edit/delete question actions | Edit bank, create question, import, AI generate, delete question mock |
| 3.7.4 | Update Question Bank Information | /teacher/question-banks/:id/edit | Teacher | UC-35, UC-36 | Title, subject, topic, visibility, description, delete message | Save changes, delete bank mock |
| 3.7.5 | Create Question | /teacher/question-banks/:id/questions/create | Teacher | UC-40 | Type, content, options, correct answer, score, tags, metadata, explanation | Create question |
| 3.7.6 | Update Question | /teacher/question-banks/:id/questions/:questionId/edit | Teacher | UC-41 | Existing question fields, options, correct answer, score, explanation, difficulty | Save question updates |
| 3.7.7 | Import Questions from Excel | /teacher/question-banks/:id/import | Teacher | UC-37 | File input, template rules, uploaded file preview, validation result | Validate file, view errors, preview valid rows |
| 3.7.8 | View Question Import Errors | /teacher/question-banks/:id/import/errors | Teacher | UC-38 | Error table with row, field, raw value, message | Review invalid rows |
| 3.7.9 | Preview Imported Questions | /teacher/question-banks/:id/import/preview | Teacher | UC-39 | Valid question preview table, status | Save imported questions mock |
| 3.7.10 | Generate Questions from Material | /teacher/question-banks/:id/ai-generate | Teacher | UC-43 | Material file, type, count, difficulty, topic focus, generated preview | Generate questions mock |
| 3.8.1 | Create Study Set | /teacher/study-sets/create | Teacher | UC-44 | Title, subject, topic, visibility, description, selected questions | Create study set |
| 3.8.2 | Exam Sessions | /teacher/exams | Teacher | UC-46, UC-48 | Search exams, exam table, status, actions | Search, create, configure, info, monitor |
| 3.8.3 | Create Exam Session | /teacher/exams/create | Teacher | UC-46 | Title, class, question source, status, start time, duration, attempts, visibility | Create exam session |
| 3.8.4 | Configure Exam Settings | /teacher/exams/:id/configure | Teacher | UC-47 | Time, duration, attempts, randomization toggles, result visibility | Save exam settings |
| 3.8.5 | View Exam Information as Teacher | /teacher/exams/:id/info | Teacher | UC-48 | Class, question bank, time, attempts, randomization, visibility, status | Configure, monitor |
| 3.8.6 | Monitor Exam Session | /teacher/exams/:id/monitor | Teacher | Exam Monitoring | Status metrics, learner attempt table, auto-save activity | Monitor attempts |
| 3.9.1 | View Learning Analytics | /teacher/analytics | Teacher | UC-49 | Analytics cards, score/accuracy bars, weak topic table | Export report |
| 3.9.2 | Export Report | /teacher/reports/export | Teacher | UC-50 | Report type, class, format, date range, export status | Export report mock |
| 3.10.1 | View Premium Plans | /premium | Guest, Learner, Teacher | UC-06 | Plan cards, price, audience, benefits, highlighted plan | Select plan, upgrade |
| 3.10.2 | Upgrade to Premium | /premium/upgrade | Learner, Teacher | UC-15 | Plan selector, payment method, billing email, promotion code, gateway status | Proceed to payment mock |
| 3.10.3 | Payment Result | /premium/payment-result | Learner, Teacher | UC-15 | Success state, transaction id, plan, amount, paid at | Confirm premium activation mock |
| 3.11.1 | Admin Dashboard | /admin/dashboard | Admin | UC-51, UC-53, UC-54 | User/resource/service metrics, service status table | Review system status |
| 3.11.2 | View User List | /admin/users | Admin | UC-51 | Search users, user table, role, premium, status | Search, open user detail |
| 3.11.3 | User Detail and Role Update | /admin/users/:id | Admin | UC-52 | Profile fields, role dropdown, account status dropdown | Update user role mock |
| 3.11.4 | Resource Management | /admin/resources | Admin | UC-53 | Public resource table, owner, subject, public/hidden status | Hide public learning resource mock |
| 3.11.5 | View System Status | /admin/system-status | Admin | UC-54 | Service table, uptime, response time, last checked, warning message | Review service health |
| 3.12.1 | Notification Center | /notifications | Learner, Teacher, Admin | Shared | Notification table, actor, created date, read/unread status | Mark as read |
| 3.12.2 | Access Denied | /access-denied | Learner, Teacher, Admin | Authorization | Access denied message, return action | Go home |
| 3.12.3 | Not Found | /not-found | Guest, Learner, Teacher, Admin | Utility | Not found empty state, return action | Go home |

## Mock-only integration notes

* Supabase authentication is represented by local login/register/reset forms only.
* Google login button is visual and does not call OAuth.
* Payment gateway is visual and always routes to mock success result.
* Gemini API and AI explanations are local static messages.
* Email service, invitation sending, notifications, exam auto-save, auto-submit, import validation, report export, role update, hide resource, delete actions, and persistence are mock-only local UI states.
