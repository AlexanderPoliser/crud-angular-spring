import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'courseCategory',
})
export class CourseCategoryPipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case 'Frontend':
        return 'code';
      case 'Backend':
        return 'computer';
    }
    return 'code';
  }
}
