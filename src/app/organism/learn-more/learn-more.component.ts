import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-learn-more',
  templateUrl: './learn-more.component.html',
  styleUrls: ['./learn-more.component.scss']
})
export class LearnMoreComponent {
  @Input() image!: string;
  @Input() imageLeft: boolean = false;
  @Input() color!: string;
}
