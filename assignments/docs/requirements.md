# Task Tracker Requirements

## Product summary

A small task tracker for one user to create and manage tasks. A task has a title, notes, status (`todo`, `doing`, or `done`), due date, and owner. The same entity will be used throughout the training exercises.

## User stories and acceptance criteria

### 1. View tasks

As a user, I want to see my tasks so I can understand what needs attention.

- The list shows each task's title, status, due date, and owner.
- An empty task list displays a clear empty state.

### 2. Create a task

As a user, I want to create a task so I can record work I need to do.

- I can enter a title, notes, status, due date, and owner.
- A task cannot be saved without a non-empty title.
- After saving, the new task appears in the list.

### 3. View task details

As a user, I want to open a task so I can read all of its information.

- The detail view shows every task field.
- The detail view identifies a task that does not exist with a not-found message.

### 4. Edit a task

As a user, I want to edit a task so I can keep its details current.

- I can change the title, notes, status, due date, and owner.
- The title remains required when saving changes.
- The updated values appear in the list and detail view.

### 5. Change task status

As a user, I want to mark a task as todo, doing, or done so its progress is clear.

- Only `todo`, `doing`, and `done` are accepted statuses.
- The selected status is visible in the task list and detail view.

### 6. Delete a task

As a user, I want to delete a task so obsolete work no longer appears.

- I can initiate deletion from the task list or detail view.
- After deletion, the task is absent from the list.
- Deleting a missing task returns a clear not-found result.

### 7. Find tasks by status

As a user, I want to filter tasks by status so I can focus on a subset of work.

- I can select any supported status or view all tasks.
- The list only shows tasks matching the selected filter.
- An empty result displays a clear message.

### 8. Sign in and access tasks

As a user, I want to sign in so that task access can be protected.

- A user can sign in with valid credentials.
- Invalid credentials do not grant access and produce a useful error.
- Protected task operations reject requests without valid authentication.

## Scope notes

- The initial practice app is a single-entity task tracker.
- Authentication and role permissions will be implemented later in the training plan.
- Pagination, file uploads, and hosting are outside the core requirements.
