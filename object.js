const student  = {
    name: "John Doe",
    age: 20,
    courses: ["Math", "Science", "History"],
    isSingle: true,
    address: {
        street: "123 Main St",
        city: "Anytown",
        zipCode: "12345"
    },
    friends: ['Alice', 'Bob', 'Charlie'],
    movies: [{name: "Inception", year: 2010}, {name: "The Matrix", year: 1999   }],
    act: function() {
        console.log("Acting in a play");
    },
    car: {
        make: "Toyota",
        price: 20000,
        model: "Corolla",
        year: 2020,

        manufacturer: {
            name: "Toyota Motor Corporation",
            country: "Japan",
            ceo: "Akio Toyoda",
        }
    }
    
}

// console.log(student.car);
student.act();
// console.log(student.act);