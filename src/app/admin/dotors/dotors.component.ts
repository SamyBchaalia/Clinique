import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-dotors',
  templateUrl: './dotors.component.html',
  styleUrls: ['./dotors.component.css']
})
export class DotorsComponent implements OnInit {

  ListData : MatTableDataSource <any>;
  DisplayedColumns:string[]=["firstName", "lastName","phoneNumber", "speciality","address"];
  @ViewChild(MatSort) sort:MatSort;
  @ViewChild(MatPaginator) paginator:MatPaginator;
  searchKey: string;
  
    constructor(private service:AdminService,private dialog:MatDialog) { }
  list:any;
    ngOnInit(): void {
      this.service.getDoctors().subscribe((data)=>{
        this.list=data;
        console.log(this.list);
        this.ListData = new MatTableDataSource(this.list);
        this.ListData.sort=this.sort;
        this.ListData.paginator=this.paginator;
        
      });
  
  
      
  }
  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }
  applyFilter() {
    this.ListData.filter = this.searchKey.trim().toLowerCase();
  }
  
  onCreate(){
    const dialogconfig = new MatDialogConfig();
    dialogconfig.disableClose=true;
    dialogconfig.autoFocus=true;
    dialogconfig.width="68%";
    dialogconfig.height="90%";
  // const dialogref=this.dialog.open(ProductchildComponent,dialogconfig);
  // dialogref.afterClosed().subscribe((result)=>{
    console.log("this one works")
    this.ngOnInit();
  // });
  }
  onEdit(row){
  this.service.complete(row);
  const dialogconfig = new MatDialogConfig();
  dialogconfig.disableClose=true;
  dialogconfig.autoFocus=true;
  dialogconfig.width="70%";
  dialogconfig.height="90%";
  // const dialogref=this.dialog.open(ProductchildComponent,dialogconfig);
  // dialogref.afterClosed().subscribe((result)=>{
  //   console.log("this one works")
  //   this.ngOnInit();
  // });
  
  }
  onDelete(row){
    this.service.DeleteDoctor(row.id).subscribe((data)=>{
      this.ngOnInit();
    });
  }
  
  }