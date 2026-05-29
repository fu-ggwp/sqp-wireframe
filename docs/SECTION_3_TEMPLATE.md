# Section 3 Functional Requirement Template

### 3.x.x [Screen / Function Name]

**Related Use Case:** UC-xx  
**Actor:** ...  
**Purpose:** ...  
**Route:** ...

**UI Layout / Prototype:**  
[Insert screenshot here]

**Screen Components / Fields:**

| Field / Component | Type | Description | Initial Data / Validation / Rule |
| ----------------- | ---- | ----------- | -------------------------------- |
| Page Title | Text | Main screen title shown at top of page. | Required. Match screen/function name. |
| Short Description | Text | Brief explanation of screen purpose. | Required. Should map to related use case. |
| Main Form / Table / Cards | UI Group | Primary content area of screen. | Required. Use fields from SRS use case. |
| Status / Message Area | System Message | Shows success, validation, warning, or empty state. | Required when action can fail, succeed, or return no data. |

**Main Actions:**

* ...

**Business Rules:**

* ...

**System Messages:**

* ...

**Mock / Integration Notes:**

* Authentication, payment, AI generation, email delivery, auto-save, and database persistence are prototype-only unless backend integration is added later.
