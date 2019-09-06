import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import {TugasoopService} from '../../services/tugasoop.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  formGroup: FormGroup;
  list:any = [];

  constructor(
    private fb: FormBuilder,
    private sc:TugasoopService
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
