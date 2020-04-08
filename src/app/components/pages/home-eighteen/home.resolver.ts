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




      return forkJoin([countris, regions, education, employment, marital]);



    }
  }
