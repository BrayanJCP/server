import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Chair } from 'src/app/models/chair.model';
import { Util } from 'src/app/shared/util';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create2',
  templateUrl: './create2.component.html',
  styleUrls: ['./create2.component.css']
})
export class Create2Component implements OnInit {
  public types;
  public materials;
  public supports;
  public colors;
  public formTable: FormGroup;
  public id;
  constructor(private fb: FormBuilder, private router: Router,private route:ActivatedRoute) {
    this.id=route.snapshot.paramMap.get('id');
    this.types = Util.tiposSillas;
    this.materials = Util.materialSillas;
    this.supports = Util.soportes;
    this.colors = Util.colores;
  }

  ngOnInit() {
    let table=this.id==null?new Chair(null,null,null,null,null,null): Util.listChairs[this.id];
    this.formTable = this.fb.group({
      name: [table.name, Validators.required],
      color: [table.color, Validators.required],
      support: [table.soportes, Validators.required],
      material: [table.material, Validators.required],
      price: [table.precio, Validators.compose([Validators.required,Validators.pattern('[0-9]*')])],
      type: [table.tipo, Validators.required],
    });
  }
  Submit() {
    if (this.formTable.valid) {
      let table = new Chair(
        this.formTable.get('name').value,
        this.formTable.get('color').value,
        this.formTable.get('support').value,
        this.formTable.get('material').value,
        this.formTable.get('price').value,
        this.formTable.get('type').value
      );
      Util.listChairs.push(table);
      this.router.navigate(['chair']);
    }
  }

}
