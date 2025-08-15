const jim = 56;
const tim = 89;
const kim = 168;

if (jim > tim && jim > kim) {
  console.log("Jim is the ultimate boss and wishes to get the strawberry.");
}
else if (tim > jim && tim > kim) {
  console.log("Tim is the ultimate boss and wishes to get the strawberry.");
}
else {
  console.log("Kim is the ultimate boss and wishes to get the strawberry.");
}   


function maxOfThree(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    }
    else if (num2 > num1 && num2 > num3) {
        return num2;
    }
    else {
        return num3;
    }   
}

const maxJimTim = maxOfThree(jim, tim, kim);
console.log("The maximum number among Jim, Tim, and Kim is: " + maxJimTim); 

//---------------------------------------------


const max = Math.max(jim, tim, kim);
console.log("The maximum number using Math.max is: " + max);
console.log("The maximum number using Math.max is: " + maxOfThree(jim, tim, kim));
console.log("The maximum number using Math.max is: " + maxOfThree(100, 200, 150));
console.log("The maximum number using Math.max is: " + maxOfThree(300, 250, 400));
