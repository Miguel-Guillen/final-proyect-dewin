import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/service/course.service';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent implements OnInit {
  form: FormGroup
  course = {};
  send = false;
  id = '';
  
  constructor(private _service: CourseService, private formB: FormBuilder,
    private route: ActivatedRoute, private router: Router) {
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
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.getCourse();
  }

  getCourse(){
    this._service.getOne(this.id).subscribe((res: any) => {
      const course = res[0];
      this.form.setValue({
        nombre: course.nombre,
        descripcion: course.descripcion,
        tipo: course.tipo,
        costo: course.costo,
        duracion: course.duracion,
        autor: course.autor
      })
    })
  }

  updateCourse(value: any){
    const course = value;
    this._service.update(course, this.id).then(() => {
      this.form.reset();
      this.router.navigate(['/courses']);
    })
  }
}
