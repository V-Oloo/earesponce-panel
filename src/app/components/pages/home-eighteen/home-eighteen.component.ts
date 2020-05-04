import { HomeService } from './../../services/home.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MustMatch } from './password.validator';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'lodash'
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home-eighteen',
  templateUrl: './home-eighteen.component.html',
  styleUrls: ['./home-eighteen.component.scss']
})
export class HomeEighteenComponent implements OnInit {
  registrationForm: FormGroup;
  loginForm: FormGroup;
  constructor(private fb: FormBuilder,
              private service: HomeService,
              private _route: ActivatedRoute,
              private datePipe: DatePipe,
              private router: Router,
              private toastr: ToastrService
              ) { }
  public submitted = false;
  public loading = false;
  showForms = true;
  message: string;
  error: string;
  lmessage: string;
  lerror: string;
  today = new Date();
  days;
  towns;
  region_towns
  get fname() {
    return this.registrationForm.get('first_name');
  }

  get lname() {
    return this.registrationForm.get('last_name');
  }

  get gender() {
    return this.registrationForm.get('gender');
  }

  get day() {
    return this.registrationForm.get('day');
  }

  get month() {
    return this.registrationForm.get('month');
  }

  get year() {
    return this.registrationForm.get('year');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get vemail() {
    return this.registrationForm.get('verify_email');
  }

  get cid() {
    return this.registrationForm.get('country_id');
  }

  get rid() {
    return this.registrationForm.get('region_id');
  }

  get phone() {
    return this.registrationForm.get('phone_no');
  }

  get edl() {
    return this.registrationForm.get('education_level_id');
  }

  get esi() {
    return this.registrationForm.get('employment_status_id');
  }

  get msi() {
    return this.registrationForm.get('marital_status_id');
  }

  get code() {
    return this.registrationForm.get('country_code');
  }

  get pass() {
    return this.registrationForm.get('password');
  }

  get cpass() {
    return this.registrationForm.get('confirm_pass');
  }

  get town() {
    return this.registrationForm.get('town');
  }

  get password() {
    return this.loginForm.get('password');
  }

  get mail() {
    return this.loginForm.get('email');
  }

  get category() {
    return this.registrationForm.get('sector_category_id');
  }

  get sector() {
    return this.registrationForm.get('sector_id');
  }

  get health() {
    return this.registrationForm.get('health_care');
  }

  get other() {
    return this.registrationForm.get('other_category');
  }

  get races() {
    return this.registrationForm.get('race_id');
  }

  get oraces() {
    return this.registrationForm.get('other_race');
  }

  countries; regions; empState; maritalState; education; filterRegions; healthCartegory; race; years; months; dais;

  urlParams: any = {};

  showHealthcareFields = false
  showOtherCategoryField = false
  showRaceField = false
  showOtherRacesField = false

  ngOnInit() {
    this.urlParams.ref = this._route.snapshot.queryParamMap.get('ref');
    this.getDashboardData();
    this.registrationForm = this.fb.group({
        first_name: ['', [Validators.required, Validators.pattern("[a-zA-Z ]*")]],
        last_name: ['', [Validators.required, Validators.pattern("[a-zA-Z ]*")]],
        gender: ['', [Validators.required]],
        day: ['', [Validators.required]],
        month: ['', [Validators.required]],
        year: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email ]],
        verify_email: ['', [Validators.required]],
        country_id: ['', [Validators.required]],
        region_id: ['', [Validators.required]],
        phone_no: ['', [Validators.required]],
        education_level_id: ['', [Validators.required]],
        employment_status_id: ['', [Validators.required]],
        town: ['', [Validators.required]],
        marital_status_id: ['', [Validators.required]],
        country_code: [{value: '', disabled: true}],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirm_pass: ['', [Validators.required]],
        health_care: ['', [Validators.required]],
        sector_id: ['', [Validators.required]],
        sector_category_id: ['', [Validators.required]],
        other_category: [''],
        race_id: [''],
        other_race: [''],
        terms: ['',[Validators.requiredTrue]],
      },{validators:[MustMatch('password', 'confirm_pass'), MustMatch('email','verify_email')]});

      this.loginForm = this.fb.group({
        email: ['', [Validators.required]],
        password: ['', [Validators.required]],
      });

  }

  getDashboardData() {
    this._route.data.subscribe((data: {stats : any}) => {
        this.countries = data.stats[0];
        this.regions = data.stats[1];
        this.education = data.stats[2];
        this.empState = data.stats[3];
        this.maritalState = data.stats[4]
        this.towns = data.stats[5]
        this.healthCartegory = data.stats[6];
        this.race = data.stats[7];
        this.years = data.stats[8];
        this.months = data.stats[9];
        this.dais = data.stats[10];
        console.log(this.race)
        console.log(this.towns)
    });
  }

  getCountryRegion(event: any) {
     const race = this.registrationForm.controls['race_id']

     const value = event.target.value
     var splitted = value.split(" ",2)
     var id = +splitted[1]
     this.filterRegions = _.filter(this.regions, { 'country_id': id });
     this.selectedCountry(id);

     if (id === 197) {
        this.showRaceField = true
        // this.registrationForm.get('country_id').valueChanges.subscribe(country => {
        //     console.log(country)
        //     race.setValidators([Validators.required]);
        //     race.updateValueAndValidity();
        // });

    } else {
        this.showRaceField = false
        // this.registrationForm.get('country_id').valueChanges.subscribe(country => {
        //     race.setValidators(null);
        //     race.updateValueAndValidity();
        // });

    }
  }

  otherRaces(event) {
   const value = event.target.value
   var splitted = value.split(" ",2)
   var id = +splitted[1]
   if (id === 5) {
       this.showOtherRacesField = true;
   } else {
    this.showOtherRacesField = false;
   }
  }

  getRegionTown(value) {
    const target = value
    var splitted = target.split(" ",2)
    var id = +splitted[1]
    this.region_towns = _.filter(this.towns, { 't_region_id': id });
 }


  selectedCountry(id: number) {
    const result = _.find(this.countries, {'country_id' : id});
    const code = result.phone_code;
    this.registrationForm.patchValue({
     country_code: code,
    });

   }

   setradio(value) {

    const category = this.registrationForm.controls['sector_category_id']
    const sector = this.registrationForm.controls['sector_id']

    if(value === '1'){
        this.showHealthcareFields = true

        this.registrationForm.get('health_care').valueChanges.subscribe(health_care => {
             category.setValidators([Validators.required]);
             category.updateValueAndValidity();
             sector.setValidators([Validators.required]);
             sector.updateValueAndValidity();
        });
    } else {
        this.showHealthcareFields = false
        this.showOtherCategoryField = false,
        this.registrationForm.get('health_care').valueChanges.subscribe(health_care => {
            category.setValidators(null);
            category.updateValueAndValidity();
            sector.setValidators(null);
            sector.updateValueAndValidity();
       });

    }

   }

   selectOther(event) {
    const other_category = this.registrationForm.controls['other_category']

    const target = event.target.value
    var splitted = target.split(" ",2)
    var id = +splitted[1]
    console.log(event.target.value)

     if (id === 11) {
        this.showOtherCategoryField = true;
     } else {
        this.showOtherCategoryField = false;
     }


    //   this.registrationForm.get('sector_category_id').valueChanges.subscribe(s => {
    //       if (s) {
    //         if(id === 11) {
    //             //this.showOtherCategoryField = true,
    //           other_category.setValidators([Validators.required]);
    //            other_category.updateValueAndValidity();
    //           console.log("required set")

    //         } else if(id !== 11) {
    //             //this.showOtherCategoryField = false,

    //           other_category.setValidators(null);
    //           other_category.updateValueAndValidity();
    //         }

    //       }

    //    });

   }

  registerUser() {
    this.submitted = true;
     if (this.registrationForm.invalid) {
        this.loading = false;
         return;
      }
        this.loading = true;

        const first_name = this.registrationForm.value.first_name
        const last_name =  this.registrationForm.value.last_name
        const gender  =    this.registrationForm.value.gender
        const dob   = this.datePipe.transform(this.registrationForm.value.dob,'yyyy-MM-dd');
        const email= this.registrationForm.value.email
        const country_id= this.registrationForm.value.country_id
        const region_id= this.registrationForm.value.region_id
        const phone_no= this.registrationForm.value.phone_no
        const education_level_id= this.registrationForm.value.education_level_id
        const employment_status_id= this.registrationForm.value.employment_status_id
        const marital_status_id= this.registrationForm.value.marital_status_id
        const country_code= this.registrationForm.getRawValue().country_code
        const password= this.registrationForm.value.password
        const town = this.registrationForm.value.town
        const health_care = this.registrationForm.value.health_care
        const sector_id = this.registrationForm.value.sector_id
        const sector_category_id = this.registrationForm.value.sector_category_id
        const other_category = this.registrationForm.value.other_category
        const number = country_code + phone_no
        const race = this.registrationForm.value.race_id
        const other_race = this.registrationForm.value.other_race
        const day = this.registrationForm.value.day
        const month = this.registrationForm.value.month
        const year = this.registrationForm.value.year
        const ref = this.urlParams.ref

        let data = {first_name: first_name,last_name: last_name,gender: gender,dob_day: day,dob_month: month,dob_year: year,email:email,
                      country_id: country_id,region_id: region_id,phone_no: number,education_level_id: education_level_id,
                      employment_status_id: employment_status_id,marital_status_id: marital_status_id,
                      password: password, town: town, ref: ref, health_care: health_care, sector_id: sector_id,
                      sector_category_id: sector_category_id, other_category: other_category, race_id:race, other_race: other_race
                    }

       this.service.register(data).subscribe(
           res => {

               this.loading = false,
               this.showForms = false;
              this.router.navigate(['/success'])
               console.log(res);
               this.registrationForm.reset();
            },
           err => {
               this.loading = false
               if (err.error.message){
                   this.error = err.error.message
                   this.toastr.error('Error!', this.error, {timeOut: 8000, closeButton: true});
               } else {
                   this.error = "An Error occured please try again"
                   this.toastr.error('Error!', this.error, {timeOut: 8000, closeButton: true});
               }

            }

           );
  }

}
