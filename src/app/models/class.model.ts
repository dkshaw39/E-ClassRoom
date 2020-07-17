import { Teacher } from './teacher.model';
import { Student } from './student.mode';
export class Class{
    classroomcode: string;
    classname: string;
    section: string;
    students: Student[];
    teachers: Teacher[];
    subjects: string[];
}
