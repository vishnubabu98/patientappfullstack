import { Component } from '@angular/core';

@Component({
  selector: 'app-addpatient',
  templateUrl: './addpatient.component.html',
  styleUrls: ['./addpatient.component.css']
})
export class AddpatientComponent {

  name=""
  age=""
  place=""


  readValues=()=>{
    let data:any=
      {
        "name":this.name,
        "age":this.age,
        "place":this.place
       
      }
      console.log(data)
      

}
}
