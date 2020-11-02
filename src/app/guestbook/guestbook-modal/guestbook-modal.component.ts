import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GuestbookModule } from '../guestbook.module';

@Component({
  selector: 'app-guestbook-modal',
  templateUrl: './guestbook-modal.component.html',
  styleUrls: ['./guestbook-modal.component.scss']
})
export class GuestbookModalComponent implements OnInit {

  public name:string;

  constructor(private dialogRef: MatDialogRef<GuestbookModalComponent>,
    @Inject(MAT_DIALOG_DATA) private data: { name: string }) {
    this.name = data.name;
  }

  ngOnInit(): void {
  }

  onCancel(): void {
    this.dialogRef.close()
  }

  onSubmit(): void {
    this.dialogRef.close();
  }

}
