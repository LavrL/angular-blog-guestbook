import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-guestbook-modal',
  templateUrl: './guestbook-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./guestbook-modal.component.scss']
})
export class GuestbookModalComponent implements OnInit {

  public name: string;

  constructor(private dialogRef: MatDialogRef<GuestbookModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { name: string }) {
    this.name = data.name;
  }

  public ngOnInit(): void {
  }

  public onCancel(): void {
    this.dialogRef.close()
  }

  public onSubmit(): void {
    this.dialogRef.close();
  }

}
