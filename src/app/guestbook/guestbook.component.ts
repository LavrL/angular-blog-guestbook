import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GuestBook } from './shared/guestbook.model';
import { GuestBookState } from './shared/guestbook.reducer';
import { Store } from '@ngrx/store';
import { addNewMessage } from './shared/guestbook.action';

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

  constructor(private fb: FormBuilder, private store: Store<GuestBookState>) { }

  public ngOnInit(): void {
    this.addForm = this.fb.group({
      author: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(20)]]
    });
  }

  public get f(): { [key: string]: AbstractControl } { return this.addForm.controls; }

  public onAddEntry(): void {
    this.submitted = true;
    if (this.addForm.valid) {
      // this.gs.addNewEntry(this.addForm.value);
      this.store.dispatch(addNewMessage({ guestBookMessage: this.addForm.value }));
      this.addForm.reset();
      this.submitted = false;
    }
  }

}
