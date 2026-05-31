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


## 3.4 Question Bank Management

### 3.4.1 View Question Banks

Related Use Case: UC-33
Actor: Teacher

This screen allows the user to:
- view teacher question banks, search and filter them, open detail, or create a new bank.
- Use the visible fields and actions listed in the Field Description table.

On the screen, s/he can also:
- View status, validation, empty, pagination, or mock interaction states where applicable.

UI Layout / Prototype:
http://127.0.0.1:5173/teacher/question-banks

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Create Question Bank | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Keyword | Text search field. User enters keyword(s) to filter visible records. |
| Subject | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Visibility | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Review Status | Status field. User views or selects status depending on the screen context. |
| Sort By | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Apply | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Reset Filters | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Question Bank Table | Visible data group. Shows records or grouped screen data. Counted as one field. |
| Open | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Rows Per Page | Pagination field. User selects page size or navigates visible pages. |
| Pagination | Action field. User clicks to navigate, submit, update, or process the selected visible item. |


### 3.4.2 Create Question Bank

Related Use Case: UC-34
Actor: Teacher

This screen allows the user to:
- create question bank metadata with subject, topic, chapter, lesson, tags, score, visibility, and workflow.
- Use the visible fields and actions listed in the Field Description table.

On the screen, s/he can also:
- View status, validation, empty, pagination, or mock interaction states where applicable.

UI Layout / Prototype:
http://127.0.0.1:5173/teacher/question-banks/create

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Question Bank Title | Visible field. User views or enters this value on the screen. |
| Subject | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Topic | Visible field. User views or enters this value on the screen. |
| Chapter | Visible field. User views or enters this value on the screen. |
| Lesson | Visible field. User views or enters this value on the screen. |
| Tags | Visible field. User views or enters this value on the screen. |
| Grade / Level | Visible field. User views or enters this value on the screen. |
| Default Score Per Question | Numeric field. User views or enters a numeric value. |
| Estimated Completion Time | Date/time field. User views or enters schedule, duration, period, or time-related value. |
| Visibility | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Question Review Workflow | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Description | Textarea or long text field. User views or enters multi-line content. |
| Create Question Bank | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Created Message | Action field. User clicks to navigate, submit, update, or process the selected visible item. |


### 3.4.3 Question Bank Detail

Related Use Case: UC-33, UC-40, UC-41, UC-42
Actor: Teacher

This screen allows the user to:
- view bank metadata and question list, filter questions, and create, edit, delete, or import questions.
- Use the visible fields and actions listed in the Field Description table.

On the screen, s/he can also:
- View status, validation, empty, pagination, or mock interaction states where applicable.

UI Layout / Prototype:
http://127.0.0.1:5173/teacher/question-banks/bank-bio-core

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Edit Bank | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Create Question | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Import Excel | Visible field. User views or enters this value on the screen. |
| Search Questions | Text search field. User enters keyword(s) to filter visible records. |
| Question Type | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Difficulty | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Score Range | Numeric field. User views or enters a numeric value. |
| Sort By | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Apply | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Reset Filters | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Question Bank Metadata | Visible data group. Shows records or grouped screen data. Counted as one field. |
| Question Table | Visible data group. Shows records or grouped screen data. Counted as one field. |
| Edit Question | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Delete Question | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Rows Per Page | Pagination field. User selects page size or navigates visible pages. |
| Pagination | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Delete Message | Action field. User clicks to navigate, submit, update, or process the selected visible item. |


### 3.4.4 Update Question Bank Information

Related Use Case: UC-35, UC-36
Actor: Teacher

This screen allows the user to:
- update bank metadata, visibility, review status, description, or delete question bank mock.
- Use the visible fields and actions listed in the Field Description table.

On the screen, s/he can also:
- View status, validation, empty, pagination, or mock interaction states where applicable.

UI Layout / Prototype:
http://127.0.0.1:5173/teacher/question-banks/bank-bio-core/edit

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Question Bank Title | Visible field. User views or enters this value on the screen. |
| Subject | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Topic | Visible field. User views or enters this value on the screen. |
| Chapter | Visible field. User views or enters this value on the screen. |
| Lesson | Visible field. User views or enters this value on the screen. |
| Tags | Visible field. User views or enters this value on the screen. |
| Grade / Level | Visible field. User views or enters this value on the screen. |
| Default Score Per Question | Numeric field. User views or enters a numeric value. |
| Estimated Completion Time | Date/time field. User views or enters schedule, duration, period, or time-related value. |
| Visibility | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Review Status | Status field. User views or selects status depending on the screen context. |
| Description | Textarea or long text field. User views or enters multi-line content. |
| Save Changes | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Delete Question Bank | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Saved Message | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Delete Message | Action field. User clicks to navigate, submit, update, or process the selected visible item. |


### 3.4.5 Create Question

Related Use Case: UC-40, UC-43
Actor: Teacher

This screen allows the user to:
- create a question under selected bank while inheriting bank metadata and optionally opening AI material generation.
- Use the visible fields and actions listed in the Field Description table.

On the screen, s/he can also:
- View status, validation, empty, pagination, or mock interaction states where applicable.

UI Layout / Prototype:
http://127.0.0.1:5173/teacher/question-banks/bank-bio-core/questions/create

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Question Bank | Visible field. User views or enters this value on the screen. |
| Subject | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Topic | Visible field. User views or enters this value on the screen. |
| Generate From Material | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Question Status | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Answer Shuffle | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Time Estimate | Date/time field. User views or enters schedule, duration, period, or time-related value. |
| Question Type | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Question Content | Textarea or long text field. User views or enters multi-line content. |
| Option A | Visible field. User views or enters this value on the screen. |
| Option B | Visible field. User views or enters this value on the screen. |
| Option C | Visible field. User views or enters this value on the screen. |
| Option D | Visible field. User views or enters this value on the screen. |
| Correct Answer | Visible field. User views or enters this value on the screen. |
| Score | Numeric field. User views or enters a numeric value. |
| Negative Score | Numeric field. User views or enters a numeric value. |
| Difficulty | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Teacher Notes | Textarea or long text field. User views or enters multi-line content. |
| Explanation | Plan field. User views or selects subscription/study plan information depending on the screen context. |
| Create Question | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Saved Message | Action field. User clicks to navigate, submit, update, or process the selected visible item. |


### 3.4.6 Update Question

Related Use Case: UC-41
Actor: Teacher

This screen allows the user to:
- update question content, options, answer, score, difficulty, notes, and explanation.
- Use the visible fields and actions listed in the Field Description table.

On the screen, s/he can also:
- View status, validation, empty, pagination, or mock interaction states where applicable.

UI Layout / Prototype:
http://127.0.0.1:5173/teacher/question-banks/bank-bio-core/questions/q-1/edit

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Question Bank | Visible field. User views or enters this value on the screen. |
| Subject | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Topic | Visible field. User views or enters this value on the screen. |
| Question Status | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Answer Shuffle | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Time Estimate | Date/time field. User views or enters schedule, duration, period, or time-related value. |
| Question Type | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Question Content | Textarea or long text field. User views or enters multi-line content. |
| Option A | Visible field. User views or enters this value on the screen. |
| Option B | Visible field. User views or enters this value on the screen. |
| Option C | Visible field. User views or enters this value on the screen. |
| Option D | Visible field. User views or enters this value on the screen. |
| Correct Answer | Visible field. User views or enters this value on the screen. |
| Score | Numeric field. User views or enters a numeric value. |
| Negative Score | Numeric field. User views or enters a numeric value. |
| Difficulty | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Teacher Notes | Textarea or long text field. User views or enters multi-line content. |
| Explanation | Plan field. User views or selects subscription/study plan information depending on the screen context. |
| Update Question | Date/time field. User views or enters schedule, duration, period, or time-related value. |
| Saved Message | Action field. User clicks to navigate, submit, update, or process the selected visible item. |


### 3.4.7 Import Questions From Excel

Related Use Case: UC-37
Actor: Teacher

This screen allows the user to:
- upload and validate Excel questions with worksheet, header, import mode, duplicate handling, defaults, and preview actions.
- Use the visible fields and actions listed in the Field Description table.

On the screen, s/he can also:
- View status, validation, empty, pagination, or mock interaction states where applicable.

UI Layout / Prototype:
http://127.0.0.1:5173/teacher/question-banks/bank-bio-core/import

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Excel File | File input. User selects an upload file for validation or import. |
| Worksheet Name | Visible field. User views or enters this value on the screen. |
| Header Row | Numeric field. User views or enters a numeric value. |
| Import Mode | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Duplicate Handling | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Default Difficulty | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Default Tags | Visible field. User views or enters this value on the screen. |
| Uploaded File Preview | File input. User selects an upload file for validation or import. |
| Validate File | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| View Errors | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Preview Valid Questions | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Validation Result Message | Visible message/state field. Shows validation, success, warning, empty, or system state. |


### 3.4.8 View Question Import Errors

Related Use Case: UC-38
Actor: Teacher

This screen allows the user to:
- view row-level import errors, search and filter errors, and navigate error pages.
- Use the visible fields and actions listed in the Field Description table.

On the screen, s/he can also:
- View status, validation, empty, pagination, or mock interaction states where applicable.

UI Layout / Prototype:
http://127.0.0.1:5173/teacher/question-banks/bank-bio-core/import/errors

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Search Import Errors | Text search field. User enters keyword(s) to filter visible records. |
| Error Field | Visible field. User views or enters this value on the screen. |
| Severity | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Sort By | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Apply | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Reset Filters | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Import Error Table | Visible data group. Shows records or grouped screen data. Counted as one field. |
| Rows Per Page | Pagination field. User selects page size or navigates visible pages. |
| Pagination | Action field. User clicks to navigate, submit, update, or process the selected visible item. |


### 3.4.9 Preview Imported Questions

Related Use Case: UC-39
Actor: Teacher

This screen allows the user to:
- preview valid imported questions, filter preview rows, and save imported questions.
- Use the visible fields and actions listed in the Field Description table.

On the screen, s/he can also:
- View status, validation, empty, pagination, or mock interaction states where applicable.

UI Layout / Prototype:
http://127.0.0.1:5173/teacher/question-banks/bank-bio-core/import/preview

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Search Preview Rows | Text search field. User enters keyword(s) to filter visible records. |
| Question Type | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Import Status | Status field. User views or selects status depending on the screen context. |
| Sort By | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Apply | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Reset Filters | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Imported Question Preview Table | Visible data group. Shows records or grouped screen data. Counted as one field. |
| Rows Per Page | Pagination field. User selects page size or navigates visible pages. |
| Pagination | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Save Imported Questions | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Saved Message | Action field. User clicks to navigate, submit, update, or process the selected visible item. |


### 3.4.10 Generate Questions From Material

Related Use Case: UC-43
Actor: Teacher

This screen allows the user to:
- generate draft questions from uploaded or pasted material with AI generation settings and preview result.
- Use the visible fields and actions listed in the Field Description table.

On the screen, s/he can also:
- View status, validation, empty, pagination, or mock interaction states where applicable.

UI Layout / Prototype:
http://127.0.0.1:5173/teacher/question-banks/bank-bio-core/ai-generate

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Learning Material File | File input. User selects an upload file for validation or import. |
| Material Text | Textarea or long text field. User views or enters multi-line content. |
| Question Type | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Number Of Questions | Numeric field. User views or enters a numeric value. |
| Bloom Level | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Difficulty | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Topic Focus | Visible field. User views or enters this value on the screen. |
| Include Answer Key | Checkbox field. User toggles the visible option on or off. |
| Include Explanations | Checkbox field. User toggles the visible option on or off. |
| Save Drafts After Generation | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Generate Questions | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| AI Generated Question Preview | Visible data group. Shows records or grouped screen data. Counted as one field. |


## 3.5 Study Set Learning

### 3.5.1 View Joined Study Sets

Related Use Case: UC-18
Actor: Learner

This screen allows the user to:
- view available learner study sets, filter them, and open detail, flashcards, or mistake review.
- Use the visible fields and actions listed in the Field Description table.

On the screen, s/he can also:
- View status, validation, empty, pagination, or mock interaction states where applicable.

UI Layout / Prototype:
http://127.0.0.1:5173/learner/study-sets

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Search Study Sets | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Subject Filter | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Progress Filter | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Visibility Filter | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Sort By | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Apply | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Reset Filters | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Study Set Cards | Visible data group. Shows records or grouped screen data. Counted as one field. |
| Detail | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Flashcards | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Review Mistakes | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Rows Per Page | Pagination field. User selects page size or navigates visible pages. |
| Pagination | Action field. User clicks to navigate, submit, update, or process the selected visible item. |


### 3.5.2 Study Set Detail

Related Use Case: UC-18, UC-19, UC-20
Actor: Learner

This screen allows the user to:
- view selected study set details, question preview, metadata, progress, and study mode actions.
- Use the visible fields and actions listed in the Field Description table.

On the screen, s/he can also:
- View status, validation, empty, pagination, or mock interaction states where applicable.

UI Layout / Prototype:
http://127.0.0.1:5173/learner/study-sets/set-bio-cell

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Flashcards | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Take Quiz | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Review Mistakes | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Question Preview Table | Visible data group. Shows records or grouped screen data. Counted as one field. |
| Study Set Metadata | Visible data group. Shows records or grouped screen data. Counted as one field. |
| Learning Progress | Visible data group. Shows records or grouped screen data. Counted as one field. |
| Study Mode Settings | Visible field. User views or enters this value on the screen. |


### 3.5.3 Flashcard Study

Related Use Case: UC-05, UC-19
Actor: Learner, Guest for public preview

This screen allows the user to:
- study flashcards, configure card behavior, flip current card, and move through cards.
- Use the visible fields and actions listed in the Field Description table.

On the screen, s/he can also:
- View status, validation, empty, pagination, or mock interaction states where applicable.

UI Layout / Prototype:
http://127.0.0.1:5173/learner/study-sets/set-bio-cell/flashcards

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Card Order | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Answer Mode | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Confidence | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Mark Card For Review | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Card Progress Badge | Visible data group. Shows records or grouped screen data. Counted as one field. |
| Progress Bar | Visible data group. Shows records or grouped screen data. Counted as one field. |
| Flashcard | Visible data group. Shows records or grouped screen data. Counted as one field. |
| Previous | Visible field. User views or enters this value on the screen. |
| Next | Visible field. User views or enters this value on the screen. |


### 3.5.4 Take Study Set Quiz

Related Use Case: UC-19
Actor: Learner

This screen allows the user to:
- configure and take a practice quiz, select answers, submit, and open result screen.
- Use the visible fields and actions listed in the Field Description table.

On the screen, s/he can also:
- View status, validation, empty, pagination, or mock interaction states where applicable.

UI Layout / Prototype:
http://127.0.0.1:5173/learner/study-sets/set-bio-cell/quiz

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Question Count | Numeric field. User views or enters a numeric value. |
| Question Type Filter | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Time Limit | Date/time field. User views or enters schedule, duration, period, or time-related value. |
| Show Instant Feedback | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Question Cards | Visible data group. Shows records or grouped screen data. Counted as one field. |
| Answer Options | Visible field. User views or enters this value on the screen. |
| Written Answer | Visible field. User views or enters this value on the screen. |
| Submit Quiz | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Open Result Screen | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Score Message | Visible message/state field. Shows validation, success, warning, empty, or system state. |
| Feedback Message | Visible message/state field. Shows validation, success, warning, empty, or system state. |


### 3.5.5 Quiz Result

Related Use Case: UC-19, UC-20
Actor: Learner

This screen allows the user to:
- view quiz score and answer details, filter answer review, and open wrong answer review.
- Use the visible fields and actions listed in the Field Description table.

On the screen, s/he can also:
- View status, validation, empty, pagination, or mock interaction states where applicable.

UI Layout / Prototype:
http://127.0.0.1:5173/learner/study-sets/set-bio-cell/result

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Review Wrong Answers | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Result Metrics | Visible data group. Shows records or grouped screen data. Counted as one field. |
| Search Answer Review | Text search field. User enters keyword(s) to filter visible records. |
| Answer Status | Status field. User views or selects status depending on the screen context. |
| Question Type | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Sort By | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Apply | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Reset Filters | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Answer Review Table | Visible data group. Shows records or grouped screen data. Counted as one field. |
| Rows Per Page | Pagination field. User selects page size or navigates visible pages. |
| Pagination | Action field. User clicks to navigate, submit, update, or process the selected visible item. |


### 3.5.6 Review Wrong Answers

Related Use Case: UC-20, UC-21
Actor: Learner

This screen allows the user to:
- review wrong answers by study set, filter them, request AI explanation, mark reviewed, or retry question.
- Use the visible fields and actions listed in the Field Description table.

On the screen, s/he can also:
- View status, validation, empty, pagination, or mock interaction states where applicable.

UI Layout / Prototype:
http://127.0.0.1:5173/learner/study-sets/set-bio-cell/review

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Back To Study Set | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Study Set Summary | Visible data group. Shows records or grouped screen data. Counted as one field. |
| Search Wrong Answers | Text search field. User enters keyword(s) to filter visible records. |
| Difficulty Filter | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Review Status | Status field. User views or selects status depending on the screen context. |
| Sort By | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Apply | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Reset Filters | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Wrong Answer Cards | Visible data group. Shows records or grouped screen data. Counted as one field. |
| Request AI Answer Explanation | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Mark Reviewed | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Retry Question | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| AI / Upgrade Message | Visible message/state field. Shows validation, success, warning, empty, or system state. |


### 3.5.7 Teacher Study Set Management

Related Use Case: UC-44
Actor: Teacher

This screen allows the user to:
- manage teacher-created study sets, filter them, preview or assign sets, and create new study set.
- Use the visible fields and actions listed in the Field Description table.

On the screen, s/he can also:
- View status, validation, empty, pagination, or mock interaction states where applicable.

UI Layout / Prototype:
http://127.0.0.1:5173/teacher/study-sets

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Create Study Set | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Search Study Sets | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Visibility | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Subject Filter | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Assignment Filter | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Sort By | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Apply | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Reset Filters | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Teacher Study Set Table | Visible data group. Shows records or grouped screen data. Counted as one field. |
| Preview | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Assign | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Rows Per Page | Pagination field. User selects page size or navigates visible pages. |
| Pagination | Action field. User clicks to navigate, submit, update, or process the selected visible item. |


### 3.5.8 Create Study Set

Related Use Case: UC-44
Actor: Teacher

This screen allows the user to:
- create a study set from one source question bank and selected questions.
- Use the visible fields and actions listed in the Field Description table.

On the screen, s/he can also:
- View status, validation, empty, pagination, or mock interaction states where applicable.

UI Layout / Prototype:
http://127.0.0.1:5173/teacher/study-sets/create

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Study Set Title | Visible field. User views or enters this value on the screen. |
| Source Question Bank | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Subject | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Topic | Visible field. User views or enters this value on the screen. |
| Visibility | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Estimated Study Time | Date/time field. User views or enters schedule, duration, period, or time-related value. |
| Target Accuracy | Numeric field. User views or enters a numeric value. |
| Card Order | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Practice Mode | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Tags | Visible field. User views or enters this value on the screen. |
| Description | Textarea or long text field. User views or enters multi-line content. |
| Select Questions | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Include Explanations | Checkbox field. User toggles the visible option on or off. |
| Allow Copy By Other Teachers | Checkbox field. User toggles the visible option on or off. |
| Track Learner Progress | Visible data group. Shows records or grouped screen data. Counted as one field. |
| Create Study Set | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Created Message | Action field. User clicks to navigate, submit, update, or process the selected visible item. |


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
