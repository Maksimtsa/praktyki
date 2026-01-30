const createMultiplier = (n) => {
    return (x) => x * n;
};

const multiplierBy5 = createMultiplier(5);
console.log(multiplierBy5(3));