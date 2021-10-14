import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(array: any, data: string): any {
    
    if (data == undefined) return array
    const results = []

    for (const value of array) {
      if (value.name.indexOf(data) > -1) {
        results.push(value)
      }

    

    }

    return results;





  }
}
