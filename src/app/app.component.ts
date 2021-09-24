import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CvFacile';
  plus=false;
  text:string= "VOIR PLUS";

montrePlus(){
  if(this.plus===false){
      this.plus=true;
     this.text="VOIR MOIN";
  }else{
    this.text="VOIR PLUS";
    this.plus=false;

  }

}


}
