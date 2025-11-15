// 1. Teacher interface from Task 1
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;

  // Allow any additional attribute
  [key: string]: any;
}

// 2. Directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// 3. Example usage
const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "London",
  numberOfReports: 17
}

console.log(director1);
