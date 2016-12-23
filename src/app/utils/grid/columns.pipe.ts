import { Pipe, PipeTransform } from '@angular/core';
import * as _ from "lodash";

@Pipe({
    name: 'columns'
})
export class ColumnsPipe implements PipeTransform{
    transform(data, hiddenColumns = []) {
        const columns = Object.keys(data);
        return _.difference(columns, hiddenColumns);
    }
}