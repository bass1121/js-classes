const prettyPrice = (grossPrice, extension) => {
    if (Number.isInteger(extension)) {
        extension = extension * 0.01;
    }
    return Math.floor(grossPrice) + extension;
};

prettyPrice(3.45, 0.99);//?

console.log(prettyPrice(4.89, 95));