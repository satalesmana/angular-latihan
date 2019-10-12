import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {MemberService} from '../../services/member.service';
import {BukuService} from '../../services/buku.service';

@Component({
  selector: 'app-peminjaman',
  templateUrl: './peminjaman.component.html',
  styleUrls: ['./peminjaman.component.css']
})
export class PeminjamanComponent implements OnInit {
  cmbMember:any = [];
  cmbBuku:any = [];
  itemPesan:any=[];

  constructor(
    private msc:MemberService,
    private bsc:BukuService
  ) { }

  ngOnInit() {
    this.msc.list().subscribe((output:any) => {
      this.cmbMember = output;
    });

    this.bsc.list().subscribe((output:any) => {
      this.cmbBuku = output;
    });

  }

  addItem(){
    this.itemPesan=[
      {'idbuku':'asdf','judul':'23', 'qty':'23'}
    ]
  }

}
