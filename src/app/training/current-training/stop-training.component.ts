import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material'


@Component({
    template: `<section>
    <h1 mat-dialog-title>Are sure you want to stop training?</h1>
    <mat-dialog-content>
    <p>You already have {{ progressData.progress }}%</p>   
    </mat-dialog-content>
    <mat-dialog-actions>
    <button mat-dialog [mat-dialog-close]="true">Yes</button>
    <button mat-dialog [mat-dialog-close]="false">No</button>
    </mat-dialog-actions>
    </section>`,
    selector: 'stop-training-dialog'
})
export class StopTrainingComponent {

    constructor(@Inject(MAT_DIALOG_DATA) public progressData: any) {}

}