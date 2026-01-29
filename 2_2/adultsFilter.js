const adultsFilter = people => {
    return people
        .filter(people => people.age >= 18);
}

const people = [
    { name: 'Ania', age: 16 },
    { name: 'Bart', age: 35 },
    { name: 'Czarek', age: 20 }
];

console.log(adultsFilter(people));