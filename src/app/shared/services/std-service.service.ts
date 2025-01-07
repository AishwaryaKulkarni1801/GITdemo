import { Injectable } from '@angular/core';
import { Student } from '../std.interface';

@Injectable({
    providedIn: 'root',
})
export class StdService {
    private students: Student[] = [];

    addStudent(student: Student): void {
        this.students.push(student);
    }

    getStudents(): Student[] {
        return this.students;
    }

    clearStudents(): void {
        this.students = [];
    }
}
