import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  startDate = new Date(2000, 0, 1);
  title = "ANGULAR core deep Dive";
  price = 9.992849891;
  rate = 0.67;
  name = {'nome':'Manoel', 'sobrenome': 'Lima'}
  course = {
    id: 1,
    description: "Angular Core Deep Dive",
    iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
    longDescription: "A detailed walk-through of the most important part of Angular - the Core and Common modules",
    category: 'INTERMEDIATE',
    lessonsCount: 10
  }

  courses: Course[] = COURSES;

  /*
  pega o evento que foi emitido pelo botão View Couse do componente <course-card />
  */
  onCourseSelected(course: Course) {
    console.log("App component - click event bubbled...", course);
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
