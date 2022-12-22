import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-on-image',
  templateUrl: './text-on-image.component.html',
  styleUrls: ['./text-on-image.component.scss']
})
export class TextOnImageComponent {
  @Input() image!: string;
  @Input() title!: string;
  @Input() text!: string;
  @Input() textColor: string = "var(--very-dark-blue)";
}
