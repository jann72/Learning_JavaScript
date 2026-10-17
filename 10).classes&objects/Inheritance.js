// //inhertance in js

// class Person {
//     constructor(){
//         this.species = "homo sapiens";
//     }
//    eat(){
//     console.log("eat");
//    }
//    sleep() {
//     console.log("sleep");
//    }
// }
// class engineer extends Person {
//   work() {
//     console.log("Brain is not Braining");
//   }
// }
// class Doctor {
//    work(){
//     console.log("Treat patients");
//    }
// }
// let julietobj = new engineer();


//Super keyword 

class Person2 {
    constructor(name){
        this.species = "homo sapiens";
        this.name = name;
    }
   eatt(){
    console.log("eat");
   }
}
class engineer extends Person2 {
  constructor(name) {
  super(name);
  }
  work(){
    super.eatt();
    console.log("brain is not braining");
  }
}

let engobj = new engineer("romeo");

