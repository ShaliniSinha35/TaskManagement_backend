# Task Management Backend

## Overview

This is the backend part of the Task Management application. It provides RESTful API endpoints for managing tasks, including functionalities for creating, updating, deleting, and fetching tasks. The backend uses **Node.js**, **Express.js**, and **MongoDB** for storing and retrieving task data.

## Tech Stack

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express.js**: Web application framework for Node.js to handle API routes.
- **MongoDB**: NoSQL database for storing task data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js to define data schemas and interact with MongoDB.
- **UUID**: Package for generating unique IDs for tasks.


##API Endpoints


POST /tasks: Create a new task
Example: POST https://taskmanagement-backend-1.onrender.com/api/tasks

GET /tasks: Get all tasks with filters (category, status)
Example: GET https://taskmanagement-backend-1.onrender.com/api/tasks?category=Work&status=incomplete

GET /alltasks: Get all tasks without any filter
Example: GET https://taskmanagement-backend-1.onrender.com/api/alltasks

PUT /tasks/:id: Update a task by ID
Example: PUT https://taskmanagement-backend-1.onrender.com/api/tasks/:id

DELETE /tasks/:id: Delete a task by ID
Example: DELETE https://taskmanagement-backend-1.onrender.com/api/tasks/:id


