import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guestbook',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './guestbook.component.html',
  styleUrls: ['./guestbook.component.scss']
})
export class GuestbookComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
