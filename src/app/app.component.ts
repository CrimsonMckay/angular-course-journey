import { COURSES } from './../../db-data';
import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  viewChild,
  ViewChildren,
} from '@angular/core';
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
export class AppComponent implements AfterViewInit {
  courses = COURSES;
  //learning pipes
  title = COURSES[0].description;
  price = 9.99;
  startDate = new Date(2000, 0, 1);

  @ViewChildren(CourseCardComponent, { read: ElementRef })
  card!: QueryList<CourseCardComponent>;

  constructor() {}
  ngAfterViewInit(): void {
    this.card.changes.subscribe((card) => console.log(card));
  }
  onAddCourse() {
    this.courses.push({
      id: 9,
      description: 'Angular Architecture Course',
      longDescription:
        'Learn the core RxJs Observable Pattern as well and many other Design Patterns for building Reactive Angular Applications.',
      iconUrl:
        'https://s3-us-west-1.amazonaws.com/angular-academy/blog/images/rxjs-reactive-patterns-small.png',
      category: 'BEGINNER',
    });
  }
  onCourseSelected(course: Course) {
    //console.log('App-component-triggered from card view', this.card);
    console.log(this.card);
  }
}
