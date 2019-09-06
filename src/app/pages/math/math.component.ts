import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.css']
})
export class MathComponent implements OnInit {
  viewPage = true;

  nama = 'Jihan';
  mahasiswa={
    nama:'Aaan',
    alamat:'Bojong',
    telpon:'0213123',
    email:'aan@gmaol.com'
  }

  kendaraanList=['Mobil'];

  constructor() { }

  ngOnInit() {
  }

  onAddKendaraan(kedaraan: string){
    if(kedaraan){
      this.kendaraanList.push(kedaraan);
    }
  }

  onSave(){
    console.log('Save')
  }
  
  onEdit(){
    console.log('Edit')
  }
}
