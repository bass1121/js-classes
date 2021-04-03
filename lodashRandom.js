randomNum = () => {
    return _.random(1, 100)
}

const lodashSampleNumber = _.times(5, randomNum);

console.log(lodashSampleNumber);