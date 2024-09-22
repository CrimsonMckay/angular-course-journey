import { COURSES } from './../../db-data';
import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseCardComponent } from './course-card/course-card.component';

import { Course } from './model/course';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CourseCardComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  courses = COURSES;
  //learning pipes
  title = COURSES[0].description;
  price = 9.99;
  startDate = new Date(2000, 0, 1);

  @ViewChild('cardRef', { read: ElementRef })
  card!: CourseCardComponent;

  @ViewChild('container')
  containerDiv!: ElementRef;
  onCourseSelected(course: Course) {
    //console.log('App-component-triggered from card view', this.card);
    console.log(this.card);
  }
}
