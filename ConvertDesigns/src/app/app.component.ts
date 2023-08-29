import { Component, OnInit ,NgModule } from '@angular/core';
import { ConvertService } from './Services/convert.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  title = 'FinalProject';
  showDropdown=false;
  public flagsdata!:any[];

  constructor( private convertService:ConvertService) {
     
    this.getflags();

 }

 toggleDropdown() {
  this.showDropdown = !this.showDropdown;
  console.log(this.showDropdown)
}

getflags(){
  
  this.convertService.getFlagsFromApi().subscribe(
    result=>{
      
       this.flagsdata=result
                
        console.log(result);
      
    })
     
    
}

}
