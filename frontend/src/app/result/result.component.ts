import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})

export class ResultComponent implements OnInit {

  result:any
  parsed : any
  stringdata:String
  constructor( private http: HttpClient) {
   }

  ngOnInit(): void {
  }
  
  httpget(){
    //this.result = this.http.get("http://ec2-3-16-181-241.us-east-2.compute.amazonaws.com:5000/");

    this.http.get("http://a9fe0e8a4834311eaa9460a514c95060-1102233544.us-east-2.elb.amazonaws.com:5000/").subscribe((data) => {
      Object.values(data).forEach(value => {
        if(value[10]){
          var checkbox = "";
          var tokenized = value[10].split(", ")
          tokenized.forEach(element => {
            if(element == "0")
            checkbox = checkbox.concat("Students, ")
            if(element == "1")
            checkbox = checkbox.concat("Location, ")
            if(element == "2")
            checkbox = checkbox.concat("Campus, ")
            if(element == "3")
            checkbox = checkbox.concat("Atmoshpere, ")
            if(element == "4")
            checkbox = checkbox.concat("Dorm Rooms, ")
            if(element == "5")
            checkbox = checkbox.concat("Sports, ")
          });
          value[10] = checkbox
        }
        if(value[11] == 0)
        value[11] = "Friends"
        if(value[11] == 1)
        value[11] = "Television"
        if(value[11] == 2)
        value[11] = "Internet"
        if(value[11] == 3)
        value[11] = "Other"
        
        if(value[12] == 0)
        value[12] = "Very Likely"
        if(value[12] == 1)
        value[12] = "Likely"
        if(value[12] == 2)
        value[12] = "Unlikely"
      });
      console.log(data)
      this.result = data
  });
    /*this.stringdata = JSON.stringify(this.result);
    console.log(this.stringdata);
    console.log(this.result.toString())
    this.stringdata = JSON.stringify(this.result);
    console.log(this.stringdata)
    console.log(this.http.get("http://ec2-3-16-181-241.us-east-2.compute.amazonaws.com:5000/").toString())*/
}
}