import { Pipe, PipeTransform } from '@angular/core';
import * as _ from "lodash";

@Pipe({
  name: "orderBy"
})
export class OrderByPipe implements PipeTransform {
    transform(rows, column, direction = 'desc') {
        return _.orderBy(rows, [row => row[column].toLowerCase()], [direction]);
    }
}