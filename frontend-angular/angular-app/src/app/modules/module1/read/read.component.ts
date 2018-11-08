import { Component, OnInit } from '@angular/core';
import { Util } from 'src/app/shared/util';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  public listtables=Util.listTables;
  constructor() { }

  ngOnInit() {
  }
  DeleteTable(item){
    Util.listTables.splice(item,1);
  }

}
