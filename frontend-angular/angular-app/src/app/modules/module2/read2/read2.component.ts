import { Component, OnInit } from '@angular/core';
import { Util } from 'src/app/shared/util';

@Component({
  selector: 'app-read2',
  templateUrl: './read2.component.html',
  styleUrls: ['./read2.component.css']
})
export class Read2Component implements OnInit {
  public listtables=Util.listChairs;
  constructor() { }

  ngOnInit() {
  }
  DeleteTable(item){
    Util.listChairs.splice(item,1);
  }
}
