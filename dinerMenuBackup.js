//build a main menu for dinner; include prices, preperation choices and additional costs

const dinnerMenu = [
    { item: 'Ny Strip', price: 25.99, pref: ['Rare', 'Medium-rare', 'Medium', 'Well done']},
    { item: 'Ribeye Steak', price: 15.99, pref: ['Rare', "Medium-rare", 'Medium', 'Well done']},
    { item: 'Smoked Brisket', price: 14.99, pref: ['Rare', 'Medium-rare', 'Medium', 'Well done'] },
    { item: 'Brunswick Stew', price: 10.99, pref: [ 'Mild', 'Hot', 'Texas Heat']},
    { item: 'Hamburger', price: 10.99, pref: [ 'Rare', 'Medium-rare', 'Medium', 'Well done' ]},  
    { item: 'Cheeseburger', price: 11.99, pref: [ 'Rare', 'Medium-rare', 'Medium', 'Well done' ]},
    { item: '5lb Boiled Cajun Crawfish', price: 45.99, pref: [ 'Mild', 'Hot', 'Blazin-Cajun' ]}
  ];

  const lunchMenu = [
    { item: 'Ny Strip', price: 18.99, pref: ['Rare', 'Medium-rare', 'Medium', 'Well done']},
    { item: 'Ribeye Steak', price: 12.99, pref: ['Rare', 'Medim-rare', 'Medium', 'Well done' ]},
    { item: 'Smoked Brisket', price: 10.99,  pref: ['Rare', 'Medium-rare', 'Medium', 'Well done' ]},
    { item: 'Brunswick Stew', price: 8.99, pref: [ 'Mild', 'Hot', 'Texas Heat' ]},
    { item: 'Hamburger', price: 8.99, pref: [ 'Rare', 'Medium-rare', 'Medium', 'Well done' ]}, 
    { item: 'Cheeseburger', price: 9.99, pref: ['Rare', 'Medium-rare', 'Medium', 'Well done']},
    { item: '5lb Boiled Cajun Crawfish', price: 35.99, pref: [ 'Mild', 'Hot', 'Blazin-Cajun' ]}
  ];

  const breakfastMenu = [
    { item: 'Eggs', price: 8.99, pref: ['Scrambled', 'Fried', 'Sunny Side Up']},
    { item: 'Omelette', price: 9.99, pref: ['Southwestern', 'Ham and Cheese', 'Egg White Only' ]},
    { item: 'French Texas Toast', price: 9.99, pref: ['Strawberry Topping', 'Blueberry Topping', 'Banana Topping' ]},
    { item: 'Breakfast Sandwich', price: 8.99, pref: ['Bacon Egg & Cheese', 'Sausage Egg & Cheese', 'Egg & Cheese' ]},   
  ];

  const sideMenu = [
    { item: 'Mashed Potatoes', price: 2.99, pref: ['Loaded', 'Cheesey', 'Buttery', 'Chives' ]},
    { item: 'Corn on the Cob', price: 2.99, pref: [ 'Cajun Corn', 'Grilled' ]},
    { item: 'Garlic Bread', price: 2.99, pref: [] },
    { item: 'Asparagus', price: 2.99, pref: ['Cheesey', 'Buttery']},
    { item: 'French Fries', price: 2.99, pref: ['Spicey', 'Cheesey', 'Regular' ]},
];

var menuOptions = ['Dinner Menu', 'Lunch Menu', 'Breakfast Menu'];

welcomeMessage = () => {
  prompt('Welcome to That Dang Food Spot.  My name is Sean. I will be your server today.  Our dinner plates come with two sides and our breakfast plates come with grits and toast.');
  
  const menuChoice = prompt('Which menu would you like to choose from?');
    if (menuChoice === 'Dinner Menu') {
      console.log(`Ok, we have excellent options on our $(menuChoice)`)
      console.log(dinnerMenu);
    } else if (menuChoice === 'Lunch Menu') {
      console.log(`We have a great $(menuChoice).`)
      console.log(lunchMenu)
    } else if (menuChoice === 'Breakfast Menu') {
      console.log(`Our 24 hour $(menuChoice) has amazing options.`)
      console.log(breakfastMenu)// can I set it up this way?? with two console.log
    }
};

return(dinnerMenu);








