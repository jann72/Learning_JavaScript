let score = prompt("Enter your score (0-100) :");
    let grade;

    if (score >=90 && score <= 100){
        grade = "A";
    }
    else if (score >=70 && score <= 89){
        grade = "B";
    }
    else if (score >=40 && score <= 69){
        grade = "C";
    }
    else if (score >= 40 && score <= 59){
        grade = "D";
    }
    else if (score >= 0 && score <= 39){
        grade = "F";
    }
    console.log("Your grade was :", grade);