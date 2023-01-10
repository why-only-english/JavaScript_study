// Arrow Function
const getTwice = number => number * 2;

console.log(getTwice(3));

const sum = (a, b) => {
    const result = a + b;
    return result;
};

const getCodeit = () => ({name: 'Codeit',});

console.log(sum(10, 5));
console.log(getCodeit());