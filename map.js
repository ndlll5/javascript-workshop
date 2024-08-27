const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const squaredNumbers = numbers.map((number) => {
    return number * number;
});
squaredNumbers.forEach((number) => {
    console.log(number);
});