import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { CoursesComponent } from './components/courses/courses.component';
import { UpdateCourseComponent } from './components/update-course/update-course.component';

const routes: Routes = [
  { path: '', pathMatch: 'full' ,redirectTo: 'courses' },
  { path: 'courses', component: CoursesComponent },
  { path: 'add-course', component: AddCourseComponent },
  { path: 'edit-course/:id', component: UpdateCourseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
