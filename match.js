const numbers = [1, 2, 3, 4, 5];

// for (let i = 0; i<numbers.length; i++) {
//     const number = numbers[i];
//     console.log(number);
// }


for (const number of numbers) {
    console.log(number);
}

const products = [
    {id: 1, name: 'walton phone', price: 15000, category: 'electronics'},
    {id: 2, name: 'samsung phone', price: 25000, category: 'electronics'},
    {id: 3, name: 'dell laptop', price: 50000, category: 'electronics'},
    {id: 4, name: 'hp laptop', price: 60000, category: 'electronics'},
    {id: 5, name: 'sony tv', price: 40000, category: 'electronics'},
    {id: 6, name: 'lg tv', price: 45000, category: 'electronics'},
    {id: 7, name: 'samsung tv', price: 55000, category: 'electronics'},
    {id: 8, name: 'walton tv', price: 35000, category: 'electronics'},
    {id: 9, name: 'apple phone', price: 100000, category: 'electronics'},
    {id: 10, name: 'oneplus phone', price: 70000, category: 'electronics'},
    {id: 11, name: 'asus laptop', price: 80000, category: 'electronics'},
    {id: 12, name: 'acer laptop', price: 75000, category: 'electronics'},
    {id: 13, name: 'lenovo laptop', price: 65000, category: 'electronics'},
    {id: 14, name: 'microsoft surface', price: 90000, category: 'electronics'},
    {id: 15, name: 'google pixel phone', price: 85000, category: 'electronics'},
];

// for (const product of products) {
//     console.log(product);
// }

function matchProducts(products, search) {
    const matched= [];
   for (const product of products) {
    console.log(product.name.includes(search));{
        if(product.name.toLowerCase().includes(search.toLowerCase())) {
            matched.push(product);
        }
    }
   }
   return matched;
}

const result = matchProducts(products, 'laptop');
console.log(result);





// 6 core languages of javascript'
//
// 1. ECMAScript    
// 2. DOM (Document Object Model)
// 3. BOM (Browser Object Model)
// 4. JSON (JavaScript Object Notation)
// 5. AJAX (Asynchronous JavaScript and XML)
// 6. Node.js (JavaScript runtime environment) 