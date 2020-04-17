import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {SubmitService} from '../submit.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  stringdata: any;

  constructor(private submitservice: SubmitService) { }

  ngOnInit(): void {
  }

  onClickSubmit(form: NgForm){
    console.log(form.value);
    this.stringdata = JSON.stringify(form.value);
    console.log(this.stringdata);
    this.submitservice.enroll(form)
    .subscribe(
      data => console.log('Success!', data),
      error => console.log('Error', error)
    )

  }

}
