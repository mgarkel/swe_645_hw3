import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  stringdata: any;

  constructor() { }

  ngOnInit(): void {
  }

  onClickSubmit(form: NgForm){
    console.log(form.value);
    this.stringdata = JSON.stringify(form.value);
    console.log(this.stringdata);

  }

}
