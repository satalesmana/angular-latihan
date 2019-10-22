import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

import {MemberService} from '../../services/member.service';
import {BukuService} from '../../services/buku.service';
import {PeminjamanService} from '../../services/peminjaman.service';

@Component({
  selector: 'app-peminjaman',
  templateUrl: './peminjaman.component.html',
  styleUrls: ['./peminjaman.component.css']
})
export class PeminjamanComponent implements OnInit {
  public loading = false;
  public cmbMember:any = [];
  public cmbBuku:any = [];
  public pinjam:any={
    idMember:'',
    tglPinjam:'',
    lamaPinjam:'',
    itemPesan:[]
  };
  public itemAdd:any={ buku:'', jumlah:''};

  constructor(
    private msc:MemberService,
    private bsc:BukuService,
    private psc:PeminjamanService,
  ) { }

  ngOnInit() {
    this.msc.list().subscribe((output:any) => {
      this.cmbMember = output;
    });

    this.bsc.list().subscribe((output:any) => {
      this.cmbBuku = output;
    });

  }

  saveData(){
    console.log(this.pinjam);
    this.loading = true;
    this.psc.add(this.pinjam).subscribe((output:any) => {
      this.loading = false;
      alert(output.message)
    });
  }

  addItem(){
    let splId = this.itemAdd.buku.split(',');
    this.pinjam.itemPesan.push(
      {'idbuku':splId[0],'judul':splId[1], 'qty':this.itemAdd.jumlah} 
    );
    this.itemAdd = { buku:'', jumlah:''};
  }

  deleteItem(id){
    this.pinjam.itemPesan = this.pinjam.itemPesan.filter(
      el => el.idbuku != id
    );
  }

}
