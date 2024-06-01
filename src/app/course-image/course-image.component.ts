import { AfterViewInit, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'course-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-image.component.html',
  styleUrl: './course-image.component.css'
})
export class CourseImageComponent {

  @Input('src') // nome que será dado um atributo da tag <course-image [src] />
  imageUrl: string;

}
