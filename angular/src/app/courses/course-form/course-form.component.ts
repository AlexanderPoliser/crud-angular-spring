import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: CoursesService,
    private snackBar: MatSnackBar,
    private location: Location
  ) {
    this.form = this.formBuilder.group({
      name: [null],
      category: [null],
    });
  }

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
