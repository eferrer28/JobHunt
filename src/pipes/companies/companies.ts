import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the DerpPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'companies',
})

//https://stackoverflow.com/questions/43773676/how-to-do-ngfor-loop-on-nested-json-object
// Code taken from the above link
// This lets us interate the nested loop. Convenient when having multipe objects in an array.

export class CompaniesPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: any, args?: any[]): any[] {
    // check if "routes" exists
    
    if(value) {
      // create instance vars to store keys and final output
      let keyArr: any[] = Object.keys(value),
          dataArr = [];

      // loop through the object,
      // pushing values to the return array
      keyArr.forEach((key: any) => {
          dataArr.push(value[key]);
      });
      // return the resulting array
      console.log("for me to poop on");
      console.log(dataArr);
      return dataArr;
    }
}
}

