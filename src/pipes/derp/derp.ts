import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the DerpPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'derp',
})
export class DerpPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    return Array.from(value);
  }
}
