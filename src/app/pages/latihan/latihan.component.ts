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
  formGroup: FormGroup;

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

  onSaveData(){
    this.sc.add(this.formGroup.value).subscribe((output:any) => {
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
