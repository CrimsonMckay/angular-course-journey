import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../model/course';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css',
})
export class CourseCardComponent {
  @Input({
    required: true,
  })
  course!: Course;

  @Output()
  courseSelected = new EventEmitter<Course>();

  onCourseViewed() {
    this.courseSelected.emit(this.course);
  }
  cardClasses() {
    if (this.course.category === 'BEGINNER') {
      return 'beginner';
    }
    return;
  }
}
