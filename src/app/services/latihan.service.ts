import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LatihanService {
  public baseUrl:string;

  constructor(private http:HttpClient) {
    this.baseUrl = 'https://satalesmana.000webhostapp.com/res/api/'
  }

  public list():Observable<any> {
    return Observable.create(observer => {
        this.http.get(this.baseUrl+'get/oop_tugas').subscribe((respond:any) => {
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

  public edit(id:string):Observable<any>{
    return Observable.create(observer=>{
      this.http.get(this.baseUrl+'edit/oop_tugas/'+id).subscribe((respond:any)=>{
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

  public update(data:any):Observable<any> {
	  return Observable.create(observer => {
      this.http.post(this.baseUrl+'update/oop_tugas', JSON.stringify(data))
        .subscribe((respond:any) => {
          observer.next(respond);
          observer.complete();
        return {unsubcribe() {respond}};
	    });
	  });
  }


  public add(data:any):Observable<any> {
	  return Observable.create(observer => {
      this.http.post(this.baseUrl+'add/oop_tugas', JSON.stringify(data))
        .subscribe((respond:any) => {
          observer.next(respond);
          observer.complete();
        return {unsubcribe() {respond}};
	    });
	  });
  }


}
