const disha = 56;
const salman = 45;

if (disha > salman) {
  console.log("Disha wish get the straberry.");
}   
else {
    console.log("Salman wish get the straberry.");
}


//inside a function 
function getMax(num1, num2) {   
    if (num1 > num2) {
        return num1;
    }
    else {
        return num2;
    }   
}

const max = getMax(100, 20);
const max2 = getMax(50, 75);
const UltimateMax = getMax(max, max2);

console.log("The maximum number is: " + max);
console.log("The maximum number is: " + max2);

console.log("The maximum number is: " + UltimateMax);
