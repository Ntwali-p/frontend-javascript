// 1. Create the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// 2. Create two students
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 22,
  location: "Kigali"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 20,
  location: "Huye"
};

// 3. Create an array of students
const studentsList: Student[] = [student1, student2];

// 4. Render a table using Vanilla JS
const table = document.createElement("table");
const tbody = document.createElement("tbody");

studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  const locationCell = document.createElement("td");

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
 // --- Function interface ---
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// --- Function implementation ---
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
};

// --- Example usage ---
console.log(printTeacher("John", "Doe"));  // Output: John Doe
console.log(printTeacher("Jane", "Smith")); // Output: Jane Smith
