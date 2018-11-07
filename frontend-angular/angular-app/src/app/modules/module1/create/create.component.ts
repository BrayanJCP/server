import { Component, OnInit } from '@angular/core';
import { Util } from 'src/app/shared/util';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Table } from 'src/app/models/table.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  public types;
  public materials;
  public supports;
  public colors;
  public formTable: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {
    this.types = Util.tipos;
    this.materials = Util.material;
    this.supports = Util.soportes;
    this.colors = Util.colores;
  }

  ngOnInit() {
    this.formTable = this.fb.group({
      name: [null, Validators.required],
      color: [null, Validators.required],
      support: [null, Validators.required],
      material: [null, Validators.required],
      price: [null, Validators.required],
      type: [null, Validators.required],
    });
  }
  Submit() {
    if (this.formTable.valid) {
      let table = new Table(
        this.formTable.get('name').value,
        this.formTable.get('color').value,
        this.formTable.get('support').value,
        this.formTable.get('material').value,
        this.formTable.get('price').value,
        this.formTable.get('type').value
      );
      Util.listTables.push(table);
      this.router.navigate(['table']);
    }
  }

}
