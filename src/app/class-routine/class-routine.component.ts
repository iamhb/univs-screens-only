import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-class-routine',
  templateUrl: './class-routine.component.html',
  styleUrls: ['./class-routine.component.scss']
})
export class ClassRoutineComponent implements OnInit {

  classrouteObj = {
    subjectName: "",
    subjectType: "",
    selectClass: "",
    selectCode: "",

  };


  constructor(public api: ApiService) { }

  ngOnInit() {
  }


  classrouteForm() {
    console.log(this.classrouteObj)

    this.api.insert(this.classrouteObj).subscribe((data: any) => {
      console.log(data)
    })

  }

  Reset() {
    this.classrouteObj = {
      subjectName: "",
      subjectType: "",
      selectClass: "",
      selectCode: "",
    };
  }


}


