import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GuestBook } from './shared/guestbook.model';
import { GuestbookService } from './shared/guestbook.service';

@Component({
  selector: 'app-guestbook',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './guestbook.component.html',
  styleUrls: ['./guestbook.component.scss']
})
export class GuestbookComponent implements OnInit {
  public guestBook: GuestBook[] = [];
  public addForm: FormGroup;
  public submitted = false;

  constructor(private fb: FormBuilder, private gs: GuestbookService) { }

  public ngOnInit(): void {
    this.addForm = this.fb.group({
      author: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  get f() { return this.addForm.controls; }

  public onAddEntry(): void {
    this.submitted = true;
    console.log('submitted = ', this.submitted);
    if (this.addForm.valid) {
      this.gs.addNewEntry(this.addForm.value);
      this.addForm.reset();
      this.submitted = false;
    }
  }

}
