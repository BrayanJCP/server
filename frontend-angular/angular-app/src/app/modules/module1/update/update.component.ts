import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Util } from 'src/app/shared/util';
import { Router, ActivatedRoute } from '@angular/router';
import { Table } from 'src/app/models/table.model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  public types;
  public materials;
  public supports;
  public colors;
  public formTable:FormGroup;
  public id:string;
  constructor(private fb:FormBuilder,private router:Router,private route: ActivatedRoute) { 
    this.id=route.snapshot.paramMap.get('id');
    this.types=Util.tipos;
    this.materials=Util.material;
    this.supports=Util.soportes;
    this.colors=Util.colores;
  }

  ngOnInit() {
    let table=Util.listTables[this.id];
    this.formTable=this.fb.group({
      name:[table.name,Validators.required],
      color:[table.color,Validators.required],
      support:[table.soportes,Validators.required],
      material:[table.material,Validators.required],
      price:[table.precio,Validators.required],
      type:[table.tipo,Validators.required],
    });
  }
  Submit(){
    if(this.formTable.valid){
      let table = new Table(
        this.formTable.get('name').value,
        this.formTable.get('color').value,
        this.formTable.get('support').value,
        this.formTable.get('material').value,
        this.formTable.get('price').value,
        this.formTable.get('type').value
      );
      Util.listTables[this.id]=table;
      this.router.navigate(['table']);
    }
  }
}
