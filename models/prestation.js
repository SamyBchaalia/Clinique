class Prestation {
    constructor(id, idDoctor, idPatient,date, type) {
            this.id = id;
            this.idDoctor = idDoctor;
            this.idPatient = idPatient;
            this.date = date;
            this.type=type;
    }
}

module.exports = Prestation;