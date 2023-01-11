import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

import { CoursesService } from '../../services/courses.service';
import { Course } from '../../../models/course';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent implements OnInit {
  form = this.formBuilder.group({
    _id: [''],
    name: [''],
    category: [''],
  });

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: CoursesService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute
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

  ngOnInit(): void {
    const course: Course = this.route.snapshot.data['course'];
    this.form.setValue({
      _id: course._id,
      name: course.name,
      category: course.category,
    });
  }
}
