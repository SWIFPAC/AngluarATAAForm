import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root' // This makes the service available throughout the app
})
export class GetAtaaRecordsServiceService {

  private addRecordUri = 'http://localhost:8080/create-record';
  private getAllRecordsUri = 'http://localhost:8080/get-all-records';
  constructor( private http : HttpClient) { }


  getRecords(): Observable<any[]> {
    return this.http.get<any[]>(this.getAllRecordsUri);
  }

  addRecords(AtaaRecord: any): Observable<any> {
    return this.http.post<any>(this.addRecordUri, AtaaRecord);
  }



}
