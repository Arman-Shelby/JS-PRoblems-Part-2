const heights = [150, 160, 1770, 180, 190, 150, 160, 170, 180, 190];

 function getMax(numbers) {
      let max = numbers[0];
    for (const number of numbers) {
      
        if (number > max) {
            max = number;
        }
       
    }
    return max;
 }
 const max = getMax(heights);
 console.log("The maximum height is: " + max);

 // min


 
    function getMin(numbers) {
        let min = numbers[0];
        for (const number of numbers) {
            if (number < min) {
                min = number;
            }
        }
        return min;
    }
    const min = getMin(heights);
    console.log("The minimum height is: " + min);
