import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

export interface Poke {
  info: any;
  name: string;
}
@Component({
  selector: 'app-dialog-details',
  templateUrl: './dialog-details.component.html',
  styleUrls: ['./dialog-details.component.scss']
})
export class DialogDetailsComponent implements OnInit {
  pokemon: Poke;
  constructor(public dialogRef: MatDialogRef<DialogDetailsComponent>) { }

  ngOnInit() {}

  close() {
    this.dialogRef.close();
  }

}
