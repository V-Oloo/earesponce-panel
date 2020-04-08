import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    registrationForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.registrationForm = this.fb.group({
        first_name: ['', [Validators.required]],
        last_name: ['', [Validators.required]],
        gender: ['', [Validators.required]],
        dob: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email ]],
        verify_email: ['', [Validators.required, Validators.email ]],
        country_id: ['', [Validators.required]],
        region_id: ['', [Validators.required]],
        phone_number: ['', [Validators.required]],
        education_level_id: ['', [Validators.required]],
        employment_status_id: ['', [Validators.required]],
        marital_status_id: ['', [Validators.required]],
        country_code: ['', [Validators.required]],
        password: ['', [Validators.required]],
        confirm_pass: ['', [Validators.required]],
      });
  }

}
