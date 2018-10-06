import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the FirstLetterUpperCasePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'firstLetterUpperCase',
})
export class FirstLetterUpperCasePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {

    return value.charAt(0).toUpperCase() + value.substring(1).toLowerCase();
  }
}
