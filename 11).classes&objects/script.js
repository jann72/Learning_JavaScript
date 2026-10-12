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
