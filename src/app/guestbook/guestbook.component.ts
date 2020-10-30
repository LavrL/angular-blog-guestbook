import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  constructor(private fb: FormBuilder, private gs: GuestbookService) { }

  public ngOnInit(): void {
    this.addForm = this.fb.group({
      author: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  public addEntry(): void {
    if (this.addForm.valid) {
      this.gs.addNewEntry(this.addForm.value);
      this.addForm.reset();
    }
  }

}
