import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the CurrencyPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'currency',
})
export class CurrencyPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    return parseFloat(value).toFixed(2)+" euros";
  }
}
