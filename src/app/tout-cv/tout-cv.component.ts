import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tout-cv',
  templateUrl: './tout-cv.component.html',
  styleUrls: ['./tout-cv.component.css']
})
export class ToutCVComponent implements OnInit {
  autre=false;
  VoirAutre :string="Voir Autre "


  constructor() { }

  ngOnInit(): void {
  }
  autrefunction(){
    if(this.autre==false){
      this.autre=true;
      this.VoirAutre="Voir Moin"
    }else{
      this.autre=false;
      this.VoirAutre="Voir Autre";
    }
  }

}
