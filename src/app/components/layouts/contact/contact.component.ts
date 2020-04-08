import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
    Form: FormGroup;
  constructor(private fb: FormBuilder, private service: HomeService) { }

  public submitted = false;
  public loading = false;
  message: string;
  error: string;

  get subj() {
    return this.Form.get('subject');
  }

  get name() {
    return this.Form.get('name');
  }

  get mess() {
    return this.Form.get('message');
  }

  get email() {
    return this.Form.get('email');
  }

  ngOnInit() {
      this.Form = this.fb.group({
        name: ['', [Validators.required, Validators.pattern("[a-zA-Z ]*")]],
        email: ['', [Validators.required, Validators.email]],
        subject: ['', [Validators.required]],
        message: ['', [Validators.required]],
      });
  }

  submitForm() {
      this.submitted = true

      if(this.Form.invalid){
          return
      }

      this.loading = true;
      this.service.contactUs(this.Form.value).subscribe(
          res => {
              this.loading=false,
              this.message = res.success
              this.Form.reset()},
          err => {this.loading=false,
            this.error= err.error.message
             console.log(err)}
      );
  }
}
