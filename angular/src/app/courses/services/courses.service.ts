import { Injectable } from '@angular/core';
import { Course } from 'src/app/models/course';
import { HttpClient } from '@angular/common/http';
import { first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private readonly API = 'api/courses';

  constructor(private httpClient: HttpClient) {}

  listAllCourses() {
    return this.httpClient.get<Course[]>(this.API).pipe(
      first(),
      tap((courses: Course[]) => courses)
    );
  }

  findById(id: string) {
    return this.httpClient.get<Course>(`${this.API}/${id}`);
  }

  saveCourse(record: Partial<Course>) {
    if (record._id) {
      return this.updateCourse(record);
    }
    return this.createCourse(record);
  }

  createCourse(record: Partial<Course>) {
    return this.httpClient.post<Course>(this.API, record).pipe(first());
  }

  updateCourse(record: Partial<Course>) {
    return this.httpClient
      .put<Course>(`${this.API}/${record._id}`, record)
      .pipe(first());
  }
}
