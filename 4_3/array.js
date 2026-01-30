function proccessArray(array, callback) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i]))
    }
    result;
}

const numbers = [1, 2, 3, 4];
const doubled = processArray(numbers, (n) => n * 2);
console.log(doubled);