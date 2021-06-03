import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(router:Router) { }
  title = 'GoinProd';
  isExpanded: boolean = true;
  ngOnInit(): void {
  }

}
