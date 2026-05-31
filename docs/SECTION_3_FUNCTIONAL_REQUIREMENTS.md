# 3. Functional Requirements - Smart Quiz Platform

This document rewrites Section 3 in SRS screen-specification style. For each screen, open the prototype URL, capture the screen manually, then insert the screenshot into the SRS.

Protected routes require one of the demo accounts in `docs/DEMO_ACCOUNTS.md`.

## 3.1 Public Access & Discovery

### 3.1.1 Home Page

Related Use Case: UC-01
Actor: Guest, Learner, Teacher, Administrator

This screen allows the Guest to:
View Home Page: view public introduction, common learning subjects, public study set cards, and account entry points.
Search Public Study Sets: enter keyword(s) to search public study sets.
Open Public Study Set: choose a public study set card to view detail or flashcards.
Register / Login: navigate to account creation or login screens.

On the screen, s/he can also:
Browse Subject Areas: open public content by subject category.
Start Creating Account: choose Create to register before creating learning content.
Access Role Dashboard: authenticated users return to their own learner, teacher, or admin workspace.

Prototype URL:
http://127.0.0.1:5173/

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Header Logo | Initial value: SQP brand name. Click to return to Home Page. |
| Subjects Navigation | Link. Opens public study set discovery by subject. |
| Creators Navigation | Link. Opens public user account search. |
| Global Search | Data type: text. Search by public study set keyword. |
| Create Button | Button. Guest is sent to Register Account screen before content creation. |
| Login Button | Button. Opens Login with Account screen. |
| Register Button | Button. Opens Register Account screen. |
| Hero Search Bar | Data type: text. Initial placeholder asks what the user wants to study. |
| Public Study Set Cards | Initial values: public study sets only. Cards show title, subject, term count, and owner. |
| Guest Notice | Message. Explains that progress cannot be saved until login. |

### 3.1.2 Search Public Study Sets

Related Use Case: UC-02
Actor: Guest, Learner

This screen allows the Guest or Learner to:
Search Public Study Sets: enter keyword(s) to find public study sets by title, description, subject, topic, or tag.
Filter Public Study Sets: filter the study set list by subject.
View Public Study Set Detail: open a selected public study set.

On the screen, s/he can also:
Inspect Study Set Metadata: view owner, visibility, question count, and tags.
Handle No Result State: see an empty state when no public study set matches filters.

Prototype URL:
http://127.0.0.1:5173/search/study-sets

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Keyword | Data type: text. Initial value: blank. Search by title, description, topic, or tag. |
| Subject | Initial values: All Subjects and available public subjects. Default value: All Subjects. |
| Apply Filter | Button. Applies current keyword and subject filter. |
| Study Set Title | Initial values: public study set titles matching the current filter. |
| Subject / Topic | Initial values: subject and topic of each study set. |
| Owner | Initial value: public display name of study set creator. |
| Tags | Initial values: topic labels attached to the study set. |
| Question Count | Data type: positive integer. Shows number of questions or terms in the set. |

### 3.1.3 Search Public User Accounts

Related Use Case: UC-03
Actor: Guest, Learner, Teacher

This screen allows the Guest, Learner, or Teacher to:
Search Public User Accounts: enter keyword(s) to find public learner or teacher profiles.
Filter Public User Accounts: filter accounts by public role.
View Account Summary: view public display name, role, premium status, and account status.

On the screen, s/he can also:
Sort / Scan User List: use table rows to compare public accounts.
Identify Premium Accounts: view premium badge for public users when visible.

Prototype URL:
http://127.0.0.1:5173/search/users

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Keyword | Data type: text. Initial value: blank. Search by full name, username, or public email value. |
| Role | Initial values: All Roles, Learner, Teacher. Admin accounts should not be public in production. |
| User | Initial values: public display names matching current filter. |
| Email / Username | Initial values: public contact or username value. Production may hide email address. |
| Role Badge | Initial values: Learner or Teacher. Shows public role. |
| Premium Badge | Initial values: Premium or Standard. Shows public subscription status if allowed. |
| Status | Initial values: Active or Inactive. Shows public account availability. |
| Last Active | Data type: date/time label. Shows latest public activity timestamp when available. |

### 3.1.4 Public Study Set Detail

Related Use Case: UC-04, UC-05
Actor: Guest, Learner

This screen allows the Guest or Learner to:
View Public Study Set Detail: view title, description, owner, subject, topic, tags, and question preview.
Study Public Flashcards: start flashcard preview for a public study set.
Register To Save Progress: navigate to account registration when the user wants saved progress.

On the screen, s/he can also:
Preview Questions: inspect sample question rows before studying.
View Access Limitation: understand that guest activity is not saved.

Prototype URL:
http://127.0.0.1:5173/sets/set-bio-cell/public

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Study Set Title | Initial value: selected public study set title. |
| Description | Data type: text. Shows public description written by owner. |
| Owner | Initial value: public creator name. |
| Subject | Initial value: subject inherited from source question bank or study set metadata. |
| Topic | Initial value: topic inherited from source question bank or study set metadata. |
| Visibility | Initial value: Public. Private sets must not be visible to guest. |
| Tags | Initial values: study set tags. Used for discovery. |
| Question Preview | Initial values: sample questions from study set. Answers may be hidden or limited for guest preview. |
| Study Flashcards | Button. Opens flashcard study mode for public preview. |
| Sign Up To Save History | Button. Opens Register Account screen. |
| Guest Notice | Message. Explains that progress, scores, and wrong answer history require login. |

## 3.2 Authentication & Profile

### 3.2.1 Register Account

Related Use Case: UC-07
Actor: Guest

This screen allows the Guest to:
Register Account: create a new learner or teacher account.
Enter Account Information: input name, email, phone number, requested role, and password.
Use Google Sign-Up: choose Google sign-up entry point.

On the screen, s/he can also:
Go To Login: navigate to Login with Account screen when account already exists.
View Validation Errors: see required-field, email, role, or password validation messages.

Prototype URL:
http://127.0.0.1:5173/auth/register

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Full Name | Data type: non-empty string. Required. Max length should be limited by profile rule. |
| Email Address | Data type: email. Required. Must be unique in production. |
| Phone Number | Data type: phone string. Optional or required depending on final policy. |
| Requested Role | Initial values: Learner, Teacher. Guest cannot self-register as Administrator. |
| Password | Data type: password. Required. Must satisfy password policy. |
| Confirm Password | Data type: password. Required. Must match Password. |
| Create Account | Button. Submits registration form. |
| Continue With Google | Button. Prototype shows visual action only; production connects OAuth. |
| Already Have Account | Link. Opens Login with Account screen. |
| Validation Message | Displayed below relevant field when validation fails. |

### 3.2.2 Login With Account

Related Use Case: UC-08, UC-09, UC-11
Actor: Guest, Learner, Teacher, Administrator

This screen allows the Guest to:
Login With Account: enter email and password to access system features.
Login With Google: choose Google login entry point.
Recover Password: navigate to Forgot Password screen.

On the screen, s/he can also:
Create New Account: navigate to Register Account screen.
Show / Hide Password: toggle password visibility.
Be Redirected By Role: after successful login, open the correct learner, teacher, or admin workspace.

Prototype URL:
http://127.0.0.1:5173/auth/login

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Email Address | Data type: email. Required. Prototype maps known demo emails to roles. |
| Password | Data type: password. Required. Prototype accepts non-empty password for demo accounts. |
| Show Password | Icon button. Toggles password visibility. |
| Login Button | Button. Validates credentials and stores current role locally. |
| Continue With Google | Button. Prototype shows provider-unavailable message. Production connects OAuth provider. |
| Forgot Password | Link. Opens Forgot Password screen. |
| Create Account | Link. Opens Register Account screen. |
| Status Message | Displays login error, provider message, or logout confirmation. |
| Visual Panel | Static illustration/content area used to match common learning-platform login layout. |

### 3.2.3 Forgot Password

Related Use Case: UC-10
Actor: Learner, Teacher, Administrator

This screen allows the user to:
Request Password Reset: enter registered email address and request a reset link.
Return To Login: go back to Login with Account screen.

On the screen, s/he can also:
View Request Status: see whether a reset email has been queued.
Correct Email Input: update email address before submitting again.

Prototype URL:
http://127.0.0.1:5173/auth/forgot-password

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Registered Email Address | Data type: email. Required. Must belong to existing account in production. |
| Send Reset Link | Button. Sends password reset request. |
| Back To Login | Link. Opens Login with Account screen. |
| Status Message | Initial value: blank. After submit, displays reset-link sent message. |

### 3.2.4 Reset Password

Related Use Case: UC-10
Actor: Learner, Teacher, Administrator

This screen allows the user to:
Reset Password: enter reset token and new password.
Confirm New Password: repeat password to prevent typing mistakes.
Return To Login: open Login with Account screen after reset.

On the screen, s/he can also:
View Password Rule Hint: see basic rule or helper text for password format.
View Reset Result: see success or validation message after submission.

Prototype URL:
http://127.0.0.1:5173/auth/reset-password

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Reset Token | Data type: string. Required. Production validates token value and expiry time. |
| New Password | Data type: password. Required. Must satisfy password policy. |
| Confirm New Password | Data type: password. Required. Must match New Password. |
| Reset Password | Button. Submits reset request. |
| Login Button | Button or link. Opens Login with Account screen after successful reset. |
| Status Message | Initial value: blank. Displays password reset success or validation error. |

### 3.2.5 View Personal Profile

Related Use Case: UC-12, UC-11
Actor: Learner, Teacher, Administrator

This screen allows the user to:
View Personal Profile: view profile identity, role, subscription, account status, and activity dates.
Edit Personal Profile: go to Edit Personal Profile screen.
Logout: end current local session and return to Guest state.

On the screen, s/he can also:
View Role Access Summary: see what workspace current role can access.
Open Change Password: navigate to password update flow when needed.

Prototype URL:
http://127.0.0.1:5173/profile

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Avatar | Initial value: user initials or avatar placeholder. |
| Full Name | Initial value: current user's full name. |
| Username | Initial value: current user's username. |
| Email Address | Initial value: current user's email address. Read-only on this screen. |
| Phone Number | Initial value: current user's phone number. |
| Role | Initial value: Learner, Teacher, or Administrator. Read-only for non-admin user. |
| Premium Status | Initial value: Premium or Standard. Shows subscription state. |
| Account Status | Initial value: Active, Inactive, or Suspended. |
| Joined At | Data type: date. Shows account creation date. |
| Last Active | Data type: date/time. Shows latest activity. |
| Bio / Profile Details | Data type: text. Shows profile description. |
| Edit Profile | Button. Opens Edit Personal Profile screen. |
| Logout | Button. Clears current user and returns to Guest home. |

### 3.2.6 Edit Personal Profile

Related Use Case: UC-13
Actor: Learner, Teacher, Administrator

This screen allows the user to:
Update Personal Profile: change editable profile fields.
Save Profile Changes: submit updated personal information.
Cancel Profile Editing: return to profile without saving.

On the screen, s/he can also:
View Read-Only Account Data: understand that email, role, premium status, and account status are managed elsewhere.
View Save Result: see local confirmation after saving.

Prototype URL:
http://127.0.0.1:5173/profile/edit

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Full Name | Data type: non-empty string. Initial value: current user's full name. |
| Phone Number | Data type: phone string. Initial value: current user's phone number. |
| Avatar Initials | Data type: string. Max length: 2 characters recommended. |
| Username | Data type: string. Initial value: current user's username. Should be unique in production. |
| Profile Details | Data type: text. Max length should be limited by profile policy. |
| Save Changes | Button. Saves profile data locally in prototype. |
| Cancel | Button. Returns to View Personal Profile screen. |
| Status Message | Initial value: blank. Displays profile-saved confirmation. |

### 3.2.7 Change Password

Related Use Case: UC-14
Actor: Learner, Teacher, Administrator

This screen allows the user to:
Change Password: enter current password and new password.
Confirm New Password: prevent incorrect password update.
Submit Password Update: send password change request.

On the screen, s/he can also:
View Validation Message: see required-field, length, or mismatch messages.
Return To Profile: navigate back after update.

Prototype URL:
http://127.0.0.1:5173/profile/change-password

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Current Password | Data type: password. Required. Production verifies against existing password hash. |
| New Password | Data type: password. Required. Minimum length: 8 characters in prototype validation. |
| Confirm New Password | Data type: password. Required. Must match New Password. |
| Update Password | Button. Submits password change request. |
| Validation Message | Displays required-field, minimum-length, or mismatch error. |
| Success Message | Displays after password update request succeeds. |

### 3.2.8 Notification Center

Related Use Case: Shared Notification
Actor: Learner, Teacher, Administrator

This screen allows the user to:
View Notifications: view system, class, study, exam, payment, or admin notifications.
Mark Notification As Read: change unread notification state to read.

On the screen, s/he can also:
Filter By Read Status: identify unread items using status pill.
View Notification Context: inspect actor/source and created time for each notification.

Prototype URL:
http://127.0.0.1:5173/notifications

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Notification Title | Initial values: notification titles for current user or role. |
| Notification Message | Data type: text. Describes event or required action. |
| Actor / Source | Initial value: sender, class, system, or module name. |
| Created At | Data type: date/time. Shows notification creation time. |
| Status | Initial values: Read, Unread. Displayed as status pill. |
| Mark As Read | Button. Available for unread notifications. Changes local read state. |

## 3.3 Class Management

### 3.3.1 Learner Dashboard

Related Use Case: UC-16, UC-18, UC-22, UC-23
Actor: Learner

This screen allows the Learner to:
View Learner Dashboard: view current study, class, exam, and learning-progress summary.
Continue Study: resume latest study set from progress card.
Open Upcoming Exam: open exam information from dashboard list.
Join Class: navigate to Join Class screen.

On the screen, s/he can also:
View Joined Class Summary: scan current classes and teacher names.
View Learning Progress: inspect accuracy, mistakes, and daily goal progress.
Open Recent Study Sets: choose a recent study set from dashboard.

Prototype URL:
http://127.0.0.1:5173/learner/dashboard

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Welcome Title | Initial value: personalized greeting for learner. |
| Continue Study Card | Shows latest active study set, subject, progress, and Continue button. |
| Jump Back In Cards | Initial values: recent study sets. Each card shows progress and missed-question count. |
| Daily Goal Progress | Data type: percentage. Shows learner's daily study target completion. |
| Accuracy Metric | Data type: percentage. Shows overall practice accuracy. |
| Mistakes Metric | Data type: non-negative integer. Shows repeated missed answers. |
| Joined Classes Table | Initial values: classes joined by learner. |
| Available Exams Table | Initial values: exams assigned to learner classes. |
| Continue Button | Button. Opens last active study mode. |
| Join Class Button | Button. Opens Join Class screen. |
| Sidebar Navigation | Learner-only navigation. Does not show teacher or admin features. |

### 3.3.2 View Joined Classes

Related Use Case: UC-16
Actor: Learner

This screen allows the Learner to:
View Joined Classes: view list of classes that the learner has joined or has been approved to access.
Open Class Detail: go to class detail screen to view class information and assigned study sets.
Join New Class: go to Join Class screen to submit a class code or invitation link.

On the screen, s/he can also:
Search / Filter Class List: find a class by class name, subject, teacher name, or class code if search/filter is enabled.
View Class Status: identify whether class is active or unavailable.
View Class Member Count: see number of learners currently in class.

Prototype URL:
http://127.0.0.1:5173/learner/classes

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Class Name | Initial values: all joined class names of current learner. Click class name or Open button to go to Class Detail screen. |
| Subject | Initial values: subject of each joined class, such as Biology or Mathematics. |
| Teacher | Initial values: full name of teacher who owns or manages class. |
| Class Code | Initial values: class code generated by system, used by learners to request joining class. |
| Members | Data type: positive integer. Shows number of learners currently in class. |
| Status | Initial values: Active, Archived, or Closed. |
| Open | Button. Opens Learner Class Detail screen. |
| Join Class | Button. Opens Join Class screen. |

### 3.3.3 Join Class

Related Use Case: UC-17
Actor: Learner

This screen allows the Learner to:
Join Class: submit class code or invitation link to request class access.
Send Join Request: send request message to teacher for approval when required.
View Request Status: see pending state after request is submitted.

On the screen, s/he can also:
Read Join Instructions: understand required class code or invitation link format.
Return To Class List: navigate back to joined classes.

Prototype URL:
http://127.0.0.1:5173/learner/classes/join

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Class Code | Data type: string. Required if invitation link is blank. Must match active class code in production. |
| Invitation Link | Data type: URL/string. Required if class code is blank. Must contain valid class invitation token in production. |
| Request Message | Data type: text. Optional. Sent to teacher together with join request. |
| Send Join Request | Button. Submits class join request. |
| Pending Status | Initial value: hidden. Displayed after learner submits request. |
| Helper Text | Explains that teacher approval may be required. |
| Status Message | Displays pending approval message after submission. |

### 3.3.4 Learner Class Detail

Related Use Case: UC-16
Actor: Learner

This screen allows the Learner to:
View Class Detail: view class metadata, teacher, subject, code, member count, and status.
View Assigned Study Sets: see study sets assigned by teacher to this class.
Open Assigned Study Set: navigate to selected study set detail.

On the screen, s/he can also:
Return To Joined Classes: go back to learner class list.
Check Class Access: confirm class is active and learner is a member.

Prototype URL:
http://127.0.0.1:5173/learner/classes/class-bio-12a

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Class Name | Initial value: selected class name. |
| Teacher | Initial value: teacher display name. |
| Subject | Initial value: class subject. |
| Class Code | Initial value: system-generated class code. |
| Members | Data type: positive integer. Shows class member count. |
| Status | Initial values: Active, Archived, or Closed. |
| Assigned Study Sets | Initial values: study sets assigned to class. |
| Open Study Set | Button. Opens Learner Study Set Detail screen. |
| Back To Classes | Button. Returns to View Joined Classes screen. |

### 3.3.5 Teacher Dashboard

Related Use Case: UC-27, UC-33, UC-46, UC-49
Actor: Teacher

This screen allows the Teacher to:
View Teacher Dashboard: view teaching overview across classes, question banks, exams, and reports.
Create Class: open Create Class screen.
Create Question Bank: open Create Question Bank screen.
Open Teaching Work: navigate to classes, study sets, exams, analytics, and reports.

On the screen, s/he can also:
Review Class Metrics: view current class count, pending join requests, and active learners.
Review Exam / Content Status: inspect next exam, draft content, and report readiness.
Use Teacher Navigation: access only teacher workspace features.

Prototype URL:
http://127.0.0.1:5173/teacher/dashboard

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Metrics Cards | Initial values: teaching totals such as classes, learners, exams, and question banks. |
| Current Class | Initial value: highlighted class for teacher follow-up. |
| Next Exam | Initial value: nearest scheduled exam session. |
| Draft Content | Initial value: draft question bank or study set count. |
| Report Format | Initial value: preferred export format if configured. |
| Class Table | Initial values: teacher-created classes. |
| Pending Join Requests | Data type: non-negative integer. Shows requests waiting for teacher review. |
| Create Class | Button. Opens Create Class screen. |
| Create Question Bank | Button. Opens Create Question Bank screen. |
| Teacher Sidebar | Role-specific navigation. Learner and admin routes are not exposed. |

### 3.3.6 View Created Classes

Related Use Case: UC-27
Actor: Teacher

This screen allows the Teacher to:
View Created Classes: view classes owned or managed by teacher.
Search Created Classes: enter keyword(s) to filter classes by name, subject, or code.
Open Class Detail: select class to manage invitation, members, and assigned study sets.

On the screen, s/he can also:
Create New Class: navigate to Create Class screen.
View Class Status: identify active, archived, or closed classes.

Prototype URL:
http://127.0.0.1:5173/teacher/classes

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Search Classes | Data type: text. Initial value: blank. Searches class name, subject, or class code. |
| Class Name | Initial values: teacher-created class names. |
| Subject | Initial values: subject of each class. |
| Class Code | Initial values: system-generated class codes. |
| Members | Data type: positive integer. Shows number of learners in each class. |
| Status | Initial values: Active, Archived, Closed. |
| Create Class | Button. Opens Create Class screen. |
| Open | Button. Opens Teacher Class Detail screen. |

### 3.3.7 Create Class

Related Use Case: UC-28
Actor: Teacher

This screen allows the Teacher to:
Create Class: enter class information and create a new class workspace.
Configure Join Policy: choose how learners can request or join class.
Set Default Due Time: set default assignment due-time preference.

On the screen, s/he can also:
View Generated Class Code: use or edit class code before saving if allowed.
View Create Result: see confirmation after class creation.

Prototype URL:
http://127.0.0.1:5173/teacher/classes/create

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Class Name | Data type: non-empty string. Required. Max length should be limited by class rule. |
| Subject | Data type: string or selection. Required. Shows class subject. |
| Class Code | Data type: string. Required. Must be unique across active classes in production. |
| Status | Initial values: Active, Draft, Archived. Default value: Active. |
| Description | Data type: text. Optional. Describes class purpose or instructions. |
| Join Policy | Initial values: Approval Required, Auto Approve, Invitation Only. |
| Default Due Time | Data type: time. Used as default for assignments. |
| Create Class | Button. Creates class and assigns current teacher as owner. |
| Status Message | Displays class-created confirmation. |

### 3.3.8 Teacher Class Detail

Related Use Case: UC-27, UC-29, UC-30, UC-45
Actor: Teacher

This screen allows the Teacher to:
View Class Detail: view teacher-owned class metadata and current status.
Manage Invitation: open Generate Class Invitation screen.
Manage Members: open member list and join request screens.
Assign Study Set: open study set assignment flow for this class.

On the screen, s/he can also:
View Assigned Study Sets: inspect study sets already assigned to class.
Preview Assigned Content: open study set preview/detail from assignment table.

Prototype URL:
http://127.0.0.1:5173/teacher/classes/class-bio-12a

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Class Name | Initial value: selected class name. |
| Subject | Initial value: class subject. |
| Class Code | Initial value: generated class code. |
| Teacher | Initial value: current teacher or owner name. |
| Members | Data type: positive integer. Shows current class member count. |
| Join Policy | Initial value: class join policy. |
| Default Due Time | Data type: time. Initial value from class settings. |
| Status | Initial values: Active, Archived, Closed. |
| Assigned Study Sets Table | Initial values: study sets assigned to this class. |
| Invitation Button | Button. Opens Generate Class Invitation screen. |
| Members Button | Button. Opens View Class Member List screen. |
| Assign Study Set Button | Button. Opens Assign Study Set To Class screen. |

### 3.3.9 Generate Class Invitation

Related Use Case: UC-29
Actor: Teacher

This screen allows the Teacher to:
Generate Class Invitation: view class code and invitation link for learners.
Copy Invitation Link: copy invitation link for external sharing.
Send Invitation Email: enter recipient emails and send invitation message.

On the screen, s/he can also:
Review Class Context: confirm invitation belongs to correct class.
View Copy / Send Status: see local confirmation after action.

Prototype URL:
http://127.0.0.1:5173/teacher/classes/class-bio-12a/invitation

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Class Name | Initial value: selected class name. Read-only. |
| Class Code | Initial value: generated class code. Learners can use it to request joining. |
| Invitation Link | Data type: URL/string. Contains class invitation route or token. |
| Recipient Emails | Data type: email list. Multiple emails should be separated by comma or newline. |
| Copy Invitation Link | Button. Copies invitation link to clipboard in production. |
| Send Invitation Email | Button. Sends emails in production; prototype shows message only. |
| Status Message | Displays copied or sent confirmation. |

### 3.3.10 View Class Member List

Related Use Case: UC-30, UC-32
Actor: Teacher

This screen allows the Teacher to:
View Class Member List: view learners currently in a selected class.
Remove Learner From Class: remove selected learner from class membership.
Open Join Requests: navigate to pending class join requests.

On the screen, s/he can also:
Inspect Learner Status: view active/inactive state and premium badge.
View Removal Result: see confirmation when a learner is removed.

Prototype URL:
http://127.0.0.1:5173/teacher/classes/class-bio-12a/members

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Learner Name | Initial values: names of class members. |
| Email Address | Initial values: learner email addresses. |
| Premium Badge | Initial values: Premium or Standard. |
| Status | Initial values: Active, Pending, Removed. |
| Joined At | Data type: date/time. Shows member approval or join date when available. |
| Remove | Button. Removes learner from class in production; prototype changes local message. |
| Join Requests | Button. Opens Approve Class Join Request screen. |
| Status Message | Displays learner removal confirmation. |

### 3.3.11 Approve Class Join Request

Related Use Case: UC-31
Actor: Teacher

This screen allows the Teacher to:
View Join Requests: review learner requests for selected class.
Approve Join Request: approve pending learner and add them to class.
Review Request Message: read message sent by learner during join request.

On the screen, s/he can also:
Check Requested Time: view when request was submitted.
View Approval Result: see status change after approval.

Prototype URL:
http://127.0.0.1:5173/teacher/classes/class-bio-12a/join-requests

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Learner | Initial values: learners requesting access to class. |
| Message | Data type: text. Shows learner request message. |
| Requested At | Data type: date/time. Shows request submission time. |
| Status | Initial values: Pending, Approved, Rejected. |
| Approve | Button. Available for pending requests. Adds learner to member list in production. |
| Approval Message | Displays local confirmation after approval. |

### 3.3.12 Assign Study Set To Class

Related Use Case: UC-45
Actor: Teacher

This screen allows the Teacher to:
Assign Study Set To Class: choose an existing study set and assign it to selected class.
Select Assignment Audience: assign to all class members or selected learners.
Set Due Date: define due date for study set completion.

On the screen, s/he can also:
Review Class Context: confirm target class before assignment.
View Assignment Result: see confirmation after assignment.

Prototype URL:
http://127.0.0.1:5173/teacher/classes/class-bio-12a/assign-study-set

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Class | Initial value: selected class. Read-only. |
| Study Set | Initial values: study sets created or accessible by teacher. Required. |
| Assign To | Initial values: Entire Class, Selected Learners. Default value: Entire Class. |
| Due Date | Data type: date. Optional or required depending on assignment rule. |
| Assignment Note | Data type: text. Optional note to learners. |
| Assign Study Set | Button. Creates assignment in production. |
| Status Message | Displays assignment-created confirmation. |

## 3.4 Question Bank Management

### 3.4.1 View Question Banks

Related Use Case: UC-33
Actor: Teacher

This screen allows the Teacher to:
View Question Banks: view owned or accessible question banks.
Search Question Banks: enter keyword(s) to filter by bank title, subject, or topic.
Filter Question Banks: filter list by subject.
Open Question Bank Detail: navigate to selected question bank.

On the screen, s/he can also:
Create Question Bank: go to Create Question Bank screen.
View Bank Metadata: inspect visibility, question count, topic, and owner.

Prototype URL:
http://127.0.0.1:5173/teacher/question-banks

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Keyword | Data type: text. Initial value: blank. Searches bank title, subject, topic, or description. |
| Subject | Initial values: All Subjects and available subjects. Default value: All Subjects. |
| Question Bank Title | Initial values: accessible bank titles. |
| Subject / Topic | Initial values: metadata of each bank. |
| Visibility | Initial values: Private, Class Only, Public. |
| Questions | Data type: non-negative integer. Shows question count in bank. |
| Create Question Bank | Button. Opens Create Question Bank screen. |
| Open | Button. Opens Question Bank Detail screen. |

### 3.4.2 Create Question Bank

Related Use Case: UC-34
Actor: Teacher

This screen allows the Teacher to:
Create Question Bank: enter reusable bank metadata.
Configure Bank Visibility: decide whether bank is private, class-only, or public.
Set Question Defaults: define default score and estimated completion time for questions.

On the screen, s/he can also:
Describe Bank Purpose: add description for future question reuse.
View Creation Result: see local confirmation after saving.

Prototype URL:
http://127.0.0.1:5173/teacher/question-banks/create

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Question Bank Title | Data type: non-empty string. Required. |
| Subject | Data type: string or selection. Required. Inherited by questions and study sets. |
| Topic | Data type: string. Required. Inherited by questions and study sets. |
| Grade / Level | Data type: string. Optional. Describes target learner level. |
| Default Score Per Question | Data type: positive number. Default scoring value for new questions. |
| Estimated Completion Time | Data type: positive integer minutes. Used for study set and exam planning. |
| Visibility | Initial values: Private, Class Only, Public. Default value: Private. |
| Question Review Workflow | Initial values: Draft, Ready, Reviewed. Used before public sharing. |
| Description | Data type: text. Optional. Max length should be defined by content rule. |
| Create Question Bank | Button. Creates bank and returns success message. |
| Status Message | Displays bank-created confirmation. |

### 3.4.3 Question Bank Detail

Related Use Case: UC-33, UC-40, UC-41, UC-42
Actor: Teacher

This screen allows the Teacher to:
View Question Bank Detail: view bank metadata and question list.
Create Question: open question creation form inside selected bank.
Update Question: open existing question editing form.
Delete Question: choose delete action for a question.

On the screen, s/he can also:
Edit Bank Information: open Update Question Bank Information screen.
Import Questions: open Excel import flow.
Preview Question Distribution: view question type, difficulty, score, and answer status.

Prototype URL:
http://127.0.0.1:5173/teacher/question-banks/bank-bio-core

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Question Bank Title | Initial value: selected bank title. |
| Subject | Initial value: bank subject. Inherited by questions. |
| Topic | Initial value: bank topic. Inherited by questions. |
| Visibility | Initial values: Private, Class Only, Public. |
| Owner | Initial value: bank owner or creator. |
| Updated At | Data type: date/time. Shows latest bank update time. |
| Question Table | Initial values: questions belonging to selected bank. |
| Question Type | Initial values: Multiple Choice, True/False, Written Answer. |
| Score | Data type: positive number. Shows score value per question. |
| Edit Bank | Button. Opens Update Question Bank Information screen. |
| Create Question | Button. Opens Create Question screen. |
| Import Excel | Button. Opens Import Questions From Excel screen. |
| Delete Question | Button. Shows deletion status in prototype; production requires confirmation. |

### 3.4.4 Update Question Bank Information

Related Use Case: UC-35, UC-36
Actor: Teacher

This screen allows the Teacher to:
Update Question Bank Information: change title, subject, topic, visibility, and description.
Save Bank Changes: persist updated metadata.
Delete Question Bank: choose delete action for selected bank.

On the screen, s/he can also:
Review Dependency Warning: understand dependent study sets and exams may be affected.
View Update / Delete Result: see local status message after action.

Prototype URL:
http://127.0.0.1:5173/teacher/question-banks/bank-bio-core/edit

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Question Bank Title | Data type: non-empty string. Required. Initial value: current bank title. |
| Subject | Data type: string or selection. Required. Updating may affect derived study sets. |
| Topic | Data type: string. Required. Updating may affect derived study sets. |
| Grade / Level | Data type: string. Optional. |
| Default Score | Data type: positive number. Applies to new questions created later. |
| Estimated Completion Time | Data type: positive integer minutes. |
| Visibility | Initial values: Private, Class Only, Public. |
| Review Status | Initial values: Draft, Ready, Reviewed. |
| Description | Data type: text. Optional. |
| Save Changes | Button. Saves bank metadata. |
| Delete Question Bank | Button. Schedules or requests bank deletion. |
| Status Message | Displays update or delete confirmation. |

### 3.4.5 Create Question

Related Use Case: UC-40, UC-43
Actor: Teacher

This screen allows the Teacher to:
Create Question: add a new question to selected question bank.
Enter Question Content: define question type, content, options, correct answer, score, difficulty, and explanation.
Generate From Material: open AI generation screen from question creation flow.

On the screen, s/he can also:
Review Inherited Bank Metadata: view subject and topic from selected question bank without re-entering them.
View Validation Message: see feedback when required question fields are missing.

Prototype URL:
http://127.0.0.1:5173/teacher/question-banks/bank-bio-core/questions/create

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Question Bank | Initial value: selected bank title. Read-only. |
| Inherited Subject | Initial value: bank subject. Read-only. Not entered per question. |
| Inherited Topic | Initial value: bank topic. Read-only. Not entered per question. |
| Question Type | Initial values: Multiple Choice, True/False, Written Answer. Required. |
| Question Content | Data type: text. Required. Contains question stem. |
| Option A-D | Data type: text. Required for Multiple Choice question type. |
| Correct Answer | Data type: text or selection. Required. Must match valid option when Multiple Choice. |
| Score | Data type: positive number. Required. Initial value may come from bank default. |
| Difficulty | Initial values: Easy, Medium, Hard. Required. |
| Explanation | Data type: text. Optional but recommended for learning feedback. |
| Generate From Material | Button. Opens Generate Questions From Material screen. |
| Create Question | Button. Saves new question to selected bank in production. |

### 3.4.6 Update Question

Related Use Case: UC-41
Actor: Teacher

This screen allows the Teacher to:
Update Question: edit existing question content and answer settings.
Save Question Updates: persist edited question values.
Review Inherited Bank Metadata: view selected bank subject and topic without editing per question.

On the screen, s/he can also:
Change Question Difficulty: update difficulty for future quizzes or exams.
Update Explanation: improve learner feedback for wrong-answer review.

Prototype URL:
http://127.0.0.1:5173/teacher/question-banks/bank-bio-core/questions/q-1/edit

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Question Bank | Initial value: selected bank title. Read-only. |
| Inherited Subject | Initial value: bank subject. Read-only. |
| Inherited Topic | Initial value: bank topic. Read-only. |
| Question Type | Initial value: existing question type. Required. |
| Question Content | Data type: text. Required. Initial value: existing question content. |
| Option A-D | Data type: text. Required for Multiple Choice. Initial values: existing options. |
| Correct Answer | Data type: text or selection. Required. Initial value: existing correct answer. |
| Score | Data type: positive number. Required. |
| Difficulty | Initial values: Easy, Medium, Hard. |
| Explanation | Data type: text. Optional. |
| Update Question | Button. Saves edited question values. |
| Status Message | Displays question-updated confirmation. |

### 3.4.7 Import Questions From Excel

Related Use Case: UC-37
Actor: Teacher

This screen allows the Teacher to:
Import Questions From Excel: upload Excel file for selected question bank.
Configure Import Rules: choose duplicate handling, default difficulty, and default tags.
Validate Imported File: check uploaded rows before saving.

On the screen, s/he can also:
Preview Uploaded File: view selected file summary.
Open Error List: view invalid import rows.
Open Valid Row Preview: preview valid questions before saving.

Prototype URL:
http://127.0.0.1:5173/teacher/question-banks/bank-bio-core/import

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Excel File | Data type: file. Accepted format should be `.xlsx` or `.xls`. Required. |
| Duplicate Handling | Initial values: Skip Duplicates, Replace Existing, Keep Both. |
| Default Difficulty | Initial values: Easy, Medium, Hard. Applied when row difficulty is blank. |
| Default Tags | Data type: comma-separated string. Applied to imported questions if row tags are blank. |
| Uploaded Preview | Shows file name, row count, and validation summary in prototype. |
| Validate File | Button. Runs import validation. |
| View Errors | Link/Button. Opens View Question Import Errors screen. |
| Preview Valid Questions | Link/Button. Opens Preview Imported Questions screen. |
| Validation Result | Shows valid row count and error row count. |
| Template Helper | Shows expected Excel column format or template hint. |

### 3.4.8 View Question Import Errors

Related Use Case: UC-38
Actor: Teacher

This screen allows the Teacher to:
View Question Import Errors: inspect invalid imported rows.
Identify Error Field: see which column caused validation failure.
Correct Import File: use error details to fix Excel file before re-uploading.

On the screen, s/he can also:
Return To Import Screen: go back to upload and validate again.
Review Raw Value: compare invalid input value with expected rule.

Prototype URL:
http://127.0.0.1:5173/teacher/question-banks/bank-bio-core/import/errors

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Row | Data type: positive integer. Excel row number with validation error. |
| Field | Initial value: invalid column name, such as Correct Answer or Score. |
| Raw Value | Data type: string. Exact value read from import file. |
| Validation Message | Data type: text. Explains why row is invalid. |
| Back To Import | Button/Link. Returns to Import Questions From Excel screen. |

### 3.4.9 Preview Imported Questions

Related Use Case: UC-39
Actor: Teacher

This screen allows the Teacher to:
Preview Imported Questions: review valid imported rows before saving.
Save Imported Questions: add valid imported questions to selected question bank.

On the screen, s/he can also:
Review Question Type And Answer: inspect imported type, correct answer, and score.
Confirm Row Status: identify valid rows before final save.

Prototype URL:
http://127.0.0.1:5173/teacher/question-banks/bank-bio-core/import/preview

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Question | Initial values: valid question content from import file. |
| Type | Initial values: Multiple Choice, True/False, Written Answer. |
| Correct Answer | Initial value: parsed correct answer from valid row. |
| Score | Data type: positive number. Parsed from import file or default value. |
| Status | Initial value: Valid. Invalid rows are not shown here. |
| Save Imported Questions | Button. Saves valid questions in production; prototype shows local confirmation. |
| Status Message | Displays imported-questions-saved confirmation. |

### 3.4.10 Generate Questions From Material

Related Use Case: UC-43
Actor: Teacher

This screen allows the Teacher to:
Generate Questions From Material: upload material and request AI-generated draft questions.
Configure Generation: choose question type, number of questions, difficulty, and topic focus.
Preview Generated Questions: review generated question drafts before adding to question bank.

On the screen, s/he can also:
Return To Create Question: use generated draft as source for manual question creation.
View AI Limitation Message: understand that prototype does not call real AI service.

Prototype URL:
http://127.0.0.1:5173/teacher/question-banks/bank-bio-core/ai-generate

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Learning Material File | Data type: file. Accepted formats should be defined by production policy. |
| Question Type | Initial values: Multiple Choice, True/False, Written Answer. |
| Number Of Questions | Data type: positive integer. Defines requested generated count. |
| Difficulty | Initial values: Easy, Medium, Hard. |
| Topic Focus | Data type: text. Optional. Narrows generation scope. |
| Generate Questions | Button. Generates static draft preview in prototype. |
| Generated Preview | Shows draft question, options, correct answer, and explanation. |
| Status Message | Explains that Gemini/API integration is not called in prototype. |

## 3.5 Study Set Learning

### 3.5.1 View Joined Study Sets

Related Use Case: UC-18
Actor: Learner

This screen allows the Learner to:
View Joined Study Sets: view study sets assigned to learner or available through joined classes.
Search Study Sets: enter keyword(s) to filter accessible study sets.
Open Study Set Detail: open selected study set.
Start Flashcards: begin flashcard study mode from study set card.

On the screen, s/he can also:
Review Progress: view progress bar, accuracy, and missed-question count per set.
Open Wrong Answer Review: open review page grouped by selected study set.

Prototype URL:
http://127.0.0.1:5173/learner/study-sets

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Search Study Sets | Data type: text. Initial value: blank. Searches study set title, subject, topic, or class. |
| Study Set Title | Initial values: study sets accessible by learner. |
| Subject / Topic | Initial values: study set metadata inherited from source question bank. |
| Visibility | Initial values: Public, Class Only, Private. Learner sees only accessible sets. |
| Progress Bar | Data type: percentage. Shows learner completion progress for each study set. |
| Mistakes Badge | Data type: non-negative integer. Shows wrong-answer count for selected study set. |
| Detail | Button. Opens Study Set Detail screen. |
| Flashcards | Button. Opens Flashcard Study screen. |
| Review | Button. Opens Review Wrong Answers screen for selected set. |

### 3.5.2 Study Set Detail

Related Use Case: UC-18, UC-19
Actor: Learner

This screen allows the Learner to:
View Study Set Detail: view description, subject, topic, source, question preview, and progress.
Start Flashcard Study: open flashcard mode.
Take Study Set Quiz: start practice quiz from current study set.
Review Wrong Answers: open wrong-answer review for current study set.

On the screen, s/he can also:
Inspect Question Preview: scan questions before choosing study mode.
View Due / Accuracy Information: see assigned due date and current learning accuracy if available.

Prototype URL:
http://127.0.0.1:5173/learner/study-sets/set-bio-cell

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Study Set Title | Initial value: selected study set title. |
| Description | Data type: text. Shows study set description. |
| Subject | Initial value: inherited subject from source bank. |
| Topic | Initial value: inherited topic from source bank. |
| Source Question Bank | Initial value: bank used to create study set. |
| Question Count | Data type: positive integer. Shows number of included questions. |
| Due Date | Data type: date. Displayed when assigned by class. |
| Accuracy | Data type: percentage. Shows learner performance for this study set. |
| Missed Questions | Data type: non-negative integer. Determines review availability. |
| Question Preview Table | Initial values: questions included in study set. |
| Flashcards Button | Button. Opens Flashcard Study screen. |
| Take Quiz Button | Button. Opens Take Study Set Quiz screen. |
| Review Mistakes Button | Button. Opens Review Wrong Answers screen. |

### 3.5.3 Flashcard Study

Related Use Case: UC-05
Actor: Guest, Learner

This screen allows the Guest or Learner to:
Study Flashcards: view one question/answer card at a time.
Flip Flashcard: switch between question face and answer face.
Move Between Cards: navigate to previous or next card.

On the screen, s/he can also:
Track Card Position: view current card number and progress bar.
Return To Study Set: go back to study set detail.

Prototype URL:
http://127.0.0.1:5173/learner/study-sets/set-bio-cell/flashcards

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Study Set Title | Initial value: current study set title. |
| Card Counter | Data type: numeric label. Shows current card index and total card count. |
| Progress Bar | Data type: percentage. Shows card navigation progress. |
| Flashcard Face | Initial values: Question or Answer. Click card to flip. |
| Flashcard Content | Displays current question or answer text. |
| Previous | Button. Disabled on first card. Moves to previous card. |
| Next | Button. Disabled on last card or loops depending on final rule. |
| Guest Progress Notice | Displayed for guest public preview; progress is not saved. |

### 3.5.4 Take Study Set Quiz

Related Use Case: UC-19
Actor: Learner

This screen allows the Learner to:
Take Study Set Quiz: answer questions generated from selected study set.
Select Answer: choose multiple choice or true/false option.
Enter Written Answer: type answer for written-answer question.
Submit Quiz: complete quiz and view score feedback.

On the screen, s/he can also:
View Per-Question Feedback: see correct/incorrect state after answer submission.
Open Quiz Result: go to Quiz Result screen after completion.

Prototype URL:
http://127.0.0.1:5173/learner/study-sets/set-bio-cell/quiz

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Quiz Title | Initial value: selected study set quiz title. |
| Question Number | Data type: numeric label. Shows current question position. |
| Question Type | Initial values: Multiple Choice, True/False, Written Answer. |
| Question Content | Initial value: current question stem. |
| Answer Options | Initial values: available options for objective questions. |
| Written Answer | Data type: text. Displayed for written-answer questions. |
| Feedback Message | Displays correct or incorrect feedback after answer selection/submission. |
| Submit Quiz | Button. Calculates result in prototype. |
| Open Result | Button. Opens Quiz Result screen after submit. |

### 3.5.5 Quiz Result

Related Use Case: UC-19, UC-20
Actor: Learner

This screen allows the Learner to:
View Quiz Result: view score, correct answers, wrong answers, and answer review table.
Open Wrong Answer Review: navigate to review missed questions.
Retry Study: return to study set or flashcards for practice.

On the screen, s/he can also:
Identify Question Status: see correct/incorrect status per row.
View Review Recommendation: see recommendation when mistakes exist.

Prototype URL:
http://127.0.0.1:5173/learner/study-sets/set-bio-cell/result

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Score | Data type: percentage or points. Shows quiz score. |
| Correct Answers | Data type: non-negative integer. Shows count of correct answers. |
| Wrong Answers | Data type: non-negative integer. Shows count of incorrect answers. |
| Result Table | Initial values: submitted answers and correct status. |
| Status Pill | Initial values: Correct, Incorrect. |
| Review Wrong Answers | Button. Opens Review Wrong Answers screen when wrong answers exist. |
| Message | Displays review recommendation or no-mistake message. |

### 3.5.6 Review Wrong Answers

Related Use Case: UC-20, UC-21
Actor: Learner

This screen allows the Learner to:
Review Wrong Answers: view missed questions grouped by selected study set.
Compare Answers: view learner answer against correct answer.
Request AI Answer Explanation: request extra explanation for difficult question.

On the screen, s/he can also:
View Study Set Context: confirm selected study set, subject, and missed-question count.
See Premium Requirement: non-premium learner sees upgrade-required message for AI explanation.
Return To Study Set: go back to study set detail.

Prototype URL:
http://127.0.0.1:5173/learner/study-sets/set-bio-cell/review

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Study Set | Initial value: selected study set title. |
| Subject | Initial value: study set subject. |
| Missed Questions | Data type: non-negative integer. Shows number of wrong answers in this set. |
| Review Mode | Initial values: Wrong Answers, All Questions if supported. |
| Question Content | Initial values: missed question stems. |
| Your Answer | Initial value: answer submitted by learner. |
| Correct Answer | Initial value: correct answer from question bank. |
| Explanation | Initial value: teacher-provided explanation or generated explanation placeholder. |
| Request AI Answer Explanation | Button. Shows AI explanation or upgrade-required message. |
| System Message | Displays upgrade-required or AI explanation mock message. |

### 3.5.7 Teacher Study Set Management

Related Use Case: UC-44, UC-45
Actor: Teacher

This screen allows the Teacher to:
View Study Sets: manage study sets created from question banks.
Search Study Sets: filter by title, subject, topic, or source bank.
Create Study Set: open study set creation form.
Assign Study Set: send selected study set to a class.

On the screen, s/he can also:
Filter By Visibility: view public, class-only, or private study sets.
Preview Study Set: inspect study set before assigning.
View Assignment Usage: see class and learner counts for each study set.

Prototype URL:
http://127.0.0.1:5173/teacher/study-sets

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Search Study Sets | Data type: text. Initial value: blank. Searches title, source bank, subject, or topic. |
| Visibility Filter | Initial values: All, Public, Class Only, Private. |
| Study Set Title | Initial values: teacher-created study set titles. |
| Source Question Bank | Initial value: question bank used to create study set. Required relationship. |
| Visibility | Initial values: Private, Class Only, Public. |
| Questions | Data type: positive integer. Shows number of selected questions. |
| Assigned Classes | Data type: non-negative integer. Shows number of classes using study set. |
| Learners | Data type: non-negative integer. Shows assigned learner count. |
| Create Study Set | Button. Opens Create Study Set screen. |
| Preview | Button. Opens public or teacher preview route when available. |
| Assign | Button. Opens Assign Study Set To Class screen. |

### 3.5.8 Create Study Set

Related Use Case: UC-44
Actor: Teacher

This screen allows the Teacher to:
Create Study Set: create a study set from one selected question bank.
Select Source Question Bank: choose bank whose subject, topic, and questions become study set source.
Select Questions: choose which bank questions are included in study set.
Configure Study Set Visibility: set public, private, or class-only access.

On the screen, s/he can also:
Review Inherited Metadata: view subject and topic from selected question bank.
View Creation Result: see local confirmation after creating study set.

Prototype URL:
http://127.0.0.1:5173/teacher/study-sets/create

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Study Set Title | Data type: non-empty string. Required. |
| Source Question Bank | Initial values: teacher-accessible question banks. Required. Determines question pool. |
| Inherited Subject | Initial value: subject of selected question bank. Read-only. |
| Inherited Topic | Initial value: topic of selected question bank. Read-only. |
| Visibility | Initial values: Private, Class Only, Public. Default value should be Private. |
| Estimated Study Time | Data type: positive integer minutes. Optional. |
| Description | Data type: text. Optional. Describes study set purpose. |
| Select Questions | Checkbox list. Initial values: questions from selected source bank only. |
| Question Metadata | Shows type, difficulty, and score for each selectable question. |
| Create Study Set | Button. Creates study set from selected bank and questions. |
| Status Message | Displays study-set-created confirmation. |

## 3.6 Exam Session

### 3.6.1 View Available Exams

Related Use Case: UC-23
Actor: Learner

This screen allows the Learner to:
View Available Exams: view exams assigned through joined classes.
Search Exams: find exam by name, class, subject, or status.
Open Exam Information: view rules and settings before starting exam.

On the screen, s/he can also:
View Exam Status: identify upcoming, open, submitted, or closed exams.
Handle No Exam State: see empty state when there are no available exams.

Prototype URL:
http://127.0.0.1:5173/learner/exams

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Search Exams | Data type: text. Initial value: blank. Searches exam title, class, or status. |
| Exam Title | Initial values: exams assigned to joined classes. |
| Class | Initial value: class associated with exam. |
| Start Time | Data type: date/time. Shows scheduled exam start. |
| Status | Initial values: Upcoming, Open, Submitted, Closed. |
| Info | Button. Opens View Exam Information screen. |

### 3.6.2 View Exam Information

Related Use Case: UC-24
Actor: Learner

This screen allows the Learner to:
View Exam Information: review exam title, class, time, duration, attempts, and result policy.
Start Exam: open Take Exam screen when exam is available.

On the screen, s/he can also:
Read Exam Rules: review randomization, attempt limit, result visibility, and duration.
Return To Exam List: go back to available exams.

Prototype URL:
http://127.0.0.1:5173/learner/exams/exam-bio-midterm/info

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Exam Title | Initial value: selected exam title. |
| Class | Initial value: class assigned to exam. |
| Start Time | Data type: date/time. Shows scheduled start. |
| Duration | Data type: positive integer minutes. Required for exam taking. |
| Attempts Allowed | Data type: positive integer. Shows maximum attempts allowed. |
| Result Visibility | Initial values: Immediate, After End, Hidden Until Teacher Release. |
| Randomization | Initial values: Questions Randomized, Answers Randomized, None. |
| Start Exam | Button. Opens Take Exam screen when exam rules allow. |
| Status Message | Displays availability or restriction message when exam cannot be started. |

### 3.6.3 Take Exam

Related Use Case: UC-25
Actor: Learner

This screen allows the Learner to:
Take Exam: answer exam questions in a timed session.
Select Answers: choose answers for multiple choice or true/false questions.
Submit Exam: open final confirmation and submit attempt.

On the screen, s/he can also:
View Timer: monitor remaining exam time.
View Auto-Save Status: see whether answer changes have been saved.
Confirm Final Submission: confirm modal before attempt is finalized.

Prototype URL:
http://127.0.0.1:5173/learner/exams/exam-bio-midterm/take

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Exam Title | Initial value: selected exam title. |
| Timer | Data type: countdown. Shows remaining time. Production should auto-submit when time expires. |
| Auto-Save Status | Initial values: Saved, Saving, Offline, Error. Prototype uses static/local state. |
| Attempt Badge | Shows current attempt number and allowed attempts. |
| Candidate | Initial value: current learner name. |
| Exam Code | Initial value: exam session code if configured. |
| Result Rule | Initial value: result visibility setting. |
| Network Status | Initial value: online/offline indicator. |
| Question Cards | Initial values: exam questions from configured question source. |
| Answer Option | Input selection. Required for objective questions. |
| Submit Exam | Button. Opens confirmation modal. |
| Confirmation Modal | Contains Cancel and Confirm Submit actions. |

### 3.6.4 View Exam Result

Related Use Case: UC-26
Actor: Learner

This screen allows the Learner to:
View Exam Result: view score, accuracy, status, and answer summary when teacher allows.
Review Attempt Table: inspect submitted answer rows when detailed results are visible.

On the screen, s/he can also:
View Hidden Result State: see message when teacher has not released results.
Return To Exams: navigate back to available exams.

Prototype URL:
http://127.0.0.1:5173/learner/exams/exam-bio-midterm/result

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Score | Data type: percentage or points. Display depends on result visibility setting. |
| Accuracy | Data type: percentage. Shows correct-answer ratio. |
| Attempt Status | Initial values: Submitted, Passed, Failed, Pending Review. |
| Result Table | Shows question, learner answer, correct answer, and status if visible. |
| Attempt Timestamp | Data type: date/time. Shows submission time. |
| Status Message | Explains result availability. |

### 3.6.5 Teacher Exam Sessions

Related Use Case: UC-46, UC-48
Actor: Teacher

This screen allows the Teacher to:
View Exam Sessions: view created or assigned exam sessions.
Search Exam Sessions: filter exams by title, class, status, or start time.
Create Exam Session: open Create Exam Session screen.
Open Exam Actions: configure, view information, monitor, or export report for an exam.

On the screen, s/he can also:
View Exam Status: identify draft, scheduled, open, closed, or completed exam sessions.
Handle No Result State: see empty state when no exam matches search.

Prototype URL:
http://127.0.0.1:5173/teacher/exams

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Search Exam Sessions | Data type: text. Initial value: blank. Searches exam title, class, or status. |
| Exam Title | Initial values: teacher exam sessions. |
| Class | Initial value: assigned class. |
| Start Time | Data type: date/time. Shows scheduled start. |
| Status | Initial values: Draft, Scheduled, Open, Closed, Completed. |
| Create Exam Session | Button. Opens Create Exam Session screen. |
| Configure | Button. Opens Configure Exam Settings screen. |
| Info | Button. Opens View Exam Information As Teacher screen. |
| Monitor | Button. Opens Monitor Exam Session screen. |

### 3.6.6 Create Exam Session

Related Use Case: UC-46
Actor: Teacher

This screen allows the Teacher to:
Create Exam Session: define a new official exam for a class.
Select Exam Source: choose question bank or study set source for exam questions.
Configure Core Settings: set time, duration, attempts, passing score, auto-submit, visibility, and randomization.

On the screen, s/he can also:
Save Draft Exam: create session before publishing.
View Creation Result: see confirmation and next step to configure settings.

Prototype URL:
http://127.0.0.1:5173/teacher/exams/create

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Exam Title | Data type: non-empty string. Required. |
| Class | Initial values: teacher-created classes. Required. |
| Question Source | Initial values: teacher-accessible question banks or study sets. Required. |
| Status | Initial values: Draft, Scheduled, Published. Default value: Draft. |
| Start Time | Data type: date/time. Required before publishing. |
| Duration Minutes | Data type: positive integer. Required. |
| Allowed Attempts | Data type: positive integer. Required. |
| Passing Score | Data type: percentage or points. Optional depending on exam type. |
| Late Join Grace Period | Data type: non-negative integer minutes. |
| Auto-submit Before End | Boolean. When enabled, system submits at end time. |
| Result Visibility | Initial values: Immediate, After End, Hidden Until Teacher Release. |
| Review Permission | Initial values: Allow Review, Score Only, No Review. |
| Randomize Questions | Boolean. Defines question order randomization. |
| Randomize Answers | Boolean. Defines answer option randomization. |
| Enable Auto-save | Boolean. Enables periodic answer save in production. |
| Create Exam Session | Button. Saves new exam session. |
| Status Message | Displays exam-session-created confirmation. |

### 3.6.7 Configure Exam Settings

Related Use Case: UC-47
Actor: Teacher

This screen allows the Teacher to:
Configure Exam Settings: update timing, attempts, scoring, result visibility, and randomization.
Save Exam Settings: persist exam configuration.

On the screen, s/he can also:
Review Current Exam Context: confirm class and question source before saving.
View Save Result: see local confirmation after settings are updated.

Prototype URL:
http://127.0.0.1:5173/teacher/exams/exam-bio-midterm/configure

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Exam Title | Data type: non-empty string. Required. Initial value: current exam title. |
| Class | Initial value: assigned class. Required. |
| Question Source | Initial value: selected question bank or study set. Required. |
| Status | Initial values: Draft, Scheduled, Open, Closed. |
| Start Time | Data type: date/time. Required. |
| Duration | Data type: positive integer minutes. Required. |
| Attempts | Data type: positive integer. Required. |
| Passing Score | Data type: percentage or points. |
| Grace Period | Data type: non-negative integer minutes. |
| Auto-submit | Boolean. Submits unfinished attempts when time expires. |
| Result Visibility | Initial values: Immediate, After End, Hidden Until Teacher Release. |
| Review Permission | Initial values: Allow Review, Score Only, No Review. |
| Randomize Questions | Boolean. |
| Randomize Answers | Boolean. |
| Auto-save | Boolean. Enables periodic answer save. |
| Save Exam Settings | Button. Saves changes. |
| Status Message | Displays settings-saved confirmation. |

### 3.6.8 View Exam Information As Teacher

Related Use Case: UC-48
Actor: Teacher

This screen allows the Teacher to:
View Exam Information: inspect configured exam details.
Configure Exam: navigate to configuration screen.
Monitor Exam: open live monitoring screen.
Export Report: open report export screen for selected exam.

On the screen, s/he can also:
Review Access Rules: check duration, attempts, randomization, and result visibility.
Confirm Exam Status: verify whether exam is draft, scheduled, open, or closed.

Prototype URL:
http://127.0.0.1:5173/teacher/exams/exam-bio-midterm/info

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Exam Title | Initial value: selected exam title. |
| Class | Initial value: assigned class. |
| Question Bank / Source | Initial value: source used for exam questions. |
| Start Time | Data type: date/time. |
| Duration | Data type: positive integer minutes. |
| Attempts | Data type: positive integer. |
| Randomization | Shows question and answer randomization settings. |
| Result Visibility | Shows result release rule. |
| Status | Initial values: Draft, Scheduled, Open, Closed, Completed. |
| Configure | Button. Opens Configure Exam Settings screen. |
| Monitor | Button. Opens Monitor Exam Session screen. |
| Export Report | Button. Opens Export Exam Report screen. |

### 3.6.9 Monitor Exam Session

Related Use Case: Exam Monitoring
Actor: Teacher

This screen allows the Teacher to:
Monitor Exam Session: view live or latest learner attempt statuses for selected exam.
Review Submission Progress: see submitted, in-progress, and not-started counts.
Inspect Learner Attempt Row: view status, score, accuracy, and last activity per learner.

On the screen, s/he can also:
Identify Auto-Save Activity: view latest save status for each attempt.
Open Report Flow: use exam data later in analytics and export report screens.

Prototype URL:
http://127.0.0.1:5173/teacher/exams/exam-bio-midterm/monitor

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Exam Status Metric | Initial value: open, closed, or completed session status. |
| Submitted Metric | Data type: non-negative integer. Shows submitted attempt count. |
| In Progress Metric | Data type: non-negative integer. Shows current active attempts. |
| Duration Metric | Data type: positive integer minutes. Shows exam duration. |
| Learner | Initial values: learners assigned to exam. |
| Attempt Status | Initial values: Not Started, In Progress, Submitted, Auto-submitted. |
| Score / Accuracy | Data type: number or percentage. Shows available performance value. |
| Last Activity | Data type: date/time. Shows latest answer save or submission time. |
| System Message | Shows auto-save or monitoring status message. |

## 3.7 Analytics & Reporting

### 3.7.1 View Personal Learning Progress

Related Use Case: UC-22
Actor: Learner

This screen allows the Learner to:
View Personal Learning Progress: view practiced questions, accuracy, repeated mistakes, and weak topics.
Review Recommended Actions: see study recommendations based on weak topics.

On the screen, s/he can also:
Identify Weak Topic: compare topics by accuracy or mistake count.
Open Related Study Set: use recommendation to continue studying if action link is available.

Prototype URL:
http://127.0.0.1:5173/learner/progress

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Practiced Questions | Data type: non-negative integer. Shows total practiced questions. |
| Accuracy Rate | Data type: percentage. Shows overall correct-answer rate. |
| Repeated Mistakes | Data type: non-negative integer. Shows questions missed more than once. |
| Weak Topics | Data type: non-negative integer or topic list count. |
| Weak Topic Table | Initial values: topic name, accuracy, mistakes, and recommendation. |
| Recommended Action | Data type: text or link. Suggests flashcards, quiz, or review action. |

### 3.7.2 View Exam Analytics

Related Use Case: UC-49
Actor: Teacher

This screen allows the Teacher to:
View Exam Analytics: review performance after each exam session.
Compare Exam Metrics: view class, exam title, status, average score, accuracy, and submission count.
Open Export Report: navigate to exam-based report export.

On the screen, s/he can also:
Identify Weak Topics: view topics with low performance for selected exam.
Review Submission Coverage: compare submitted and total learner counts.

Prototype URL:
http://127.0.0.1:5173/teacher/analytics

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Exam Analytics Cards | Initial values: one card per exam. Analytics are grouped by exam, not by class only. |
| Exam Title | Initial value: exam session title. |
| Class Name | Initial value: class assigned to exam. |
| Exam Status | Initial values: Draft, Scheduled, Open, Closed, Completed. |
| Average Score | Data type: percentage or points. Calculated from submitted attempts. |
| Accuracy | Data type: percentage. Shows correct-answer rate for exam. |
| Submission Count | Data type: submitted count / total learners. |
| Weak Topic | Initial values: low-performing topics for selected exam. |
| Export Exam Report | Button. Opens Export Exam Report screen. |

### 3.7.3 Export Exam Report

Related Use Case: UC-50
Actor: Teacher

This screen allows the Teacher to:
Export Exam Report: export report for one selected exam session.
Select Report Type: choose summary, learner detail, or question analysis report.
Select Export Format: choose CSV, XLSX, or PDF output format.

On the screen, s/he can also:
Preview Exam Summary: view selected exam statistics before export.
Review Learner Attempts: inspect learner rows included in report.
View Export Result: see generated-report status message.

Prototype URL:
http://127.0.0.1:5173/teacher/reports/export

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Exam | Initial values: teacher-owned or assigned exam sessions. Required. Report is grouped by selected exam. |
| Report Type | Initial values: Summary, Learner Detail, Question Analysis. |
| Format | Initial values: CSV, XLSX, PDF. |
| Generated From | Initial value: selected exam source. |
| Generated At | Data type: date/time. Shows report generation timestamp. |
| Export Exam Report | Button. Triggers report generation/download in production. |
| Exam Summary | Shows exam title, class, average score, accuracy, and submission counts. |
| Class Summary | Shows class name and learner totals for selected exam only. |
| Weak Topic | Initial value: weakest topic in selected exam. |
| Report Status | Initial values: Ready, No Attempts, Exported. |
| Learner Attempt Table | Initial values: learner name, submitted at, score, accuracy, and status. |
| System Message | Displays export-ready or no-attempts message. |

## 3.8 Payment & Subscription

### 3.8.1 View Premium Plans

Related Use Case: UC-06
Actor: Guest, Learner, Teacher

This screen allows the Guest, Learner, or Teacher to:
View Premium Plans: view premium plans available to current role.
Select Plan: choose plan appropriate to actor type.
Login To Upgrade: guest must login or register before purchasing.

On the screen, s/he can also:
Compare Benefits: view benefits and price per role-specific plan.
Avoid Wrong-Role Purchase: learner does not see teacher-only purchase action and teacher does not see learner-only purchase action.

Prototype URL:
http://127.0.0.1:5173/premium

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Plan Card | Initial values: plans filtered by current actor role. |
| Audience Badge | Initial values: Learner, Teacher, or General. Controls who can select plan. |
| Plan Name | Initial value: premium plan name. |
| Price | Data type: currency. Shows amount per billing interval. |
| Billing Interval | Initial values: Monthly, Yearly, or One-time if configured. |
| Benefits List | Initial values: features included in plan. |
| Select Plan | Button. Opens Upgrade To Premium screen for authenticated learner or teacher. |
| Login To Select | Button. Opens Login with Account screen for guest. |
| Status Message | Displays role restriction or login requirement if needed. |

### 3.8.2 Upgrade To Premium

Related Use Case: UC-15
Actor: Learner, Teacher

This screen allows the Learner or Teacher to:
Upgrade To Premium: choose role-appropriate plan and payment method.
Enter Billing Information: provide billing email and optional promotion code.
Proceed To Payment: start payment flow.

On the screen, s/he can also:
Review Payment Summary: view selected plan, role, amount, and pending status.
Change Plan: select another plan allowed for current role.

Prototype URL:
http://127.0.0.1:5173/premium/upgrade

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Account | Initial value: current logged-in user. Read-only. |
| Account Type | Initial value: Learner or Teacher. Determines available plans. |
| Selected Plan | Initial values: premium plans available to current role only. Required. |
| Payment Method | Initial values: Credit Card, Bank Transfer, E-wallet, Mock Gateway. Required. |
| Billing Email | Data type: email. Required for invoice and payment receipt. |
| Promotion Code | Data type: string. Optional. Must be validated in production. |
| Payment Summary | Shows plan name, role, price, tax/discount if available, and total. |
| Proceed To Payment | Button. Opens Payment Result screen in prototype. |
| Status | Initial value: Waiting for confirmation. |

### 3.8.3 Payment Result

Related Use Case: UC-15
Actor: Learner, Teacher

This screen allows the Learner or Teacher to:
View Payment Result: view payment success or failure state.
Confirm Premium Activation: see selected plan and activation message.
Return To Workspace: go back to role dashboard after payment.

On the screen, s/he can also:
View Transaction Details: inspect transaction id, plan, amount, and paid time.
Retry Payment: use retry action if production payment fails.

Prototype URL:
http://127.0.0.1:5173/premium/payment-result

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Result Status | Initial value: Payment Successful in prototype. Production also supports Failed or Pending. |
| Activation Message | Shows whether premium access has been activated. |
| Transaction ID | Data type: string. Unique payment transaction identifier. |
| Plan | Initial value: selected premium plan. |
| Amount | Data type: currency. Shows amount paid. |
| Paid At | Data type: date/time. Shows payment completion time. |
| Return To Dashboard | Button. Opens current role dashboard. |
| Retry Payment | Button. Used when status is Failed in production. |

## 3.9 System Admin

### 3.9.1 Admin Dashboard

Related Use Case: UC-51, UC-53, UC-54
Actor: Administrator

This screen allows the Administrator to:
View Admin Dashboard: view platform-level overview of users, resources, and services.
Open User Management: navigate to user list.
Open Resource Management: navigate to public learning resource moderation.
Open System Status: navigate to service monitoring screen.

On the screen, s/he can also:
Review Alert Summary: identify degraded service or moderation issues.
Use Admin Navigation: access only admin management features.

Prototype URL:
http://127.0.0.1:5173/admin/dashboard

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Users Metric | Data type: non-negative integer. Shows total user accounts. |
| Public Resources Metric | Data type: non-negative integer. Shows public resources under management. |
| Services Metric | Data type: non-negative integer. Shows monitored service count. |
| Alerts Metric | Data type: non-negative integer. Shows active warnings. |
| Service Table | Initial values: system services and current health state. |
| Status Pill | Initial values: Operational, Degraded, Down. |
| Admin Sidebar | Role-specific navigation. Learner and teacher features are not exposed as active workspace. |

### 3.9.2 View User List

Related Use Case: UC-51
Actor: Administrator

This screen allows the Administrator to:
View User List: view system users across roles.
Search Users: enter keyword(s) to find user by name, email, username, or role.
Open User Detail: inspect and update selected user account.

On the screen, s/he can also:
View Role And Premium Status: compare account type and subscription state.
View Account Status: identify active, inactive, or suspended users.

Prototype URL:
http://127.0.0.1:5173/admin/users

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Search Users | Data type: text. Initial value: blank. Searches name, email, username, or role. |
| User | Initial values: system user display names. |
| Email | Initial values: user email addresses. |
| Role | Initial values: Learner, Teacher, Administrator. |
| Premium | Initial values: Premium, Standard. |
| Status | Initial values: Active, Inactive, Suspended. |
| Detail | Button. Opens User Detail And Role Update screen. |

### 3.9.3 User Detail And Role Update

Related Use Case: UC-52
Actor: Administrator

This screen allows the Administrator to:
View User Detail: view profile, subscription, activity, and account status of selected user.
Update User Role: change role or permission scope.
Update Account Status: change user active/suspended status.

On the screen, s/he can also:
Record Role Change Reason: enter audit reason before saving role update.
Set Effective Date: define when role/status change becomes effective.
View Update Result: see local confirmation after role update.

Prototype URL:
http://127.0.0.1:5173/admin/users/u-learner-1

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Full Name | Initial value: selected user's full name. Read-only profile summary. |
| Email | Initial value: selected user's email address. |
| Phone | Initial value: selected user's phone number. |
| Premium | Initial value: Premium or Standard. |
| Status | Initial value: current account status. |
| Joined At | Data type: date. Shows account creation date. |
| Last Active | Data type: date/time. Shows latest login/activity. |
| User Role | Initial values: Learner, Teacher, Administrator. Required when updating role. |
| Account Status | Initial values: Active, Inactive, Suspended. |
| Permission Scope | Initial values: Default, Limited, Full Access. |
| Role Change Reason | Data type: text. Required in production for audit log. |
| Effective Date | Data type: date. Defines when role/status change takes effect. |
| Update User Role | Button. Saves role/status change in production. |
| Status Message | Displays role-changed confirmation in prototype. |

### 3.9.4 Resource Management

Related Use Case: UC-53
Actor: Administrator

This screen allows the Administrator to:
View Learning Resources: view public study sets, question banks, or other public content.
Filter Resources: filter by resource type, review status, or keyword.
Hide Public Learning Resource: hide selected public resource from discovery.

On the screen, s/he can also:
Review Resource Owner: identify creator of public resource.
Enter Review Note: add reason for hiding or moderation decision.
View Visibility Result: see resource status change.

Prototype URL:
http://127.0.0.1:5173/admin/resources

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Resource Type | Initial values: All, Study Set, Question Bank, User Content. |
| Review Status | Initial values: All, Public, Hidden, Flagged, Under Review. |
| Keyword | Data type: text. Initial value: blank. Searches resource title, owner, subject, or topic. |
| Resource | Initial values: public resource titles. |
| Owner | Initial value: creator display name. |
| Subject | Initial value: resource subject. |
| Visibility Status | Initial values: Public, Hidden, Flagged. |
| Review Note | Data type: text. Optional in prototype; should be required when hiding in production. |
| Hide Public Learning Resource | Button. Changes resource visibility from public to hidden. |
| Status Message | Displays visibility change confirmation. |

### 3.9.5 View System Status

Related Use Case: UC-54
Actor: Administrator

This screen allows the Administrator to:
View System Status: monitor platform service health.
Review Service Metrics: view uptime, response time, and last checked timestamp.
Identify Service Warning: detect degraded services requiring follow-up.

On the screen, s/he can also:
Read System Message: view alert explanation for degraded service.
Refresh Status: refresh service state if production provides action.

Prototype URL:
http://127.0.0.1:5173/admin/system-status

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Service | Initial values: Auth Service, Database, AI Service, Payment Gateway, Email Service, Storage. |
| Status | Initial values: Operational, Degraded, Down. |
| Uptime | Data type: percentage. Shows service availability. |
| Response Time | Data type: milliseconds. Shows current response performance. |
| Last Checked | Data type: date/time. Shows last health-check time. |
| System Message | Displays warning or operational note. |
| Refresh | Button. Optional production action to request latest health check. |

### 3.9.6 Access Denied

Related Use Case: Authorization
Actor: Guest, Learner, Teacher, Administrator

This screen allows the user to:
View Access Denied Message: understand current role cannot access requested route.
Return To Allowed Dashboard: navigate back to home or role dashboard.

On the screen, s/he can also:
Login With Different Account: go to login if current account is wrong.
Avoid Cross-Role Navigation: remain within authorized role-specific interface.

Prototype URL:
http://127.0.0.1:5173/access-denied

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Access Denied Title | Static text. States that access is denied. |
| Description | Static text. Explains current role is not authorized for requested page. |
| Return To My Dashboard | Button. Sends user to allowed dashboard or Guest home. |
| Login Link | Optional link. Opens Login with Account screen. |

### 3.9.7 Not Found

Related Use Case: Utility
Actor: Guest, Learner, Teacher, Administrator

This screen allows the user to:
View Not Found Message: understand requested route does not exist.
Return Home: navigate back to Home Page or role dashboard.

On the screen, s/he can also:
Recover From Broken Link: use navigation instead of staying on invalid route.

Prototype URL:
http://127.0.0.1:5173/not-found

Field Description

| Field Name | Description |
| ---------- | ----------- |
| Not Found Title | Static text. States that requested page cannot be found. |
| Description | Static text. Explains route is unavailable or removed. |
| Go Home | Button. Opens Home Page or current role dashboard. |
| Support Message | Optional static text. Can guide user to search or dashboard. |

## Prototype Integration Notes

| Area | Prototype Behavior | Production Requirement |
| ---- | ------------------ | ---------------------- |
| Authentication | Local browser state and demo credentials only. | Backend authentication, secure session, password hashing, OAuth callback handling. |
| Authorization | React route guards by role. | Backend permission checks for every protected action. |
| Google Login | Visual/provider-unavailable action only. | Real OAuth flow and error handling. |
| Payment | Upgrade flow routes to success screen. | Payment gateway callback verification before premium activation. |
| AI Features | Static generated content and explanation messages. | Gemini/API integration, quota, moderation, and role/premium checks. |
| Email | Reset link and invitation sending are local status messages. | Email service integration and delivery tracking. |
| Import Validation | Static valid/error preview. | Real Excel parsing, row validation, duplicate handling, and persistence. |
| Exam Session | Timer and auto-save are prototype UI states. | Real timer, answer persistence, auto-submit, final submit lock, and recovery flow. |
| Report Export | Export action shows local success message. | Generate downloadable CSV/XLSX/PDF by selected exam. |
| CRUD Actions | Create/update/delete/hide actions are local mock states. | Database persistence, audit logs, refresh, and conflict/error handling. |
