import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: "orderby"
})
export class OrderByPipe implements PipeTransform {
    /*
        arrayOfObjects represents a data of a grid.
        The following function is used to sort columns in the grid.
    */
    transform(arrayOfObjects, column = 'firstName', direction = 'desc') {
        arrayOfObjects.sort((a, b) => {
            let _a = a[column].toLowerCase();
            let _b = b[column].toLowerCase();
            if (_a < _b) {
                return direction === 'desc' ? -1 : 1;
            } else if (_a > _b) {
                return direction === 'desc' ? 1 : -1;
            } else {
                return 0;
            }
        });
        return arrayOfObjects;
    }
}