# 3. Functional Requirements - Smart Quiz Platform (Visible Field Version)

This version follows the field definition from `Template8_Student Evaluation.xlsx`, sheet `Params`:

- A field is a visible screen component that the user can enter, select, click, read as the main screen data, or use as an action.
- A table/list/card group is counted as one field unless the screen explicitly separates row actions such as Open, Edit, Delete, Approve, Export.
- A button/link/action is counted as a field when it is a visible actionable component.
- Hidden IDs, route params, session tokens, internal payloads, and invisible backend fields are not counted as screen fields.
- If a database/external transaction is not related to any visible field, one transaction can be converted into two fields.

Complexity levels follow the template: Level 1 = 3-5 fields, Level 2 = 6-7 fields, Level 3 = 8-9 fields, Level 4 = 10-11 fields, Level 5 = 12-13 fields, Level 6 = 14-15 fields, Level 7 = more than 15 fields.

## 3.1 Public Access & Discovery

### 3.1.1 Home Page

Related Use Case: UC-01
Actor: Guest, Learner, Teacher, Administrator

This screen allows the Guest to:
View Home Page: view public learning entry points and popular public study sets.
Search Public Study Sets: enter keyword(s) in the hero search box and run public discovery.
Open Public Study Set: choose a public study set card to view details.
Register / Login: navigate to account entry screens.

On the screen, s/he can also:
Browse Study Modes: open public Learn, Flashcards, Test, or Review entry cards.
Browse Popular Study Sets: choose a study set from visible public cards.

Prototype URL:
http://127.0.0.1:5173/

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Hero Search Keyword | Text input. User enters keyword(s) such as biology, chemistry, math, or flashcards. |
| Hero Search Action | Action field. User clicks Search to open public study set search. |
| Sign Up For Free | Action field. Opens Register Account screen. |
| Browse Study Sets | Action field. Opens Search Public Study Sets screen. |
| Study Mode Cards | Card group field. Shows Learn, Flashcards, Test, and Review entry cards. Counted as one field. |
| Create Free Account | Action field. Link from study mode section to registration. |
| Open Flashcards | Action field. Opens public flashcards preview. |
| Login To Save History | Action field. Opens login screen. |
| Popular Study Set Cards | Card group field. Displays public study set title, subject, topic, question count, learners, and detail action. Counted as one field. |
| View All Study Sets | Action field. Opens public study set search. |

Field count: 10
Complexity level: Level 4

### 3.1.2 Search Public Study Sets

Related Use Case: UC-02
Actor: Guest, Learner

This screen allows the Guest or Learner to:
Search Public Study Sets: search by keyword and filter visible public study set records.
Filter Public Study Sets: filter by subject, study mode, rating, and sort option.
View Public Study Set Detail: open selected study set detail.

On the screen, s/he can also:
Navigate Results: change rows per page or page number when result list is long.

Prototype URL:
http://127.0.0.1:5173/search/study-sets

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Keyword | Text input. User enters study set keyword(s). |
| Subject | Dropdown. Values include All subjects, Biology, Chemistry, Mathematics. |
| Study Mode | Dropdown. Values include All modes, Flashcards, Quiz practice. |
| Rating Filter | Dropdown. Values include All ratings, 4+ stars, Most popular. |
| Sort By | Dropdown. Sorts public study sets. |
| Apply | Action field. Applies current search and filter values. |
| Advanced | Action field. Opens or represents advanced filtering. |
| Reset Filters | Action field. Clears current search/filter state. |
| Public Study Set Result Cards | Card group field. Shows matching public study sets. Counted as one field. |
| View Detail | Action field. Opens selected public study set detail. |
| Rows Per Page | Pagination field. User selects number of rows/cards per page. |
| Pagination | Pagination field. User changes page with Previous, page number, or Next. |

Field count: 12
Complexity level: Level 5

### 3.1.3 Search Public User Accounts

Related Use Case: UC-03
Actor: Guest, Learner, Teacher

This screen allows the Guest, Learner, or Teacher to:
Search Public User Accounts: search visible public accounts.
Filter Public User Accounts: filter by role, premium status, account status, and sort option.
View Public Account Rows: inspect visible account information in table format.

On the screen, s/he can also:
Navigate User Results: move between result pages.

Prototype URL:
http://127.0.0.1:5173/search/users

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Keyword | Text input. User enters name, username, email, or profile detail. |
| Role | Dropdown. Values include All roles, Learner, Teacher, Admin. |
| Premium Status | Dropdown. Values include All accounts, Premium, Free. |
| Account Status | Dropdown. Values include All statuses, Active, Pending. |
| Sort By | Dropdown. Sorts public account results. |
| Apply | Action field. Applies search/filter values. |
| Reset Filters | Action field. Clears current filter values. |
| Public User List | Table field. Displays account, role, premium status, account status, and last active time. Counted as one field. |
| Rows Per Page | Pagination field. User selects result size per page. |
| Pagination | Pagination field. User changes result page. |

Field count: 10
Complexity level: Level 4

### 3.1.4 Public Study Set Detail

Related Use Case: UC-04, UC-05
Actor: Guest, Learner

This screen allows the Guest or Learner to:
View Public Study Set Detail: view study set title, description, tags, owner, metadata, and question preview.
Study Public Flashcards: open public flashcard preview.
Register To Save Progress: navigate to registration.
Search Preview Questions: filter visible preview questions.

On the screen, s/he can also:
Choose Guest Study Mode: choose flashcards preview, learn after signup, or quiz after login.

Prototype URL:
http://127.0.0.1:5173/sets/set-bio-cell/public

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Study Flashcards | Action field. Opens public flashcard preview. |
| Sign Up To Save History | Action field. Opens registration screen. |
| Study Set Detail Card | Data display field. Shows image, description, tags, and public study set content. Counted as one field. |
| Search Preview Questions | Text input. User searches question preview rows. |
| Question Type | Dropdown. Filters preview questions by type. |
| Difficulty | Dropdown. Filters preview questions by difficulty. |
| Sort By | Dropdown. Sorts preview question rows. |
| Apply | Action field. Applies preview filters. |
| Reset Filters | Action field. Clears preview filters. |
| Question Preview List | Table field. Displays preview question, type, and difficulty. Counted as one field. |
| Rows Per Page | Pagination field. User selects preview row count per page. |
| Pagination | Pagination field. User changes preview page. |
| Study Set Metadata | Data display field. Shows owner, subject, topic, visibility, questions, learners, and rating. Counted as one field. |
| Guest Study Mode | Dropdown. User selects preview/study mode option. |
| Create Account | Action field. Opens Register Account screen. |

Field count: 15
Complexity level: Level 6

## 3.2 Authentication & Profile

### 3.2.1 Register Account

Related Use Case: UC-07
Actor: Guest

This screen allows the Guest to:
Register Account: fill account information and submit registration.
Use Google Sign-Up: choose social sign-up entry action.
Go To Login: navigate to Login screen if account already exists.

On the screen, s/he can also:
View Validation Messages: see form validation hints after submission.

Prototype URL:
http://127.0.0.1:5173/auth/register

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Full Name | Text input. User enters full name. |
| Email Address | Email input. Required for account registration. |
| Phone Number | Text input. User enters phone number. |
| Username | Text input. User chooses username. |
| Requested Role | Dropdown. Values include Learner and Teacher. |
| Password | Password input. User enters password. |
| Confirm Password | Password input. Must match Password. |
| Learning Goal | Dropdown. Values include Prepare for exams, Join class study, Create learning content. |
| Referral Code | Text input. Optional referral or invitation code. |
| Create Account | Action field. Submits registration form. |
| Continue With Google | Action field. Starts Google sign-up flow in production. |
| Already Have Account | Action field. Opens Login screen. |
| Validation Message | Message field. Displays email/password/required-field validation. |

Field count: 13
Complexity level: Level 5

### 3.2.2 Login With Account

Related Use Case: UC-08, UC-09, UC-11
Actor: Guest, Learner, Teacher, Administrator

This screen allows the Guest to:
Login With Account: enter account credentials and login.
Login With Social Provider: choose Google, Facebook, Apple, or WhatsApp login.
Recover Password: open Forgot Password screen.

On the screen, s/he can also:
Remember Login: select Remember me.
Create Account: navigate to registration.
Logout Current Account: if signed in, use logout action.

Prototype URL:
http://127.0.0.1:5173/auth/login

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Register Tab | Action field. Opens Register screen. |
| Login Tab | Current tab indicator/action field. |
| Social Login Options | Action group field. Includes Google, Facebook, Apple, and WhatsApp login buttons. Counted as one field. |
| Email | Email/text input. User enters email or username. |
| Password | Password input. User enters password. |
| Show Password | Action field. Toggles password visibility. |
| Remember Me | Checkbox field. User chooses whether to remember login. |
| Forgot Password | Action field. Opens Forgot Password screen. |
| Login | Action field. Submits login form. |
| Create Account | Action field. Opens Register screen. |
| Logout | Action field. Displayed when an account is already signed in. |
| Status Message | Message field. Displays login or social-provider status. |

Field count: 12
Complexity level: Level 5

### 3.2.3 Forgot Password

Related Use Case: UC-10
Actor: Learner, Teacher, Administrator

This screen allows the user to:
Request Password Reset: enter account recovery information and send reset request.
Return To Login: navigate back to login screen.

On the screen, s/he can also:
Choose Delivery Method: choose email or SMS reset delivery.

Prototype URL:
http://127.0.0.1:5173/auth/forgot-password

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Registered Email Address | Email input. User enters account email. |
| Reset Delivery Method | Dropdown. Values include Email link and SMS code. |
| Account Username | Text input. Optional username for account verification. |
| Verification Code | Text input. Optional code if already received. |
| Send Reset Link | Action field. Sends reset request. |
| Back To Login | Action field. Opens Login screen. |
| Status Message | Message field. Displays reset request result. |

Field count: 7
Complexity level: Level 2

### 3.2.4 Reset Password

Related Use Case: UC-10
Actor: Learner, Teacher, Administrator

This screen allows the user to:
Reset Password: enter reset token, registered email, and new password.
Choose Session Handling: decide whether to logout other devices.
Return To Login: navigate to Login screen after reset.

On the screen, s/he can also:
View Reset Result: see success message after reset.

Prototype URL:
http://127.0.0.1:5173/auth/reset-password

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Reset Token | Text input. User enters token from email link. |
| Registered Email | Email input. User enters registered email. |
| New Password | Password input. User enters new password. |
| Confirm New Password | Password input. Must match New Password. |
| Logout Other Devices | Dropdown. User chooses whether to logout other devices. |
| Reset Password | Action field. Submits reset password form. |
| Login | Action field. Opens Login screen. |
| Status Message | Message field. Displays reset success. |

Field count: 8
Complexity level: Level 3

### 3.2.5 View Personal Profile

Related Use Case: UC-12, UC-11
Actor: Learner, Teacher, Administrator

This screen allows the user to:
View Personal Profile: view visible profile, account, and preference information.
Edit Personal Profile: navigate to edit profile screen.
Logout: end the current session.

On the screen, s/he can also:
View Role Access Summary: see role-specific permissions and access information.

Prototype URL:
http://127.0.0.1:5173/profile

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Edit Profile | Action field. Opens Edit Personal Profile screen. |
| Logout | Action field. Logs out current account. |
| Profile Identity Card | Data display field. Shows avatar, full name, username, role, and premium badge. Counted as one field. |
| Email | Display field. Shows account email. |
| Phone | Display field. Shows phone number. |
| Account Status | Display field. Shows active/pending/locked status. |
| Joined At | Display field. Shows account creation date. |
| Last Active | Display field. Shows latest activity time. |
| Bio | Display field. Shows user profile bio. |
| Preferred Language | Display field. Shows language preference. |
| Notification Preference | Display field. Shows notification setting. |
| Timezone | Display field. Shows timezone. |
| Two-factor Auth | Display field. Shows 2FA status. |
| Role Access Summary | Data display field. Shows role-specific permission cards. Counted as one field. |

Field count: 14
Complexity level: Level 6

### 3.2.6 Edit Personal Profile

Related Use Case: UC-13
Actor: Learner, Teacher, Administrator

This screen allows the user to:
Update Personal Profile: edit allowed profile fields.
Save Profile Changes: submit modified profile information.
Cancel Profile Editing: return to profile page without saving.

On the screen, s/he can also:
Configure Preferences: update language, timezone, notification, and visibility fields.

Prototype URL:
http://127.0.0.1:5173/profile/edit

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Full Name | Text input. User edits full name. |
| Phone Number | Text input. User edits phone number. |
| Avatar Initials | Text input. User edits initials shown in avatar. |
| Username | Text input. User edits username. |
| Preferred Language | Text input. User edits preferred language. |
| Timezone | Text input. User edits timezone. |
| Notification Preference | Dropdown. User chooses email, in-app, or both. |
| Profile Visibility | Dropdown. User chooses public or private profile. |
| Profile Details | Textarea field. User edits profile bio/details. |
| Save Changes | Action field. Saves profile updates. |
| Cancel | Action field. Returns to profile screen. |
| Status Message | Message field. Displays saved confirmation. |

Field count: 12
Complexity level: Level 5

### 3.2.7 Change Password

Related Use Case: UC-14
Actor: Learner, Teacher, Administrator

This screen allows the user to:
Change Password: enter current password, new password, and confirmation.
Submit Password Update: update password after validation.
Choose Session Handling: decide whether to logout other devices.

On the screen, s/he can also:
Enter Security Code: provide optional 2FA code.

Prototype URL:
http://127.0.0.1:5173/profile/change-password

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Current Password | Password input. User enters current password. |
| New Password | Password input. User enters new password. |
| Confirm New Password | Password input. Must match New Password. |
| Security Code | Text input. Optional 2FA/security code. |
| Logout Other Devices | Dropdown. User chooses whether to logout other devices. |
| Update Password | Action field. Submits password update. |
| Validation Messages | Message group field. Shows password validation errors. Counted as one field. |

Field count: 7
Complexity level: Level 2

### 3.2.8 Notification Center

Related Use Case: Shared Notification
Actor: Learner, Teacher, Administrator

This screen allows the user to:
View Notifications: view notification rows.
Search Notifications: filter notification list by keyword, status, and type.
Mark Notifications As Read: update read state for individual or all notifications.

On the screen, s/he can also:
Clear Read Notifications: remove or hide read notifications in production.

Prototype URL:
http://127.0.0.1:5173/notifications

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Search Notifications | Text input. User searches title, message, or actor. |
| Read Status | Dropdown. Values include All notifications, Unread, Read. |
| Notification Type | Dropdown. Values include All types, Class, Exam, System. |
| Sort By | Dropdown. Sorts notification list. |
| Apply | Action field. Applies filters. |
| Reset Filters | Action field. Clears filters. |
| Mark All As Read | Action field. Marks all notifications as read. |
| Clear Read Notifications | Action field. Clears read notifications. |
| Notification List | Table field. Displays notification, actor, created time, status, and action. Counted as one field. |
| Mark As Read | Action field. Marks selected notification as read. |
| Rows Per Page | Pagination field. User selects rows per page. |
| Pagination | Pagination field. User changes notification page. |

Field count: 12
Complexity level: Level 5

