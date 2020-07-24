import { Teacher } from './teacher.model';
import { Student } from './student.mode';
export class Class {
  constructor(
    public Id: string,
    public Name: string,
    public Section: string,
    public Institute: string,
    public TotalStudents: number,
    public TotalTeachers: number,
    public TotalSubjects: number,
    public Subjects?: string[]
    // public subjects: string[]
  ) {}
}
