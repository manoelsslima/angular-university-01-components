import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('cardRef')
  card: CourseCardComponent;

  @ViewChild('container')
  containerDiv: ElementRef;

  @ViewChild('cardHtml', {read: ElementRef})
  elementoHTML: ElementRef;

  @ViewChild('courseImage', {read: ElementRef})
  elementoImage: ElementRef;

  courses: Course[] = COURSES;

  constructor() {
    console.log("containerDiv", this.containerDiv);
  }

  ngAfterViewInit(): void {
    console.log("containerDiv", this.containerDiv);
    console.log("elementoImage", this.elementoImage);
  }

  /*
  pega o evento que foi emitido pelo botão View Couse do componente <course-card />
  */
  onCourseSelected(course: Course) {
    console.log("onCourseSelected");
    console.log(this.card);
    console.log(this.containerDiv);
    console.log(this.elementoHTML);
  }

  /*
  No @for pode ser usada a sintaxe simplificada:

  track course.id

  que identifica unicamente o objeto. A tracking function é mais utilizada
  quando é difícil identificar unicamente um objeto da lista.

  No caso de strings, a própria string pode ser usada como track.

  Em último caso, pode usar um track pelo $index (track $index)
  */
  trackCourse(index: number, course: Course) {
    return course.id;
  }

}
