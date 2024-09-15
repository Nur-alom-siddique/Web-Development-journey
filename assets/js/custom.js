// ******task one***********
let burger = 500;
let coke = 30;

if (burger >= 500) {
  console.log('you got free coke');
} else {
  console.log(coke);
};


// ******task two***********
let weight = 65;
let height = 5.10;
let bmi = weight / height * 2;
console.log(bmi);


if (bmi < 18.5) {
  console.log('You are under waight');
  
}else if (bmi >= 18.5 && bmi <= 24.9) {
  console.log(' You are normal');
  
}else if (bmi >= 25 && bmi <= 29.9) {
  console.log('You are overweight');
  
} else {
  console.log('You are obese.');
  
}

// ******task three***********
let finalResult = 99;

if (finalResult >= 90) {
  
  console.log('A');
  
} else if (finalResult >= 80) {
  console.log('B');
  
}else if (finalResult >= 70) {
  console.log('C');
  
}else if (finalResult >= 60) {
  console.log('D');
  
} else {
  console.log('F');
  
}

// ******task four***********

let result = 80;
let fraind = 60;


if (result >= 80) {
  console.log('Enter the House');
  if (fraind >= 80) {
    console.log("let's go for a lunch");

  } else {
    if (fraind >= 60) {
      console.log('good luck next time, my friend');
    } else {
      if (fraind >= 41) {
        console.log('unseen your massage');
      } else {
          console.log("you got 'Blocked'");
        
       }
    }
  } 
  
}else {
  console.log('Leave the House');
  
};
// ******task five**********
let num1 = 55;
let num2 = 50;

let results = num1 > num2 ? num1 * 2 : num1 + num2;

console.log(results);


// ******task six**********
let ticket = 800;
let age = 18;
let student = true;


if (age < 10) {
  ticket = 0.00;
  console.log('Child fare is: ' + ticket.toFixed(2) + "  'free'");
} else if (age <= 59 && student) {
  let discount = ticket * 50 / 100;
  let student = ticket - discount;
  console.log('Student 50% discount: ' + student);

} else if (age >= 60) { 
let seniorCitizen = ticket * 15 / 100;
  let discount = ticket - seniorCitizen;
console.log('Senior Citizen fare: ' + discount);

}else {

  console.log('Regular fare :' + ticket);
};