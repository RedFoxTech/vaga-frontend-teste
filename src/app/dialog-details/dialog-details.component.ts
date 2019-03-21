import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialog-details',
  templateUrl: './dialog-details.component.html',
  styleUrls: ['./dialog-details.component.scss']
})
export class DialogDetailsComponent implements OnInit {
  pokemon = [];
  constructor(public dialogRef: MatDialogRef<DialogDetailsComponent>) { }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

}
