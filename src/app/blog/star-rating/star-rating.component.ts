import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {
  @Input() public rating = 2;
  @Input() public starCount = 5;
  @Input() public color: string;
  public ratingArr = [];

  @Output() public ratingUpdated = new EventEmitter();

  constructor() { }

  public ngOnInit(): void {
    this.ratingArr = Array.from(Array(10).keys());
  }

  public onClick(rating: number): void {
    this.ratingUpdated.emit(rating);
  }

  public showIcon(index: number): string {
    if (this.rating >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }
}
