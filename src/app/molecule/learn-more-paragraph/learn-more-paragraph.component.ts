import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-learn-more-paragraph',
  templateUrl: './learn-more-paragraph.component.html',
  styleUrls: ['./learn-more-paragraph.component.scss']
})
export class LearnMoreParagraphComponent {
  @Input() title!: string;
  @Input() text!: string;
  @Input() color!: string;
}
