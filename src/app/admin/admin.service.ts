import { Injectable } from '@angular/core';
import { FormGroup,FormControl,Validators  } from '@angular/forms';
import { HttpClient,HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }
  DoctorList:any;
  doctor:FormGroup=new FormGroup({
    id:new FormControl(null),
    firstName : new FormControl('',Validators.required),
    lastName : new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    phoneNumber : new FormControl(10),
    password : new FormControl(6,Validators.required),
    speciality: new FormControl(''),
    address : new FormControl('')
  });
    initializeFormGroup(){
      this.doctor.setValue({
        id:null,
        firstName : '',
        lastName :'',
        email:'',
        phoneNumber : null,
        speciality:'',
        password :'',
        address : ''
      });
    
}
getDoctors(){
  console.log("function 1")
  return this.http.get(`http://localhost:8080/api/doctors`);}
InsertDoctor(doctor){
let doctorInstert={ 
  firstName:doctor.firstName,
  lastName:doctor.lastName,
  phoneNumber:doctor.phoneNumber,
  speciality:doctor.speciality,
  password:doctor.password,
  address:doctor.address}
this.http.post(`http://localhost:8080/api/doctor`,doctorInstert,{responseType: "text",}).subscribe((data)=>{
  console.log(data);
})
}
UpdateDoctor(doctor){
  let doctorInstert={ 
    firstName:doctor.firstName,
    lastName:doctor.lastName,
    phoneNumber:doctor.phoneNumber,
    speciality:doctor.speciality,
    password:doctor.password,
    address:doctor.address}
this.http.put(`http://localhost:8080/api/doctor/`+doctor.id,doctorInstert,{responseType:"text"}).subscribe((data)=>{
  console.log(data);
})
}
DeleteDoctor(id){
console.log(id);
return this.http.delete(`http://localhost:8080/api/doctor/${id}`,{responseType:"text"});
}

complete(Product){
this.doctor.setValue({
  $key:Product.id,
  name:Product.name,
  description:Product.description,
  image:Product.image,
  quantity:Product.quantity,
  price:Product.price
});

}
}
