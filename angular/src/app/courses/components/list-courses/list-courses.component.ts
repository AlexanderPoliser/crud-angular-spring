import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from 'src/app/models/course';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.scss'],
})
export class ListCoursesComponent {
  @Input() courses: Course[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() delete = new EventEmitter(false);

  readonly displayedColumns = ['name', 'category', 'actions'];

  constructor() {}

  onAdd() {
    this.add.emit(true);
  }
  onEdit(course: Course) {
    this.edit.emit(course);
  }
  onDelete(course: Course) {
    this.delete.emit(course);
  }
}
