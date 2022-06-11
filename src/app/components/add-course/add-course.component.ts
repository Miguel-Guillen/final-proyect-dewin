import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourseService } from 'src/app/service/course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  form: FormGroup
  send = false;

  constructor(private _service: CourseService, private formB: FormBuilder) {
    this.form = this.formB.group({
      nombre: ["", Validators.required],
      descripcion: ["", Validators.required],
      tipo: ["", Validators.required],
      costo: [0, Validators.required],
      duracion: [0, Validators.required],
      autor: ["", Validators.required]
    })
  }

  ngOnInit(): void {
  }

  addCourse(value: any){
    this._service.add(value).then(() => {
      this.form.reset()
      this.send = true;
      this.wait();
    })
  }

  wait() {
    setTimeout(() => {
      this.send = false;
    }, 1500)
  }
}
