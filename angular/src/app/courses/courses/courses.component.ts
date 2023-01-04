import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { Course } from 'src/app/models/course';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses$: Observable<Course[]>;
  displayedColumns = ['name', 'category'];

  constructor(
    private coursesService: CoursesService,
    public dialog: MatDialog
  ) {
    this.courses$ = this.coursesService.listAllCourses().pipe(
      catchError((error) => {
        this.handleError('Loading courses error.');
        return of([]);
      })
    );
  }

  handleError(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage,
    });
  }

  ngOnInit(): void {}
}
