import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GridComponent } from './grid.component';
import { ColumnsPipe } from './columns.pipe';
import { SplitCamelCasePipe } from './splitCamelCase.pipe';
import { OrderByPipe } from './orderBy.pipe';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        GridComponent,
        ColumnsPipe,
        SplitCamelCasePipe,
        OrderByPipe
    ],
    exports: [
        GridComponent
    ]
})
export class GridModule { }