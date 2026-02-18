import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-student',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './student.component.html',
})
export class StudentComponent implements OnInit {
  students: any[] = [];
  studentObj: any = { id: 0, studentName: '', department: '' };

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents() {
    this.studentService.getStudents().subscribe((data) => {
      this.students = data;
    });
  }

  addStudent() {
    this.studentService.addStudent(this.studentObj).subscribe(() => {
      this.loadStudents();
      this.studentObj = { id: 0, studentName: '', department: '' };
    });
  }
  editStudent(student: any) {
    this.studentObj = { ...student };
  }
  updateStudent() {
    this.studentService
      .updateStudent(this.studentObj.id, this.studentObj)
      .subscribe(() => {
        this.loadStudents();
        this.studentObj = { id: 0, studentName: '', department: '' };
      });
  }

  deleteStudent(id: number) {
    this.studentService.deleteStudent(id).subscribe(() => {
      this.loadStudents();
    });

    
  }
}
