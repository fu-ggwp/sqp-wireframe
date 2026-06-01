# 3. Functional Requirements - Smart Quiz Platform (Visible Screen Field Version)

This file follows the field definition confirmed from Template8_Student Evaluation.xlsx, sheet Params. A field is a visible screen component/action or visible data group on the screen. Hidden backend IDs, route params, session tokens, invisible payloads, and internal state variables are not counted. A table/list/card group is counted as one field unless visible row actions such as Open, Edit, Delete, Approve, Export, or Hide are processed separately.


Open the Prototype URL and capture screenshot manually for the SRS.

## 3.1 Public Access & Discovery

### 3.1.1 Home Page

Related Use Case: UC-01
Actor: Guest

This screen allows the Guest to:
- view public study entry points, search public sets, preview study modes, and navigate to account entry screens.
- Use the visible fields and actions listed in the Field Description table.

On the screen, s/he can also:
- View status, validation, empty, pagination, or mock interaction states where applicable.

UI Layout / Prototype:
http://127.0.0.1:5173/

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Hero Search Keyword | Text search field. User enters keyword(s) to filter visible records. |
| Hero Search Action | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Sign Up For Free | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Browse Study Sets | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Study Mode Cards | Visible data group. Shows records or grouped screen data. Counted as one field. |
| Create Free Account | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Open Flashcards | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Login To Save History | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Popular Study Set Cards | Visible data group. Shows records or grouped screen data. Counted as one field. |
| View Detail | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| View All Study Sets | Action field. User clicks to navigate, submit, update, or process the selected visible item. |


### 3.1.2 Search Public Study Sets

Related Use Case: UC-02
Actor: Guest, Learner

This screen allows the user to:
- search and filter public study sets, inspect results, and open a selected public set.
- Use the visible fields and actions listed in the Field Description table.

On the screen, s/he can also:
- View status, validation, empty, pagination, or mock interaction states where applicable.

UI Layout / Prototype:
http://127.0.0.1:5173/search/study-sets

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Keyword | Text search field. User enters keyword(s) to filter visible records. |
| Subject | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Study Mode | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Rating Filter | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Sort By | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Apply | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Advanced | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Reset Filters | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Public Study Set Result Cards | Visible data group. Shows records or grouped screen data. Counted as one field. |
| Open Sample Set | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| View Detail | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Pagination | Action field. User clicks to navigate, submit, update, or process the selected visible item. |


### 3.1.3 Search Public User Accounts

Related Use Case: UC-03
Actor: Guest, Learner, Teacher

This screen allows the user to:
- search public learner and teacher accounts and inspect account result rows.
- Use the visible fields and actions listed in the Field Description table.

On the screen, s/he can also:
- View status, validation, empty, pagination, or mock interaction states where applicable.

UI Layout / Prototype:
http://127.0.0.1:5173/search/users

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Keyword | Text search field. User enters keyword(s) to filter visible records. |
| Role | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Premium Status | Status field. User views or selects status depending on the screen context. |
| Account Status | Status field. User views or selects status depending on the screen context. |
| Sort By | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Apply | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Reset Filters | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Public User List | Visible data group. Shows records or grouped screen data. Counted as one field. |
| Rows Per Page | Pagination field. User selects page size or navigates visible pages. |
| Pagination | Action field. User clicks to navigate, submit, update, or process the selected visible item. |


### 3.1.4 Public Study Set Detail

Related Use Case: UC-04, UC-05
Actor: Guest, Learner

This screen allows the user to:
- view public study set detail, filter preview questions, choose preview mode, and start flashcards or registration.
- Use the visible fields and actions listed in the Field Description table.

On the screen, s/he can also:
- View status, validation, empty, pagination, or mock interaction states where applicable.

UI Layout / Prototype:
http://127.0.0.1:5173/sets/set-bio-cell/public

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Study Flashcards | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Sign Up To Save History | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Study Set Detail Card | Visible data group. Shows records or grouped screen data. Counted as one field. |
| Search Preview Questions | Text search field. User enters keyword(s) to filter visible records. |
| Question Type | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Difficulty | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Sort By | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Apply | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Reset Filters | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Question Preview List | Visible data group. Shows records or grouped screen data. Counted as one field. |
| Rows Per Page | Pagination field. User selects page size or navigates visible pages. |
| Pagination | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Study Set Metadata | Visible data group. Shows records or grouped screen data. Counted as one field. |
| Guest Study Mode | Visible field. User views or enters this value on the screen. |
| Create Account | Action field. User clicks to navigate, submit, update, or process the selected visible item. |


## 3.2 Authentication & Profile

### 3.2.1 Register Account

Related Use Case: UC-07
Actor: Guest

This screen allows the user to:
- create a learner or teacher account with role request, learning goal, credential fields, and validation feedback.
- use Google sign-up mock or navigate to login.

On the screen, s/he can also:
- view validation messages after submitting incomplete or invalid data.

UI Layout / Prototype:
http://127.0.0.1:5173/auth/register

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Full Name | Text input. User enters display name. |
| Email Address | Email input. Required account email. |
| Phone Number | Text input. User enters contact phone number. |
| Username | Text input. User enters username. |
| Requested Role | Dropdown/select field. User chooses Learner or Teacher. |
| Password | Password field. User enters new account password. |
| Confirm Password | Password field. Must match Password. |
| Learning Goal | Dropdown/select field. User chooses main learning goal. |
| Referral Code | Text input. Optional invitation or referral code. |
| Create Account | Action field. Submits registration form. |
| Continue With Google | Action field. Starts Google sign-up mock. |
| Already Have Account | Action field. Opens Login screen. |
| Validation Message | Visible message/state field. Shows required-field, email, password, or confirmation error. |


### 3.2.2 Login With Account And Google Login

Related Use Case: UC-08, UC-09, UC-11
Actor: Guest, Learner, Teacher, Administrator

This screen allows the user to:
- login using email or username and password.
- use Google login mock, recover password, create account, or logout current user.

On the screen, s/he can also:
- toggle password visibility and choose remember-login preference.

UI Layout / Prototype:
http://127.0.0.1:5173/auth/login

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Register Tab | Action field. Opens Register Account screen. |
| Login Tab | Visible tab field. Shows current login tab. |
| Login With Google | Action field. Starts Google login mock. |
| Email | Email/text input. User enters email or username. |
| Password | Password field. User enters password. |
| Show Password | Action field. Toggles password visibility. |
| Remember Me | Checkbox field. User chooses persistent login preference. |
| Forgot Password | Action field. Opens Forgot Password screen. |
| Login | Action field. Submits login form. |
| Create Account | Action field. Opens Register Account screen. |
| Logout | Action field. Signs out current signed-in account when visible. |
| Status Message | Visible message/state field. Shows required-field, logout, or Google mock message. |


### 3.2.3 Forgot Password

Related Use Case: UC-10
Actor: Guest, Learner, Teacher, Administrator

This screen allows the user to:
- enter registered email and choose delivery method before any verification code is entered.
- send verification code, enter the received code, verify the code, then continue to Reset Password.

On the screen, s/he can also:
- return to login before verification or continue to reset password after code verification succeeds.

UI Layout / Prototype:
http://127.0.0.1:5173/auth/forgot-password

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Registered Email Address | Email input. User enters account email to receive verification code. |
| Reset Delivery Method | Dropdown/select field. User chooses Email code or SMS code. |
| Account Username | Text input. Optional username for account verification. |
| Verification Code | Text input. Disabled until code is sent; user enters received verification code. |
| Send Verification Code | Action field. Sends verification code in production. |
| Verify Code | Action field. Checks whether entered verification code is valid. |
| Back To Login | Action field. Returns to Login screen before code verification. |
| Continue Reset Password | Action field. Opens Reset Password screen after verification succeeds. |
| Code Sent Message | Visible message/state field. Shows code delivery status. |
| Code Verified Message | Visible message/state field. Shows accepted verification code status. |


### 3.2.4 Reset Password

Related Use Case: UC-10, UC-14
Actor: Learner, Teacher, Administrator

This screen allows the user to:
- reset password from the signed-in profile security area.
- request a verification token for the current account email, then enter new password and confirmation.

On the screen, s/he can also:
- return to profile edit and view token-sent or reset-success messages.

UI Layout / Prototype:
http://127.0.0.1:5173/profile/reset-password

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Account Email | Read-only field. Shows current signed-in account email; user does not re-enter it. |
| Verification Token | Text input. User enters token received by email. |
| Send Verification Token | Action field. Sends token to current account email in production. |
| New Password | Password field. User enters new password. |
| Confirm New Password | Password field. Must match New Password. |
| Logout Other Devices | Dropdown/select field. User chooses whether to invalidate other sessions. |
| Reset Password | Action field. Submits password reset for current account. |
| Back To Profile Edit | Action field. Returns to Edit Personal Profile screen. |
| Token Sent Message | Visible message/state field. Shows token request result. |
| Success Message | Visible message/state field. Shows password reset success. |


### 3.2.5 View Personal Profile

Related Use Case: UC-12, UC-11
Actor: Learner, Teacher, Administrator

This screen allows the user to:
- view profile data, role access summary, premium status, and account security action.
- edit profile, reset password, or logout current account.

On the screen, s/he can also:
- see role-specific access summary and account status.

UI Layout / Prototype:
http://127.0.0.1:5173/profile

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Edit Profile | Action field. Opens Edit Personal Profile screen. |
| Reset Password | Action field. Opens profile security Reset Password screen. |
| Logout | Action field. Signs out current account. |
| Avatar And Basic Profile | Visible data group. Shows avatar, full name, username, role, and premium badge. |
| Email | View-only data field. Shows current account email. |
| Phone | View-only data field. Shows phone number. |
| Account Status | Status field. Shows active, pending, or locked state. |
| Joined At | View-only data field. Shows account created date. |
| Last Active | View-only data field. Shows last activity timestamp. |
| Bio | View-only data field. Shows profile bio/details. |
| Preferred Language | View-only data field. Shows language preference. |
| Notification Preference | View-only data field. Shows notification preference. |
| Timezone | View-only data field. Shows timezone. |
| Two-factor Auth | View-only data field. Shows 2FA status. |
| Role Access Summary | Visible data group. Shows permissions for current role. |
| Logout Message | Visible message/state field. Shows sign-out confirmation. |


### 3.2.6 Edit Personal Profile

Related Use Case: UC-13
Actor: Learner, Teacher, Administrator

This screen allows the user to:
- update allowed profile fields, notification settings, visibility, and profile details.
- open Reset Password from profile editing area.

On the screen, s/he can also:
- save changes, cancel, or view saved confirmation.

UI Layout / Prototype:
http://127.0.0.1:5173/profile/edit

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Reset Password | Action field. Opens profile security Reset Password screen. |
| Full Name | Text input. User edits display name. |
| Phone Number | Text input. User edits contact phone number. |
| Avatar Initials | Text input. Maximum 2 characters for avatar display. |
| Username | Text input. User edits username. |
| Preferred Language | Text input. User edits language preference. |
| Timezone | Text input. User edits timezone. |
| Notification Preference | Dropdown/select field. User chooses Email, In-app, or Email + in-app. |
| Profile Visibility | Dropdown/select field. User chooses public or private profile. |
| Profile Details | Textarea field. User edits profile bio/details. |
| Save Changes | Action field. Saves profile updates. |
| Cancel | Action field. Returns to profile screen without saving. |
| Saved Message | Visible message/state field. Shows save confirmation. |


### 3.2.7 Change Password

Related Use Case: UC-14
Actor: Learner, Teacher, Administrator

This screen allows the user to:
- change account password with current password, new password, confirmation, security code, and session handling.
- Use the visible fields and actions listed in the Field Description table.

On the screen, s/he can also:
- View status, validation, empty, pagination, or mock interaction states where applicable.

UI Layout / Prototype:
http://127.0.0.1:5173/profile/change-password

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Current Password | Password field. User enters or updates protected credential data. |
| New Password | Password field. User enters or updates protected credential data. |
| Confirm New Password | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Security Code | Visible field. User views or enters this value on the screen. |
| Logout Other Devices | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Update Password | Password field. User enters or updates protected credential data. |
| Validation Messages | Visible message/state field. Shows validation, success, warning, empty, or system state. |


### 3.2.8 Notification Center

Related Use Case: Shared Notification
Actor: Learner, Teacher, Administrator

This screen allows the user to:
- view notifications, search and filter them, mark notifications as read, and clear read items.
- Use the visible fields and actions listed in the Field Description table.

On the screen, s/he can also:
- View status, validation, empty, pagination, or mock interaction states where applicable.

UI Layout / Prototype:
http://127.0.0.1:5173/notifications

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Search Notifications | Text search field. User enters keyword(s) to filter visible records. |
| Read Status | Status field. User views or selects status depending on the screen context. |
| Notification Type | Visible field. User views or enters this value on the screen. |
| Sort By | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Apply | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Reset Filters | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Mark All As Read | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Clear Read Notifications | Visible field. User views or enters this value on the screen. |
| Notification List | Visible data group. Shows records or grouped screen data. Counted as one field. |
| Mark As Read | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Rows Per Page | Pagination field. User selects page size or navigates visible pages. |
| Pagination | Action field. User clicks to navigate, submit, update, or process the selected visible item. |


## 3.3 Class Management

### 3.3.1 Learner Dashboard

Related Use Case: UC-16, UC-18, UC-23
Actor: Learner

This screen allows the user to:
- resume study, open joined classes and exams, and view learning plan, metrics, and preferences.
- Use the visible fields and actions listed in the Field Description table.

On the screen, s/he can also:
- View status, validation, empty, pagination, or mock interaction states where applicable.

UI Layout / Prototype:
http://127.0.0.1:5173/learner/dashboard

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Join Class | Visible field. User views or enters this value on the screen. |
| Continue Study | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Jump Back In Cards | Visible data group. Shows records or grouped screen data. Counted as one field. |
| Continue | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Details | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Recent Study Sets | Visible data group. Shows records or grouped screen data. Counted as one field. |
| Today Study Plan | Visible data group. Shows records or grouped screen data. Counted as one field. |
| Joined Classes Table | Visible data group. Shows records or grouped screen data. Counted as one field. |
| Open Class | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Available Exams Table | Visible data group. Shows records or grouped screen data. Counted as one field. |
| Exam Info | Visible field. User views or enters this value on the screen. |
| Learning Metrics | Visible data group. Shows records or grouped screen data. Counted as one field. |
| Learning Preferences | Visible field. User views or enters this value on the screen. |


### 3.3.2 View Joined Classes

Related Use Case: UC-16
Actor: Learner

This screen allows the user to:
- view joined classes, filter them, open class detail, or request to join a new class.
- Use the visible fields and actions listed in the Field Description table.

On the screen, s/he can also:
- View status, validation, empty, pagination, or mock interaction states where applicable.

UI Layout / Prototype:
http://127.0.0.1:5173/learner/classes

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Join Class | Visible field. User views or enters this value on the screen. |
| Search Classes | Text search field. User enters keyword(s) to filter visible records. |
| Subject Filter | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Status Filter | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Sort By | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Apply | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Reset Filters | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Joined Classes Table | Visible data group. Shows records or grouped screen data. Counted as one field. |
| Open | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Rows Per Page | Pagination field. User selects page size or navigates visible pages. |
| Pagination | Action field. User clicks to navigate, submit, update, or process the selected visible item. |


### 3.3.3 Join Class

Related Use Case: UC-17
Actor: Learner

This screen allows the user to:
- submit a class join request by code or invitation link and view pending request state.
- Use the visible fields and actions listed in the Field Description table.

On the screen, s/he can also:
- View status, validation, empty, pagination, or mock interaction states where applicable.

UI Layout / Prototype:
http://127.0.0.1:5173/learner/classes/join

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Class Code | Visible field. User views or enters this value on the screen. |
| Invitation Link | Visible field. User views or enters this value on the screen. |
| Request Type | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Learner Email | Email field. User enters email address or triggers email-related processing. |
| Preferred Section | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Parent / Guardian Contact | Visible field. User views or enters this value on the screen. |
| Request Message | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Send Join Request | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Pending Request Message | Visible message/state field. Shows validation, success, warning, empty, or system state. |


### 3.3.4 Learner Class Detail

Related Use Case: UC-16
Actor: Learner

This screen allows the user to:
- view class metadata and assigned materials, search class content, and open assigned study sets.
- Use the visible fields and actions listed in the Field Description table.

On the screen, s/he can also:
- View status, validation, empty, pagination, or mock interaction states where applicable.

UI Layout / Prototype:
http://127.0.0.1:5173/learner/classes/class-bio-12a

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Back To Classes | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Search Class Materials | Text search field. User enters keyword(s) to filter visible records. |
| Material Type | Visible field. User views or enters this value on the screen. |
| Completion Status | Status field. User views or selects status depending on the screen context. |
| Sort By | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Apply | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Reset Filters | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Class Information | Visible data group. Shows records or grouped screen data. Counted as one field. |
| Assigned Study Sets | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Open Study Set | Action field. User clicks to navigate, submit, update, or process the selected visible item. |


### 3.3.5 Teacher Dashboard

Related Use Case: UC-27, UC-31, UC-45, UC-49
Actor: Teacher

This screen allows the user to:
- view teacher summary, class health, teaching workflow, and class management shortcuts.
- Use the visible fields and actions listed in the Field Description table.

On the screen, s/he can also:
- View status, validation, empty, pagination, or mock interaction states where applicable.

UI Layout / Prototype:
http://127.0.0.1:5173/teacher/dashboard

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Create Class | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Create Question Bank | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Teacher Metrics | Visible data group. Shows records or grouped screen data. Counted as one field. |
| Teaching Workflow | Visible data group. Shows records or grouped screen data. Counted as one field. |
| Class Health | Visible data group. Shows records or grouped screen data. Counted as one field. |
| Search Teaching Work | Text search field. User enters keyword(s) to filter visible records. |
| Class Status | Status field. User views or selects status depending on the screen context. |
| Subject Filter | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Sort By | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Apply | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Reset Filters | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Class Table | Visible data group. Shows records or grouped screen data. Counted as one field. |
| Open | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Members | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Invite | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Rows Per Page | Pagination field. User selects page size or navigates visible pages. |
| Pagination | Action field. User clicks to navigate, submit, update, or process the selected visible item. |


### 3.3.6 View Created Classes

Related Use Case: UC-27
Actor: Teacher

This screen allows the user to:
- view, search, filter, and open teacher-created classes or create a new class.
- Use the visible fields and actions listed in the Field Description table.

On the screen, s/he can also:
- View status, validation, empty, pagination, or mock interaction states where applicable.

UI Layout / Prototype:
http://127.0.0.1:5173/teacher/classes

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Create Class | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Search Classes | Text search field. User enters keyword(s) to filter visible records. |
| Subject Filter | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Status Filter | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Join Policy Filter | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Sort By | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Apply | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Reset Filters | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Created Classes Table | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Open | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Members | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Invite | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Rows Per Page | Pagination field. User selects page size or navigates visible pages. |
| Pagination | Action field. User clicks to navigate, submit, update, or process the selected visible item. |


### 3.3.7 Create Class

Related Use Case: UC-28
Actor: Teacher

This screen allows the user to:
- create a new class with metadata, capacity, policy, dates, status, and description.
- Use the visible fields and actions listed in the Field Description table.

On the screen, s/he can also:
- View status, validation, empty, pagination, or mock interaction states where applicable.

UI Layout / Prototype:
http://127.0.0.1:5173/teacher/classes/create

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Class Name | Visible field. User views or enters this value on the screen. |
| Subject | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Grade / Level | Visible field. User views or enters this value on the screen. |
| Academic Year | Visible field. User views or enters this value on the screen. |
| Class Code | Visible field. User views or enters this value on the screen. |
| Learner Capacity | Numeric field. User views or enters a numeric value. |
| Default Due Time | Date/time field. User views or enters schedule, duration, period, or time-related value. |
| Teaching Language | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Join Policy | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Status | Status field. User views or selects status depending on the screen context. |
| Start Date | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| End Date | Date/time field. User views or enters schedule, duration, period, or time-related value. |
| Description | Textarea or long text field. User views or enters multi-line content. |
| Create Class | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Created Message | Action field. User clicks to navigate, submit, update, or process the selected visible item. |


### 3.3.8 Teacher Class Detail

Related Use Case: UC-27, UC-29, UC-30, UC-45
Actor: Teacher

This screen allows the user to:
- view class metadata, search class content, manage invitation and members, and assign study sets.
- Use the visible fields and actions listed in the Field Description table.

On the screen, s/he can also:
- View status, validation, empty, pagination, or mock interaction states where applicable.

UI Layout / Prototype:
http://127.0.0.1:5173/teacher/classes/class-bio-12a

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Generate Invitation | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Members | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Assign Study Set | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Search Class Content | Text search field. User enters keyword(s) to filter visible records. |
| Assignment Status | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Material Type | Visible field. User views or enters this value on the screen. |
| Sort By | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Apply | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Reset Filters | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Class Information | Visible data group. Shows records or grouped screen data. Counted as one field. |
| Assigned Study Sets Table | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Preview | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Reassign | Action field. User clicks to navigate, submit, update, or process the selected visible item. |


### 3.3.9 Generate Class Invitation

Related Use Case: UC-29
Actor: Teacher

This screen allows the user to:
- generate and send an invitation link with expiry, maximum uses, approval rule, and message.
- Use the visible fields and actions listed in the Field Description table.

On the screen, s/he can also:
- View status, validation, empty, pagination, or mock interaction states where applicable.

UI Layout / Prototype:
http://127.0.0.1:5173/teacher/classes/class-bio-12a/invitation

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Class Code | Visible field. User views or enters this value on the screen. |
| Invitation Link | Visible field. User views or enters this value on the screen. |
| Recipient Emails | Email field. User enters email address or triggers email-related processing. |
| Invitation Expiry Date | Date/time field. User views or enters schedule, duration, period, or time-related value. |
| Maximum Uses | Numeric field. User views or enters a numeric value. |
| Approval Rule | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Email Message | Email field. User enters email address or triggers email-related processing. |
| Copy Link | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Send Invitation Email | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Action Completed Message | Action field. User clicks to navigate, submit, update, or process the selected visible item. |


### 3.3.10 View Class Member List

Related Use Case: UC-30, UC-32
Actor: Teacher

This screen allows the user to:
- view members, search and filter learners, remove a learner, and open join requests.
- Use the visible fields and actions listed in the Field Description table.

On the screen, s/he can also:
- View status, validation, empty, pagination, or mock interaction states where applicable.

UI Layout / Prototype:
http://127.0.0.1:5173/teacher/classes/class-bio-12a/members

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Join Requests | Visible field. User views or enters this value on the screen. |
| Search Members | Text search field. User enters keyword(s) to filter visible records. |
| Member Status | Status field. User views or selects status depending on the screen context. |
| Premium Filter | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Sort By | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Apply | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Reset Filters | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Member List Table | Visible data group. Shows records or grouped screen data. Counted as one field. |
| Remove | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Rows Per Page | Pagination field. User selects page size or navigates visible pages. |
| Pagination | Action field. User clicks to navigate, submit, update, or process the selected visible item. |


### 3.3.11 Approve Class Join Request

Related Use Case: UC-31
Actor: Teacher

This screen allows the user to:
- view join requests, filter them, and approve or reject pending learners.
- Use the visible fields and actions listed in the Field Description table.

On the screen, s/he can also:
- View status, validation, empty, pagination, or mock interaction states where applicable.

UI Layout / Prototype:
http://127.0.0.1:5173/teacher/classes/class-bio-12a/join-requests

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Search Join Requests | Text search field. User enters keyword(s) to filter visible records. |
| Request Status | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Requested Date | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Sort By | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Apply | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Reset Filters | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Join Request Table | Visible data group. Shows records or grouped screen data. Counted as one field. |
| Approve | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Reject | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Rows Per Page | Pagination field. User selects page size or navigates visible pages. |
| Pagination | Action field. User clicks to navigate, submit, update, or process the selected visible item. |


### 3.3.12 Assign Study Set To Class

Related Use Case: UC-45
Actor: Teacher

This screen allows the user to:
- assign a study set to a class or learners with dates, rule, target accuracy, instructions, and notification.
- Use the visible fields and actions listed in the Field Description table.

On the screen, s/he can also:
- View status, validation, empty, pagination, or mock interaction states where applicable.

UI Layout / Prototype:
http://127.0.0.1:5173/teacher/classes/class-bio-12a/assign-study-set

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Class | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Study Set | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Assign To | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Due Date | Date/time field. User views or enters schedule, duration, period, or time-related value. |
| Release Date | Date/time field. User views or enters schedule, duration, period, or time-related value. |
| Completion Rule | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Target Accuracy | Numeric field. User views or enters a numeric value. |
| Assignment Instructions | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Notify Learners After Assignment | Checkbox field. User toggles the visible option on or off. |
| Assign Study Set | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Assignment Success Message | Action field. User clicks to navigate, submit, update, or process the selected visible item. |


## 3.4 Question Management & Question Bank Repository

### 3.4.1 View Question Banks

Related Use Case: UC-33
Actor: Teacher

This screen allows the Teacher to:
- View Question Banks that s/he owns or is authorized to access.
- Search Question Banks by keyword.
- Filter Question Banks by subject, visibility, and review status.
- Sort the Question Bank list.
- Choose to create a new Question Bank or open an existing Question Bank detail page.

UI Layout / Prototype:
http://127.0.0.1:5173/teacher/question-banks

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Create Question Bank | Button to open the Create Question Bank screen. |
| Keyword | Text field for searching by bank title, description, subject, or topic. |
| Subject | Dropdown. Initial values: All subjects, Biology, Chemistry, Mathematics. Default value: All subjects. |
| Visibility | Dropdown. Initial values: All visibility, Private, Public, Class only. Default value: All visibility. |
| Review Status | Dropdown. Initial values: All review status, Draft, Reviewed, Archived. Default value: All review status. |
| Sort By | Dropdown for changing the visible Question Bank order. |
| Apply | Button to apply the selected search, filter, and sort criteria. |
| Reset Filters | Button to clear current filter criteria. |
| Question Bank Table | Table showing Question Bank title, description, subject, topic, visibility, question count, and action. |
| Open | Link/button to open the selected Question Bank detail page. |
| Pagination | Control to move between pages of Question Bank records. |

### 3.4.2 Create Question Bank

Related Use Case: UC-34
Actor: Teacher

This screen allows the Teacher to:
- Add a new Teacher-only reusable Question Bank repository.
- Enter Question Bank metadata and repository configuration.
- Save the Question Bank so questions can be added later.

UI Layout / Prototype:
http://127.0.0.1:5173/teacher/question-banks/create

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Question Bank Title | Text field. Required. Maximum length should follow system metadata rule. |
| Subject | Text field for repository subject. |
| Topic | Text field for repository topic. |
| Chapter | Text field for default chapter metadata. |
| Lesson | Text field for default lesson metadata. |
| Tags | Text field for comma-separated repository tags. |
| Grade / Level | Text field for target learner level. |
| Default Score Per Question | Numeric field for default score value. |
| Estimated Completion Time | Text/time field for estimated practice duration. |
| Visibility | Dropdown. Initial values: Private, Public, Class Only. Default value: Private. |
| Question Review Workflow | Dropdown. Initial values: No review required, Teacher review required, Admin review for shared repository. |
| Description | Textarea for repository description. |
| Create Question Bank | Button to validate and create the Question Bank. |
| Created Message | Visible success message after local create mock completes. |

### 3.4.3 Question Bank Detail

Related Use Case: UC-33, UC-37, UC-38, UC-41, UC-42, UC-43
Actor: Teacher

This screen allows the Teacher to:
- View Question Bank metadata and contained questions.
- Search, filter, edit, delete, import, or generate questions for the selected Question Bank.
- Open the Question Bank update screen.

UI Layout / Prototype:
http://127.0.0.1:5173/teacher/question-banks/bank-bio-core

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Edit Bank | Button to open Update Question Bank Information screen. |
| Create Question | Button to open Add Question Manually screen for this Question Bank. |
| Import Excel | Button to open Import Questions from Excel for this Question Bank. |
| Generate from Material | Button to open AI generation form for this Question Bank. |
| Search Questions | Text field for searching question content, tag, or answer. |
| Question Type | Dropdown. Initial values: All types, Multiple choice, True/False, Written answer. |
| Difficulty | Dropdown. Initial values: All difficulties, Easy, Medium, Hard. |
| Score Range | Dropdown. Initial values: All scores, 1 point, 2+ points. |
| Sort By | Dropdown for changing question list order. |
| Apply | Button to apply search and filters. |
| Reset Filters | Button to clear current search and filter criteria. |
| Question Bank Metadata | Data group showing subject, topic, visibility, owner, and updated date. |
| Question Table | Table showing question content, type, difficulty, score, and actions. |
| Edit Question | Button to open Update Question screen for the selected question. |
| Delete Question | Button to remove, hide, or archive the selected question in mock state. |
| Pagination | Control to move between pages of question records. |
| Delete Message | Visible message after Delete Question action is clicked. |

### 3.4.4 Update Question Bank Information

Related Use Case: UC-35, UC-36
Actor: Teacher

This screen allows the Teacher to:
- Update Question Bank title, description, subject, topic, visibility, and repository configuration.
- Delete or mark a Question Bank for removal in the prototype.

UI Layout / Prototype:
http://127.0.0.1:5173/teacher/question-banks/bank-bio-core/edit

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Question Bank Title | Text field prefilled with current Question Bank title. |
| Subject | Text field prefilled with current subject. |
| Topic | Text field prefilled with current topic. |
| Chapter | Text field for default chapter metadata. |
| Lesson | Text field for default lesson metadata. |
| Tags | Text field for comma-separated tags. |
| Grade / Level | Text field for target learner level. |
| Default Score Per Question | Numeric field for default score value. |
| Estimated Completion Time | Text/time field for estimated duration. |
| Visibility | Dropdown. Initial values: Public, Private, Class Only. |
| Review Status | Dropdown. Initial values: Draft, Reviewed, Archived. |
| Description | Textarea prefilled with current description. |
| Save Changes | Button to validate and save updated metadata. |
| Delete Question Bank | Button to mark the Question Bank for deletion/archive in mock state. |
| Saved Message | Visible message after Save Changes action is clicked. |
| Delete Message | Visible message after Delete Question Bank action is clicked. |

### 3.4.5 Add Question Manually To Study Set

Related Use Case: UC-37, UC-40
Actor: Learner, Teacher

This screen allows the Learner or Teacher to:
- Add a new question to an owned or editable Study Set.
- Enter question content, answer options, correct answer, metadata, score, and explanation.
- Open AI generation when Premium access is available.

UI Layout / Prototype:
http://127.0.0.1:5173/study-sets/set-learner-vocab/questions/create

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Study Set | Read-only data field showing the destination Study Set. |
| Subject | Visible subject value inherited from the Study Set and editable in the question metadata area. |
| Topic | Visible topic value inherited from the Study Set and editable in the question metadata area. |
| Generate from Material | Button to open AI generation for this Study Set. |
| Question Status | Dropdown. Initial values: Draft, Ready for use, Reviewed. |
| Answer Shuffle | Dropdown. Initial values: Shuffle answers, Keep answer order. |
| Time Estimate | Text/time field for expected answer time. |
| Question Type | Dropdown. Initial values: Multiple Choice, True/False, Written Answer. |
| Question Content | Textarea for the question prompt. Required. |
| Option A | Text field for answer option A. |
| Option B | Text field for answer option B. |
| Option C | Text field for answer option C. |
| Option D | Text field for answer option D. |
| Correct Answer | Text field for correct answer value. Required. |
| Score | Numeric field for point value. |
| Negative Score | Numeric field for penalty score. |
| Difficulty | Dropdown. Initial values: Easy, Medium, Hard. |
| Chapter | Text field for question chapter metadata. |
| Lesson | Text field for question lesson metadata. |
| Tags | Text field for comma-separated question tags. |
| Question Visibility | Dropdown. Initial values: Same as Study Set, Draft only. |
| Author Notes | Textarea for internal author note. |
| Explanation | Textarea for answer explanation shown during review. |
| Create Question | Button to submit the question draft. |
| Saved Message | Visible success message after the question is saved locally. |

### 3.4.6 Add Question Manually To Question Bank

Related Use Case: UC-37, UC-40
Actor: Teacher

This screen allows the Teacher to:
- Add a reusable question to a Teacher-only Question Bank.
- Fill the same question fields used for Study Set question authoring.
- Save the question so it can be reused for future Study Sets or Exams.

UI Layout / Prototype:
http://127.0.0.1:5173/teacher/question-banks/bank-bio-core/questions/create

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Question Bank | Read-only data field showing the destination Question Bank. |
| Subject | Visible subject value inherited from the Question Bank and editable in the question metadata area. |
| Topic | Visible topic value inherited from the Question Bank and editable in the question metadata area. |
| Generate from Material | Button to open AI generation for this Question Bank. |
| Question Status | Dropdown. Initial values: Draft, Ready for use, Reviewed. |
| Answer Shuffle | Dropdown. Initial values: Shuffle answers, Keep answer order. |
| Time Estimate | Text/time field for expected answer time. |
| Question Type | Dropdown. Initial values: Multiple Choice, True/False, Written Answer. |
| Question Content | Textarea for question prompt. Required. |
| Option A | Text field for answer option A. |
| Option B | Text field for answer option B. |
| Option C | Text field for answer option C. |
| Option D | Text field for answer option D. |
| Correct Answer | Text field for correct answer value. Required. |
| Score | Numeric field for point value. |
| Negative Score | Numeric field for penalty score. |
| Difficulty | Dropdown. Initial values: Easy, Medium, Hard. |
| Chapter | Text field for question chapter metadata. |
| Lesson | Text field for question lesson metadata. |
| Tags | Text field for comma-separated question tags. |
| Question Visibility | Dropdown. Initial values: Same as Question Bank, Draft only. |
| Author Notes | Textarea for internal note. |
| Explanation | Textarea for answer explanation. |
| Create Question | Button to submit the question draft. |
| Saved Message | Visible success message after the question is saved locally. |

### 3.4.7 Update Question

Related Use Case: UC-41, UC-40
Actor: Learner, Teacher

This screen allows the user to:
- Update an existing question in an editable Study Set or Teacher Question Bank.
- Change question content, answer options, correct answer, metadata, score, difficulty, and explanation.

UI Layout / Prototype:
http://127.0.0.1:5173/study-sets/set-learner-vocab/questions/q-1/edit

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Study Set / Question Bank | Read-only data field showing the destination container. |
| Subject | Text field for question subject metadata. |
| Topic | Text field for question topic metadata. |
| Question Status | Dropdown. Initial values: Draft, Ready for use, Reviewed. |
| Answer Shuffle | Dropdown. Initial values: Shuffle answers, Keep answer order. |
| Time Estimate | Text/time field for expected answer time. |
| Question Type | Dropdown. Initial values: Multiple Choice, True/False, Written Answer. |
| Question Content | Textarea prefilled with current question prompt. |
| Option A | Text field prefilled with answer option A. |
| Option B | Text field prefilled with answer option B. |
| Option C | Text field prefilled with answer option C. |
| Option D | Text field prefilled with answer option D. |
| Correct Answer | Text field prefilled with current correct answer. |
| Score | Numeric field prefilled with current score. |
| Negative Score | Numeric field for penalty score. |
| Difficulty | Dropdown prefilled with current difficulty. |
| Chapter | Text field for question chapter metadata. |
| Lesson | Text field for question lesson metadata. |
| Tags | Text field for comma-separated tags. |
| Question Visibility | Dropdown. Initial values: Same as destination, Draft only. |
| Author Notes | Textarea for internal author note. |
| Explanation | Textarea prefilled with answer explanation. |
| Update Question | Button to submit question changes. |
| Saved Message | Visible success message after local save completes. |

### 3.4.8 Import Questions From Excel

Related Use Case: UC-38
Actor: Learner, Teacher

This screen allows the user to:
- Upload an Excel file containing questions.
- Validate template columns and question data.
- Open import errors or preview valid questions before saving.

UI Layout / Prototype:
http://127.0.0.1:5173/study-sets/set-learner-vocab/import

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Excel File | File input for selecting the Excel import file. |
| Worksheet Name | Text field for worksheet name. Default example: Questions. |
| Header Row | Numeric field for header row index. Default example: 1. |
| Import Mode | Dropdown. Initial values: Validate only, Validate and save valid rows. |
| Duplicate Handling | Dropdown. Initial values: Skip duplicate questions, Replace existing questions, Allow duplicates. |
| Default Difficulty | Dropdown. Initial values: Easy, Medium, Hard. |
| Default Tags | Text field for tags applied to imported rows. |
| Uploaded File Preview | Data group showing detected file name, row count, and destination. |
| Validate File | Button to validate the selected Excel file. |
| View Errors | Button to open row-level import errors. |
| Preview Valid Questions | Button to open the question preview step. |
| Validation Message | Visible validation result showing valid and invalid row counts. |

### 3.4.9 View Question Import Errors

Related Use Case: UC-39
Actor: Learner, Teacher

This screen allows the user to:
- View row-level validation errors detected during Excel import.
- Search or filter errors before fixing the Excel file.

UI Layout / Prototype:
http://127.0.0.1:5173/study-sets/set-learner-vocab/import/errors

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Search Import Errors | Text field for row, field, or raw value keyword. |
| Error Field | Dropdown. Initial values: All fields, Correct Answer, Question Type, Score. |
| Severity | Dropdown. Initial values: All severities, Error, Warning. |
| Sort By | Dropdown for error list order. |
| Apply | Button to apply search and filters. |
| Reset Filters | Button to clear search and filters. |
| Error Table | Table showing row number, field, raw value, and validation message. |
| Pagination | Control to move between import error records. |

### 3.4.10 Preview Questions Before Saving

Related Use Case: UC-40
Actor: Learner, Teacher

This screen allows the user to:
- Preview valid imported, manually entered, copied, or AI-generated question drafts.
- Review question content, type, correct answer, score, and status before saving.
- Save approved questions into the selected Study Set or Question Bank.

UI Layout / Prototype:
http://127.0.0.1:5173/study-sets/set-learner-vocab/import/preview

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Search Preview Rows | Text field for question or answer keyword. |
| Question Type | Dropdown. Initial values: All types, Multiple choice, True/False. |
| Import Status | Dropdown. Initial values: All rows, Valid, Duplicate warning. |
| Sort By | Dropdown for preview row order. |
| Apply | Button to apply search and filters. |
| Reset Filters | Button to clear search and filters. |
| Preview Question Table | Table showing question, type, correct answer, score, and status. |
| Pagination | Control to move between preview records. |
| Save Imported Questions | Button to save approved valid questions. |
| Saved Message | Visible success message after saving locally. |

### 3.4.11 Generate Questions From Material

Related Use Case: UC-43, UC-40
Actor: Premium Learner, Premium Teacher

This screen allows the Premium user to:
- Upload or paste learning material.
- Choose AI question generation settings.
- Generate draft questions and open the preview step before saving.
- View upgrade-required message when the account is not Premium.

UI Layout / Prototype:
http://127.0.0.1:5173/study-sets/set-learner-vocab/ai-generate

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Learning Material File | File input for source material. |
| Material Text | Textarea for pasted learning material. |
| Question Type | Dropdown. Initial values: Mixed types, Multiple Choice, True/False, Written Answer. |
| Number of Questions | Numeric field for generated question count. |
| Bloom Level | Dropdown. Initial values: Remember, Understand, Apply, Analyze. |
| Difficulty | Dropdown. Initial values: Easy, Medium, Hard. |
| Topic Focus | Text field for topic focus. |
| Include Answer Key | Checkbox to include correct answers in generated drafts. |
| Include Explanations | Checkbox to include explanations in generated drafts. |
| Save Drafts After Generation | Checkbox to save drafts after generation. |
| Generate Questions | Button to run AI generation mock. |
| AI Generated Question Preview | Visible result panel after successful generation mock. |
| Preview Before Saving | Button to open Preview Questions Before Saving. |
| Upgrade Required Message | Visible warning when a non-premium account attempts generation. |

## 3.5 Study Set Creation and Learning

### 3.5.1 View Accessible Study Sets

Related Use Case: UC-18
Actor: Learner, Teacher

This screen allows the Learner or Teacher to:
- View Study Sets s/he can access.
- Search Study Sets by title, owner, subject, topic, or tag.
- Filter Study Sets by subject, topic, ownership, assignment, visibility, and learning status.
- Open Study Set detail, continue flashcards, or review mistakes.

UI Layout / Prototype:
http://127.0.0.1:5173/study-sets

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Create Study Set | Button to open the Create Study Set screen. |
| Search Study Sets | Text field for searching title, owner, subject, topic, or tag. |
| Subject Filter | Dropdown. Initial values: All subjects, Biology, Chemistry, Mathematics. |
| Topic Filter | Dropdown. Initial values: All topics, Cell Structure, Chemical Bonding, Functions, Exam Review. |
| Ownership Filter | Dropdown. Learner values include Owned by me, Assigned to me, Public sets started. Teacher values include Owned by me and Managed class sets. |
| Assignment Filter | Dropdown. Initial values: All assignments, Assigned to class, Not assigned. |
| Visibility Filter | Dropdown. Initial values: All visibility, Public, Private, Class only. |
| Learning Status | Dropdown. Initial values: All status, Not started, In progress, Completed. |
| Sort By | Dropdown. Initial values: Most questions, Title A-Z, Title Z-A, Progress high to low. |
| Apply | Button to apply filters and sorting. |
| Reset Filters | Button to clear current filters. |
| Study Set Cards | Card list showing title, description, subject, topic, owner, visibility, assigned class count, question count, learner count, progress, and learning status. |
| Open | Button to open selected Study Set detail. |
| Flashcards | Button to open flashcard study mode. |
| Review Mistakes | Button to open wrong answer review when mistakes exist. |
| Pagination | Control to move between Study Set records. |

### 3.5.2 Create Study Set

Related Use Case: UC-44, UC-37, UC-38, UC-43
Actor: Learner, Teacher

This screen allows the Learner or Teacher to:
- Create a Study Set as the primary learning object.
- Enter Study Set title, description, subject, topic, visibility, and learning settings.
- Create an empty Study Set or add questions afterward.
- For Teacher only, optionally copy selected questions from a Question Bank without exposing the source Question Bank to Learners.

UI Layout / Prototype:
http://127.0.0.1:5173/study-sets/create

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Study Set Title | Text field. Required. Default example: Cell Biology Essentials. |
| Subject | Text field for Study Set subject. |
| Topic | Text field for Study Set topic. |
| Visibility | Dropdown. Initial values: Public, Private, Class Only. Default value: Public. |
| Estimated Study Time | Text/time field for expected study duration. |
| Target Accuracy | Numeric/percentage field for target performance. |
| Card Order | Dropdown. Initial values: Default order, Shuffle cards, Weak questions first. |
| Practice Mode | Dropdown. Initial values: Flashcards only, Quiz only, Flashcards and quiz. |
| Tags | Text field for comma-separated Study Set tags. |
| Description | Textarea for Study Set description. |
| Optional Question Bank To Copy From | Teacher-only dropdown listing available Question Banks. |
| Selected Questions To Copy | Teacher-only checklist showing reusable questions selected for copying. |
| Include Explanations | Checkbox to include explanations in the Study Set. |
| Allow Copy By Other Teachers | Checkbox to allow teacher reuse. |
| Track Learner Progress | Checkbox to enable progress tracking. |
| Create Empty Study Set | Checkbox to create the Study Set without questions. |
| Create Study Set | Button to validate and create the Study Set locally. |
| Created Message | Visible success message after local create completes. |
| Add Question | Button shown after create to open Add Question Manually. |
| Import Excel | Button shown after create to open Import Questions From Excel. |
| AI Generate | Button shown after create to open Generate Questions From Material. |
| Open Study Set | Button shown after create to open the Study Set detail page. |

### 3.5.3 Study Set Detail

Related Use Case: UC-18, UC-37, UC-41, UC-42, UC-45
Actor: Learner, Teacher

This screen allows the Learner or Teacher to:
- View Study Set description, metadata, progress, and question list.
- Start flashcards or quiz where role permits.
- Manage questions when the user owns or is authorized to edit the Study Set.
- Assign the Study Set to a class when the active role is Teacher.

UI Layout / Prototype:
http://127.0.0.1:5173/study-sets/set-bio-cell

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Flashcards | Button to open Flashcard Study mode. |
| Take Quiz | Learner-only button to open Study Set quiz mode. |
| Review Mistakes | Button to open wrong answer review when missed questions exist. |
| Add Question | Button to add a question into the Study Set when editable. |
| Import Excel | Button to import questions into the Study Set when editable. |
| AI Generate | Button to generate questions into the Study Set when editable. |
| Assign To Class | Teacher-only button to open assignment screen. |
| Study Set Description | Visible data field showing Study Set description. |
| Question Table | Table showing question content, question type, score, and actions when editable. |
| Edit Question | Button to open Update Question screen. |
| Delete Question | Button to remove question from the Study Set in mock state. |
| Subject | Visible Study Set subject. |
| Topic | Visible Study Set topic. |
| Question Count | Visible number of questions in the Study Set. |
| Missed Questions | Visible number of wrong answers for the Study Set. |
| Owner | Visible Study Set owner. |
| Due Date | Visible assigned due date value when applicable. |
| Required Accuracy | Visible target accuracy value. |
| Learning Progress | Progress indicator for Study Set completion. |
| Flashcard Order | Visible study mode setting. |
| Quiz Mode | Visible study mode setting. |
| Retry Rule | Visible study mode setting. |
| Completion Rule | Visible study mode setting. |
| Delete Message | Visible message after Delete Question action is clicked. |

### 3.5.4 Flashcard Study

Related Use Case: UC-05, UC-18
Actor: Guest, Learner, Teacher

This screen allows the user to:
- Study visible Study Set questions as flashcards.
- Flip cards, move to previous or next card, and mark cards for review.
- Configure card order and answer mode for the current session.

UI Layout / Prototype:
http://127.0.0.1:5173/study-sets/set-bio-cell/flashcards

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Card Order | Dropdown. Initial values: Default order, Shuffle cards, Weak answers first. |
| Answer Mode | Dropdown. Initial values: Tap to reveal, Type before reveal. |
| Confidence | Dropdown. Initial values: Not sure, Learning, Known. |
| Mark Card For Review | Checkbox to mark current card for later review. |
| Card Counter | Visible current card index and total card count. |
| Progress Indicator | Progress bar showing current position in the card set. |
| Flashcard | Clickable card showing question side or answer side. |
| Previous | Button to move to previous card. |
| Next | Button to move to next card. |

### 3.5.5 Take Study Set Quiz

Related Use Case: UC-19
Actor: Learner

This screen allows the Learner to:
- Take a practice quiz generated from an accessible Study Set.
- Choose answer options or enter written answers.
- Submit answers and view immediate feedback in the prototype.

UI Layout / Prototype:
http://127.0.0.1:5173/study-sets/set-bio-cell/quiz

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Question Count | Dropdown for quiz length. |
| Question Type Filter | Dropdown for filtering quiz question types. |
| Answer Feedback Mode | Dropdown for feedback timing. |
| Show Explanation After Submit | Checkbox to display explanations after submission. |
| Question Card | Data group showing question number, content, and answer controls. |
| Answer Option | Clickable option button for multiple-choice or true/false questions. |
| Written Answer | Text field for written-answer questions. |
| Submit Quiz | Button to submit current quiz answers. |
| Open Result Screen | Button to open Quiz Result page. |
| Feedback Message | Visible correct/incorrect feedback after submission. |
| Score Message | Visible score after quiz submission. |

### 3.5.6 Quiz Result

Related Use Case: UC-19, UC-20
Actor: Learner

This screen allows the Learner to:
- View quiz score, correct answer count, and wrong answer count.
- Search or filter answer review records.
- Open wrong answer review for the Study Set.

UI Layout / Prototype:
http://127.0.0.1:5173/study-sets/set-bio-cell/result

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Review Wrong Answers | Button to open wrong answer review. |
| Score | Visible score metric. |
| Correct Answers | Visible correct answer count. |
| Wrong Answers | Visible wrong answer count. |
| Search Answer Review | Text field for filtering result rows. |
| Answer Status | Dropdown. Initial values: All answers, Correct only, Wrong only. |
| Question Type | Dropdown. Initial values: All types, Multiple choice, Written answer. |
| Sort By | Dropdown for result row order. |
| Apply | Button to apply search and filters. |
| Reset Filters | Button to clear filters. |
| Answer Review Table | Table showing question, learner answer, correct answer, and status. |
| Pagination | Control to move between answer review rows. |

### 3.5.7 Review Wrong Answers

Related Use Case: UC-20, UC-21
Actor: Learner

This screen allows the Learner to:
- Review wrong answers grouped under the selected Study Set.
- Compare learner answer and correct answer.
- Request AI answer explanation when Premium access is available.
- See upgrade-required message for non-premium accounts.

UI Layout / Prototype:
http://127.0.0.1:5173/study-sets/set-bio-cell/review

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Back To Study Set | Button to return to Study Set Detail. |
| Study Set | Visible Study Set title. |
| Subject | Visible Study Set subject. |
| Missed Questions | Visible number of missed questions. |
| Review Mode | Visible review mode value. |
| Search Wrong Answers | Text field for question, topic, or explanation keyword. |
| Difficulty Filter | Dropdown. Initial values: All difficulties, Easy, Medium, Hard. |
| Review Status | Dropdown. Initial values: All review status, New mistakes, Reviewed. |
| Sort By | Dropdown for wrong answer order. |
| Apply | Button to apply filters. |
| Reset Filters | Button to clear filters. |
| Wrong Answer Card | Data group showing question, topic, learner answer, correct answer, and explanation. |
| Request AI Answer Explanation | Button to request AI explanation mock. |
| Mark Reviewed | Button to mark the wrong answer as reviewed. |
| Retry Question | Button to retry the selected question. |
| AI Explanation Message | Visible AI explanation or upgrade-required message. |

### 3.5.8 Assign Study Set To Class

Related Use Case: UC-45
Actor: Teacher

This screen allows the Teacher to:
- Assign an owned or authorized Study Set to a class.
- Assign to all class members or selected learners.
- Configure release date, due date, completion rule, target accuracy, instructions, and notification.

UI Layout / Prototype:
http://127.0.0.1:5173/teacher/classes/class-bio-12a/assign-study-set

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Class | Read-only field showing selected class. |
| Study Set | Dropdown listing Study Sets available for assignment. |
| Assign To | Dropdown. Initial values: All class members, Selected learners. |
| Selected Learners | Dropdown listing learners in the selected class. |
| Due Date | Date field for assignment due date. |
| Release Date | Date field for content release date. |
| Completion Rule | Dropdown. Initial values: View all cards, Pass practice quiz, Reach target accuracy. |
| Target Accuracy | Numeric/percentage field for required accuracy. |
| Assignment Instructions | Textarea for learner-facing instructions. |
| Notify Learners After Assignment | Checkbox to notify eligible learners. |
| Assign Study Set | Button to confirm assignment. |
| Assignment Success Message | Visible success message after assignment mock completes. |
## 3.6 Exam Session

### 3.6.1 View Available Exams

Related Use Case: UC-23
Actor: Learner

This screen allows the user to:
- view assigned exams, search and filter them, and open exam information.
- Use the visible fields and actions listed in the Field Description table.

On the screen, s/he can also:
- View status, validation, empty, pagination, or mock interaction states where applicable.

UI Layout / Prototype:
http://127.0.0.1:5173/learner/exams

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Search Exams | Text search field. User enters keyword(s) to filter visible records. |
| Status Filter | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Class Filter | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Sort By | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Apply | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Reset Filters | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Available Exam Table | Visible data group. Shows records or grouped screen data. Counted as one field. |
| Info | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Rows Per Page | Pagination field. User selects page size or navigates visible pages. |
| Pagination | Action field. User clicks to navigate, submit, update, or process the selected visible item. |


### 3.6.2 View Exam Information

Related Use Case: UC-24
Actor: Learner

This screen allows the user to:
- review exam schedule, attempts, rules, access code, and start the exam.
- Use the visible fields and actions listed in the Field Description table.

On the screen, s/he can also:
- View status, validation, empty, pagination, or mock interaction states where applicable.

UI Layout / Prototype:
http://127.0.0.1:5173/learner/exams/exam-bio-midterm/info

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Start Exam | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Exam Access Code | Visible field. User views or enters this value on the screen. |
| Attempt Selection | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| I Have Read Exam Rules | Checkbox field. User toggles the visible option on or off. |
| Class | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Start Time | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Duration | Date/time field. User views or enters schedule, duration, period, or time-related value. |
| Attempts Allowed | Numeric field. User views or enters a numeric value. |
| Result Visibility | Visible field. User views or enters this value on the screen. |
| Randomization | Visible field. User views or enters this value on the screen. |


### 3.6.3 Take Exam

Related Use Case: UC-25
Actor: Learner

This screen allows the user to:
- answer exam questions, view timer and status, flag questions, and submit with confirmation.
- Use the visible fields and actions listed in the Field Description table.

On the screen, s/he can also:
- View status, validation, empty, pagination, or mock interaction states where applicable.

UI Layout / Prototype:
http://127.0.0.1:5173/learner/exams/exam-bio-midterm/take

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Timer | Date/time field. User views or enters schedule, duration, period, or time-related value. |
| Auto-save Status | Status field. User views or selects status depending on the screen context. |
| Attempt Badge | Numeric field. User views or enters a numeric value. |
| Candidate | Date/time field. User views or enters schedule, duration, period, or time-related value. |
| Exam Code | Visible field. User views or enters this value on the screen. |
| Result Rule | Visible field. User views or enters this value on the screen. |
| Network Status | Status field. User views or selects status depending on the screen context. |
| Question Status Filter | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Confidence Level | Visible field. User views or enters this value on the screen. |
| Flag Current Question | Checkbox field. User toggles the visible option on or off. |
| Question Navigator | Visible data group. Shows records or grouped screen data. Counted as one field. |
| Question Cards | Visible data group. Shows records or grouped screen data. Counted as one field. |
| Answer Options | Visible field. User views or enters this value on the screen. |
| Submit Exam | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Submit Confirmation Modal | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Cancel | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Confirm Submit | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Submitted Message | Action field. User clicks to navigate, submit, update, or process the selected visible item. |


### 3.6.4 View Exam Result

Related Use Case: UC-26
Actor: Learner

This screen allows the user to:
- view exam score and result details when teacher allows result visibility.
- Use the visible fields and actions listed in the Field Description table.

On the screen, s/he can also:
- View status, validation, empty, pagination, or mock interaction states where applicable.

UI Layout / Prototype:
http://127.0.0.1:5173/learner/exams/exam-bio-midterm/result

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Result Metrics | Visible data group. Shows records or grouped screen data. Counted as one field. |
| Search Result Detail | Text search field. User enters keyword(s) to filter visible records. |
| Result Status | Status field. User views or selects status depending on the screen context. |
| Question Type | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Sort By | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Apply | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Reset Filters | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Result Detail Table | Visible data group. Shows records or grouped screen data. Counted as one field. |
| Rows Per Page | Pagination field. User selects page size or navigates visible pages. |
| Pagination | Action field. User clicks to navigate, submit, update, or process the selected visible item. |


### 3.6.5 Teacher Exam Sessions

Related Use Case: UC-46, UC-48
Actor: Teacher

This screen allows the user to:
- view teacher exam sessions, filter them, and open info, configure, report, or monitor screens.
- Use the visible fields and actions listed in the Field Description table.

On the screen, s/he can also:
- View status, validation, empty, pagination, or mock interaction states where applicable.

UI Layout / Prototype:
http://127.0.0.1:5173/teacher/exams

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Create Exam Session | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Search Exam Sessions | Text search field. User enters keyword(s) to filter visible records. |
| Status Filter | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Class Filter | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Result Visibility | Visible field. User views or enters this value on the screen. |
| Sort By | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Apply | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Reset Filters | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Teacher Exam Table | Visible data group. Shows records or grouped screen data. Counted as one field. |
| Info | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Configure | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Report | Visible field. User views or enters this value on the screen. |
| Monitor | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Rows Per Page | Pagination field. User selects page size or navigates visible pages. |
| Pagination | Action field. User clicks to navigate, submit, update, or process the selected visible item. |


### 3.6.6 Create Exam Session

Related Use Case: UC-46
Actor: Teacher

This screen allows the user to:
- create official exam session with class, question source, schedule, attempts, result settings, security options, and notifications.
- Use the visible fields and actions listed in the Field Description table.

On the screen, s/he can also:
- View status, validation, empty, pagination, or mock interaction states where applicable.

UI Layout / Prototype:
http://127.0.0.1:5173/teacher/exams/create

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Exam Title | Visible field. User views or enters this value on the screen. |
| Class | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Question Source | Visible field. User views or enters this value on the screen. |
| Status | Status field. User views or selects status depending on the screen context. |
| Start Time | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Duration Minutes | Date/time field. User views or enters schedule, duration, period, or time-related value. |
| Allowed Attempts | Numeric field. User views or enters a numeric value. |
| Passing Score | Numeric field. User views or enters a numeric value. |
| Exam Access Code | Visible field. User views or enters this value on the screen. |
| Late Join Grace Period | Date/time field. User views or enters schedule, duration, period, or time-related value. |
| Auto-submit Before End | Visible field. User views or enters this value on the screen. |
| Result Release Time | Date/time field. User views or enters schedule, duration, period, or time-related value. |
| Result Visibility | Visible field. User views or enters this value on the screen. |
| Review Permission | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Exam Password | Password field. User enters or updates protected credential data. |
| Candidate Instructions | Date/time field. User views or enters schedule, duration, period, or time-related value. |
| Randomize Questions | Checkbox field. User toggles the visible option on or off. |
| Randomize Answers | Checkbox field. User toggles the visible option on or off. |
| Enable Auto-save | Checkbox field. User toggles the visible option on or off. |
| Require Full-screen Warning | Checkbox field. User toggles the visible option on or off. |
| Lock Navigation After Start | Checkbox field. User toggles the visible option on or off. |
| Notify Learners Before Exam | Checkbox field. User toggles the visible option on or off. |
| Create Exam Session | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Created Message | Action field. User clicks to navigate, submit, update, or process the selected visible item. |


### 3.6.7 Configure Exam Settings

Related Use Case: UC-47
Actor: Teacher

This screen allows the user to:
- update exam session settings, timing, security, visibility, randomization, and notifications.
- Use the visible fields and actions listed in the Field Description table.

On the screen, s/he can also:
- View status, validation, empty, pagination, or mock interaction states where applicable.

UI Layout / Prototype:
http://127.0.0.1:5173/teacher/exams/exam-bio-midterm/configure

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Exam Title | Visible field. User views or enters this value on the screen. |
| Class | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Question Source | Visible field. User views or enters this value on the screen. |
| Status | Status field. User views or selects status depending on the screen context. |
| Start Time | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Duration Minutes | Date/time field. User views or enters schedule, duration, period, or time-related value. |
| Allowed Attempts | Numeric field. User views or enters a numeric value. |
| Passing Score | Numeric field. User views or enters a numeric value. |
| Exam Access Code | Visible field. User views or enters this value on the screen. |
| Late Join Grace Period | Date/time field. User views or enters schedule, duration, period, or time-related value. |
| Auto-submit Before End | Visible field. User views or enters this value on the screen. |
| Result Release Time | Date/time field. User views or enters schedule, duration, period, or time-related value. |
| Result Visibility | Visible field. User views or enters this value on the screen. |
| Review Permission | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Exam Password | Password field. User enters or updates protected credential data. |
| Candidate Instructions | Date/time field. User views or enters schedule, duration, period, or time-related value. |
| Randomize Questions | Checkbox field. User toggles the visible option on or off. |
| Randomize Answers | Checkbox field. User toggles the visible option on or off. |
| Enable Auto-save | Checkbox field. User toggles the visible option on or off. |
| Require Full-screen Warning | Checkbox field. User toggles the visible option on or off. |
| Lock Navigation After Start | Checkbox field. User toggles the visible option on or off. |
| Notify Learners Before Exam | Checkbox field. User toggles the visible option on or off. |
| Save Exam Settings | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Saved Message | Action field. User clicks to navigate, submit, update, or process the selected visible item. |


### 3.6.8 View Exam Information As Teacher

Related Use Case: UC-48
Actor: Teacher

This screen allows the user to:
- view exam configuration and navigate to configure, export report, or monitor screens.
- Use the visible fields and actions listed in the Field Description table.

On the screen, s/he can also:
- View status, validation, empty, pagination, or mock interaction states where applicable.

UI Layout / Prototype:
http://127.0.0.1:5173/teacher/exams/exam-bio-midterm/info

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Configure | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Export Report | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Monitor | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Exam Title | Visible field. User views or enters this value on the screen. |
| Class | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Question Bank | Visible field. User views or enters this value on the screen. |
| Start Time | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Duration | Date/time field. User views or enters schedule, duration, period, or time-related value. |
| Attempts Allowed | Numeric field. User views or enters a numeric value. |
| Question Randomization | Visible field. User views or enters this value on the screen. |
| Answer Randomization | Visible field. User views or enters this value on the screen. |
| Result Visibility | Visible field. User views or enters this value on the screen. |
| Status | Status field. User views or selects status depending on the screen context. |


### 3.6.9 Monitor Exam Session

Related Use Case: UC-48
Actor: Teacher

This screen allows the user to:
- monitor live exam attempts, filter learners, view attempts, and send reminders.
- Use the visible fields and actions listed in the Field Description table.

On the screen, s/he can also:
- View status, validation, empty, pagination, or mock interaction states where applicable.

UI Layout / Prototype:
http://127.0.0.1:5173/teacher/exams/exam-bio-midterm/monitor

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Monitor Metrics | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Search Learners | Text search field. User enters keyword(s) to filter visible records. |
| Attempt Status | Status field. User views or selects status depending on the screen context. |
| Risk Filter | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Sort By | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Apply | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Reset Filters | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Learner Attempt Table | Visible data group. Shows records or grouped screen data. Counted as one field. |
| View Attempt | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Send Reminder | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Rows Per Page | Pagination field. User selects page size or navigates visible pages. |
| Pagination | Action field. User clicks to navigate, submit, update, or process the selected visible item. |


## 3.7 Analytics & Reporting

### 3.7.1 View Personal Learning Progress

Related Use Case: UC-22
Actor: Learner

This screen allows the user to:
- view learner progress metrics, filter by subject and period, and review weak topics.
- Use the visible fields and actions listed in the Field Description table.

On the screen, s/he can also:
- View status, validation, empty, pagination, or mock interaction states where applicable.

UI Layout / Prototype:
http://127.0.0.1:5173/learner/progress

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Search Topic Progress | Text search field. User enters keyword(s) to filter visible records. |
| Subject Filter | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Period Filter | Date/time field. User views or enters schedule, duration, period, or time-related value. |
| Sort By | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Apply | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Reset Filters | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Progress Metrics | Visible data group. Shows records or grouped screen data. Counted as one field. |
| Weak Topic Breakdown Table | Visible data group. Shows records or grouped screen data. Counted as one field. |


### 3.7.2 View Exam Analytics

Related Use Case: UC-49
Actor: Teacher

This screen allows the user to:
- view post-exam analytics by exam, filter analytics, and export selected exam report.
- Use the visible fields and actions listed in the Field Description table.

On the screen, s/he can also:
- View status, validation, empty, pagination, or mock interaction states where applicable.

UI Layout / Prototype:
http://127.0.0.1:5173/teacher/analytics

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Export Exam Report | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Exam Analytics Cards | Visible data group. Shows records or grouped screen data. Counted as one field. |
| Search Exam Analytics | Text search field. User enters keyword(s) to filter visible records. |
| Class Filter | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Exam Status | Status field. User views or selects status depending on the screen context. |
| Performance Band | Visible field. User views or enters this value on the screen. |
| Sort By | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Apply | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Reset Filters | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Exam Analytics Table | Visible data group. Shows records or grouped screen data. Counted as one field. |
| Export | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Rows Per Page | Pagination field. User selects page size or navigates visible pages. |
| Pagination | Action field. User clicks to navigate, submit, update, or process the selected visible item. |


### 3.7.3 Export Exam Report

Related Use Case: UC-50
Actor: Teacher

This screen allows the user to:
- select one exam and export report with chosen type, format, included sections, and attempt table.
- Use the visible fields and actions listed in the Field Description table.

On the screen, s/he can also:
- View status, validation, empty, pagination, or mock interaction states where applicable.

UI Layout / Prototype:
http://127.0.0.1:5173/teacher/reports/export

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Exam | Visible field. User views or enters this value on the screen. |
| Report Type | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Format | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Include Score Table | Checkbox field. User toggles the visible option on or off. |
| Include Weak-topic Summary | Checkbox field. User toggles the visible option on or off. |
| Include Answer Details | Checkbox field. User toggles the visible option on or off. |
| Email Report After Export | Email field. User enters email address or triggers email-related processing. |
| Generated From | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Generated At | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Export Exam Report | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Exported Message | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Post-exam Summary | Visible data group. Shows records or grouped screen data. Counted as one field. |
| Search Learner Attempts | Text search field. User enters keyword(s) to filter visible records. |
| Attempt Status | Status field. User views or selects status depending on the screen context. |
| Score Band | Numeric field. User views or enters a numeric value. |
| Sort By | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Apply | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Reset Filters | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Learner Attempts Table | Visible data group. Shows records or grouped screen data. Counted as one field. |
| Rows Per Page | Pagination field. User selects page size or navigates visible pages. |
| Pagination | Action field. User clicks to navigate, submit, update, or process the selected visible item. |


## 3.8 Payment & Subscription

### 3.8.1 View Premium Plans

Related Use Case: UC-06, UC-15
Actor: Guest, Learner, Teacher

This screen allows the user to:
- view role-compatible premium plans, filter plan list, and login or select a plan.
- Use the visible fields and actions listed in the Field Description table.

On the screen, s/he can also:
- View status, validation, empty, pagination, or mock interaction states where applicable.

UI Layout / Prototype:
http://127.0.0.1:5173/premium

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Upgrade / Login To Upgrade | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Search Plans | Text search field. User enters keyword(s) to filter visible records. |
| Billing Interval | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Plan Audience | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Sort By | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Apply | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Reset Filters | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Premium Plan Cards | Visible data group. Shows records or grouped screen data. Counted as one field. |
| Select Plan / Login To Select | Action field. User clicks to navigate, submit, update, or process the selected visible item. |


### 3.8.2 Upgrade To Premium

Related Use Case: UC-15
Actor: Learner, Teacher

This screen allows the user to:
- choose current-role plan, payment method, billing details, agreement, and proceed to payment.
- Use the visible fields and actions listed in the Field Description table.

On the screen, s/he can also:
- View status, validation, empty, pagination, or mock interaction states where applicable.

UI Layout / Prototype:
http://127.0.0.1:5173/premium/upgrade

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Account | Numeric field. User views or enters a numeric value. |
| Selected Plan | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Payment Method | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Billing Email | Email field. User enters email address or triggers email-related processing. |
| Billing Name | Visible field. User views or enters this value on the screen. |
| Billing Address | Visible field. User views or enters this value on the screen. |
| Tax Code | Visible field. User views or enters this value on the screen. |
| Promotion Code | Visible field. User views or enters this value on the screen. |
| I Agree To Subscription Terms | Checkbox field. User toggles the visible option on or off. |
| Proceed To Payment | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Payment Summary | Visible data group. Shows records or grouped screen data. Counted as one field. |


### 3.8.3 Payment Result

Related Use Case: UC-15
Actor: Learner, Teacher

This screen allows the user to:
- view successful payment result, transaction details, subscription activation, and invoice actions.
- Use the visible fields and actions listed in the Field Description table.

On the screen, s/he can also:
- View status, validation, empty, pagination, or mock interaction states where applicable.

UI Layout / Prototype:
http://127.0.0.1:5173/premium/payment-result

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Payment Status Icon | Visible data group. Shows records or grouped screen data. Counted as one field. |
| Payment Status | Status field. User views or selects status depending on the screen context. |
| Transaction ID | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Plan | Plan field. User views or selects subscription/study plan information depending on the screen context. |
| Amount | Visible field. User views or enters this value on the screen. |
| Paid At | Visible field. User views or enters this value on the screen. |
| Invoice Email | Email field. User enters email address or triggers email-related processing. |
| Subscription Status | Status field. User views or selects status depending on the screen context. |
| Download Invoice | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Return To Dashboard | Action field. User clicks to navigate, submit, update, or process the selected visible item. |


## 3.9 System Admin

### 3.9.1 Admin Dashboard

Related Use Case: UC-51, UC-53, UC-54
Actor: Administrator

This screen allows the user to:
- view admin metrics, filter system overview, and inspect service health.
- Use the visible fields and actions listed in the Field Description table.

On the screen, s/he can also:
- View status, validation, empty, pagination, or mock interaction states where applicable.

UI Layout / Prototype:
http://127.0.0.1:5173/admin/dashboard

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Admin Metrics | Visible data group. Shows records or grouped screen data. Counted as one field. |
| Search Admin Metrics | Text search field. User enters keyword(s) to filter visible records. |
| Service Status | Status field. User views or selects status depending on the screen context. |
| Time Range | Date/time field. User views or enters schedule, duration, period, or time-related value. |
| Sort By | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Apply | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Reset Filters | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Service Status Table | Visible data group. Shows records or grouped screen data. Counted as one field. |


### 3.9.2 View User List

Related Use Case: UC-51
Actor: Administrator

This screen allows the user to:
- view all users, search and filter by role/status/premium, and open user detail.
- Use the visible fields and actions listed in the Field Description table.

On the screen, s/he can also:
- View status, validation, empty, pagination, or mock interaction states where applicable.

UI Layout / Prototype:
http://127.0.0.1:5173/admin/users

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Search Users | Text search field. User enters keyword(s) to filter visible records. |
| Role Filter | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Account Status | Status field. User views or selects status depending on the screen context. |
| Premium Status | Status field. User views or selects status depending on the screen context. |
| Sort By | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Apply | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Reset Filters | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| User List Table | Visible data group. Shows records or grouped screen data. Counted as one field. |
| Detail | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Rows Per Page | Pagination field. User selects page size or navigates visible pages. |
| Pagination | Action field. User clicks to navigate, submit, update, or process the selected visible item. |


### 3.9.3 User Detail And Role Update

Related Use Case: UC-52
Actor: Administrator

This screen allows the user to:
- view account detail and update role, status, permissions, reason, effective date, notification, and admin confirmation.
- Use the visible fields and actions listed in the Field Description table.

On the screen, s/he can also:
- View status, validation, empty, pagination, or mock interaction states where applicable.

UI Layout / Prototype:
http://127.0.0.1:5173/admin/users/u-learner-1

Field Description

| Field Name | Description |
| ---------- | ----------- |
| User Profile Summary | File input. User selects an upload file for validation or import. |
| User Role | Role field. User views or selects user role depending on the screen context. |
| Account Status | Status field. User views or selects status depending on the screen context. |
| Permission Scope | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Role Change Reason | Role field. User views or selects user role depending on the screen context. |
| Effective Date | Date/time field. User views or enters schedule, duration, period, or time-related value. |
| Notification To User | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Admin Password Confirmation | Password field. User enters or updates protected credential data. |
| Update User Role | Date/time field. User views or enters schedule, duration, period, or time-related value. |
| Role Change Message | Visible message/state field. Shows validation, success, warning, empty, or system state. |


### 3.9.4 Resource Management

Related Use Case: UC-53
Actor: Administrator

This screen allows the user to:
- filter public resources and hide inappropriate public learning resources with reviewer note.
- Use the visible fields and actions listed in the Field Description table.

On the screen, s/he can also:
- View status, validation, empty, pagination, or mock interaction states where applicable.

UI Layout / Prototype:
http://127.0.0.1:5173/admin/resources

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Resource Type | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Review Status | Status field. User views or selects status depending on the screen context. |
| Keyword | Text search field. User enters keyword(s) to filter visible records. |
| Severity | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Reviewer Note | Visible field. User views or enters this value on the screen. |
| Owner Role | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Resource Table | Visible data group. Shows records or grouped screen data. Counted as one field. |
| Hide Public Learning Resource | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Rows Per Page | Pagination field. User selects page size or navigates visible pages. |
| Pagination | Action field. User clicks to navigate, submit, update, or process the selected visible item. |


### 3.9.5 View System Status

Related Use Case: UC-54
Actor: Administrator

This screen allows the user to:
- view monitored services, filter status and integration type, and read system warning message.
- Use the visible fields and actions listed in the Field Description table.

On the screen, s/he can also:
- View status, validation, empty, pagination, or mock interaction states where applicable.

UI Layout / Prototype:
http://127.0.0.1:5173/admin/system-status

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Search Services | Text search field. User enters keyword(s) to filter visible records. |
| Service Status | Status field. User views or selects status depending on the screen context. |
| Integration Type | Visible field. User views or enters this value on the screen. |
| Sort By | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Apply | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Reset Filters | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| System Service Table | Visible data group. Shows records or grouped screen data. Counted as one field. |
| Rows Per Page | Pagination field. User selects page size or navigates visible pages. |
| Pagination | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| System Message | Visible message/state field. Shows validation, success, warning, empty, or system state. |


### 3.9.6 Access Denied

Related Use Case: System Authorization
Actor: Guest, Learner, Teacher, Administrator

This screen allows the user to:
- show unauthorized access state and route user back to dashboard/home or login.
- Use the visible fields and actions listed in the Field Description table.

On the screen, s/he can also:
- View status, validation, empty, pagination, or mock interaction states where applicable.

UI Layout / Prototype:
http://127.0.0.1:5173/access-denied

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Access Denied Icon | Visible data group. Shows records or grouped screen data. Counted as one field. |
| Access Denied Message | Visible message/state field. Shows validation, success, warning, empty, or system state. |
| Return To My Dashboard | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Login With Different Account | Action field. User clicks to navigate, submit, update, or process the selected visible item. |


### 3.9.7 Not Found

Related Use Case: System Navigation
Actor: Guest, Learner, Teacher, Administrator

This screen allows the user to:
- show missing page state and route user to home or public study set search.
- Use the visible fields and actions listed in the Field Description table.

On the screen, s/he can also:
- View status, validation, empty, pagination, or mock interaction states where applicable.

UI Layout / Prototype:
http://127.0.0.1:5173/not-found

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Not Found Icon | Visible data group. Shows records or grouped screen data. Counted as one field. |
| Not Found Message | Visible message/state field. Shows validation, success, warning, empty, or system state. |
| Go Home | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Search Study Sets | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
