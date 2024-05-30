import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {

  @Input({
    required: true
  })
  course: Course;

  @Input({
    required: true
  })
  index: number;

  /**
  Emite o evento do tipo Course, que será capturado por quem chamar o método
  que emite esse evento (onCourseViewed, nesse caso).

  Ou seja, o componente pai, que chama o método onCourseViewed($event) quando usa o
  manipulador de eventos "courseSelected" do componente <course-card />, vai
  receber um evento (através da variável "$event") com o "this.course".

  Esse tipo de evento customizad não sobe na hierarquia de componentes, diferentemnte dos eventos nativos
  de clic, blur, focus, etc.

  Esse componente vai disparar um evento personalizado chamado "courseSelected" (mesmo nome do atributo),
  que será capturado pelo componente pai através do manipulador de eventos customizado de mesmo nome do atributo
  */
  @Output() // o @Output é quem faz com que o evento "saia" do componente. É possível renomear o nome do evento
  // com @Output('novoNomeDoEvento')
  courseSelected = new EventEmitter<Course>();

  onCourseViewed() {
    console.log("card component - button clicked...");
    // emite o curso atual (this.course)
    this.courseSelected.emit(this.course);
  }

  /**
   * Aplica estilos condicionalmente.
   *
   * @returns objeto de configuração
   */
  cardClasses() {
    return {'beginner': this.course.category == 'BEGINNER'}
  }

  /**
   * Aplica múltiplos estilos a um elemento.
   *
   * @returns objeto de configuração
   */
  cardStyles() {
    return {'text-decoration': 'underline'};
  }

}
