# SECTION 3 FUNCTIONAL REQUIREMENTS — MAPPED TO SECTION 2 USE CASE SPECIFICATIONS

This file rewrites Section 3 so that each **3.x.x** item matches the corresponding **2.x.x** use case specification item in both **order** and **name**.

Rules applied:
- Section 3 numbering follows Section 2 numbering exactly
- Section 3 use case names match Section 2 use case names exactly
- Each item includes:
  - URL using `http://localhost:5173`
  - `This screen allows the (actor) to...`
  - `On the screen, s/he can also: ...`
  - Field Description table with `Field Name` and `Description`

---

## 3.1 Public Access & Discovery

### 3.1.1 View landing page
**URL:** `http://localhost:5173/`

**This screen allows the Guest, Learner, Teacher to:**
- view the platform landing page
- understand SQP main features
- explore public learning resources
- navigate to register, log in, or continue using the platform

**On the screen, s/he can also:**
- view status, validation, empty, pagination, or mock interaction states where applicable

| Field Name | Description |
|---|---|
| Hero Search Keyword | Search public study sets and users |
| Hero Search Action | Button to search when entered keyword |
| Study Mode Cards | Display short information for study modes |
| Open Flashcards | Button to open flashcards |

### 3.1.2 Search public study sets
**URL:** `http://localhost:5173/search/study-sets`

**This screen allows the Guest, Learner to:**
- search and filter public study sets
- inspect result items
- open a selected public study set

**On the screen, s/he can also:**
- view status, validation, empty, pagination, or mock interaction states where applicable

| Field Name | Description |
|---|---|
| Keyword | Text search field. User enters keyword(s) to filter visible records. |
| Subject | Filter study sets by subject |
| Study Mode | Filter study sets by study mode |
| Rating Filter | Filter study sets by rating |
| Sort By | Sort study sets by selected criteria |
| Apply | Button to execute search and apply filters |
| Advanced | Button to toggle advanced filter options |
| Reset Filters | Button to clear all search inputs and filters |
| Public Study Set Result Cards | List displaying searched public study sets |
| Open Sample Set | Button to open a sample study set |
| View Detail | Button to view detailed information of a study set |
| Pagination | Navigate between pages of search results |

### 3.1.3 Search public user accounts
**URL:** `http://localhost:5173/search/users`

**This screen allows the Guest, Learner to:**
- search public learner and teacher accounts
- inspect account result rows
- discover public profiles and shared learning resources

**On the screen, s/he can also:**
- view status, validation, empty, pagination, or mock interaction states where applicable

| Field Name | Description |
|---|---|
| Keyword | Input field to search users by keyword |
| Role | Filter users by role |
| Premium Status | Filter users by premium status |
| Account Status | Filter users by account status |
| Sort By | Sort users by selected criteria |
| Apply | Button to execute search and apply filters |
| Reset Filters | Button to clear all search inputs and filters |
| Public User List | List displaying searched public user accounts |
| Pagination | Navigate between pages of search results |

### 3.1.4 View public study set detail
**URL:** `http://localhost:5173/study-sets/public/:studySetId`

**This screen allows the Guest, Learner to:**
- view public study set details
- filter preview questions
- choose preview mode
- start flashcards
- register to save learning history

**On the screen, s/he can also:**
- view status, validation, empty, pagination, or mock interaction states where applicable

| Field Name | Description |
|---|---|
| Study Flashcards | Button to initiate the flashcard study session |
| Sign Up To Save History | Redirect to the registration page to save learning progress |
| Study Set Detail Card | Display main information, image, and tags of the study set |
| Search Preview Questions | Input field to search preview questions by keyword |
| Question Type | Filter preview questions by type |
| Difficulty | Filter preview questions by difficulty level |
| Sort By | Sort preview questions by selected criteria |
| Apply | Button to execute search and apply filters |
| Reset Filters | Button to clear all search inputs and filters |
| Question Preview List | Display a list of available preview questions |
| Pagination | Navigate between pages of preview questions |
| Study Set Metadata | Display statistical and categorization data of the study set |
| Guest Study Mode | Dropdown to select a study mode for guest preview |
| Create Account | Redirect to the registration page |

---

## 3.2 Authentication & Profile

### 3.2.1 Register account
**URL:** `http://localhost:5173/auth/register`

**This screen allows the Guest to:**
- create a learner or teacher account
- enter credential and profile information
- submit the registration form

**On the screen, s/he can also:**
- use Google sign-up mock or navigate to login
- view validation messages after submitting incomplete or invalid data

| Field Name | Description |
|---|---|
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

### 3.2.2 Log in with account
**URL:** `http://localhost:5173/auth/login`

**This screen allows the Guest to:**
- log in using email or username and password

**On the screen, s/he can also:**
- use Google login mock
- recover password
- create account
- logout current user when visible
- toggle password visibility
- choose remember-login preference

| Field Name | Description |
|---|---|
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

### 3.2.3 Log in with Google
**URL:** `http://localhost:5173/auth/login`

**This screen allows the Guest to:**
- log in using a Google account

**On the screen, s/he can also:**
- log in using email or username and password
- recover password
- create account
- toggle password visibility
- choose remember-login preference

| Field Name | Description |
|---|---|
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

### 3.2.4 Forgot password
**URL:** `http://localhost:5173/auth/forgot-password`

**This screen allows the Guest to:**
- enter registered email
- choose delivery method
- send verification code
- enter the received code
- verify the code
- continue to reset password

**On the screen, s/he can also:**
- return to login before verification
- continue to reset password after code verification succeeds

| Field Name | Description |
|---|---|
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

### 3.2.5 Log out account
**URL:** `http://localhost:5173/profile`

**This screen allows the Learner, Teacher, Admin to:**
- view profile data
- trigger logout from the current session

**On the screen, s/he can also:**
- edit profile
- reset password
- see role-specific access summary and account status

| Field Name | Description |
|---|---|
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

### 3.2.6 View personal profile
**URL:** `http://localhost:5173/profile`

**This screen allows the Learner, Teacher, Admin to:**
- view profile data
- view role access summary
- view premium status
- view account security actions

**On the screen, s/he can also:**
- edit profile
- reset password
- logout current account
- see role-specific access summary and account status

| Field Name | Description |
|---|---|
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

### 3.2.7 Edit personal profile
**URL:** `http://localhost:5173/profile/edit`

**This screen allows the Learner, Teacher, Admin to:**
- update allowed profile fields
- update notification settings
- update visibility
- update profile details

**On the screen, s/he can also:**
- open Reset Password from profile editing area
- save changes, cancel, or view saved confirmation

| Field Name | Description |
|---|---|
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

### 3.2.8 Change password
**URL:** `http://localhost:5173/profile/change-password`

**This screen allows the Learner, Teacher, Admin to:**
- change account password with current password, new password, confirmation, security code, and session handling

**On the screen, s/he can also:**
- view status, validation, empty, pagination, or mock interaction states where applicable

| Field Name | Description |
|---|---|
| Current Password | Password field. User enters or updates protected credential data. |
| New Password | Password field. User enters or updates protected credential data. |
| Confirm New Password | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Security Code | Visible field. User views or enters this value on the screen. |
| Logout Other Devices | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Update Password | Password field. User enters or updates protected credential data. |
| Validation Messages | Visible message/state field. Shows validation, success, warning, empty, or system state. |

### 3.2.9 Switch active role
**URL:** `http://localhost:5173/profile/switch-role`

**This screen allows the Learner, Teacher to:**
- switch the active role between Learner and Teacher
- confirm the target role before applying the change

**On the screen, s/he can also:**
- cancel role switching
- view current role and available target role options
- view status, validation, empty, pagination, or mock interaction states where applicable

| Field Name | Description |
|---|---|
| Current Active Role | Visible field. Displays the role currently applied to the account session. |
| Available Target Roles | Visible data group. Shows the roles available for switching. |
| Select Target Role | Dropdown/select field. User chooses Learner or Teacher. |
| Confirm Switch Role | Action field. Confirms the role switch request. |
| Cancel | Action field. Cancels role switching and keeps the current role. |
| Role Switch Message | Visible message/state field. Shows success, warning, or error state after switching. |

---

## 3.3 Class Management

### 3.3.1 View joined classes
**URL:** `http://localhost:5173/learner/classes`

**This screen allows the Learner to:**
- view joined classes
- filter them
- open class detail
- request to join a new class

**On the screen, s/he can also:**
- view status, validation, empty, pagination, or mock interaction states where applicable

| Field Name | Description |
|---|---|
| Join Class | Button to join a new class |
| Search Classes | Input field to search enrolled classes by keyword |
| Subject Filter | Filter classes by subject |
| Status Filter | Filter classes by status |
| Sort By | Sort classes by selected criteria |
| Apply | Button to execute search and apply filters |
| Reset Filters | Button to clear all search inputs and filters |
| Joined Classes Table | Display a list of currently enrolled classes |
| Open | Button to access a specific enrolled class |
| Pagination | Navigate between pages of enrolled classes |

### 3.3.2 Join class
**URL:** `http://localhost:5173/learner/classes/join`

**This screen allows the Learner to:**
- submit a class join request by code or invitation link
- view pending request state

**On the screen, s/he can also:**
- view status, validation, empty, pagination, or mock interaction states where applicable

| Field Name | Description |
|---|---|
| Class Code | Input field to enter the specific teacher class code |
| Invitation Link | Input field to paste a direct class invitation link |
| Request Type | Dropdown menu to select the type of join request |
| Learner Email | Read-only input field displaying the user's registered email address |
| Preferred Section | Dropdown menu to select the preferred class time section |
| Parent / Guardian Contact | Input field to optionally provide parent or guardian contact information |
| Request Message | Text area to write a personalized message to the teacher |
| Send Join Request | Button to submit the class join request form |
| Pending Request Message | Notification banner displaying form validation errors or submission success status |

### 3.3.3 View created classes
**URL:** `http://localhost:5173/teacher/classes`

**This screen allows the Teacher to:**
- view teacher-created classes
- search, filter, and open created classes
- create a new class

**On the screen, s/he can also:**
- view status, validation, empty, pagination, or mock interaction states where applicable

| Field Name | Description |
|---|---|
| Create Class | Button to create a new class |
| Search Teaching Work | Input field to search teaching materials by keyword |
| Subject Filter | Dropdown menu to filter classes by subject |
| Class Status | Dropdown menu to filter classes by their current status |
| Sort By | Dropdown menu to sort classes by selected criteria |
| Apply | Button to execute search and apply filters |
| Reset Filters | Button to clear all search inputs and filters |
| Created Classes Table | Display a list of managed classes |
| Open | Button to open and manage a specific class |
| Members | Button to view and manage class members |
| Invite | Button to send invitations to join a class |
| Pagination | Navigate between pages of classes |

### 3.3.4 Create class
**URL:** `http://localhost:5173/teacher/classes/create`

**This screen allows the Teacher to:**
- create a new class with metadata, capacity, policy, dates, status, and description

**On the screen, s/he can also:**
- view status, validation, empty, pagination, or mock interaction states where applicable

| Field Name | Description |
|---|---|
| Class Name | Text input field; captures the name of the new class |
| Subject | Text input field; captures the subject area of the class |
| Grade / Level | Text input field; captures the educational grade or level |
| Academic Year | Text input field; captures the academic year for the class |
| Class Code | Text input field; displays or captures the unique identification code for the class |
| Learner Capacity | Numeric input field; captures the maximum number of students allowed to join |
| Default Due Time | Time input field; sets the default daily deadline for class assignments |
| Teaching Language | Dropdown menu; allows the teacher to select the primary language of instruction |
| Join Policy | Dropdown menu; allows the teacher to define how learners can join the class |
| Status | Dropdown menu; sets the initial active or inactive state of the class |
| Start Date | Date picker field; sets the beginning date of the class |
| End Date | Date picker field; sets the concluding date of the class |
| Description | Text area; captures a detailed overview or syllabus of the class |
| Create Class | Primary action button; submits the form to create the new class |
| Created Message | Notification banner; displays a success message and the generated class code upon creation |

### 3.3.5 Generate class invitation
**URL:** `http://localhost:5173/teacher/classes/:classId/invitation`

**This screen allows the Teacher to:**
- generate and send an invitation link with expiry, maximum uses, approval rule, and message

**On the screen, s/he can also:**
- view status, validation, empty, pagination, or mock interaction states where applicable

| Field Name | Description |
|---|---|
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

### 3.3.6 View class member list
**URL:** `http://localhost:5173/teacher/classes/:classId/members`

**This screen allows the Teacher to:**
- view members
- search and filter learners
- remove a learner
- open join requests

**On the screen, s/he can also:**
- view status, validation, empty, pagination, or mock interaction states where applicable

| Field Name | Description |
|---|---|
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

### 3.3.7 Approve class join request
**URL:** `http://localhost:5173/teacher/classes/:classId/join-requests`

**This screen allows the Teacher to:**
- view join requests
- filter them
- approve or reject pending learners

**On the screen, s/he can also:**
- view status, validation, empty, pagination, or mock interaction states where applicable

| Field Name | Description |
|---|---|
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

### 3.3.8 Remove learner from class
**URL:** `http://localhost:5173/teacher/classes/:classId/members`

**This screen allows the Teacher to:**
- remove a learner from a class
- review the current class member list before confirming removal

**On the screen, s/he can also:**
- search and filter learners
- view status, validation, empty, pagination, or mock interaction states where applicable

| Field Name | Description |
|---|---|
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

---

## 3.4 Question Management & Question Bank Repository

### 3.4.1 View question banks
**URL:** `http://localhost:5173/teacher/question-banks`

**This screen allows the Teacher to:**
- view and filter question banks
- open related screens

**On the screen, s/he can also:**
- search, filter, or sort visible data
- open related screens
- process selected data or submit the current form

| Field Name | Description |
|---|---|
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

### 3.4.2 Create question bank
**URL:** `http://localhost:5173/teacher/question-banks/create`

**This screen allows the Teacher to:**
- create a new question bank
- enter question repository information
- save the question bank

**On the screen, s/he can also:**
- set visible options before submitting
- open related screens
- process selected data or submit the current form

| Field Name | Description |
|---|---|
| Question Bank Title | Text field. Required. Maximum length should follow system metadata rule. |
| Subject | Text field for repository subject. |
| Topic | Text field for repository topic. |
| Chapter | Text field for default chapter metadata. |
| Lesson | Text field for default lesson metadata. |
| Tags | Text field for comma-separated repository tags. |
| Grade / Level | Text field for target learner level. |
| Default Score Per Question | Numeric field for default score value. |
| Visibility | Dropdown. Initial values: Private, Public, Class Only. Default value: Private. |
| Description | Textarea for repository description. |
| Create Question Bank | Button to validate and create the Question Bank. |

### 3.4.3 Update question bank information
**URL:** `http://localhost:5173/teacher/question-banks/:questionBankId/edit`

**This screen allows the Teacher to:**
- view current question bank information
- update question bank information

**On the screen, s/he can also:**
- set visible options before submitting
- open related screens
- process selected data or submit the current form

| Field Name | Description |
|---|---|
| Question Bank Title | Text field prefilled with current Question Bank title. |
| Subject | Text field prefilled with current subject. |
| Topic | Text field prefilled with current topic. |
| Chapter | Text field for default chapter metadata. |
| Lesson | Text field for default lesson metadata. |
| Tags | Text field for comma-separated tags. |
| Grade / Level | Text field for target learner level. |
| Visibility | Dropdown. Initial values: Public, Private, Class Only. |
| Review Status | Dropdown. Initial values: Draft, Reviewed, Archived. |
| Description | Textarea prefilled with current description. |
| Save Changes | Button to validate and save updated metadata. |
| Delete Question Bank | Button to mark the Question Bank for deletion/archive in mock state. |

### 3.4.4 Delete question bank
**URL:** `http://localhost:5173/teacher/question-banks/:questionBankId/edit`

**This screen allows the Teacher to:**
- delete, archive, or hide a question bank
- review the question bank before confirming the action

**On the screen, s/he can also:**
- update question bank information
- view status, validation, empty, pagination, or mock interaction states where applicable

| Field Name | Description |
|---|---|
| Question Bank Title | Text field prefilled with current Question Bank title. |
| Subject | Text field prefilled with current subject. |
| Topic | Text field prefilled with current topic. |
| Chapter | Text field for default chapter metadata. |
| Lesson | Text field for default lesson metadata. |
| Tags | Text field for comma-separated tags. |
| Grade / Level | Text field for target learner level. |
| Visibility | Dropdown. Initial values: Public, Private, Class Only. |
| Review Status | Dropdown. Initial values: Draft, Reviewed, Archived. |
| Description | Textarea prefilled with current description. |
| Save Changes | Button to validate and save updated metadata. |
| Delete Question Bank | Button to mark the Question Bank for deletion/archive in mock state. |

### 3.4.5 Add question manually
**URL:** `http://localhost:5173/teacher/questions/create`

**This screen allows the Teacher to:**
- enter question content and answer information
- save the question into a Study Set or Question Bank

**On the screen, s/he can also:**
- open AI generation when available
- set answer shuffle and question metadata
- view save status after submitting

| Field Name | Description |
|---|---|
| Answer Shuffle | Dropdown. Initial values: Shuffle answers, Keep answer order. |
| Question Type | Dropdown. Initial values: Multiple Choice, True/False, Written Answer. |
| Question Content | Textarea for the question prompt. Required. |
| Option | Text field for answer options. |
| Correct Answer | Text field for correct answer value. Required. |
| Difficulty | Dropdown. Initial values: Easy, Medium, Hard. |
| Chapter | Text field for question chapter metadata. |
| Lesson | Text field for question lesson metadata. |
| Tags | Text field for comma-separated question tags. |
| Author Notes | Textarea for internal author note. |
| Explanation | Textarea for answer explanation shown during review. |
| Create Question | Button to submit the question draft. |

### 3.4.6 Import questions from Excel
**URL:** `http://localhost:5173/teacher/questions/import`

**This screen allows the Teacher to:**
- upload an import file
- validate and preview imported data

**On the screen, s/he can also:**
- set visible options before submitting
- open related screens
- process selected data or submit the current form

| Field Name | Description |
|---|---|
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

### 3.4.7 View question import errors
**URL:** `http://localhost:5173/teacher/questions/import/errors`

**This screen allows the Teacher to:**
- view and filter question import errors
- open related screens

**On the screen, s/he can also:**
- search, filter, or sort visible data
- open related screens
- process selected data or submit the current form

| Field Name | Description |
|---|---|
| Search Import Errors | Text field for row, field, or raw value keyword. |
| Error Field | Dropdown. Initial values: All fields, Correct Answer, Question Type, Difficulty. |
| Severity | Dropdown. Initial values: All severities, Error, Warning. |
| Sort By | Dropdown for error list order. |
| Apply | Button to apply search and filters. |
| Reset Filters | Button to clear search and filters. |
| Error Table | Table showing row number, field, raw value, and validation message. |
| Pagination | Control to move between import error records. |

### 3.4.8 Preview questions before saving
**URL:** `http://localhost:5173/teacher/questions/preview`

**This screen allows the Teacher to:**
- review data before saving
- save approved records

**On the screen, s/he can also:**
- search, filter, or sort visible data
- open related screens
- process selected data or submit the current form

| Field Name | Description |
|---|---|
| Search Preview Rows | Text field for question or answer keyword. |
| Question Type | Dropdown. Initial values: All types, Multiple choice, True/False. |
| Import Status | Dropdown. Initial values: All rows, Valid, Duplicate warning. |
| Sort By | Dropdown for preview row order. |
| Apply | Button to apply search and filters. |
| Reset Filters | Button to clear search and filters. |
| Preview Question Table | Table showing question, type, correct answer, difficulty, and status. |
| Pagination | Control to move between preview records. |
| Save Imported Questions | Button to save approved valid questions. |

### 3.4.9 Update question
**URL:** `http://localhost:5173/teacher/questions/:questionId/edit`

**This screen allows the Teacher to:**
- view current question information
- update question information

**On the screen, s/he can also:**
- set visible options before submitting
- open related screens
- process selected data or submit the current form

| Field Name | Description |
|---|---|
| Answer Shuffle | Dropdown. Initial values: Shuffle answers, Keep answer order. |
| Question Type | Dropdown. Initial values: Multiple Choice, True/False, Written Answer. |
| Question Content | Textarea for the question prompt. Required. |
| Option | Text field for answer options. |
| Correct Answer | Text field for correct answer value. Required. |
| Difficulty | Dropdown. Initial values: Easy, Medium, Hard. |
| Chapter | Text field for question chapter metadata. |
| Lesson | Text field for question lesson metadata. |
| Tags | Text field for comma-separated question tags. |
| Author Notes | Textarea for internal author note. |
| Explanation | Textarea for answer explanation shown during review. |
| Create Question | Button to submit the question draft. |

### 3.4.10 Delete question
**URL:** `http://localhost:5173/teacher/questions/:questionId/edit`

**This screen allows the Teacher to:**
- delete, remove, hide, or archive a question
- review the current question information before confirming the action

**On the screen, s/he can also:**
- update question information
- set visible options before submitting
- open related screens

| Field Name | Description |
|---|---|
| Answer Shuffle | Dropdown. Initial values: Shuffle answers, Keep answer order. |
| Question Type | Dropdown. Initial values: Multiple Choice, True/False, Written Answer. |
| Question Content | Textarea for the question prompt. Required. |
| Option | Text field for answer options. |
| Correct Answer | Text field for correct answer value. Required. |
| Difficulty | Dropdown. Initial values: Easy, Medium, Hard. |
| Chapter | Text field for question chapter metadata. |
| Lesson | Text field for question lesson metadata. |
| Tags | Text field for comma-separated question tags. |
| Author Notes | Textarea for internal author note. |
| Explanation | Textarea for answer explanation shown during review. |
| Create Question | Button to submit the question draft. |

### 3.4.11 Generate questions from material
**URL:** `http://localhost:5173/teacher/questions/ai-generate`

**This screen allows the Teacher to:**
- enter source material and generation options
- generate draft questions

**On the screen, s/he can also:**
- set visible options before submitting
- open related screens
- process selected data or submit the current form

| Field Name | Description |
|---|---|
| Learning Material File | File input for source material. |
| Material Text | Textarea for pasted learning material. |
| Question Type | Dropdown. Initial values: Mixed types, Multiple Choice, True/False, Written Answer. |
| Number of Questions | Numeric field for generated question count. |
| Difficulty | Dropdown. Initial values: Easy, Medium, Hard. |
| Topic Focus | Text field for topic focus. |
| Include Answer Key | Checkbox to include correct answers in generated drafts. |
| Include Explanations | Checkbox to include explanations in generated drafts. |
| Save Drafts After Generation | Checkbox to save drafts after generation. |
| Generate Questions | Button to run AI generation mock. |
| AI Generated Question Preview | Visible result panel after successful generation mock. |

---

## 3.5 Study Set Creation and Learning

### 3.5.1 View accessible study sets
**URL:** `http://localhost:5173/study-sets`

**This screen allows the Learner, Teacher to:**
- view accessible study sets
- filter them
- open detail, flashcards, or mistake review

**On the screen, s/he can also:**
- view status, validation, empty, pagination, or mock interaction states where applicable

| Field Name | Description |
|---|---|
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

### 3.5.2 Create study set
**URL:** `http://localhost:5173/teacher/study-sets/create`

**This screen allows the Teacher to:**
- create a study set from one source question bank and selected questions

**On the screen, s/he can also:**
- view status, validation, empty, pagination, or mock interaction states where applicable

| Field Name | Description |
|---|---|
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

### 3.5.3 Assign study set to class
**URL:** `http://localhost:5173/teacher/classes/:classId/assign-study-set`

**This screen allows the Teacher to:**
- assign a study set to a class or learners with dates, rule, target accuracy, instructions, and notification

**On the screen, s/he can also:**
- view status, validation, empty, pagination, or mock interaction states where applicable

| Field Name | Description |
|---|---|
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

### 3.5.4 Study flashcards
**URL:** `http://localhost:5173/study-sets/:studySetId/flashcards`

**This screen allows the Guest, Learner to:**
- study flashcards
- configure card behavior
- flip current card
- move through cards

**On the screen, s/he can also:**
- view status, validation, empty, pagination, or mock interaction states where applicable

| Field Name | Description |
|---|---|
| Card Order | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Answer Mode | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Confidence | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Mark Card For Review | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Card Progress Badge | Visible data group. Shows records or grouped screen data. Counted as one field. |
| Progress Bar | Visible data group. Shows records or grouped screen data. Counted as one field. |
| Flashcard | Visible data group. Shows records or grouped screen data. Counted as one field. |
| Previous | Visible field. User views or enters this value on the screen. |
| Next | Visible field. User views or enters this value on the screen. |

### 3.5.5 Take study set quiz
**URL:** `http://localhost:5173/study-sets/:studySetId/quiz`

**This screen allows the Learner to:**
- configure and take a practice quiz
- select answers
- submit the quiz
- open result screen

**On the screen, s/he can also:**
- view status, validation, empty, pagination, or mock interaction states where applicable

| Field Name | Description |
|---|---|
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

### 3.5.6 Review wrong answers
**URL:** `http://localhost:5173/study-sets/:studySetId/review-wrong-answers`

**This screen allows the Learner to:**
- review wrong answers by study set
- filter them
- request AI explanation
- mark reviewed
- retry question

**On the screen, s/he can also:**
- view status, validation, empty, pagination, or mock interaction states where applicable

| Field Name | Description |
|---|---|
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

### 3.5.7 Request AI answer explanation
**URL:** `http://localhost:5173/study-sets/:studySetId/review-wrong-answers`

**This screen allows the Learner to:**
- request an AI-generated explanation for a selected question and answer

**On the screen, s/he can also:**
- review wrong answers
- mark reviewed
- retry question
- view AI or upgrade messages

| Field Name | Description |
|---|---|
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

### 3.5.8 View personal learning progress
**URL:** `http://localhost:5173/learner/progress`

**This screen allows the Learner to:**
- view learner progress metrics
- filter by subject and period
- review weak topics

**On the screen, s/he can also:**
- view status, validation, empty, pagination, or mock interaction states where applicable

| Field Name | Description |
|---|---|
| Search Topic Progress | Text search field. User enters keyword(s) to filter visible records. |
| Subject Filter | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Period Filter | Date/time field. User views or enters schedule, duration, period, or time-related value. |
| Sort By | Dropdown/select field. User chooses one visible option to configure or filter the screen. |
| Apply | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Reset Filters | Action field. User clicks to navigate, submit, update, or process the selected visible item. |
| Progress Metrics | Visible data group. Shows records or grouped screen data. Counted as one field. |
| Weak Topic Breakdown Table | Visible data group. Shows records or grouped screen data. Counted as one field. |

---

## 3.6 Exam Session

### 3.6.1 View available exams
**URL:** `http://localhost:5173/exams`

**This screen allows the Learner to:**
- view assigned exams
- search and filter them
- open exam information

**On the screen, s/he can also:**
- view status, validation, empty, pagination, or mock interaction states where applicable

| Field Name | Description |
|---|---|
| Search Exams | Input field to search available exams by title, class, or status |
| Status Filter | Dropdown menu to filter exams by status |
| Class Filter | Dropdown menu to filter exams by assigned class |
| Sort By | Dropdown menu to sort exams by selected criteria |
| Apply | Button to execute search and apply filters |
| Reset Filters | Button to clear all search inputs and filters |
| Available Exam Table | Display a list of upcoming and open exams assigned to the user |
| Info | Button to view detailed information about a specific exam |
| Pagination | Navigate between pages of available exams |

### 3.6.2 View exam information
**URL:** `http://localhost:5173/exams/:examId`

**This screen allows the Learner to:**
- review exam schedule, attempts, rules, access code, and start the exam

**On the screen, s/he can also:**
- view status, validation, empty, pagination, or mock interaction states where applicable

| Field Name | Description |
|---|---|
| Start Exam | Primary action button; initiates the exam session |
| Exam Access Code | Text input field; captures the access code required to unlock the exam |
| Attempt Selection | Dropdown menu; allows the user to select the specific exam attempt |
| I Have Read Exam Rules | Checkbox; requires the user to acknowledge the exam rules before starting |
| Class | Read-only text; displays the name of the class associated with the exam |
| Start Time | Read-only text; displays the scheduled start date and time of the exam |
| Duration | Read-only text; displays the total allowed time to complete the exam |
| Attempts Allowed | Read-only text; displays the maximum number of attempts granted to the user |
| Result Visibility | Read-only text; indicates when the final exam results will be revealed |
| Randomization | Read-only text; specifies the randomization rules applied to the exam questions and answers |

### 3.6.3 Take exam
**URL:** `http://localhost:5173/exams/:examId/take`

**This screen allows the Learner to:**
- answer exam questions
- view timer and status
- flag questions
- submit with confirmation

**On the screen, s/he can also:**
- view status, validation, empty, pagination, or mock interaction states where applicable

| Field Name | Description |
|---|---|
| Start Exam | Primary action button; initiates the exam session |
| Exam Access Code | Text input field; captures the access code required to unlock the exam |
| Attempt Selection | Dropdown menu; allows the user to select the specific exam attempt |
| I Have Read Exam Rules | Checkbox; requires the user to acknowledge the exam rules before starting |
| Class | Read-only text; displays the name of the class associated with the exam |
| Start Time | Read-only text; displays the scheduled start date and time of the exam |
| Duration | Read-only text; displays the total allowed time to complete the exam |
| Attempts Allowed | Read-only text; displays the maximum number of attempts granted to the user |
| Result Visibility | Read-only text; indicates when the final exam results will be revealed |
| Randomization | Read-only text; specifies the randomization rules applied to the exam questions and answers |
| View Exam Result | Primary action button; navigates the user to the detailed exam result page |
| Back to Exams | Secondary action button; redirects the user back to the list of available exams |
| Exam Submission Summary | Visible data group; displays read-only details of the completed exam |
| Cancel Submission | Secondary action button; cancels the submission process and returns the user to the ongoing exam |
| Confirm Submit | Primary action button; finalizes and submits the user's exam attempt |

### 3.6.4 View exam result
**URL:** `http://localhost:5173/exams/:examId/result`

**This screen allows the Learner to:**
- view exam score and result details when teacher allows result visibility

**On the screen, s/he can also:**
- view status, validation, empty, pagination, or mock interaction states where applicable

| Field Name | Description |
|---|---|
| Result Metrics | Display exam score, accuracy percentage, and submission status |
| Search Result Detail | Input field to search exam results by question or answer keyword |
| Result Status | Dropdown menu to filter results by correctness status |
| Question Type | Dropdown menu to filter results by question format |
| Sort By | Dropdown menu to sort exam results by selected criteria |
| Apply | Button to execute search and apply filters |
| Reset Filters | Button to clear all search inputs and filters |
| Result Detail Table | Display a detailed breakdown of questions, user answers, and correct answers |
| Pagination | Navigate between pages of exam results |
| Restricted Access Message | Notification indicating the user does not have permission to view the exam score |
| View Exams | Button to return to the exam list when score access is restricted |

### 3.6.5 Create exam session
**URL:** `http://localhost:5173/teacher/exams/create`

**This screen allows the Teacher to:**
- create an official exam session with class, question source, schedule, attempts, result settings, security options, and notifications

**On the screen, s/he can also:**
- view status, validation, empty, pagination, or mock interaction states where applicable

| Field Name | Description |
|---|---|
| Exam Title | Text input field; captures the name or title of the exam session |
| Class | Dropdown menu; assigns the exam to a specific class |
| Question Source | Dropdown menu; selects the question bank or source for the exam |
| Status | Dropdown menu; sets the initial state of the exam session |
| Start Time | Date/time input field; schedules the exact start date and time for the exam |
| Duration Minutes | Numeric input field; sets the total time allowed to complete the exam |
| Allowed Attempts | Numeric input field; defines the maximum number of times a learner can take the exam |
| Passing Score | Numeric input field; sets the minimum score required to pass |
| Exam Access Code | Text input field; configures a specific code required for learners to join the exam |
| Late Join Grace Period | Text/numeric input field; defines the allowed buffer time for latecomers |
| Auto-submit Before End | Text/numeric input field; configures the automatic submission countdown before the deadline |
| Number of Questions | Numeric input field; specifies the exact number of questions to be drawn from the selected source |
| Result Visibility | Dropdown menu; configures how results are displayed |
| Review Permission | Dropdown menu; defines what parts of the exam learners can review |
| Exam Password | Secure text input field; optionally sets a password to restrict exam access |
| Candidate Instructions | Text input field; provides specific rules or guidelines for learners before starting |
| Randomize Questions | Checkbox; toggles the shuffling of question order for each learner |
| Randomize Answers | Checkbox; toggles the shuffling of answer options for each question |
| Enable Auto-save | Checkbox; toggles automatic saving of exam progress |
| Require Full-screen Warning | Checkbox; toggles alerts if the learner attempts to exit full-screen mode |
| Lock Navigation After Start | Checkbox; restricts learners from navigating away from the exam window |
| Notify Learners Before Exam | Checkbox; toggles sending an automated notification to learners before the exam starts |
| Create Exam Session | Primary action button; submits the form to create the new exam session |
| Created Message | Notification banner; displays a success message upon successful creation |

### 3.6.6 Configure exam settings
**URL:** `http://localhost:5173/teacher/exams/:examId/edit`

**This screen allows the Teacher to:**
- update exam session settings, timing, security, visibility, randomization, and notifications

**On the screen, s/he can also:**
- view status, validation, empty, pagination, or mock interaction states where applicable

| Field Name | Description |
|---|---|
| Exam Title | Text input field; captures the name or title of the exam session |
| Class | Dropdown menu; assigns the exam to a specific class |
| Question Source | Dropdown menu; selects the question bank or source for the exam |
| Status | Dropdown menu; sets the initial state of the exam session |
| Start Time | Date/time input field; schedules the exact start date and time for the exam |
| Duration Minutes | Numeric input field; sets the total time allowed to complete the exam |
| Allowed Attempts | Numeric input field; defines the maximum number of times a learner can take the exam |
| Passing Score | Numeric input field; sets the minimum score required to pass |
| Exam Access Code | Text input field; configures a specific code required for learners to join the exam |
| Late Join Grace Period | Text/numeric input field; defines the allowed buffer time for latecomers |
| Auto-submit Before End | Text/numeric input field; configures the automatic submission countdown before the deadline |
| Number of Questions | Numeric input field; specifies the exact number of questions to be drawn from the selected source |
| Result Visibility | Dropdown menu; configures how results are displayed |
| Review Permission | Dropdown menu; defines what parts of the exam learners can review |
| Exam Password | Secure text input field; optionally sets a password to restrict exam access |
| Candidate Instructions | Text input field; provides specific rules or guidelines for learners before starting |
| Randomize Questions | Checkbox; toggles the shuffling of question order for each learner |
| Randomize Answers | Checkbox; toggles the shuffling of answer options for each question |
| Enable Auto-save | Checkbox; toggles automatic saving of exam progress |
| Require Full-screen Warning | Checkbox; toggles alerts if the learner attempts to exit full-screen mode |
| Lock Navigation After Start | Checkbox; restricts learners from navigating away from the exam window |
| Notify Learners Before Exam | Checkbox; toggles sending an automated notification to learners before the exam starts |
| Create Exam Session | Primary action button; submits the form to create the new exam session |
| Created Message | Notification banner; displays a success message upon successful creation |

### 3.6.7 View own exam information
**URL:** `http://localhost:5173/teacher/exams/:examId`

**This screen allows the Teacher to:**
- view exam configuration
- navigate to configure, export report, or monitor screens

**On the screen, s/he can also:**
- view status, validation, empty, pagination, or mock interaction states where applicable

| Field Name | Description |
|---|---|
| Configure | Secondary action button; navigates to the exam settings editing page |
| Export Report | Secondary action button; downloads the performance report for the exam session |
| Monitor | Primary action button; opens the live monitoring dashboard to track learners taking the exam |
| Exam Settings Data | Visible data group; displays a read-only summary of the exam configuration |

---

## 3.7 Analytics & Reporting

### 3.7.1 View learning analytics
**URL:** `http://localhost:5173/teacher/analytics`

**This screen allows the Teacher to:**
- view post-exam and learning analytics
- filter analytics
- inspect selected exam or class performance

**On the screen, s/he can also:**
- export selected exam report
- view status, validation, empty, pagination, or mock interaction states where applicable

| Field Name | Description |
|---|---|
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

### 3.7.2 Export report
**URL:** `http://localhost:5173/teacher/analytics/export`

**This screen allows the Teacher to:**
- select one exam and export report with chosen type, format, included sections, and attempt table

**On the screen, s/he can also:**
- view status, validation, empty, pagination, or mock interaction states where applicable

| Field Name | Description |
|---|---|
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

---

## 3.8 Payment & Subscription

### 3.8.1 View premium plans
**URL:** `http://localhost:5173/premium/plans`

**This screen allows the Guest, Learner, Teacher to:**
- view Premium plans available for the current role
- compare price and benefits before selecting a plan

**On the screen, s/he can also:**
- select a plan to continue upgrade
- go to login before selecting a plan as Guest

| Field Name | Description |
|---|---|
| Premium Plan Cards | Visible data group. Shows records or grouped screen data. Counted as one field. |
| Select Plan / Login To Select | Action field. User clicks to navigate, submit, update, or process the selected visible item. |

### 3.8.2 Upgrade to Premium
**URL:** `http://localhost:5173/premium/upgrade`

**This screen allows the Learner, Teacher to:**
- select a role-eligible Premium plan
- enter billing and payment information
- proceed to payment confirmation

**On the screen, s/he can also:**
- apply a promotion code if available
- review payment summary before continuing
- accept subscription terms

| Field Name | Description |
|---|---|
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

---

## 3.9 System Admin

### 3.9.1 View user list
**URL:** `http://localhost:5173/admin/users`

**This screen allows the Admin to:**
- view all users
- search and filter by role, status, premium status
- open user detail

**On the screen, s/he can also:**
- view status, validation, empty, pagination, or mock interaction states where applicable

| Field Name | Description |
|---|---|
| Search Users | Text input field; captures keywords to search users by name, email, role, or status |
| Role Filter | Dropdown menu; filters the user list by their assigned system role |
| Account Status | Dropdown menu; filters users by their current account status |
| Premium Status | Dropdown menu; filters users by their subscription plan |
| Sort By | Dropdown menu; sorts the user list by selected criteria |
| Apply | Action button; executes the search query and applies all selected filters |
| Reset Filters | Action button; clears all search inputs and filter configurations |
| User List Table | Data list; displays registered users along with their role, premium status, and account status |
| Detail | Action button; navigates to the detailed profile and management page of a specific user |
| Pagination | Navigation controls; allows the user to switch between pages of user records |

### 3.9.2 Update user account status
**URL:** `http://localhost:5173/admin/users/:userId`

**This screen allows the Admin to:**
- view account detail
- update account status
- provide reason, effective date, notification, and admin confirmation

**On the screen, s/he can also:**
- view status, validation, empty, pagination, or mock interaction states where applicable

| Field Name | Description |
|---|---|
| User Profile Summary | Visible data group; displays read-only details of the user including name, contact info, premium status, and activity dates |
| User Role | Dropdown menu; selects the system role to be assigned to the user |
| Account Status | Dropdown menu; updates the active, pending, or suspended state of the user account |
| Permission Scope | Dropdown menu; defines the level of system access rights applied to the user |
| Role Change Reason | Text input field; captures the justification or note for modifying the user's role |
| Effective Date | Date picker field; schedules the exact date when the role update takes effect |
| Notification To User | Dropdown menu; configures the communication method to alert the user about the update |
| Admin Password Confirmation | Password input field; requires the administrator's credential to authorize this sensitive change |
| Update User Role | Primary action button; submits the form to apply the user profile and role modifications |

### 3.9.3 Hide public learning resource
**URL:** `http://localhost:5173/admin/resources`

**This screen allows the Admin to:**
- filter public resources
- hide inappropriate public learning resources with reviewer notes

**On the screen, s/he can also:**
- view status, validation, empty, pagination, or mock interaction states where applicable

| Field Name | Description |
|---|---|
| Resource Type | Dropdown menu; filters learning resources by their specific type |
| Review Status | Dropdown menu; filters resources by their current moderation or review state |
| Keyword | Text input field; captures keywords to search resources by title, owner, or subject |
| Severity | Dropdown menu; filters reported resources by the severity of the violation |
| Reviewer Note | Text input field; captures the administrator's reason or note for taking moderation actions |
| Owner Role | Dropdown menu; filters resources by the system role of the creator |
| Resource Table | Data list; displays public learning resources alongside their ownership, visibility, and review status |
| Hide Public Learning Resource | Action button; restricts public access to an inappropriate or invalid learning resource |
| Pagination | Navigation controls; allows the user to switch between pages of resource records |

### 3.9.4 View system status
**URL:** `http://localhost:5173/admin/system-status`

**This screen allows the Admin to:**
- view monitored services
- filter status and integration type
- read system warning messages

**On the screen, s/he can also:**
- view status, validation, empty, pagination, or mock interaction states where applicable

| Field Name | Description |
|---|---|
| Search Services | Text input field; captures keywords to search for specific services by name |
| Service Status | Dropdown menu; filters system services by their current operational status |
| Integration Type | Dropdown menu; filters services by their integration category or type |
| Sort By | Dropdown menu; sorts the service list by selected criteria |
| Apply | Action button; executes the search query and applies all selected filters |
| Reset Filters | Action button; clears all search inputs and filter configurations |
| System Service Table | Data list; displays the operational status, uptime, response time, and last check timestamp of monitored services |
| Pagination | Navigation controls; allows the user to switch between pages of service records |
| System Message | Notification block; displays critical system alerts or active warnings regarding service health |