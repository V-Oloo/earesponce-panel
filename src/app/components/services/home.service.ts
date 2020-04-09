import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Globals } from 'src/app/global';
import { map, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient, private global: Globals) { }

  register(data: any) {
     return this.http.post<any>(this.global._BaseUri + '/panelist/register',data);
  }

  login(data: any) {
    return this.http.post<any>(this.global._BaseUri + '/login/api', data);
  }

  contactUs(data: any) {
    return this.http.post<any>(this.global._BaseUri + '/send/message', data);
  }

  getRegions() {
    return this.http.get(this.global._BaseUri + `/country_regions`).pipe(map((data: any) => data), shareReplay());
  }

  getCountries() {
    return this.http.get(this.global._BaseUri + `/countries`).pipe(map((data: any) => data), shareReplay());
  }

  getEmpStatus() {
    return this.http.get(this.global._BaseUri + `/employment_status`).pipe(map((data: any) => data), shareReplay());
  }

  getEduLevals() {
    return this.http.get(this.global._BaseUri + `/education_levels`).pipe(map((data: any) => data), shareReplay());
  }

  getMaritalStatus() {
    return this.http.get(this.global._BaseUri + `/marital_status`).pipe(map((data: any) => data), shareReplay());
  }
}
