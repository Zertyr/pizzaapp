import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the FilterByCategoryPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'filterByCategory',
})
export class FilterByCategoryPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
    transform(array: any[], filter: any): any {

      if (filter.category.name == null || filter.category.name === '' || array == null) {
          return array;
      }

      return array.filter(item => {
          let shouldInclude: boolean = item.category.name === filter.category.name;
          return filter.include ? shouldInclude : !shouldInclude;
      });

  
  }
}
