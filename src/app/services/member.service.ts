import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  public baseUrl:string;

  constructor(private http:HttpClient) { 
    this.baseUrl = 'http://localhost/lp3i/angularoop/server/index.php/api/'
  }

  public list():Observable<any> {
    return Observable.create(observer => {
        this.http.get(this.baseUrl+'get/member').subscribe((respond:any) => {
            let outputs:any = [];
            if (respond.data.length > 0) {
              outputs = respond.data
            }
            observer.next(outputs);
            observer.complete(outputs);
           return {unsubcribe() {outputs}};
        });  
    });
  }
}
