import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-centered-text',
  templateUrl: './centered-text.component.html',
  styleUrls: ['./centered-text.component.scss']
})
export class CenteredTextComponent {
  @Input() title!: string;
  @Input() text!: string;
  @Input() color!: string;
}
