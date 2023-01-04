import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from './app-material/app-material.module';

import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { CourseCategoryPipe } from './pipes/course-category.pipe';

@NgModule({
  declarations: [ErrorDialogComponent, CourseCategoryPipe],
  imports: [CommonModule, AppMaterialModule],
  exports: [ErrorDialogComponent, CourseCategoryPipe],
})
export class SharedModule {}
