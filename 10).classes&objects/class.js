// const student = {
//       fullName: "Narendra Modi",
//       marks:99.9,
//       printMarks: function (){
//         console.log("marks= ", this.marks);

//       },

// };

const employee = {
  calsTax() {
    console.log("tax rate is 10%");
  },
};

const romeo = {
  salary:25000,
};

// to set prototype 
romeo.__proto__=employee;


//classes in js
class toyotaCar {
     start (){
      console.log("start");
     }
     stop(){
      console.log("stop");
     }
     setBrand(brand) {
       this.brandName = brand;
     }
}
//to create object 
let fortuner = new toyotaCar();
// fortuner.setBrand("fortuner");
let lexus  = new toyotaCar();


//constructor
class toyotaCarr {
   constructor (brand , mileage){
    console.log("creating new object");
    this.brand=brand;
    this.mileage=mileage;
   }
     start (){
      console.log("start");
     }
     stop(){
      console.log("stop");
     }
     setBrand(brand) {
       this.brandName = brand;
     }
}
//to create object 
let fortuner1 = new toyotaCarr("fortuner1",10);
console.log(fortuner1);
let lexus1  = new toyotaCarr("lexus1",20);
console.log(lexus1);

