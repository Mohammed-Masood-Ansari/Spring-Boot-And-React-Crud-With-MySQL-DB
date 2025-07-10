# College API Client

This project is a JavaScript module for interacting with a RESTful College API backend. It uses **Axios** for making HTTP requests to perform CRUD operations on college data.

## Features

- List all colleges
- Register a new college
- Get college by ID
- Update college details
- Delete a college by ID

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Installation

1. Clone the repository or copy the code into your project.
2. Navigate to the project directory.
3. Install dependencies:

```bash
npm install axios
# or if you're using yarn:
yarn add axios
How to Use
Import the functions into your frontend JavaScript/React project:

js
Copy
Edit
import {
  listCollege,
  registerCollege,
  getCollegeById,
  updateCollegeById,
  deleteCollegeById
} from './collegeService'; // update path as needed
Example Usage
js
Copy
Edit
// List colleges
listCollege().then(response => {
  console.log(response.data);
});

// Register a new college
registerCollege({ name: "ABC College", location: "New York" })
  .then(response => console.log("Registered:", response.data));

// Get college by ID
getCollegeById(1).then(response => {
  console.log("College:", response.data);
});

// Update college
updateCollegeById(1, { name: "Updated College" })
  .then(response => console.log("Updated:", response.data));

// Delete college
deleteCollegeById(1)
  .then(() => console.log("Deleted"));
API Endpoints Used
Ensure your backend is running at:

arduino
Copy
Edit
http://localhost:8081
Endpoints:

GET /api/getAllCollegeData

POST /api/saveCollege

GET /api/getByIdNative/{id}

PUT /api/updateCollege/{id}

DELETE /api/deleteCollege/{id}

⚠️ Make sure the backend API is up and running before using these functions.