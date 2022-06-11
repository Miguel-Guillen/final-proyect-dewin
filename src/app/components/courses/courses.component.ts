import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/service/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: any = []
  send = false;
  id = ''

  constructor(private _service: CourseService, private route: Router) { }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(){
    this.courses = [];
    this._service.get().subscribe((res: any) => {
      for(const course of res){
        this.courses.push(course);
      }
    })
  }

  deleteCourse(){
    this._service.delete(this.id).then(() => {
      this.getCourses();
      this.send = true;
      this.wait();
      this.id = '';
    })
  }

  searchCourse(id: string){
    this.route.navigate([`/edit-course/${id}`]);
  }

  wait() {
    setTimeout(() => {
      this.send = false;
    }, 3000)
  }

}
