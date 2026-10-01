// let num1 = 10;
// let num2 = 20;

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 % num2);
// console.log(num1 ** 2);

// Increment 

// let count = 5;

// console.log(count++);
// console.log(count);

// Decrement 

// let count1 = 5;
// console.log(count1--);
// console.log(count1);

// Post- Increment

// let count2 = 10;
// console.log(count2++);
// console.log(count2);

// Pre- increment 

// let count3=10;
// console.log(++count);
// console.log(count3);

//  assignment operators

// let num = 10;
// num+= 10;
// num = num + 10;
// console.log(num);

// Logical Operators

// let age = 19;
// let haslicense = true;
{
  //  console.log(true)
}

// OR Operators

// let age = 19;
// let haslicense = true;

// console.log(age>=18|| haslicense == true);

// NOT Operators

// let age = 19;
// console.log(!(age>= 18));

// Comparison Operators

// console.log(10> 5);
// console.log(10 < 5);
// console.log(10 >= 10);
// console.log(10 <= 5);

// console.log(10 == "10");
// console.log(10 === "10")

// Day 2

// else-if

// let marks = 90;
// if(marks >= 80)
// {
//   console.log("grade a")
// }
// else if(marks >=60) 
// {
//   console.log("grade b")
// }
// else if(marks >= 40)
// {
//   console.log("grade c")
// }

// swich statement

// let day = 5;

// switch(day)
// {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
//   default:
//     console.log("Invalid day");
// } 

// ternary operator

// let age = 14;
// let result = (age >= 18) ? "Eligible to vote" : "Not eligible to vote";
// console.log(result);

// loop 

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);

// for (let i = 1; i <= 10; i++) {
// console.log(i);
// }

// while loop

// let num = 1;
// while (num <= 10) {
//   console.log(num);
//   num++;
// }

// do while loop

// let num = 5;
// do {
//  console.log(num);
//    num++;
//  } while (num <= 5);

 // break 

 // for (let i = 1; i <= 10; i++) {
  // if (i === 5) {
   //  break;
  // }    
// console.log(i);
 //}

 // continue

// for (let i = 1; i <= 20; i++) {
//   if (i === 8) {
//     continue;
//   }  
//  console.log(i);
//  }

// nested loop

// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 3; j++) {
//     console.log(`i: ${i}, j: ${j}`);
//   }
// }

// pattern printing

for (let i = 1; i <= 5; i++) {
    let row = "";
    
    for (let j = 1; j <= 5; j++)
       {
        row += "*";
    }
    
    console.log(row);
}