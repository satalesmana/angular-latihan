import { Component, OnInit } from '@angular/core';
import {LatihanService} from '../../services/latihan.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-latihan',
  templateUrl: './latihan.component.html',
  styleUrls: ['./latihan.component.css']
})
export class LatihanComponent implements OnInit {
  list:any = [];
  edit:any=[];
  isEdit=false;
  formGroup: FormGroup;
  public loading = false;

  constructor(
    private fb: FormBuilder,
    private sc:LatihanService
  ) { }
    
  ngOnInit() {
    this.validateForm();

    this.sc.list().subscribe((output:any) => {
      this.list = output;
    });
  }

  onEdit(id){
    
    this.sc.edit(id).subscribe((output:any) => {
      this.edit = output;  
      this.isEdit=true;
      this.formGroup = this.fb.group({
        id: this.edit[0].id,
        nim: this.edit[0].nim,
        nama: this.edit[0].nama,
        weburl: this.edit[0].weburl,
        kampus: this.edit[0].kampus,
        type: this.edit[0].type,
      });

    });
  }

  public onUpdate(){
    this.sc.update(this.formGroup.value).subscribe((output:any) => {
      this.clearForm()
      this.formGroup.reset();
      this.isEdit=false;

      alert(output.message)
      this.sc.list().subscribe((output:any) => {
        this.list = output;
      });
    });

    
  }

  clearForm(){
    this.formGroup = this.fb.group({
      id: '',
      nim: '',
      nama: '',
      weburl: '',
      kampus: '',
      type: '',
    });
  }

  onSaveData(){
    this.loading = true;
    this.sc.add(this.formGroup.value).subscribe((output:any) => {
      this.loading = false;
      alert(output.message)
      this.formGroup.reset();

      this.sc.list().subscribe((output:any) => {
        this.list = output;
      });
    });
  }

  validateForm() {
    this.formGroup = this.fb.group({
      nim: ['', Validators.required ],
      nama: ['', Validators.required ],
      weburl: ['', ],
      kampus: ['',],
      type: ['',],
    });
  }
}
