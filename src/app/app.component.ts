import { COURSES } from './../../db-data';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseCardComponent } from './course-card/course-card.component';

import { Course } from './model/course';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CourseCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  courses = COURSES;

  onCourseSelected(course: Course) {
    console.log('App-component-triggered from card view', course);
  }
}
