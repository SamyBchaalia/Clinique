class Doctor {
    constructor(id, firstName, lastName,email,phoneNumber, speciality,password,address) {
            this.id = id;
            this.firstName = firstName;
            this.lastName = lastName;
            this.email=email;
            this.phoneNumber = phoneNumber;
            this.speciality=speciality;
            this.password=password;
            this.address=address;
    }
}

module.exports = Doctor;