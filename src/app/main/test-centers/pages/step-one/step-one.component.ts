import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.scss']
})
export class StepOneComponent implements OnInit {

  form: FormGroup;

  constructor(
    private router : Router,
    private stepOneForm: FormBuilder
    ) { }

  ngOnInit() {

    this.form = this.stepOneForm.group({

      firstName : ['', Validators.required]

    });
  }

  goToStepTwo() {

    this.router.navigate(['test-centers/step-two'])
  }

}
