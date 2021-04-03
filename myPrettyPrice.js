const prettyPrice = ( grossPrice, adjustment ) => {
    if (Number.isInteger(adjustment)) {
        adjustment = adjustment * 0.01;
    }
    
    return Math.floor(grossPrice) + adjustment;
}


console.log(prettyPrice(2.34, 99))