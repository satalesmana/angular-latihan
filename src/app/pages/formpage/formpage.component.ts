import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formpage',
  templateUrl: './formpage.component.html',
  styleUrls: ['./formpage.component.css']
})
export class FormpageComponent implements OnInit {
  isEdit  = false
  nama    =''
  produk  = { nama:'', harga:0 }

  constructor() { }

  ngOnInit() {
  }

  SaveData(){
    this.isEdit = false;
  }

  onEditData(){
    this.isEdit=true;
  }


}
