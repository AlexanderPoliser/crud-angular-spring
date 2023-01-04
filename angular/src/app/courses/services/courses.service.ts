import { Injectable } from '@angular/core';
import { Course } from 'src/app/models/course';
import { HttpClient } from '@angular/common/http';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private readonly API = '/assets/courses.json';

  constructor(private httpClient: HttpClient) {}

  listAllCourses() {
    return this.httpClient.get<Course[]>(this.API).pipe(
      first(),
      tap((courses: Course[]) => console.log(courses))
    );
  }
}
