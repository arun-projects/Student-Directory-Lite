# Student Directory Application Lite

## Instructions

- In this application you will be using existing HTML and CSS and adding functionality to a student directory.
- Step 1: Download the starter code and run `npm install` in the terminal.
- Step 2: Start the server by running `npm start`.
- Step 3: Navigate your browser to `http://localhost:3000` to see the UI you will be building.
- You will now write the application code in public/js/app.js.
- Main deliverable is a working application that displays a list of all students in the database using the provided UI.

## Bonus Deliverables

- Add student using modal form
- Filtering of students by name
- Client-side pagination
- Reuse add student modal for edit a student functionality
- Delete a student

## Helper Functions

These functions are already linked in index.html and can be used immediately in app.js.

### getAllStudents

This function uses an AJAX call to retrieve a list of all students in the database. It does not accept any arguments.

### getOneStudent

This function uses an AJAX call to retrieve a single student record via its ID. It accepts one argument, which is the ID of the student you want to retrieve.

### saveNewStudent

This function uses an AJAX call to save a new student to the database. It accepts two arguments - an object for the new student record and an optional callback function to be called when this request is successful. Here is a sample student object:

```javascript
{
	firstName: "Arun",
	lastName: "Sood",
	email: "arsood@gmail.com",
	avatar: "https://avatars.githubusercontent.com/u/4174082?s=400&u=1a5bbc1bf952b95024be8adb54ed5d263366b737&v=4",
	city: "San Francisco",
	state: "CA"
}
```

### updateStudent

This function uses an AJAX call to update a student record in the database. It accepts three arguments - ID of the student you want to update, object for the updated student record (in the same format as above), and an optional callback to be called when this request is successful.

### deleteStudent

This function uses an AJAX call to delete a student record from the database. It accepts one argument, which is the ID of the student you want to delete.
