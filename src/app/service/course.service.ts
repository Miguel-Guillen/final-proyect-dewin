import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  api = 'http://localhost/xampp/Courses/'

  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    return this.http.get(this.api);
  }

  getOne(id: string): Observable<any> {
    return this.http.get(this.api + '?consultar=' + id);
  }

  add(course: any): Promise<any> {
    return this.http.post(this.api + '?insertar=1', course).toPromise();
  }

  update(course: any, id: string): Promise<any> {
    return this.http.post(this.api + '?actualizar=' + id, course).toPromise();
  }

  delete(id: string): Promise<any> {
    return this.http.get(this.api + '?borrar=' + id).toPromise();
  }

}
