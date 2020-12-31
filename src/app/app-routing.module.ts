import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcademicYearComponent } from './academic-year/academic-year.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AttendenceListComponent } from './attendence-list/attendence-list.component';
import { ClassRoutineComponent } from './class-routine/class-routine.component';
import { CoursesComponent } from './courses/courses.component';
import { DepartmentComponent } from './department/department.component';
import { LandingComponent } from './landing/landing.component';
import { NoticeBoardComponent } from './notice-board/notice-board.component';
import { ParentDashboardComponent } from './parent-dashboard/parent-dashboard.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { StudDashboardComponent } from './stud-dashboard/stud-dashboard.component';
import { StudListComponent } from './stud-list/stud-list.component';
import { StudProfileComponent } from './stud-profile/stud-profile.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { TeacherProfileComponent } from './teacher-profile/teacher-profile.component';
import { TransportListComponent } from './transport-list/transport-list.component';
import { TransportComponent } from './transport/transport.component';


const routes: Routes = [
    { path: 'admin-dash', component: AdminDashboardComponent },
    { path: 'attend-list', component: AttendenceListComponent },
    { path: 'notice-board', component: NoticeBoardComponent },
    { path: 'parent-dash', component: ParentDashboardComponent },
    { path: 'stud-dash', component: StudDashboardComponent },
    { path: 'stud-list', component: StudListComponent },
    { path: 'stud-profile', component: StudProfileComponent },
    { path: 'teacher-list', component: TeacherListComponent },
    { path: 'teacher-profile', component: TeacherProfileComponent },
    { path: 'transport', component: TransportComponent },
    { path: 'transport-list', component: TransportListComponent },
    { path: 'class-routine', component: ClassRoutineComponent },
    { path: 'add-stud', component: AddStudentComponent },
    { path: 'landing', component: LandingComponent },
    { path: 'sign-in', component: SignInComponent },
    { path: 'sign-up', component: SignUpComponent },
    { path: 'academic-year', component: AcademicYearComponent },
    { path: 'courses', component: CoursesComponent },
    { path: 'department', component: DepartmentComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
