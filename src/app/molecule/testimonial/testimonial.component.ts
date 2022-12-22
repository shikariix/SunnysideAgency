import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent {
  @Input() image!: string;
  @Input() name!: string;
  @Input() role!: string;
  @Input() quote: string = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit officiis esse earum libero cupiditate!";
}
