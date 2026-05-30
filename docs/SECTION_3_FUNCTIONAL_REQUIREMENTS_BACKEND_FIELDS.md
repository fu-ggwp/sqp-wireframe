# 3. Functional Requirements - Smart Quiz Platform Backend-Field Version

This file is a rewritten Section 3 draft using the agreed field definition: a field is any value that the backend receives, returns, validates, stores, derives, or uses in an action payload. UI-only components such as buttons, cards, tabs, sidebars, icons, badges, modal containers, and empty-state blocks are not listed as fields. When a button triggers backend work, the payload or route/query fields used by that action are listed instead.

For screenshots, open each Prototype URL manually and capture the screen. Protected routes require a demo account from `docs/DEMO_ACCOUNTS.md`.

Common list fields used by pageable list screens: `page`, `pageSize`, `sortBy`, `sortOrder`, `totalItems`, `totalPages`.

## 3.1 Public Access & Discovery

### 3.1.1 Home Page

Related Use Case: UC-01
Actor: Guest, Learner, Teacher, Administrator

This screen allows the Guest to:
View Home Page: view public discovery data returned by backend.
Search Public Study Sets: enter keyword(s) and submit a public search query.
Open Public Study Set: send selected `studySetId` to load public study set detail.
Register / Login: navigate to account screens; no backend mutation occurs until form submission.

On the screen, s/he can also:
Browse Subject Areas: send selected `subjectId` or `subjectSlug` to discovery route.
Access Role Dashboard: backend/session state determines destination for authenticated users.

Prototype URL:
http://127.0.0.1:5173/

Field Description

| Field Name | Description |
| ---------- | ----------- |
| currentUserId | Session field. Null for guest; used to decide dashboard destination when authenticated. |
| currentRole | Session field. Values: guest, learner, teacher, admin. Determines role-specific navigation. |
| keyword | Query field. Data type: string. Used when guest searches public study sets. |
| subjectId | Query/action payload field. Optional. Used when user browses a subject category. |
| subjectName | Response field. Public subject name displayed in discovery area. |
| studySetId | Response/action payload field. Required to open public study set detail. |
| studySetTitle | Response field. Public study set title. |
| ownerId | Response field. ID of user who owns public study set. |
| ownerDisplayName | Response field. Public display name of study set owner. |
| questionCount | Response field. Data type: non-negative integer. Shows size of public study set. |
| visibility | Response field. Only records with value Public should be returned to guests. |

### 3.1.2 Search Public Study Sets

Related Use Case: UC-02
Actor: Guest, Learner

This screen allows the Guest or Learner to:
Search Public Study Sets: submit keyword, subject, paging, and sorting fields to backend.
Filter Public Study Sets: filter the result by subject, topic, tag, or visibility rule.
Open Public Study Set Detail: send `studySetId` to load detail route.

On the screen, s/he can also:
Handle No Result State: backend returns `totalItems = 0` when no public set matches filters.

Prototype URL:
http://127.0.0.1:5173/search/study-sets

Field Description

| Field Name | Description |
| ---------- | ----------- |
| keyword | Query field. Data type: string. Searches title, description, subject, topic, and tag. |
| subjectId | Query field. Optional. Filters result by selected subject. |
| topicId | Query field. Optional. Filters result by selected topic. |
| tag | Query field. Optional. Filters result by public tag. |
| visibility | Query/response field. Backend must restrict guest results to Public. |
| page | Query field. Data type: positive integer. Current result page. |
| pageSize | Query field. Data type: positive integer. Number of records per page. |
| sortBy | Query field. Values may include title, updatedAt, questionCount, popularity. |
| sortOrder | Query field. Values: asc, desc. |
| totalItems | Response field. Total public study sets matching query. |
| studySetId | Response/action payload field. Required when user opens a result. |
| studySetTitle | Response field. Study set title. |
| ownerDisplayName | Response field. Public owner name. |
| questionCount | Response field. Data type: non-negative integer. |

### 3.1.3 Search Public User Accounts

Related Use Case: UC-03
Actor: Guest, Learner, Teacher

This screen allows the Guest, Learner, or Teacher to:
Search Public User Accounts: submit keyword and role filters to backend.
Filter Public User Accounts: filter public accounts by role.
View Account Summary: view public profile fields returned by backend.

On the screen, s/he can also:
Open Public Profile Row: send `userId` if profile detail route exists in production.

Prototype URL:
http://127.0.0.1:5173/search/users

Field Description

| Field Name | Description |
| ---------- | ----------- |
| keyword | Query field. Data type: string. Searches public name, username, or allowed email alias. |
| role | Query/response field. Values: learner, teacher. Admin should not be returned publicly. |
| page | Query field. Current page number. |
| pageSize | Query field. Number of users per page. |
| sortBy | Query field. Values may include displayName, role, lastActiveAt. |
| sortOrder | Query field. Values: asc, desc. |
| totalItems | Response field. Total matched public users. |
| userId | Response/action payload field. Unique public user ID. |
| displayName | Response field. Public account name. |
| username | Response field. Public username. |
| premiumStatus | Response field. Values: standard, premium. Returned only if public. |
| accountStatus | Response field. Values: active, inactive. |
| lastActiveAt | Response field. Data type: date/time. Returned only if allowed by privacy rule. |

### 3.1.4 Public Study Set Detail

Related Use Case: UC-04, UC-05
Actor: Guest, Learner

This screen allows the Guest or Learner to:
View Public Study Set Detail: backend loads public study set by `studySetId`.
Study Public Flashcards: send `studySetId` to load flashcard items.
Register To Save Progress: navigate to registration; progress fields are not stored for guest.

On the screen, s/he can also:
Preview Questions: backend returns limited preview fields for public study set.

Prototype URL:
http://127.0.0.1:5173/sets/set-bio-cell/public

Field Description

| Field Name | Description |
| ---------- | ----------- |
| studySetId | Route/action payload field. Required. Backend loads selected public study set. |
| currentUserId | Session field. Null for guest; learner ID when authenticated. |
| studySetTitle | Response field. Public title of selected set. |
| description | Response field. Public description. |
| ownerId | Response field. ID of study set owner. |
| ownerDisplayName | Response field. Public owner name. |
| subjectId | Response field. Subject identifier. |
| subjectName | Response field. Subject name. |
| topicId | Response field. Topic identifier. |
| topicName | Response field. Topic name. |
| visibility | Response field. Must be Public for guest access. |
| tags | Response field. Array of public tags. |
| questionPreview | Response field. Array of preview question objects with allowed public fields. |
| questionCount | Response field. Data type: non-negative integer. |

## 3.2 Authentication & Profile

### 3.2.1 Register Account

Related Use Case: UC-07
Actor: Guest

This screen allows the Guest to:
Register Account: submit identity, requested role, and password fields to backend.
Use Google Sign-Up: send OAuth provider and callback token when production integration exists.

On the screen, s/he can also:
View Validation Errors: backend returns field-level validation messages for invalid registration data.

Prototype URL:
http://127.0.0.1:5173/auth/register

Field Description

| Field Name | Description |
| ---------- | ----------- |
| fullName | Request body field. Data type: non-empty string. Required. |
| email | Request body field. Data type: email. Required and unique. |
| phoneNumber | Request body field. Data type: phone string. Optional or required by policy. |
| requestedRole | Request body field. Values: learner, teacher. Admin self-registration is not allowed. |
| password | Request body field. Data type: password. Required and validated by password policy. |
| confirmPassword | Client/request validation field. Must match `password`. |
| provider | Request field for social registration. Value: google when Google sign-up is used. |
| oauthToken | Request field for social registration. Token returned by OAuth provider in production. |
| userId | Response field. Created account ID after successful registration. |
| accountStatus | Response field. Initial value: active or pendingVerification depending on policy. |
| validationErrors | Error response field. Map of invalid field names and messages. |

### 3.2.2 Login With Account

Related Use Case: UC-08, UC-09, UC-11
Actor: Guest, Learner, Teacher, Administrator

This screen allows the Guest to:
Login With Account: submit credential fields to backend.
Login With Google: submit OAuth provider token to backend when configured.
Recover Password: navigate to forgot-password flow.

On the screen, s/he can also:
Be Redirected By Role: backend returns session and role used by frontend router.
Logout Current Account: logout action sends current session token to backend in production.

Prototype URL:
http://127.0.0.1:5173/auth/login

Field Description

| Field Name | Description |
| ---------- | ----------- |
| emailOrUsername | Request body field. Data type: string. Required. Accepts email or username. |
| password | Request body field. Data type: password. Required. |
| provider | Request body field for social login. Value: google when used. |
| oauthToken | Request body field for social login. Token from provider in production. |
| rememberMe | Request body field. Boolean. Optional session-duration preference. |
| sessionToken | Response field. Secure token/session identifier in production. |
| userId | Response/session field. Current authenticated user ID. |
| role | Response/session field. Values: learner, teacher, admin. Used for route authorization. |
| premiumStatus | Response/session field. Values: standard, premium. Used for premium feature access. |
| defaultDashboardRoute | Response field. Route derived from role. |
| loginErrorCode | Error response field. Values may include invalidCredentials, inactiveAccount, lockedAccount. |

### 3.2.3 Forgot Password

Related Use Case: UC-10
Actor: Learner, Teacher, Administrator

This screen allows the user to:
Request Password Reset: submit registered email to backend.
Return To Login: no backend work until login form is submitted.

On the screen, s/he can also:
View Request Status: backend response indicates whether reset request was accepted.

Prototype URL:
http://127.0.0.1:5173/auth/forgot-password

Field Description

| Field Name | Description |
| ---------- | ----------- |
| email | Request body field. Data type: email. Required. Backend looks up account by email. |
| resetRequestId | Response field. ID of reset request created by backend. |
| expiresAt | Response/internal field. Date/time when reset token expires. |
| deliveryChannel | Response field. Values: email, sms if supported. |
| requestStatus | Response field. Values: queued, sent, failed. |
| validationErrors | Error response field. Field-level validation messages. |

### 3.2.4 Reset Password

Related Use Case: UC-10
Actor: Learner, Teacher, Administrator

This screen allows the user to:
Reset Password: submit reset token and new password to backend.
Confirm New Password: backend/client validates matching password fields.

On the screen, s/he can also:
View Reset Result: backend returns success or token/password validation error.

Prototype URL:
http://127.0.0.1:5173/auth/reset-password

Field Description

| Field Name | Description |
| ---------- | ----------- |
| resetToken | Request body field. Data type: string. Required and must be valid/unexpired. |
| newPassword | Request body field. Data type: password. Required. Must satisfy password policy. |
| confirmPassword | Request/client validation field. Must match `newPassword`. |
| userId | Backend-derived field from reset token. Identifies account being updated. |
| passwordPolicyVersion | Backend validation field. Identifies active password rule set. |
| resetStatus | Response field. Values: success, invalidToken, expiredToken, validationFailed. |
| validationErrors | Error response field. Field-level password validation messages. |

### 3.2.5 View Personal Profile

Related Use Case: UC-12, UC-11
Actor: Learner, Teacher, Administrator

This screen allows the user to:
View Personal Profile: backend loads account profile using current `userId`.
Edit Personal Profile: sends `userId` through route/session to edit profile screen.
Logout: backend invalidates current `sessionToken` in production.

On the screen, s/he can also:
View Role Access Summary: backend/session role determines accessible workspace.

Prototype URL:
http://127.0.0.1:5173/profile

Field Description

| Field Name | Description |
| ---------- | ----------- |
| userId | Session/query field. Required. Backend loads current user's profile. |
| fullName | Response field. Current user's full name. |
| username | Response field. Current user's username. |
| email | Response field. Current user's email address. |
| phoneNumber | Response field. Current user's phone number. |
| avatarUrl | Response field. URL or storage key of profile avatar. |
| role | Response/session field. Values: learner, teacher, admin. |
| premiumStatus | Response field. Values: standard, premium. |
| accountStatus | Response field. Values: active, inactive, suspended. |
| joinedAt | Response field. Data type: date/time. |
| lastActiveAt | Response field. Data type: date/time. |
| bio | Response field. Profile description. |
| sessionToken | Action payload field for logout. Backend invalidates this token. |

### 3.2.6 Edit Personal Profile

Related Use Case: UC-13
Actor: Learner, Teacher, Administrator

This screen allows the user to:
Update Personal Profile: submit editable profile fields to backend.
Save Profile Changes: backend validates and persists changes for current `userId`.
Cancel Profile Editing: no backend mutation.

On the screen, s/he can also:
View Save Result: backend returns updated profile or validation errors.

Prototype URL:
http://127.0.0.1:5173/profile/edit

Field Description

| Field Name | Description |
| ---------- | ----------- |
| userId | Session/action payload field. Identifies profile owner. |
| fullName | Request/response field. Data type: non-empty string. |
| phoneNumber | Request/response field. Data type: phone string. |
| avatarUrl | Request/response field. URL or storage key after avatar upload. |
| avatarInitials | Request field. Optional fallback display value. |
| username | Request/response field. Data type: string. Must be unique in production. |
| bio | Request/response field. Data type: text. Max length defined by profile rule. |
| updatedAt | Response field. Date/time when profile was saved. |
| validationErrors | Error response field. Field-level validation messages. |

### 3.2.7 Change Password

Related Use Case: UC-14
Actor: Learner, Teacher, Administrator

This screen allows the user to:
Change Password: submit current password and new password fields to backend.
Submit Password Update: backend verifies current password and stores new password hash.

On the screen, s/he can also:
View Validation Message: backend returns password-policy or mismatch errors.

Prototype URL:
http://127.0.0.1:5173/profile/change-password

Field Description

| Field Name | Description |
| ---------- | ----------- |
| userId | Session field. Current account whose password is changed. |
| currentPassword | Request body field. Required. Backend verifies current password. |
| newPassword | Request body field. Required. Must satisfy password policy. |
| confirmPassword | Request/client validation field. Must match `newPassword`. |
| passwordPolicyVersion | Backend validation field. Identifies active password rule set. |
| passwordChangedAt | Response field. Date/time of successful password change. |
| validationErrors | Error response field. Field-level password validation messages. |

### 3.2.8 Notification Center

Related Use Case: Shared Notification
Actor: Learner, Teacher, Administrator

This screen allows the user to:
View Notifications: backend loads notifications for current `userId` and role.
Mark Notification As Read: send `notificationId` to update read state.

On the screen, s/he can also:
Filter Notifications: backend can filter by status, type, or created date.

Prototype URL:
http://127.0.0.1:5173/notifications

Field Description

| Field Name | Description |
| ---------- | ----------- |
| userId | Session/query field. Required. Backend loads notifications for current user. |
| role | Session/query field. Optional role scope for role notifications. |
| status | Query/response field. Values: read, unread, all. |
| notificationType | Query/response field. Values may include class, exam, payment, system, admin. |
| page | Query field. Current page number. |
| pageSize | Query field. Number of notifications per page. |
| notificationId | Response/action payload field. Required when marking a notification as read. |
| title | Response field. Notification title. |
| message | Response field. Notification message. |
| actorId | Response field. Optional sender/source user ID. |
| createdAt | Response field. Date/time when notification was created. |
| readAt | Response field. Null until notification is marked as read. |

## 3.3 Class Management

### 3.3.1 Learner Dashboard

Related Use Case: UC-16, UC-18, UC-22, UC-23
Actor: Learner

This screen allows the Learner to:
View Learner Dashboard: backend loads personalized class, study set, exam, and progress summaries.
Continue Study: send `studySetId` and optional `lastActivityId` to resume learning.
Open Upcoming Exam: send `examId` to load exam information.
Join Class: navigate to join form; backend mutation occurs on submit.

On the screen, s/he can also:
View Joined Class Summary: backend returns classes joined by current learner.
View Learning Progress: backend returns progress metrics by learner.

Prototype URL:
http://127.0.0.1:5173/learner/dashboard

Field Description

| Field Name | Description |
| ---------- | ----------- |
| learnerId | Session/query field. Required. Backend loads dashboard for current learner. |
| studySetId | Response/action payload field. Required for Continue Study action. |
| studySetTitle | Response field. Active or recent study set title. |
| lastActivityId | Response/action payload field. Optional. Used to resume latest study activity. |
| progressPercent | Response field. Data type: percentage. Shows study set completion. |
| accuracyRate | Response field. Data type: percentage. Shows learner accuracy. |
| mistakeCount | Response field. Data type: non-negative integer. Shows repeated mistakes. |
| classId | Response/action payload field. Required to open learner class detail. |
| className | Response field. Joined class name. |
| examId | Response/action payload field. Required to open exam information. |
| examTitle | Response field. Upcoming or assigned exam title. |
| dueAt | Response field. Date/time for assigned study set or exam due/start. |
| notificationCount | Response field. Number of unread learner notifications. |

### 3.3.2 View Joined Classes

Related Use Case: UC-16
Actor: Learner

This screen allows the Learner to:
View Joined Classes: backend loads approved class memberships for current learner.
Open Class Detail: send `classId`; backend validates that `learnerId` belongs to class.
Join New Class: navigate to Join Class screen.

On the screen, s/he can also:
Search / Filter Class List: backend receives keyword, paging, and sorting fields.
View Class Status: backend returns membership/class status for each row.

Prototype URL:
http://127.0.0.1:5173/learner/classes

Field Description

| Field Name | Description |
| ---------- | ----------- |
| learnerId | Session/query field. Backend uses current learner ID to load joined classes. |
| keyword | Query field. Data type: string. Searches class name, subject, teacher name, or class code. |
| page | Query field. Current page number. |
| pageSize | Query field. Number of classes per page. |
| sortBy | Query field. Values may include className, subject, teacherName, joinedAt. |
| sortOrder | Query field. Values: asc, desc. |
| totalItems | Response field. Total joined classes matching query. |
| classId | Response/action payload field. Required when user opens class detail. |
| className | Response field. Class name returned by backend. |
| subjectName | Response field. Subject of class. |
| teacherId | Response field. ID of teacher who owns or manages class. |
| teacherName | Response field. Teacher display name. |
| classCode | Response field. Class code used for join request. |
| memberCount | Response field. Data type: positive integer. |
| membershipStatus | Response field. Values: joined, pending, removed. |
| classStatus | Response field. Values: active, archived, closed. |

### 3.3.3 Join Class

Related Use Case: UC-17
Actor: Learner

This screen allows the Learner to:
Join Class: submit class code or invitation token to backend.
Send Join Request: backend creates pending request when approval is required.
View Request Status: backend returns join request status after submission.

On the screen, s/he can also:
Use Invitation Link: backend validates invitation token and maps it to class.

Prototype URL:
http://127.0.0.1:5173/learner/classes/join

Field Description

| Field Name | Description |
| ---------- | ----------- |
| learnerId | Session/action payload field. Current learner submitting join request. |
| classCode | Request body field. Required when invitation token is not provided. |
| invitationToken | Request body/route field. Required when class code is not provided. |
| requestMessage | Request body field. Optional learner message to teacher. |
| classId | Backend-derived/response field. Class matched by code or token. |
| teacherId | Response field. Teacher who must approve request when needed. |
| joinPolicy | Response field. Values: approvalRequired, autoApprove, invitationOnly. |
| joinRequestId | Response field. ID of created join request. |
| requestStatus | Response field. Values: pending, approved, rejected, alreadyJoined. |
| submittedAt | Response field. Date/time request was submitted. |
| validationErrors | Error response field. Invalid code, expired token, or duplicate request. |

### 3.3.4 Learner Class Detail

Related Use Case: UC-16
Actor: Learner

This screen allows the Learner to:
View Class Detail: backend loads class data by `classId` after permission check.
View Assigned Study Sets: backend returns assignments for this learner and class.
Open Assigned Study Set: send `studySetId` and `assignmentId` to study set detail.

On the screen, s/he can also:
Return To Joined Classes: no backend mutation.

Prototype URL:
http://127.0.0.1:5173/learner/classes/class-bio-12a

Field Description

| Field Name | Description |
| ---------- | ----------- |
| learnerId | Session field. Used for access check. |
| classId | Route/action payload field. Required to load class detail. |
| className | Response field. Selected class name. |
| subjectName | Response field. Class subject. |
| teacherId | Response field. Teacher ID. |
| teacherName | Response field. Teacher display name. |
| classCode | Response field. System-generated class code. |
| memberCount | Response field. Data type: positive integer. |
| classStatus | Response field. Values: active, archived, closed. |
| assignmentId | Response/action payload field. Required when opening assigned content. |
| studySetId | Response/action payload field. Required to open assigned study set. |
| studySetTitle | Response field. Assigned study set title. |
| dueAt | Response field. Date/time when assignment is due. |
| completionStatus | Response field. Values: notStarted, inProgress, completed, overdue. |

### 3.3.5 Teacher Dashboard

Related Use Case: UC-27, UC-33, UC-46, UC-49
Actor: Teacher

This screen allows the Teacher to:
View Teacher Dashboard: backend loads teacher-owned classes, content, exams, and report metrics.
Create Class: navigate to create form; backend mutation occurs on submit.
Create Question Bank: navigate to create form.
Open Teaching Work: send selected IDs such as `classId`, `questionBankId`, or `examId`.

On the screen, s/he can also:
Review Pending Work: backend returns pending join requests, draft content, and upcoming exam data.

Prototype URL:
http://127.0.0.1:5173/teacher/dashboard

Field Description

| Field Name | Description |
| ---------- | ----------- |
| teacherId | Session/query field. Backend loads dashboard for current teacher. |
| classCount | Response field. Number of classes owned/managed by teacher. |
| learnerCount | Response field. Total learners across teacher classes. |
| questionBankCount | Response field. Number of accessible question banks. |
| examCount | Response field. Number of active or upcoming exams. |
| pendingJoinRequestCount | Response field. Number of join requests waiting for approval. |
| classId | Response/action payload field. Required to open class detail. |
| className | Response field. Class name shown in dashboard table. |
| questionBankId | Response/action payload field. Required to open question bank detail. |
| examId | Response/action payload field. Required to open exam info or monitor screen. |
| nextExamStartAt | Response field. Date/time of nearest exam. |
| reportStatus | Response field. Values: ready, noAttempts, processing. |

### 3.3.6 View Created Classes

Related Use Case: UC-27
Actor: Teacher

This screen allows the Teacher to:
View Created Classes: backend loads classes owned or managed by teacher.
Search Created Classes: submit keyword, paging, and sorting fields.
Open Class Detail: send `classId`; backend validates teacher ownership/permission.

On the screen, s/he can also:
Create New Class: navigate to Create Class screen.

Prototype URL:
http://127.0.0.1:5173/teacher/classes

Field Description

| Field Name | Description |
| ---------- | ----------- |
| teacherId | Session/query field. Backend loads teacher-created classes. |
| keyword | Query field. Searches class name, subject, or class code. |
| status | Query/response field. Values: active, archived, closed, draft. |
| page | Query field. Current page number. |
| pageSize | Query field. Number of classes per page. |
| sortBy | Query field. Values may include className, subjectName, memberCount, createdAt. |
| sortOrder | Query field. Values: asc, desc. |
| totalItems | Response field. Total matched classes. |
| classId | Response/action payload field. Required to open class detail. |
| className | Response field. Class name. |
| subjectName | Response field. Class subject. |
| classCode | Response field. Generated class code. |
| memberCount | Response field. Data type: non-negative integer. |
| createdAt | Response field. Date/time class was created. |

### 3.3.7 Create Class

Related Use Case: UC-28
Actor: Teacher

This screen allows the Teacher to:
Create Class: submit class metadata to backend.
Configure Join Policy: backend stores class join behavior.
Set Default Due Time: backend uses default time for future assignments.

On the screen, s/he can also:
View Create Result: backend returns created `classId` and generated/confirmed `classCode`.

Prototype URL:
http://127.0.0.1:5173/teacher/classes/create

Field Description

| Field Name | Description |
| ---------- | ----------- |
| teacherId | Session/request field. Current teacher becomes class owner. |
| className | Request body field. Data type: non-empty string. Required. |
| subjectId | Request body field. Required if subjects are stored as records. |
| subjectName | Request body field. Required if free-text subject is allowed. |
| classCode | Request/response field. Must be unique among active classes. Backend may generate it. |
| classStatus | Request/response field. Values: draft, active, archived. |
| description | Request body field. Optional text describing class. |
| joinPolicy | Request body field. Values: approvalRequired, autoApprove, invitationOnly. |
| defaultDueTime | Request body field. Data type: time. Used for future assignments. |
| classId | Response field. ID of created class. |
| createdAt | Response field. Date/time when class was created. |
| validationErrors | Error response field. Field-level validation messages. |

### 3.3.8 Teacher Class Detail

Related Use Case: UC-27, UC-29, UC-30, UC-45
Actor: Teacher

This screen allows the Teacher to:
View Class Detail: backend loads class by `classId` and verifies teacher permission.
Manage Invitation: send `classId` to invitation screen.
Manage Members: send `classId` to member list or join request screen.
Assign Study Set: send `classId` to assignment form.

On the screen, s/he can also:
View Assigned Study Sets: backend returns class assignments and due dates.

Prototype URL:
http://127.0.0.1:5173/teacher/classes/class-bio-12a

Field Description

| Field Name | Description |
| ---------- | ----------- |
| teacherId | Session field. Used for permission check. |
| classId | Route/action payload field. Required to load class detail and related screens. |
| className | Response field. Class name. |
| subjectId | Response field. Subject identifier. |
| subjectName | Response field. Subject name. |
| classCode | Response field. Generated class code. |
| memberCount | Response field. Number of active members. |
| pendingJoinRequestCount | Response field. Number of pending join requests. |
| joinPolicy | Response field. Class join policy. |
| defaultDueTime | Response field. Data type: time. |
| classStatus | Response field. Values: active, archived, closed. |
| assignmentId | Response/action payload field. Assignment row ID. |
| studySetId | Response/action payload field. Assigned study set ID. |
| dueAt | Response field. Date/time assignment is due. |

### 3.3.9 Generate Class Invitation

Related Use Case: UC-29
Actor: Teacher

This screen allows the Teacher to:
Generate Class Invitation: backend creates or returns invitation token for `classId`.
Copy Invitation Link: no backend mutation if token already exists.
Send Invitation Email: backend receives recipient emails and sends invitation messages.

On the screen, s/he can also:
View Send Status: backend returns delivery status per recipient in production.

Prototype URL:
http://127.0.0.1:5173/teacher/classes/class-bio-12a/invitation

Field Description

| Field Name | Description |
| ---------- | ----------- |
| teacherId | Session/action payload field. Used for permission check. |
| classId | Route/action payload field. Required to generate invitation. |
| classCode | Response field. Class code learners can enter manually. |
| invitationId | Response field. Unique invitation record ID. |
| invitationToken | Response field. Token embedded in invitation link. |
| invitationUrl | Response field. Full URL generated from token. |
| expiresAt | Request/response field. Date/time invitation expires if configured. |
| recipientEmails | Request body field. Array of email addresses for send action. |
| emailSubject | Request body field. Optional custom invitation email subject. |
| emailMessage | Request body field. Optional invitation message. |
| deliveryStatus | Response field. Values: queued, sent, failed. |
| validationErrors | Error response field. Invalid email or expired class/invitation state. |

### 3.3.10 View Class Member List

Related Use Case: UC-30, UC-32
Actor: Teacher

This screen allows the Teacher to:
View Class Member List: backend loads members for selected class.
Remove Learner From Class: send `classId` and `learnerId`; backend removes membership.
Open Join Requests: send `classId` to join request screen.

On the screen, s/he can also:
Search / Page Members: backend receives keyword and pagination fields.

Prototype URL:
http://127.0.0.1:5173/teacher/classes/class-bio-12a/members

Field Description

| Field Name | Description |
| ---------- | ----------- |
| teacherId | Session/query field. Used for permission check. |
| classId | Route/query/action payload field. Required to load members and remove learner. |
| keyword | Query field. Searches learner name or email. |
| page | Query field. Current member list page. |
| pageSize | Query field. Number of members per page. |
| totalItems | Response field. Total members matching query. |
| learnerId | Response/action payload field. Required when removing learner. |
| learnerName | Response field. Learner display name. |
| learnerEmail | Response field. Learner email address. |
| premiumStatus | Response field. Values: standard, premium. |
| membershipStatus | Response field. Values: active, pending, removed. |
| joinedAt | Response field. Date/time learner joined or was approved. |
| removedAt | Response field. Date/time learner was removed, if applicable. |
| removalReason | Request body field. Optional/required reason for removal in production. |

### 3.3.11 Approve Class Join Request

Related Use Case: UC-31
Actor: Teacher

This screen allows the Teacher to:
View Join Requests: backend loads pending requests for selected class.
Approve Join Request: send `joinRequestId`; backend updates membership.
Review Request Message: backend returns learner message and request metadata.

On the screen, s/he can also:
Reject Join Request: production may send `decision` and `decisionReason`.

Prototype URL:
http://127.0.0.1:5173/teacher/classes/class-bio-12a/join-requests

Field Description

| Field Name | Description |
| ---------- | ----------- |
| teacherId | Session/query/action field. Used for permission check. |
| classId | Route/query field. Required to load requests. |
| status | Query/response field. Values: pending, approved, rejected. |
| page | Query field. Current request page. |
| pageSize | Query field. Number of requests per page. |
| joinRequestId | Response/action payload field. Required for approve/reject action. |
| learnerId | Response field. Learner requesting access. |
| learnerName | Response field. Learner display name. |
| requestMessage | Response field. Message submitted by learner. |
| requestedAt | Response field. Date/time request was submitted. |
| decision | Request body field. Values: approve, reject. |
| decisionReason | Request body field. Optional reason for rejection or audit. |
| decidedAt | Response field. Date/time request was approved/rejected. |

### 3.3.12 Assign Study Set To Class

Related Use Case: UC-45
Actor: Teacher

This screen allows the Teacher to:
Assign Study Set To Class: submit selected study set and assignment audience to backend.
Select Assignment Audience: backend stores assignment target scope.
Set Due Date: backend stores due date for learner progress tracking.

On the screen, s/he can also:
View Assignment Result: backend returns created `assignmentId`.

Prototype URL:
http://127.0.0.1:5173/teacher/classes/class-bio-12a/assign-study-set

Field Description

| Field Name | Description |
| ---------- | ----------- |
| teacherId | Session/request field. Used for permission check. |
| classId | Route/request field. Target class for assignment. |
| studySetId | Request body field. Required. Study set being assigned. |
| assignTo | Request body field. Values: entireClass, selectedLearners. |
| learnerIds | Request body field. Array of learner IDs when `assignTo` is selectedLearners. |
| dueAt | Request body field. Date/time assignment is due. |
| assignmentNote | Request body field. Optional note shown to learners. |
| notifyLearners | Request body field. Boolean. Whether backend creates notifications. |
| assignmentId | Response field. Created assignment ID. |
| assignmentStatus | Response field. Values: active, scheduled, closed. |
| createdAt | Response field. Date/time assignment was created. |
| validationErrors | Error response field. Invalid class, study set, audience, or due date. |

## 3.4 Question Bank Management

### 3.4.1 View Question Banks

Related Use Case: UC-33
Actor: Teacher

This screen allows the Teacher to:
View Question Banks: backend loads teacher-owned or shared question banks.
Search Question Banks: submit keyword, subject, visibility, paging, and sorting fields.
Open Question Bank Detail: send `questionBankId`; backend validates access.

On the screen, s/he can also:
Create Question Bank: navigate to creation form; backend mutation occurs on submit.

Prototype URL:
http://127.0.0.1:5173/teacher/question-banks

Field Description

| Field Name | Description |
| ---------- | ----------- |
| teacherId | Session/query field. Backend uses current teacher ID to load accessible banks. |
| keyword | Query field. Searches title, subject, topic, or description. |
| subjectId | Query/response field. Optional subject filter. |
| visibility | Query/response field. Values: private, classOnly, public. |
| page | Query field. Current page number. |
| pageSize | Query field. Number of question banks per page. |
| sortBy | Query field. Values may include title, updatedAt, questionCount, visibility. |
| sortOrder | Query field. Values: asc, desc. |
| totalItems | Response field. Total matched question banks. |
| questionBankId | Response/action payload field. Required to open bank detail. |
| title | Response field. Question bank title. |
| subjectName | Response field. Bank subject. |
| topicName | Response field. Bank topic. |
| questionCount | Response field. Number of questions in bank. |
| updatedAt | Response field. Date/time bank was last updated. |

### 3.4.2 Create Question Bank

Related Use Case: UC-34
Actor: Teacher

This screen allows the Teacher to:
Create Question Bank: submit reusable bank metadata to backend.
Configure Bank Visibility: backend stores access scope for bank.
Set Question Defaults: backend stores default score and time settings for future questions/study sets.

On the screen, s/he can also:
View Creation Result: backend returns created `questionBankId`.

Prototype URL:
http://127.0.0.1:5173/teacher/question-banks/create

Field Description

| Field Name | Description |
| ---------- | ----------- |
| teacherId | Session/request field. Current teacher becomes owner. |
| title | Request body field. Data type: non-empty string. Required. |
| subjectId | Request body field. Required if subjects are normalized records. |
| subjectName | Request body field. Required if free-text subject is allowed. |
| topicId | Request body field. Optional normalized topic ID. |
| topicName | Request body field. Data type: string. Required. |
| gradeLevel | Request body field. Optional target level. |
| defaultScore | Request body field. Positive number. Used for new questions. |
| estimatedCompletionMinutes | Request body field. Positive integer. |
| visibility | Request body field. Values: private, classOnly, public. |
| reviewStatus | Request body field. Values: draft, ready, reviewed. |
| description | Request body field. Optional text. |
| questionBankId | Response field. Created question bank ID. |
| createdAt | Response field. Date/time bank was created. |
| validationErrors | Error response field. Field-level validation messages. |

### 3.4.3 Question Bank Detail

Related Use Case: UC-33, UC-40, UC-41, UC-42
Actor: Teacher

This screen allows the Teacher to:
View Question Bank Detail: backend loads bank metadata and question list by `questionBankId`.
Create Question: send `questionBankId` to create question route.
Update Question: send `questionBankId` and `questionId` to edit route.
Delete Question: send `questionBankId`, `questionId`, and confirmation payload to backend.

On the screen, s/he can also:
Import Questions: send `questionBankId` to import flow.
Generate Questions From Material: send `questionBankId` to AI generation screen.

Prototype URL:
http://127.0.0.1:5173/teacher/question-banks/bank-bio-core

Field Description

| Field Name | Description |
| ---------- | ----------- |
| teacherId | Session/query field. Used for permission check. |
| questionBankId | Route/query/action payload field. Required for bank detail and child actions. |
| title | Response field. Question bank title. |
| subjectId | Response field. Bank subject ID inherited by questions. |
| subjectName | Response field. Bank subject name inherited by questions. |
| topicId | Response field. Bank topic ID. |
| topicName | Response field. Bank topic name inherited by questions. |
| visibility | Response field. Values: private, classOnly, public. |
| ownerId | Response field. Bank owner user ID. |
| questionId | Response/action payload field. Required for edit/delete question actions. |
| questionType | Response field. Values: multipleChoice, trueFalse, writtenAnswer. |
| questionContent | Response field. Question stem/content. |
| difficulty | Response field. Values: easy, medium, hard. |
| score | Response field. Positive number. |
| deleteConfirmation | Request body field. Boolean/string confirmation required for delete in production. |
| updatedAt | Response field. Date/time bank or question was updated. |

### 3.4.4 Update Question Bank Information

Related Use Case: UC-35, UC-36
Actor: Teacher

This screen allows the Teacher to:
Update Question Bank Information: submit edited bank metadata to backend.
Save Bank Changes: backend validates and persists updates.
Delete Question Bank: send `questionBankId` and delete confirmation to backend.

On the screen, s/he can also:
Review Dependency Warning: backend may block deletion when bank is used by study sets or exams.

Prototype URL:
http://127.0.0.1:5173/teacher/question-banks/bank-bio-core/edit

Field Description

| Field Name | Description |
| ---------- | ----------- |
| teacherId | Session/request field. Used for permission check. |
| questionBankId | Route/request/action payload field. Required to update or delete bank. |
| title | Request/response field. Data type: non-empty string. |
| subjectId | Request/response field. Subject identifier. |
| subjectName | Request/response field. Subject name if free-text allowed. |
| topicId | Request/response field. Topic identifier. |
| topicName | Request/response field. Topic name. |
| gradeLevel | Request/response field. Optional target level. |
| defaultScore | Request/response field. Positive number. |
| estimatedCompletionMinutes | Request/response field. Positive integer. |
| visibility | Request/response field. Values: private, classOnly, public. |
| reviewStatus | Request/response field. Values: draft, ready, reviewed. |
| description | Request/response field. Optional text. |
| deleteConfirmation | Request body field. Required for delete action in production. |
| dependencyCount | Response field. Number of dependent study sets/exams, used to allow/block deletion. |
| updatedAt | Response field. Date/time update succeeded. |
| validationErrors | Error response field. Field-level validation messages. |

### 3.4.5 Create Question

Related Use Case: UC-40, UC-43
Actor: Teacher

This screen allows the Teacher to:
Create Question: submit question data under selected `questionBankId`.
Enter Question Content: backend validates type-specific fields.
Generate From Material: send `questionBankId` to AI generation flow.

On the screen, s/he can also:
Review Inherited Bank Metadata: backend returns subject/topic from bank; they are not submitted per question unless bank changes.

Prototype URL:
http://127.0.0.1:5173/teacher/question-banks/bank-bio-core/questions/create

Field Description

| Field Name | Description |
| ---------- | ----------- |
| teacherId | Session/request field. Used for permission check. |
| questionBankId | Route/request field. Required. New question belongs to this bank. |
| subjectId | Response/inherited field. Loaded from question bank; not entered per question. |
| topicId | Response/inherited field. Loaded from question bank; not entered per question. |
| questionType | Request body field. Values: multipleChoice, trueFalse, writtenAnswer. Required. |
| questionContent | Request body field. Data type: text. Required. |
| options | Request body field. Array of answer options. Required for multiple choice. |
| correctAnswer | Request body field. Required. Must match option/rule for selected question type. |
| score | Request body field. Positive number. Required. |
| difficulty | Request body field. Values: easy, medium, hard. Required. |
| explanation | Request body field. Optional explanation for feedback/review. |
| questionId | Response field. Created question ID. |
| createdAt | Response field. Date/time question was created. |
| validationErrors | Error response field. Missing content, invalid options, score, or correct answer. |

### 3.4.6 Update Question

Related Use Case: UC-41
Actor: Teacher

This screen allows the Teacher to:
Update Question: backend loads existing question by `questionBankId` and `questionId`.
Save Question Updates: submit edited question fields to backend.
Review Inherited Bank Metadata: subject/topic remain bank-level fields.

On the screen, s/he can also:
Update Explanation: backend stores explanation for learner feedback.

Prototype URL:
http://127.0.0.1:5173/teacher/question-banks/bank-bio-core/questions/q-1/edit

Field Description

| Field Name | Description |
| ---------- | ----------- |
| teacherId | Session/request field. Used for permission check. |
| questionBankId | Route/request field. Required. Validates parent bank. |
| questionId | Route/request field. Required. Identifies question being edited. |
| subjectId | Response/inherited field. Loaded from question bank. |
| topicId | Response/inherited field. Loaded from question bank. |
| questionType | Request/response field. Values: multipleChoice, trueFalse, writtenAnswer. |
| questionContent | Request/response field. Data type: text. Required. |
| options | Request/response field. Array of answer options for multiple choice. |
| correctAnswer | Request/response field. Required. Must pass type-specific validation. |
| score | Request/response field. Positive number. |
| difficulty | Request/response field. Values: easy, medium, hard. |
| explanation | Request/response field. Optional feedback explanation. |
| updatedAt | Response field. Date/time question was updated. |
| validationErrors | Error response field. Field-level validation messages. |

### 3.4.7 Import Questions From Excel

Related Use Case: UC-37
Actor: Teacher

This screen allows the Teacher to:
Import Questions From Excel: upload Excel file and create an import batch for selected bank.
Configure Import Rules: submit duplicate handling and defaults.
Validate Imported File: backend parses file and returns validation summary.

On the screen, s/he can also:
Open Error List: send `importBatchId` to error screen.
Open Valid Row Preview: send `importBatchId` to preview screen.

Prototype URL:
http://127.0.0.1:5173/teacher/question-banks/bank-bio-core/import

Field Description

| Field Name | Description |
| ---------- | ----------- |
| teacherId | Session/request field. Used for permission check. |
| questionBankId | Route/request field. Target bank for import. |
| importFile | Request body field. Uploaded `.xlsx` or `.xls` file. |
| fileName | Response field. Uploaded file name. |
| fileSize | Response field. File size in bytes. |
| duplicateHandling | Request body field. Values: skip, replace, keepBoth. |
| defaultDifficulty | Request body field. Values: easy, medium, hard. Used when row is blank. |
| defaultTags | Request body field. Array/string of default tags. |
| importBatchId | Response/action payload field. Required for error and preview screens. |
| totalRows | Response field. Number of parsed rows. |
| validRows | Response field. Number of rows passing validation. |
| errorRows | Response field. Number of rows with validation errors. |
| validationStatus | Response field. Values: pending, valid, invalid, partiallyValid. |
| validationErrors | Error response field. File-level validation messages. |

### 3.4.8 View Question Import Errors

Related Use Case: UC-38
Actor: Teacher

This screen allows the Teacher to:
View Question Import Errors: backend loads invalid import rows by `importBatchId`.
Identify Error Field: backend returns row, field, raw value, and validation message.
Correct Import File: no backend mutation until new validation is submitted.

On the screen, s/he can also:
Page Error List: backend receives paging fields for large imports.

Prototype URL:
http://127.0.0.1:5173/teacher/question-banks/bank-bio-core/import/errors

Field Description

| Field Name | Description |
| ---------- | ----------- |
| teacherId | Session/query field. Used for permission check. |
| questionBankId | Route/query field. Parent question bank. |
| importBatchId | Query/session field. Import batch whose errors are displayed. |
| page | Query field. Current page number. |
| pageSize | Query field. Number of error rows per page. |
| totalItems | Response field. Total error rows. |
| rowNumber | Response field. Excel row number with validation error. |
| fieldName | Response field. Import column that failed validation. |
| rawValue | Response field. Raw value read from Excel file. |
| validationMessage | Response field. Human-readable validation error. |
| errorCode | Response field. Machine-readable error code. |

### 3.4.9 Preview Imported Questions

Related Use Case: UC-39
Actor: Teacher

This screen allows the Teacher to:
Preview Imported Questions: backend loads valid rows by `importBatchId`.
Save Imported Questions: backend converts valid rows into question records under selected bank.

On the screen, s/he can also:
Page Preview Rows: backend receives paging fields for large imports.

Prototype URL:
http://127.0.0.1:5173/teacher/question-banks/bank-bio-core/import/preview

Field Description

| Field Name | Description |
| ---------- | ----------- |
| teacherId | Session/query/action field. Used for permission check. |
| questionBankId | Route/query/action field. Target bank for imported questions. |
| importBatchId | Query/action payload field. Required to preview and save valid rows. |
| page | Query field. Current preview page. |
| pageSize | Query field. Number of valid rows per page. |
| rowNumber | Response field. Original Excel row number. |
| questionContent | Response field. Parsed question content. |
| questionType | Response field. Values: multipleChoice, trueFalse, writtenAnswer. |
| options | Response field. Parsed options for multiple choice. |
| correctAnswer | Response field. Parsed correct answer. |
| score | Response field. Parsed or default score. |
| difficulty | Response field. Parsed or default difficulty. |
| importStatus | Response field. Values: ready, saved, skipped, failed. |
| createdQuestionIds | Response field. Array of question IDs created after save. |

### 3.4.10 Generate Questions From Material

Related Use Case: UC-43
Actor: Teacher

This screen allows the Teacher to:
Generate Questions From Material: submit learning material and generation parameters to backend/AI service.
Configure Generation: backend receives type, count, difficulty, and topic focus.
Preview Generated Questions: backend returns draft questions before saving.

On the screen, s/he can also:
Save Selected Generated Questions: production may submit selected draft IDs to create questions.

Prototype URL:
http://127.0.0.1:5173/teacher/question-banks/bank-bio-core/ai-generate

Field Description

| Field Name | Description |
| ---------- | ----------- |
| teacherId | Session/request field. Used for permission and quota check. |
| questionBankId | Route/request field. Target bank for generated questions. |
| materialFile | Request body field. Uploaded learning material file. |
| materialText | Request body field. Optional pasted text material. |
| questionType | Request body field. Values: multipleChoice, trueFalse, writtenAnswer, mixed. |
| numberOfQuestions | Request body field. Positive integer. Requested generated count. |
| difficulty | Request body field. Values: easy, medium, hard. |
| topicFocus | Request body field. Optional text narrowing generation scope. |
| aiProvider | Request/backend field. Example: gemini. |
| generationJobId | Response field. ID of generation request/job. |
| generatedQuestionId | Response/action payload field. Draft generated question ID. |
| generatedContent | Response field. Draft question content. |
| generatedOptions | Response field. Draft answer options. |
| generatedCorrectAnswer | Response field. Draft correct answer. |
| generatedExplanation | Response field. Draft explanation. |
| generationStatus | Response field. Values: pending, completed, failed, quotaExceeded. |

## 3.5 Study Set Learning

### 3.5.1 View Joined Study Sets

Related Use Case: UC-18
Actor: Learner

This screen allows the Learner to:
View Joined Study Sets: backend loads public and assigned study sets available to current learner.
Search Study Sets: submit keyword, visibility, class, paging, and sorting fields.
Open Study Set Detail: send `studySetId`; backend validates learner access.
Start Flashcards: send `studySetId` to load flashcard data.
Open Wrong Answer Review: send `studySetId` to load wrong answers grouped by study set.

On the screen, s/he can also:
Review Progress: backend returns progress and mistake fields per study set.

Prototype URL:
http://127.0.0.1:5173/learner/study-sets

Field Description

| Field Name | Description |
| ---------- | ----------- |
| learnerId | Session/query field. Current learner whose study sets are loaded. |
| keyword | Query field. Searches title, subject, topic, or class. |
| classId | Query/response field. Optional class filter/source. |
| visibility | Query/response field. Values: public, classOnly, private. Backend returns only accessible sets. |
| page | Query field. Current page number. |
| pageSize | Query field. Number of study sets per page. |
| sortBy | Query field. Values may include title, progressPercent, updatedAt, dueAt. |
| sortOrder | Query field. Values: asc, desc. |
| totalItems | Response field. Total accessible study sets matching query. |
| studySetId | Response/action payload field. Required to open detail, flashcards, quiz, or review. |
| studySetTitle | Response field. Study set title. |
| subjectName | Response field. Subject name inherited from source bank. |
| topicName | Response field. Topic name inherited from source bank. |
| progressPercent | Response field. Learner progress for the set. |
| mistakeCount | Response field. Wrong-answer count for this study set. |
| dueAt | Response field. Assignment due date when set is class-assigned. |

### 3.5.2 Study Set Detail

Related Use Case: UC-18, UC-19
Actor: Learner

This screen allows the Learner to:
View Study Set Detail: backend loads study set and learner progress by `studySetId`.
Start Flashcard Study: send `studySetId` to flashcard route.
Take Study Set Quiz: backend creates or resumes a practice attempt for `studySetId`.
Review Wrong Answers: backend loads wrong answers for this learner and set.

On the screen, s/he can also:
Inspect Question Preview: backend returns allowed question preview fields.

Prototype URL:
http://127.0.0.1:5173/learner/study-sets/set-bio-cell

Field Description

| Field Name | Description |
| ---------- | ----------- |
| learnerId | Session/query/action field. Used for access and progress. |
| studySetId | Route/action payload field. Required. |
| studySetTitle | Response field. Study set title. |
| description | Response field. Study set description. |
| sourceQuestionBankId | Response field. Source bank used to create study set. |
| subjectId | Response field. Inherited subject ID. |
| subjectName | Response field. Inherited subject name. |
| topicId | Response field. Inherited topic ID. |
| topicName | Response field. Inherited topic name. |
| questionCount | Response field. Number of questions in set. |
| questionPreview | Response field. Array of preview question rows. |
| progressPercent | Response field. Learner completion percentage. |
| accuracyRate | Response field. Learner accuracy for this set. |
| mistakeCount | Response field. Wrong-answer count for this set. |
| assignmentId | Response field. Assignment ID when set is class-assigned. |
| dueAt | Response field. Assignment due date when available. |

### 3.5.3 Flashcard Study

Related Use Case: UC-05
Actor: Guest, Learner

This screen allows the Guest or Learner to:
Study Flashcards: backend loads flashcard items by `studySetId`.
Flip Flashcard: frontend action only unless backend stores card interaction.
Move Between Cards: backend may receive progress events for authenticated learners.

On the screen, s/he can also:
Track Card Position: backend can return total card count and last viewed index.

Prototype URL:
http://127.0.0.1:5173/learner/study-sets/set-bio-cell/flashcards

Field Description

| Field Name | Description |
| ---------- | ----------- |
| currentUserId | Session field. Null for guest; learner ID for saved progress. |
| studySetId | Route/query/action field. Required to load flashcards. |
| questionId | Response/action payload field. Current flashcard question ID. |
| cardIndex | Query/progress field. Zero-based or one-based current card position. |
| totalCards | Response field. Total flashcards in set. |
| frontContent | Response field. Question/front side content. |
| backContent | Response field. Answer/back side content. |
| lastViewedQuestionId | Request/response field. Used to resume authenticated learner progress. |
| viewedAt | Request field. Date/time card was viewed, if tracking is enabled. |
| progressPercent | Response field. Flashcard progress for authenticated learner. |
| isGuestSession | Backend/session-derived field. True when progress should not be persisted. |

### 3.5.4 Take Study Set Quiz

Related Use Case: UC-19
Actor: Learner

This screen allows the Learner to:
Take Study Set Quiz: backend creates or resumes a practice quiz attempt for selected study set.
Select Answer: submit answer payload for objective questions.
Enter Written Answer: submit written answer text for written questions.
Submit Quiz: backend scores attempt and stores result/wrong answers.

On the screen, s/he can also:
View Feedback: backend returns correctness and explanation fields after answer submission or quiz submission.

Prototype URL:
http://127.0.0.1:5173/learner/study-sets/set-bio-cell/quiz

Field Description

| Field Name | Description |
| ---------- | ----------- |
| learnerId | Session/request field. Required. |
| studySetId | Route/request field. Required. |
| attemptId | Response/action payload field. Quiz attempt ID. |
| questionId | Response/request field. Current question being answered. |
| questionType | Response field. Values: multipleChoice, trueFalse, writtenAnswer. |
| questionContent | Response field. Current question content. |
| options | Response field. Available options for objective questions. |
| selectedOptionId | Request body field. Answer for objective questions. |
| writtenAnswer | Request body field. Answer text for written-answer questions. |
| answerPayload | Request body field. Normalized submitted answer object. |
| isCorrect | Response field. Boolean correctness after scoring. |
| feedbackMessage | Response field. Feedback generated from score/explanation. |
| score | Response field. Current or final score. |
| submittedAt | Response field. Date/time quiz was submitted. |

### 3.5.5 Quiz Result

Related Use Case: UC-19, UC-20
Actor: Learner

This screen allows the Learner to:
View Quiz Result: backend loads scored quiz attempt by `attemptId`.
Open Wrong Answer Review: send `studySetId` and optional `attemptId` to review screen.
Retry Study: backend may create new attempt when learner starts another quiz.

On the screen, s/he can also:
Identify Question Status: backend returns per-question correctness rows.

Prototype URL:
http://127.0.0.1:5173/learner/study-sets/set-bio-cell/result

Field Description

| Field Name | Description |
| ---------- | ----------- |
| learnerId | Session/query field. Used for permission check. |
| studySetId | Route/query/action field. Study set linked to result. |
| attemptId | Query/action payload field. Quiz attempt whose result is shown. |
| score | Response field. Numeric quiz score. |
| maxScore | Response field. Maximum possible score. |
| accuracyRate | Response field. Percentage of correct answers. |
| correctCount | Response field. Number of correct answers. |
| wrongCount | Response field. Number of wrong answers. |
| questionResultId | Response field. Per-question result row ID. |
| questionId | Response field. Question ID in result row. |
| learnerAnswer | Response field. Submitted answer value. |
| correctAnswer | Response field. Correct answer value. |
| resultStatus | Response field. Values: correct, incorrect, skipped, pendingReview. |
| submittedAt | Response field. Date/time quiz was submitted. |

### 3.5.6 Review Wrong Answers

Related Use Case: UC-20, UC-21
Actor: Learner

This screen allows the Learner to:
Review Wrong Answers: backend loads wrong answers by learner and study set.
Compare Answers: backend returns learner answer, correct answer, and explanation.
Request AI Answer Explanation: send wrong-answer context to backend/AI service; backend checks premium access.

On the screen, s/he can also:
See Premium Requirement: backend returns `upgradeRequired` when learner is not eligible for AI explanation.

Prototype URL:
http://127.0.0.1:5173/learner/study-sets/set-bio-cell/review

Field Description

| Field Name | Description |
| ---------- | ----------- |
| learnerId | Session/query/action field. Current learner. |
| studySetId | Route/query/action field. Wrong answers are grouped by this study set. |
| attemptId | Query field. Optional. Filters wrong answers to a quiz attempt. |
| wrongAnswerId | Response/action payload field. Required to request AI explanation for a missed item. |
| questionId | Response/action payload field. Missed question ID. |
| questionContent | Response field. Missed question content. |
| learnerAnswer | Response field. Learner's submitted answer. |
| correctAnswer | Response field. Correct answer. |
| explanation | Response field. Stored teacher/system explanation. |
| aiExplanationRequestId | Response field. ID of AI explanation request when created. |
| aiExplanation | Response field. Generated answer explanation when available. |
| premiumStatus | Session/response field. Determines whether AI explanation is allowed. |
| upgradeRequired | Response field. Boolean. True when non-premium learner requests premium AI feature. |
| reviewedAt | Request/response field. Date/time learner reviewed wrong answer if tracking is enabled. |

### 3.5.7 Teacher Study Set Management

Related Use Case: UC-44, UC-45
Actor: Teacher

This screen allows the Teacher to:
View Study Sets: backend loads teacher-created study sets.
Search Study Sets: submit keyword, visibility, paging, and sorting fields.
Create Study Set: navigate to creation form.
Assign Study Set: send selected `studySetId` to assignment flow.

On the screen, s/he can also:
Preview Study Set: send `studySetId` to preview/detail route.

Prototype URL:
http://127.0.0.1:5173/teacher/study-sets

Field Description

| Field Name | Description |
| ---------- | ----------- |
| teacherId | Session/query field. Backend loads study sets owned/managed by teacher. |
| keyword | Query field. Searches title, source bank, subject, or topic. |
| visibility | Query/response field. Values: private, classOnly, public. |
| page | Query field. Current page number. |
| pageSize | Query field. Number of study sets per page. |
| sortBy | Query field. Values may include title, visibility, createdAt, learnerCount. |
| sortOrder | Query field. Values: asc, desc. |
| totalItems | Response field. Total matched study sets. |
| studySetId | Response/action payload field. Required for preview, edit, or assign actions. |
| studySetTitle | Response field. Study set title. |
| sourceQuestionBankId | Response field. Bank used to create study set. |
| sourceQuestionBankTitle | Response field. Source bank title. |
| questionCount | Response field. Number of included questions. |
| assignedClassCount | Response field. Number of classes using this set. |
| assignedLearnerCount | Response field. Number of learners assigned to this set. |
| createdAt | Response field. Date/time study set was created. |

### 3.5.8 Create Study Set

Related Use Case: UC-44
Actor: Teacher

This screen allows the Teacher to:
Create Study Set: submit title, source bank, selected questions, visibility, and description.
Select Source Question Bank: backend returns questions from selected bank only.
Select Questions: backend stores included question IDs.
Configure Study Set Visibility: backend stores access scope.

On the screen, s/he can also:
Review Inherited Metadata: backend derives subject/topic from selected question bank.

Prototype URL:
http://127.0.0.1:5173/teacher/study-sets/create

Field Description

| Field Name | Description |
| ---------- | ----------- |
| teacherId | Session/request field. Current teacher creates study set. |
| studySetTitle | Request body field. Data type: non-empty string. Required. |
| sourceQuestionBankId | Request body field. Required. Determines available questions and inherited metadata. |
| subjectId | Response/inherited field. Loaded from source question bank. |
| topicId | Response/inherited field. Loaded from source question bank. |
| visibility | Request body field. Values: private, classOnly, public. |
| estimatedStudyMinutes | Request body field. Optional positive integer. |
| description | Request body field. Optional text. |
| selectedQuestionIds | Request body field. Array of question IDs from selected question bank. |
| questionId | Response field. Available question ID in source bank selection list. |
| questionType | Response field. Type of selectable question. |
| difficulty | Response field. Difficulty of selectable question. |
| score | Response field. Score of selectable question. |
| studySetId | Response field. Created study set ID. |
| createdAt | Response field. Date/time study set was created. |
| validationErrors | Error response field. Invalid source bank, empty title, or invalid question selection. |

## 3.6 Exam Session

### 3.6.1 View Available Exams

Related Use Case: UC-23
Actor: Learner

This screen allows the Learner to:
View Available Exams: backend loads exams assigned through joined classes.
Search Exams: submit keyword, status, paging, and sorting fields.
Open Exam Information: send `examId`; backend validates learner eligibility.

On the screen, s/he can also:
View Exam Status: backend returns schedule and attempt status for each exam.

Prototype URL:
http://127.0.0.1:5173/learner/exams

Field Description

| Field Name | Description |
| ---------- | ----------- |
| learnerId | Session/query field. Current learner whose exams are loaded. |
| keyword | Query field. Searches exam title, class, subject, or status. |
| status | Query/response field. Values: upcoming, open, submitted, closed. |
| classId | Query/response field. Optional class filter. |
| page | Query field. Current page number. |
| pageSize | Query field. Number of exams per page. |
| sortBy | Query field. Values may include title, startAt, status, className. |
| sortOrder | Query field. Values: asc, desc. |
| totalItems | Response field. Total assigned exams matching query. |
| examId | Response/action payload field. Required to open exam information. |
| examTitle | Response field. Exam title. |
| className | Response field. Assigned class name. |
| startAt | Response field. Scheduled start date/time. |
| attemptStatus | Response field. Values: notStarted, inProgress, submitted, expired. |

### 3.6.2 View Exam Information

Related Use Case: UC-24
Actor: Learner

This screen allows the Learner to:
View Exam Information: backend loads exam rules by `examId`.
Start Exam: send `examId`; backend checks schedule, attempt limit, and eligibility.

On the screen, s/he can also:
Read Exam Rules: backend returns time, attempt, randomization, and result visibility settings.

Prototype URL:
http://127.0.0.1:5173/learner/exams/exam-bio-midterm/info

Field Description

| Field Name | Description |
| ---------- | ----------- |
| learnerId | Session/action field. Used for eligibility and attempt limit checks. |
| examId | Route/query/action field. Required. |
| examTitle | Response field. Exam title. |
| classId | Response field. Class assigned to exam. |
| className | Response field. Class name. |
| startAt | Response field. Scheduled start date/time. |
| endAt | Response field. Scheduled end date/time if fixed. |
| durationMinutes | Response field. Positive integer. |
| allowedAttempts | Response field. Positive integer. |
| usedAttempts | Response field. Number of attempts already used by learner. |
| resultVisibility | Response field. Values: immediate, afterEnd, hiddenUntilTeacherRelease. |
| randomizeQuestions | Response field. Boolean. |
| randomizeAnswers | Response field. Boolean. |
| canStart | Response field. Boolean derived from schedule, membership, and attempts. |
| startBlockedReason | Response field. Reason when `canStart` is false. |

### 3.6.3 Take Exam

Related Use Case: UC-25
Actor: Learner

This screen allows the Learner to:
Take Exam: backend creates or resumes exam attempt by `examId` and `learnerId`.
Select Answers: backend stores answer payload through auto-save or final submit.
Submit Exam: send `attemptId`, answers, and confirmation flag; backend finalizes attempt.

On the screen, s/he can also:
View Timer: backend returns attempt start/end time used by client timer.
View Auto-Save Status: backend returns save status for latest answer update.

Prototype URL:
http://127.0.0.1:5173/learner/exams/exam-bio-midterm/take

Field Description

| Field Name | Description |
| ---------- | ----------- |
| learnerId | Session/request field. Current exam taker. |
| examId | Route/request field. Exam being taken. |
| attemptId | Response/request/action payload field. Current exam attempt. |
| attemptNumber | Response field. Current attempt count. |
| examCode | Response/request field. Optional exam access code if required. |
| attemptStartedAt | Response field. Date/time attempt started. |
| attemptEndsAt | Response field. Date/time attempt must end. |
| remainingSeconds | Response/derived field. Remaining exam time. |
| questionId | Response/request field. Question ID in exam attempt. |
| questionOrder | Response field. Randomized or configured question order. |
| selectedOptionId | Request body field. Objective answer selection. |
| writtenAnswer | Request body field. Written answer text. |
| answers | Request body field. Array/map of answer payloads keyed by question ID. |
| autoSaveStatus | Response field. Values: saved, saving, failed, offline. |
| submitConfirmation | Request body field. Boolean. Must be true for final submission. |
| submittedAt | Response field. Date/time final submission was stored. |

### 3.6.4 View Exam Result

Related Use Case: UC-26
Actor: Learner

This screen allows the Learner to:
View Exam Result: backend loads result by `examId`, `attemptId`, and `learnerId`.
Review Attempt Table: backend returns detailed answer rows only if result visibility allows.

On the screen, s/he can also:
View Hidden Result State: backend returns result visibility state when details are not released.

Prototype URL:
http://127.0.0.1:5173/learner/exams/exam-bio-midterm/result

Field Description

| Field Name | Description |
| ---------- | ----------- |
| learnerId | Session/query field. Current learner. |
| examId | Route/query field. Exam whose result is requested. |
| attemptId | Query field. Attempt whose result is displayed. |
| resultVisibility | Response field. Values: visible, scoreOnly, hidden. |
| score | Response field. Numeric score if visible. |
| maxScore | Response field. Maximum possible score. |
| accuracyRate | Response field. Percentage correct. |
| passStatus | Response field. Values: passed, failed, pending, notReleased. |
| submittedAt | Response field. Submission date/time. |
| questionResultId | Response field. Detailed row ID when allowed. |
| questionId | Response field. Question ID in result row. |
| learnerAnswer | Response field. Learner's submitted answer. |
| correctAnswer | Response field. Correct answer when review is allowed. |
| resultStatus | Response field. Values: correct, incorrect, pendingManualReview. |
| hiddenReason | Response field. Reason result or details are not visible. |

### 3.6.5 Teacher Exam Sessions

Related Use Case: UC-46, UC-48
Actor: Teacher

This screen allows the Teacher to:
View Exam Sessions: backend loads teacher-owned/assigned exam sessions.
Search Exam Sessions: submit keyword, class, status, paging, and sorting fields.
Create Exam Session: navigate to creation form.
Open Exam Actions: send `examId` to configure, info, monitor, analytics, or export screens.

On the screen, s/he can also:
View Exam Status: backend returns draft/scheduled/open/closed/completed state.

Prototype URL:
http://127.0.0.1:5173/teacher/exams

Field Description

| Field Name | Description |
| ---------- | ----------- |
| teacherId | Session/query field. Backend loads exams managed by teacher. |
| keyword | Query field. Searches exam title, class, or status. |
| classId | Query/response field. Optional class filter. |
| status | Query/response field. Values: draft, scheduled, open, closed, completed. |
| page | Query field. Current page number. |
| pageSize | Query field. Number of exams per page. |
| sortBy | Query field. Values may include title, startAt, status, className. |
| sortOrder | Query field. Values: asc, desc. |
| totalItems | Response field. Total matched exam sessions. |
| examId | Response/action payload field. Required for configure/info/monitor/export actions. |
| examTitle | Response field. Exam title. |
| className | Response field. Assigned class name. |
| startAt | Response field. Scheduled start date/time. |
| submittedCount | Response field. Number of submitted attempts. |
| totalAssignedLearners | Response field. Total assigned learners. |

### 3.6.6 Create Exam Session

Related Use Case: UC-46
Actor: Teacher

This screen allows the Teacher to:
Create Exam Session: submit exam metadata and rules to backend.
Select Exam Source: backend validates selected question bank or study set source.
Configure Core Settings: backend stores time, attempt, scoring, auto-save, and visibility settings.

On the screen, s/he can also:
View Creation Result: backend returns created `examId`.

Prototype URL:
http://127.0.0.1:5173/teacher/exams/create

Field Description

| Field Name | Description |
| ---------- | ----------- |
| teacherId | Session/request field. Current teacher creates exam. |
| examTitle | Request body field. Data type: non-empty string. Required. |
| classId | Request body field. Required. Target class for exam. |
| questionSourceType | Request body field. Values: questionBank, studySet. |
| questionSourceId | Request body field. ID of selected question bank or study set. |
| examStatus | Request/response field. Values: draft, scheduled, published. |
| startAt | Request body field. Scheduled start date/time. |
| durationMinutes | Request body field. Positive integer. |
| allowedAttempts | Request body field. Positive integer. |
| passingScore | Request body field. Numeric threshold. |
| lateJoinGraceMinutes | Request body field. Non-negative integer. |
| autoSubmitEnabled | Request body field. Boolean. |
| resultVisibility | Request body field. Values: immediate, afterEnd, hiddenUntilTeacherRelease. |
| reviewPermission | Request body field. Values: allowReview, scoreOnly, noReview. |
| randomizeQuestions | Request body field. Boolean. |
| randomizeAnswers | Request body field. Boolean. |
| autoSaveEnabled | Request body field. Boolean. |
| examId | Response field. Created exam session ID. |
| validationErrors | Error response field. Field-level validation messages. |

### 3.6.7 Configure Exam Settings

Related Use Case: UC-47
Actor: Teacher

This screen allows the Teacher to:
Configure Exam Settings: backend loads existing exam and accepts updated rules.
Save Exam Settings: backend validates schedule, status, attempts, visibility, and source changes.

On the screen, s/he can also:
Review Current Exam Context: backend returns class and source information for selected exam.

Prototype URL:
http://127.0.0.1:5173/teacher/exams/exam-bio-midterm/configure

Field Description

| Field Name | Description |
| ---------- | ----------- |
| teacherId | Session/request field. Used for permission check. |
| examId | Route/request field. Required to load and update exam. |
| examTitle | Request/response field. Exam title. |
| classId | Request/response field. Assigned class ID. |
| questionSourceType | Request/response field. Values: questionBank, studySet. |
| questionSourceId | Request/response field. Selected source ID. |
| examStatus | Request/response field. Values: draft, scheduled, open, closed. |
| startAt | Request/response field. Scheduled start date/time. |
| durationMinutes | Request/response field. Positive integer. |
| allowedAttempts | Request/response field. Positive integer. |
| passingScore | Request/response field. Numeric threshold. |
| lateJoinGraceMinutes | Request/response field. Non-negative integer. |
| autoSubmitEnabled | Request/response field. Boolean. |
| resultVisibility | Request/response field. Result release rule. |
| reviewPermission | Request/response field. Review permission rule. |
| randomizeQuestions | Request/response field. Boolean. |
| randomizeAnswers | Request/response field. Boolean. |
| autoSaveEnabled | Request/response field. Boolean. |
| updatedAt | Response field. Date/time settings were saved. |
| validationErrors | Error response field. Field-level validation messages. |

### 3.6.8 View Exam Information As Teacher

Related Use Case: UC-48
Actor: Teacher

This screen allows the Teacher to:
View Exam Information: backend loads configured exam details by `examId`.
Configure Exam: send `examId` to configuration route.
Monitor Exam: send `examId` to monitoring route.
Export Report: send `examId` to report export route.

On the screen, s/he can also:
Confirm Exam Status: backend returns current schedule and status values.

Prototype URL:
http://127.0.0.1:5173/teacher/exams/exam-bio-midterm/info

Field Description

| Field Name | Description |
| ---------- | ----------- |
| teacherId | Session/query/action field. Used for permission check. |
| examId | Route/query/action payload field. Required for configure, monitor, and report actions. |
| examTitle | Response field. Exam title. |
| classId | Response field. Assigned class ID. |
| className | Response field. Assigned class name. |
| questionSourceType | Response field. Values: questionBank, studySet. |
| questionSourceId | Response field. Source ID used for questions. |
| questionSourceTitle | Response field. Source title. |
| startAt | Response field. Scheduled start date/time. |
| durationMinutes | Response field. Positive integer. |
| allowedAttempts | Response field. Positive integer. |
| randomizeQuestions | Response field. Boolean. |
| randomizeAnswers | Response field. Boolean. |
| resultVisibility | Response field. Result release rule. |
| examStatus | Response field. Values: draft, scheduled, open, closed, completed. |
| submittedCount | Response field. Number of submitted attempts. |

### 3.6.9 Monitor Exam Session

Related Use Case: Exam Monitoring
Actor: Teacher

This screen allows the Teacher to:
Monitor Exam Session: backend loads attempt status rows for selected exam.
Review Submission Progress: backend returns submitted, in-progress, and not-started counts.
Inspect Learner Attempt Row: backend returns per-learner attempt fields.

On the screen, s/he can also:
Identify Auto-Save Activity: backend returns latest auto-save timestamp/status per attempt.

Prototype URL:
http://127.0.0.1:5173/teacher/exams/exam-bio-midterm/monitor

Field Description

| Field Name | Description |
| ---------- | ----------- |
| teacherId | Session/query field. Used for permission check. |
| examId | Route/query field. Exam being monitored. |
| examStatus | Response field. Values: scheduled, open, closed, completed. |
| submittedCount | Response field. Number of submitted attempts. |
| inProgressCount | Response field. Number of active attempts. |
| notStartedCount | Response field. Number of learners not started. |
| durationMinutes | Response field. Exam duration. |
| learnerId | Response/action payload field. Learner in monitoring row. |
| learnerName | Response field. Learner display name. |
| attemptId | Response/action payload field. Learner attempt ID. |
| attemptStatus | Response field. Values: notStarted, inProgress, submitted, autoSubmitted. |
| score | Response field. Numeric score if available. |
| accuracyRate | Response field. Percentage if attempt is scored. |
| lastAutoSavedAt | Response field. Latest auto-save date/time. |
| lastActivityAt | Response field. Latest learner activity date/time. |

## 3.7 Analytics & Reporting

### 3.7.1 View Personal Learning Progress

Related Use Case: UC-22
Actor: Learner

This screen allows the Learner to:
View Personal Learning Progress: backend loads progress metrics for current learner.
Review Recommended Actions: backend returns weak topics and recommended next action fields.

On the screen, s/he can also:
Open Related Study Set: send `studySetId` from recommendation when action link exists.

Prototype URL:
http://127.0.0.1:5173/learner/progress

Field Description

| Field Name | Description |
| ---------- | ----------- |
| learnerId | Session/query field. Current learner whose progress is loaded. |
| dateFrom | Query field. Optional start date for progress window. |
| dateTo | Query field. Optional end date for progress window. |
| practicedQuestionCount | Response field. Total practiced questions. |
| accuracyRate | Response field. Percentage correct. |
| repeatedMistakeCount | Response field. Number of repeated mistakes. |
| weakTopicCount | Response field. Number of weak topics. |
| topicId | Response/action payload field. Weak topic identifier. |
| topicName | Response field. Weak topic name. |
| topicAccuracyRate | Response field. Accuracy percentage for topic. |
| topicMistakeCount | Response field. Mistake count for topic. |
| recommendedActionType | Response field. Values: flashcards, quiz, review, studySet. |
| studySetId | Response/action payload field. Target study set for recommended action. |
| updatedAt | Response field. Date/time metrics were last calculated. |

### 3.7.2 View Exam Analytics

Related Use Case: UC-49
Actor: Teacher

This screen allows the Teacher to:
View Exam Analytics: backend loads analytics grouped by exam session.
Compare Exam Metrics: backend returns score, accuracy, submission, and weak topic metrics.
Open Export Report: send selected `examId` to export report screen.

On the screen, s/he can also:
Filter Analytics: backend may receive class, status, date, paging, and sorting fields.

Prototype URL:
http://127.0.0.1:5173/teacher/analytics

Field Description

| Field Name | Description |
| ---------- | ----------- |
| teacherId | Session/query field. Backend loads analytics for teacher-owned exams. |
| examId | Query/response/action payload field. Analytics are grouped by exam. |
| classId | Query/response field. Optional class filter and exam class. |
| status | Query/response field. Exam status filter/value. |
| dateFrom | Query field. Optional start date for analytics range. |
| dateTo | Query field. Optional end date for analytics range. |
| page | Query field. Current page number. |
| pageSize | Query field. Number of exam analytics records per page. |
| examTitle | Response field. Exam title. |
| className | Response field. Assigned class name. |
| averageScore | Response field. Average score of submitted attempts. |
| accuracyRate | Response field. Correct-answer rate for exam. |
| submittedCount | Response field. Number of submitted attempts. |
| totalAssignedLearners | Response field. Total assigned learners. |
| weakTopicId | Response field. Low-performing topic identifier. |
| weakTopicName | Response field. Low-performing topic name. |

### 3.7.3 Export Exam Report

Related Use Case: UC-50
Actor: Teacher

This screen allows the Teacher to:
Export Exam Report: submit selected exam, report type, and format to backend.
Select Report Type: backend generates corresponding report data.
Select Export Format: backend generates CSV, XLSX, or PDF file.

On the screen, s/he can also:
Preview Exam Summary: backend returns selected exam summary before export.
Review Learner Attempts: backend returns attempt rows included in selected report.

Prototype URL:
http://127.0.0.1:5173/teacher/reports/export

Field Description

| Field Name | Description |
| ---------- | ----------- |
| teacherId | Session/request/query field. Used for permission check. |
| examId | Request/query field. Required. Report is generated for one selected exam. |
| reportType | Request field. Values: summary, learnerDetail, questionAnalysis. |
| format | Request field. Values: csv, xlsx, pdf. |
| generatedFrom | Response field. Source exam/question set used for report. |
| generatedAt | Response field. Date/time report was generated. |
| reportJobId | Response field. ID of report generation job. |
| downloadUrl | Response field. URL to generated report file in production. |
| reportStatus | Response field. Values: ready, processing, failed, noAttempts. |
| examTitle | Response field. Selected exam title. |
| className | Response field. Class assigned to selected exam. |
| averageScore | Response field. Average score for selected exam. |
| accuracyRate | Response field. Accuracy for selected exam. |
| submittedCount | Response field. Submitted attempt count. |
| learnerAttemptRows | Response field. Array of learner attempt records included in report preview. |
| validationErrors | Error response field. Missing exam, unsupported format, or no permission. |

## 3.8 Payment & Subscription

### 3.8.1 View Premium Plans

Related Use Case: UC-06
Actor: Guest, Learner, Teacher

This screen allows the Guest, Learner, or Teacher to:
View Premium Plans: backend returns plans filtered by current role or guest audience.
Select Plan: send `planId` to upgrade flow when authenticated.
Login To Upgrade: guest navigates to login; no payment request is created yet.

On the screen, s/he can also:
Avoid Wrong-Role Purchase: backend filters plans by `audienceRole`.

Prototype URL:
http://127.0.0.1:5173/premium

Field Description

| Field Name | Description |
| ---------- | ----------- |
| currentUserId | Session/query field. Null for guest; used to determine eligible plans. |
| currentRole | Session/query field. Values: guest, learner, teacher, admin. |
| audienceRole | Query/response field. Values: learner, teacher, general. Filters role-eligible plans. |
| planId | Response/action payload field. Required to select a plan. |
| planName | Response field. Premium plan name. |
| price | Response field. Currency amount. |
| currency | Response field. Currency code, such as VND or USD. |
| billingInterval | Response field. Values: monthly, yearly, oneTime. |
| benefits | Response field. Array of benefit descriptions. |
| isEligible | Response field. Boolean. True if current actor can select plan. |
| currentPremiumStatus | Session/response field. Values: standard, premium. |

### 3.8.2 Upgrade To Premium

Related Use Case: UC-15
Actor: Learner, Teacher

This screen allows the Learner or Teacher to:
Upgrade To Premium: submit plan, payment method, billing email, and promotion code.
Proceed To Payment: backend creates payment transaction or checkout session.

On the screen, s/he can also:
Review Payment Summary: backend returns amount, discount, total, and pending transaction status.

Prototype URL:
http://127.0.0.1:5173/premium/upgrade

Field Description

| Field Name | Description |
| ---------- | ----------- |
| userId | Session/request field. Account upgrading to premium. |
| role | Session/request field. Values: learner, teacher. Determines allowed plans. |
| planId | Request body field. Required. Must match current role eligibility. |
| paymentMethod | Request body field. Values: card, bankTransfer, eWallet, mockGateway. |
| billingEmail | Request body field. Data type: email. Required for invoice/receipt. |
| promotionCode | Request body field. Optional. Backend validates discount. |
| subtotalAmount | Response field. Plan amount before discount/tax. |
| discountAmount | Response field. Discount applied from promotion code. |
| totalAmount | Response field. Final payable amount. |
| currency | Response field. Currency code. |
| paymentTransactionId | Response/action payload field. Created transaction ID. |
| checkoutUrl | Response field. Payment gateway checkout URL in production. |
| paymentStatus | Response field. Values: pending, success, failed, cancelled. |
| validationErrors | Error response field. Invalid plan, payment method, or promotion code. |

### 3.8.3 Payment Result

Related Use Case: UC-15
Actor: Learner, Teacher

This screen allows the Learner or Teacher to:
View Payment Result: backend loads payment transaction by ID or callback reference.
Confirm Premium Activation: backend activates subscription only after verified payment success.
Return To Workspace: route is derived from current role.

On the screen, s/he can also:
Retry Payment: production can reuse `paymentTransactionId` or create a new transaction when payment failed.

Prototype URL:
http://127.0.0.1:5173/premium/payment-result

Field Description

| Field Name | Description |
| ---------- | ----------- |
| userId | Session/query field. Account associated with payment. |
| paymentTransactionId | Query/response/action field. Required to load payment result. |
| gatewayReference | Query/response field. Payment provider reference from callback. |
| planId | Response field. Purchased premium plan ID. |
| planName | Response field. Purchased plan name. |
| amount | Response field. Paid amount. |
| currency | Response field. Currency code. |
| paymentStatus | Response field. Values: success, failed, pending, cancelled. |
| paidAt | Response field. Date/time payment succeeded. |
| subscriptionId | Response field. Created/updated subscription ID. |
| premiumStatus | Response field. Updated account premium status. |
| activatedAt | Response field. Date/time premium access was activated. |
| failureReason | Response field. Reason payment failed, if applicable. |

## 3.9 System Admin

### 3.9.1 Admin Dashboard

Related Use Case: UC-51, UC-53, UC-54
Actor: Administrator

This screen allows the Administrator to:
View Admin Dashboard: backend loads user, resource, service, and alert metrics.
Open User Management: send admin session to user list route.
Open Resource Management: send admin session to moderation route.
Open System Status: backend loads service status records.

On the screen, s/he can also:
Review Alert Summary: backend returns degraded services or moderation alerts.

Prototype URL:
http://127.0.0.1:5173/admin/dashboard

Field Description

| Field Name | Description |
| ---------- | ----------- |
| adminId | Session/query field. Current administrator ID. |
| totalUserCount | Response field. Number of users in system. |
| learnerCount | Response field. Number of learner accounts. |
| teacherCount | Response field. Number of teacher accounts. |
| publicResourceCount | Response field. Number of public resources. |
| hiddenResourceCount | Response field. Number of hidden/moderated resources. |
| monitoredServiceCount | Response field. Number of services monitored. |
| activeAlertCount | Response field. Number of active alerts. |
| serviceId | Response/action payload field. Service row identifier. |
| serviceName | Response field. Service display name. |
| serviceStatus | Response field. Values: operational, degraded, down. |
| lastCheckedAt | Response field. Date/time service was last checked. |

### 3.9.2 View User List

Related Use Case: UC-51
Actor: Administrator

This screen allows the Administrator to:
View User List: backend loads system users across roles.
Search Users: submit keyword, role, status, paging, and sorting fields.
Open User Detail: send `userId`; backend loads selected user detail.

On the screen, s/he can also:
View Role And Premium Status: backend returns role and subscription fields per user row.

Prototype URL:
http://127.0.0.1:5173/admin/users

Field Description

| Field Name | Description |
| ---------- | ----------- |
| adminId | Session/query field. Used for admin permission check. |
| keyword | Query field. Searches name, email, username, or role. |
| role | Query/response field. Values: learner, teacher, admin. |
| accountStatus | Query/response field. Values: active, inactive, suspended. |
| premiumStatus | Query/response field. Values: standard, premium. |
| page | Query field. Current page number. |
| pageSize | Query field. Number of users per page. |
| sortBy | Query field. Values may include fullName, role, accountStatus, createdAt, lastActiveAt. |
| sortOrder | Query field. Values: asc, desc. |
| totalItems | Response field. Total matched users. |
| userId | Response/action payload field. Required to open user detail. |
| fullName | Response field. User full name. |
| email | Response field. User email address. |
| username | Response field. Username. |
| lastActiveAt | Response field. Latest activity date/time. |

### 3.9.3 User Detail And Role Update

Related Use Case: UC-52
Actor: Administrator

This screen allows the Administrator to:
View User Detail: backend loads selected account by `userId`.
Update User Role: submit new role, permission scope, reason, and effective date.
Update Account Status: submit new account status.

On the screen, s/he can also:
Record Role Change Reason: backend stores audit log for role/status changes.

Prototype URL:
http://127.0.0.1:5173/admin/users/u-learner-1

Field Description

| Field Name | Description |
| ---------- | ----------- |
| adminId | Session/request field. Administrator performing update. |
| userId | Route/query/request field. Target user account. |
| fullName | Response field. Target user's full name. |
| email | Response field. Target user's email. |
| phoneNumber | Response field. Target user's phone number. |
| currentRole | Response field. Current role before update. |
| newRole | Request body field. Values: learner, teacher, admin. |
| currentAccountStatus | Response field. Current account status. |
| newAccountStatus | Request body field. Values: active, inactive, suspended. |
| premiumStatus | Response field. Current subscription status. |
| permissionScope | Request body field. Values: default, limited, fullAccess. |
| roleChangeReason | Request body field. Required for audit in production. |
| effectiveDate | Request body field. Date when role/status change takes effect. |
| joinedAt | Response field. Account creation date/time. |
| lastActiveAt | Response field. Latest activity date/time. |
| auditLogId | Response field. Audit record created after update. |
| validationErrors | Error response field. Invalid role, protected admin, or missing reason. |

### 3.9.4 Resource Management

Related Use Case: UC-53
Actor: Administrator

This screen allows the Administrator to:
View Learning Resources: backend loads public study sets, question banks, or user content.
Filter Resources: submit type, status, keyword, paging, and sorting fields.
Hide Public Learning Resource: send `resourceId`, `resourceType`, and moderation reason to backend.

On the screen, s/he can also:
Review Resource Owner: backend returns owner ID/name for moderation audit.

Prototype URL:
http://127.0.0.1:5173/admin/resources

Field Description

| Field Name | Description |
| ---------- | ----------- |
| adminId | Session/query/action field. Administrator performing moderation. |
| resourceType | Query/response/action field. Values: studySet, questionBank, userContent. |
| reviewStatus | Query/response field. Values: public, hidden, flagged, underReview. |
| keyword | Query field. Searches resource title, owner, subject, or topic. |
| page | Query field. Current page number. |
| pageSize | Query field. Number of resources per page. |
| sortBy | Query field. Values may include title, ownerName, subjectName, updatedAt. |
| sortOrder | Query field. Values: asc, desc. |
| totalItems | Response field. Total matched resources. |
| resourceId | Response/action payload field. Required to hide resource. |
| resourceTitle | Response field. Resource title. |
| ownerId | Response field. Creator/owner user ID. |
| ownerName | Response field. Creator/owner display name. |
| subjectName | Response field. Resource subject. |
| visibilityStatus | Request/response field. Values: public, hidden, flagged. |
| reviewNote | Request body field. Reason or note for moderation action. |
| moderatedAt | Response field. Date/time visibility was changed. |

### 3.9.5 View System Status

Related Use Case: UC-54
Actor: Administrator

This screen allows the Administrator to:
View System Status: backend loads health status for monitored services.
Review Service Metrics: backend returns uptime, response time, and last checked timestamp.
Identify Service Warning: backend returns degraded/down service alerts.

On the screen, s/he can also:
Refresh Status: send `serviceId` or refresh all services if production provides action.

Prototype URL:
http://127.0.0.1:5173/admin/system-status

Field Description

| Field Name | Description |
| ---------- | ----------- |
| adminId | Session/query/action field. Used for admin permission check. |
| serviceId | Response/action payload field. Service identifier. |
| serviceName | Response field. Name of monitored service. |
| serviceStatus | Response field. Values: operational, degraded, down. |
| uptimePercent | Response field. Service uptime percentage. |
| responseTimeMs | Response field. Latest response time in milliseconds. |
| lastCheckedAt | Response field. Date/time health check was performed. |
| alertId | Response field. Active alert ID when service is degraded/down. |
| alertMessage | Response field. Human-readable service warning. |
| refreshRequestedAt | Request/response field. Date/time admin requested refresh, if supported. |

### 3.9.6 Access Denied

Related Use Case: Authorization
Actor: Guest, Learner, Teacher, Administrator

This screen allows the user to:
View Access Denied Message: backend/router denies access based on role and route permission.
Return To Allowed Dashboard: route is derived from current session role.

On the screen, s/he can also:
Login With Different Account: navigate to login; no backend mutation until login submit.

Prototype URL:
http://127.0.0.1:5173/access-denied

Field Description

| Field Name | Description |
| ---------- | ----------- |
| currentUserId | Session field. Null for guest or ID of logged-in user. |
| currentRole | Session field. Values: guest, learner, teacher, admin. |
| requestedRoute | Route/security field. URL user attempted to access. |
| requiredRole | Authorization field. Role required by route. |
| denialReason | Response field. Reason access was denied. |
| redirectRoute | Response/derived field. Safe route to return user to. |
| occurredAt | Response/log field. Date/time authorization denial occurred. |

### 3.9.7 Not Found

Related Use Case: Utility
Actor: Guest, Learner, Teacher, Administrator

This screen allows the user to:
View Not Found Message: router/backend indicates requested route does not exist.
Return Home: route is derived from session role or public home.

On the screen, s/he can also:
Recover From Broken Link: no backend mutation occurs.

Prototype URL:
http://127.0.0.1:5173/not-found

Field Description

| Field Name | Description |
| ---------- | ----------- |
| requestedRoute | Route field. URL that was not matched by application router. |
| currentUserId | Session field. Null for guest or ID of logged-in user. |
| currentRole | Session field. Values: guest, learner, teacher, admin. |
| redirectRoute | Response/derived field. Destination for Go Home action. |
| errorCode | Response/log field. Example value: routeNotFound. |
| occurredAt | Response/log field. Date/time route error occurred. |

## Prototype Integration Notes

| Area | Prototype Behavior | Production Requirement |
| ---- | ------------------ | ---------------------- |
| Authentication | Local browser state and demo credentials only. | Backend authentication, secure session, password hashing, OAuth callback handling. |
| Authorization | React route guards by role. | Backend permission checks for every protected screen and action payload. |
| Google Login | Visual/provider-unavailable action only. | Real OAuth token exchange and error handling. |
| Payment | Upgrade flow routes to success screen. | Payment gateway checkout/callback verification before premium activation. |
| AI Features | Static generated content and explanation messages. | Gemini/API integration, quota checks, moderation, and role/premium checks. |
| Email | Reset link and invitation sending are local status messages. | Email service integration, delivery tracking, and retry/error handling. |
| Import Validation | Static valid/error preview. | Real Excel parsing, row validation, duplicate handling, and database persistence. |
| Exam Session | Timer and auto-save are prototype UI states. | Real attempt session, auto-save API, final submit lock, timeout handling, and recovery flow. |
| Report Export | Export action shows local success message. | Backend report job and downloadable CSV/XLSX/PDF by selected exam. |
| CRUD Actions | Create/update/delete/hide actions are local mock states. | Database persistence, validation, audit logs, refresh, and conflict/error handling. |
