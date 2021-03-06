import { HomeService } from '../../services/home.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable, forkJoin } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
  export class HomeResolver implements Resolve<any> {

    constructor(
      private service: HomeService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {


       const countris = this.service.getCountries();

       const regions = this.service.getRegions();

       const education = this.service.getEduLevals();

       const employment = this.service.getEmpStatus();

       const marital = this.service.getMaritalStatus();

       const towns = this.service.getTowns();

       const health = this.service.getHealthCare();

       const race = this.service.getRace();

       const year = this.service.getYear();

       const months = this.service.getMonths();

       const days = this.service.getDays()




      return forkJoin([countris, regions, education, employment, marital, towns, health, race, year, months, days]);



    }
  }
