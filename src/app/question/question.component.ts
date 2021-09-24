import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  reponse:boolean=false


  constructor() { }

  ngOnInit(): void {
  }

  reponse1(){
    if(this.reponse===false){
      this.reponse=true;
    }else{
      this.reponse=false;
    }

  }


  }







