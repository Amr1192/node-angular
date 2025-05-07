import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Exam } from '../models/exam';

@Injectable({
  providedIn: 'root',
})
export class ExamService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getAvailableExams(): Observable<{
    status: string;
    data: Exam[];
    message?: string;
  }> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get<{ status: string; data: Exam[]; message?: string }>(
      `${this.apiUrl}/exams`,
      { headers }
    );
  }

  getExamById(
    id: string
  ): Observable<{ status: string; data: Exam; message?: string }> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get<{ status: string; data: Exam; message?: string }>(
      `${this.apiUrl}/exams/${id}`,
      { headers }
    );
  }

  submitExam(
    examId: string,
    answers: { questionIndex: number; selectedChoiceIndex: number }[]
  ): Observable<{
    status: string;
    data: { score: number; result: any };
    message?: string;
  }> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    const body = { examId, answers };
    return this.http.post<{
      status: string;
      data: { score: number; result: any };
      message?: string;
    }>(`${this.apiUrl}/exams/submit`, body, { headers });
  }

  // Other methods remain the same...
}