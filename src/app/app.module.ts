import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { StudDashboardComponent } from './stud-dashboard/stud-dashboard.component';
import { ParentDashboardComponent } from './parent-dashboard/parent-dashboard.component';
import { StudListComponent } from './stud-list/stud-list.component';
import { StudProfileComponent } from './stud-profile/stud-profile.component';
import { AttendenceListComponent } from './attendence-list/attendence-list.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { TeacherProfileComponent } from './teacher-profile/teacher-profile.component';
import { TransportComponent } from './transport/transport.component';
import { NoticeBoardComponent } from './notice-board/notice-board.component';
import { TransportListComponent } from './transport-list/transport-list.component';
import { ClassRoutineComponent } from './class-routine/class-routine.component';
import { AddStudentComponent } from './add-student/add-student.component';
@NgModule({
    declarations: [
        AppComponent,
        AdminDashboardComponent,
        StudDashboardComponent,
        ParentDashboardComponent,
        StudListComponent,
        StudProfileComponent,
        AttendenceListComponent,
        TeacherListComponent,
        TeacherProfileComponent,
        TransportComponent,
        NoticeBoardComponent,
        TransportListComponent,
        ClassRoutineComponent,
        AddStudentComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
