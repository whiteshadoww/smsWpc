import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
    selector: 'app-preview-user-image',
    templateUrl: './preview-user-image.component.html',
    styleUrls: ['./preview-user-image.component.css']
})
export class PreviewUserImageComponent {

    constructor(public dialogRef: MatDialogRef<PreviewUserImageComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {

    }

    onNoClick(): void {
        this.dialogRef.close();
    }

}
