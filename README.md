Based on the requirements and checklist for **Week 5: DOM Manipulation** found in the sources, here is the formatted content for your `README.md`.

***

# Week 5: Interactive To-Do List 📋

## Project Overview
This project is a fully functional, interactive task management application. The goal of this project is to demonstrate mastery of **DOM Manipulation** and **User Interaction**, including selecting elements, responding to events, and dynamically updating the page content without refreshing.

**Repository Name:** `iyf-s10-week-05-stephen-mwai-dev

## Features
I have implemented the following core requirements as specified in the project brief:
*   **Add Tasks:** Users can add tasks by typing in the input field and pressing "Enter" or clicking the "Add" button. Empty tasks are prevented, and the input field clears automatically after submission.
*   **Toggle Completion:** Clicking a task toggles its state between active and completed. Completed tasks are visually distinguished with a strikethrough.
*   **Delete Tasks:** Each task features a delete button that becomes visible on hover, allowing users to remove items from the list.
*   **Task Filtering:** Users can filter the view to show "All" tasks, only "Active" (incomplete) tasks, or only "Completed" tasks.
*   **Task Statistics:** The application displays a real-time count of items remaining. A "Clear Completed" button allows for the bulk removal of all finished tasks.
*   **Edit Tasks (Bonus):** Users can double-click any task to edit the text directly. Pressing "Enter" saves the changes, while "Escape" cancels the edit.

## Technical Skills Demonstrated
This project incorporates the key concepts from the Week 5 curriculum:
*   **Element Selection:** Efficiently used `getElementById`, `querySelector`, and `querySelectorAll` to interact with the DOM.
*   **Dynamic DOM Updates:** Created and removed elements using `createElement`, `appendChild`, and `remove()`.
*   **Event Handling & Delegation:** Implemented **Event Delegation** by placing a single event listener on the parent `<ul>` element to manage clicks on tasks and delete buttons.
*   **Form Management:** Utilized `event.preventDefault()` to handle form submissions smoothly via JavaScript.
*   **Attributes & Data:** Used **data attributes** (`dataset`) to store and track unique IDs for each to-do item.
*   **Styling via JS:** Dynamically toggled CSS classes (like `.completed` and `.active`) to update the UI based on user actions.

## How to Run
1.  Clone this repository to your local machine.
2.  Open `index.html` in any modern web browser to use the application.

## Checklist Completion
- [x] Select elements with `getElementById`, `querySelector`, and `querySelectorAll`.
- [x] Modify text content and HTML dynamically.
- [x] Add and remove elements from the DOM.
- [x] Use the event object (`target`, `preventDefault`, `key`).
- [x] Implement event bubbling and effective event delegation.
- [x] Complete the Interactive To-Do List project.
