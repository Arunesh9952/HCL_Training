import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  apiUrl = 'http://localhost:5139/api/Student';

  constructor(private http: HttpClient) {}

  // READ
  getStudents() {
    return this.http.get<any[]>(this.apiUrl);
  }

  // CREATE
  addStudent(student: any) {
    return this.http.post(this.apiUrl, student);
  }

  // UPDATE
  updateStudent(id: number, student: any) {
    return this.http.put(`${this.apiUrl}/${id}`, student);
  }

  // DELETE
  deleteStudent(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
