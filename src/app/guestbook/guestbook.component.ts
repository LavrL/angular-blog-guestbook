import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GuestBook } from './shared/guestbook.model';
import { GuestbookService } from './shared/guestbook.service';

@Component({
  selector: 'app-guestbook',
  //changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './guestbook.component.html',
  styleUrls: ['./guestbook.component.scss']
})
export class GuestbookComponent implements OnInit {
  public guestBook: Array<GuestBook> = [];
  addForm: FormGroup;

  constructor(public fb: FormBuilder, public gs: GuestbookService) { }

  ngOnInit(): void {
    this.addForm = this.fb.group({
      author: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  addEntry() {
    if (this.addForm.valid) this.gs.addNewEntry(this.addForm.value);
    //console.log('guestBookPosts = ', this.guestBookPosts);
  }

}
