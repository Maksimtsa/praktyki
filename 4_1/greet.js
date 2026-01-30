function greet(name, callback) {
    const message = `Cześć ${name}!`;
    callback(message);
}

greet("Maks", (message) => {
    console.log(message);
})
