import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent implements OnInit {
  form = this.formBuilder.group({
    name: [''],
    category: [''],
  });

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: CoursesService,
    private snackBar: MatSnackBar,
    private location: Location
  ) {}

  onSubmit() {
    this.service.saveCourse(this.form.value).subscribe({
      next: () => {
        this.onSucess();
      },
      error: () => {
        this.onError();
      },
    });
  }

  private onError() {
    this.snackBar.open('Error saving course.', '', {
      duration: 3000,
    });
  }

  private onSucess() {
    this.snackBar.open('Course saved successfully.', '', {
      duration: 3000,
    });
    this.onCancel();
  }

  onCancel() {
    this.location.back();
  }

  ngOnInit(): void {}
}
