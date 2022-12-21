import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-paragraph-title',
  templateUrl: './paragraph-title.component.html',
  styleUrls: ['./paragraph-title.component.css']
})
export class ParagraphTitleComponent {
  @Input() text!: string;
  @Input() color!: string;
}
