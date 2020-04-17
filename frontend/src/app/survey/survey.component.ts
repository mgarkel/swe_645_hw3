import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {SubmitService} from '../submit.service';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  stringdata: any;

  constructor(private submitservice: SubmitService, private http: HttpClient) { }

  ngOnInit(): void {
  }

  onClickSubmit(form: NgForm){
    var checkbox = "";
    var radio = 0;
    var dropdown = 0;
    if(form.value.students == true){
      checkbox = checkbox.concat("0, ");
    }
    if(form.value.location == true){
      checkbox = checkbox.concat("1, ");
    }
    if(form.value.campus == true){
      checkbox = checkbox.concat("2, ");
    }
    if(form.value.atmosphere == true){
      checkbox = checkbox.concat("3, ");
    }
    if(form.value.dormrooms == true){
      checkbox =  checkbox.concat("4, ");
    }
    if(form.value.sports == true){
      checkbox = checkbox.concat("5, ");
    }

    if(form.value.interested == "friends"){
      radio = 0;
    }
    if(form.value.interested == "television"){
      radio = 1;
    }
    if(form.value.interested == "internet"){
      radio = 2;
    }
    if(form.value.interested == "other"){
      radio = 3;
    }

    if(form.value.refer == "vlikely"){
      dropdown = 0;
    }
    if(form.value.refer == "likely"){
      dropdown = 1;
    }
    if(form.value.refer == "ulikely"){
      dropdown = 2;
    }
    var surveyJson = 
    {
        "firstname": form.value.FirstName,
        "lastname": form.value.LastName,
        "streetaddress":form.value.StreetAddress,
        "city":form.value.City,
        "state":form.value.State,
        "zip":form.value.Zip,
        "phone":form.value.Tel,
        "email":form.value.Email,
        "checkbox":checkbox,
        "radio":radio,
        "dropdown":dropdown
    };
    console.log(form.value.location);
    this.stringdata = JSON.stringify(surveyJson);
    console.log(this.stringdata);
    this.submitservice.enroll(form)
    .subscribe(
      data => console.log('Success!', data),
      error => console.log('Error', error)
    )

  }

}
