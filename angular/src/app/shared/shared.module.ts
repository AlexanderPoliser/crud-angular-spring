import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from './app-material/app-material.module';

import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { CourseCategoryPipe } from './pipes/course-category.pipe';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';

@NgModule({
  declarations: [
    ErrorDialogComponent,
    CourseCategoryPipe,
    ConfirmationDialogComponent,
  ],
  imports: [CommonModule, AppMaterialModule],
  exports: [
    ErrorDialogComponent,
    CourseCategoryPipe,
    ConfirmationDialogComponent,
  ],
})
export class SharedModule {}
