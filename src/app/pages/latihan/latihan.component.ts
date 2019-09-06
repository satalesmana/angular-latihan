import { Component, OnInit } from '@angular/core';
import {LatihanService} from '../../services/latihan.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-latihan',
  templateUrl: './latihan.component.html',
  styleUrls: ['./latihan.component.css']
})
export class LatihanComponent implements OnInit {
  list:any = [];
  constructor(
    private sc:LatihanService
  ) { }

  ngOnInit() {
    this.sc.list().subscribe((output:any) => {
      this.list = output;
    });
  }

}
