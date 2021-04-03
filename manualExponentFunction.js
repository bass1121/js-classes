const toThePowerOF = (num, exp) => {
    const items = Array(exp).fill(num);
    const reducer = (total, currentValue) => total * currentValue;
    console.log(items.reduce(reducer));
}

toThePowerOF(3,4);



/*
const toThePowerOf = (num, exp) => {
    const items = Array(exp).fill(num);
    const reducer = (accumulator, currentValue) => accumulator * currentValue;
    return items.reduce(reducer);
  };
  
  toThePowerOf(2, 3); //?
  toThePowerOf(3, 3); //?
  toThePowerOf(4, 2); //?
  toThePowerOf(10, 10); //?
  10 ** 10; //?
*/