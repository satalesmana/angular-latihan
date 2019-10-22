import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PeminjamanService {
  public baseUrl:string;

  constructor(private http:HttpClient) {
    this.baseUrl = 'http://localhost/lp3i/angularoop/server/index.php/api/'
  }

  public add(data:any):Observable<any> {
	  return Observable.create(observer => {
      this.http.post(this.baseUrl+'prosespinjam', JSON.stringify(data))
        .subscribe((respond:any) => {
          observer.next(respond);
          observer.complete();
        return {unsubcribe() {respond}};
	    });
	  });
  }
}
