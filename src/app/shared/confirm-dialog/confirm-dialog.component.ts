import {Component, OnInit, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-confirm-dialog',
  template: `
  <h3 mat-dialog-title>{{title}}</h3>
  <div mat-dialog-content>
    {{content}}
  </div>
  <div mat-dialog-actions>
    <button mat-raised-button type="button" color="primary" (click)="onClick(true)">确定</button>
    <button mat-dialog-close mat-button type="button" (click)="onClick(false)">取消</button>
  </div>
`,
  styles: [``]
})
export class ConfirmDialogComponent implements OnInit {

  title = '';
  content = '';

  constructor(@Inject(MAT_DIALOG_DATA) private data,
              private dialogRef: MatDialogRef<ConfirmDialogComponent>) {
  }

  ngOnInit() {
    this.title = this.data.title;
    this.content = this.data.content;
  }

  onClick(resule: boolean) {
    this.dialogRef.close(resule);
  }
}
