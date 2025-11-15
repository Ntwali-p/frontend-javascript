namespace Subjects {
  export interface Teacher {
    firstName: string;
    lastName: string;
  }

  export class Subject {
    teacher: Teacher;

    // This was missing
    setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
  }
}
