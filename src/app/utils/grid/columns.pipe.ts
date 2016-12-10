import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'columns'
})
export class ColumnsPipe implements PipeTransform{
    transform(obj, hiddenColumns = []) {
        let keys = Object.keys(obj);
        let columns = [];
        
        if (hiddenColumns.length === 0) {
            columns = keys;
            return columns;
        }

        for (let i = 0; i < keys.length; i++) {
            if (hiddenColumns.indexOf(keys[i]) === -1) {
                columns.push(keys[i]);
            } 
        }
        return columns;
    }
}