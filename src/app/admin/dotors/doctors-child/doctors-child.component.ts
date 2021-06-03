import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-doctors-child',
  templateUrl: './doctors-child.component.html',
  styleUrls: ['./doctors-child.component.css']
})
export class DoctorsChildComponent implements OnInit {

  constructor(public service: AdminService) { }



  ngOnInit() {
  }

  onClear() {
    this.service.doctor.reset();
    this.service.initializeFormGroup();
  }
  done(event){
    console.log("hheloo",event.target.value);
  }
  onSubmit() {
    if (this.service.doctor.valid) {
      this.service.InsertDoctor(this.service.doctor.value);
      this.service.doctor.reset();
      this.service.initializeFormGroup();
    }
  }

}


