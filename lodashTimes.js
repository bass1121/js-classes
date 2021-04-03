randomNum = () => {
    return Math.round(Math.random() * 100);
}

const sampleNum = _.times(5, randomNum); // times knows 2nd arg is a function.  this is calling random number 5 times. so it returns 5 random numbers.