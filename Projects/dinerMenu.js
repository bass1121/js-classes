const dinnerMenu = [
    { Item: 'Ny Strip', Price: 25.99, Pref: ['Rare', 'Medium-rare', 'Medium', 'Well done']},
    { Item: 'Ribeye Steak', Price: 15.99, Pref: ['Rare', "Medium-rare", 'Medium', 'Well done']},
    { Item: 'Smoked Brisket', Price: 14.99, Pref: ['Rare', 'Medium-rare', 'Medium', 'Well done'] },
    { Item: 'Brunswick Stew', Price: 10.99, Pref: [ 'Mild', 'Hot', 'Flaming Hot']},
    { Item: 'Hamburger', Price: 10.99, Pref: [ 'Rare', 'Medium-rare', 'Medium', 'Well done' ]},  
    { Item: 'Cheeseburger', Price: 11.99, Pref: [ 'Rare', 'Medium-rare', 'Medium', 'Well done' ]},
    { Item: 'Cajun Crawfish (5 lbs)', Price: 45.99, Pref: [ 'Mild', 'Hot', 'Flaming Hot' ]}
  ];

let dinnerItems = dinnerMenu.map((item) => {
    return item.item
)};

const lunchMenu = [
    { Item: 'Ny Strip', Price: 18.99, Pref: ['Rare', 'Medium-rare', 'Medium', 'Well done']},
    { Item: 'Ribeye Steak', Price: 12.99, Pref: ['Rare', 'Medim-rare', 'Medium', 'Well done' ]},
    { Item: 'Smoked Brisket', Price: 10.99,  Pref: ['Rare', 'Medium-rare', 'Medium', 'Well done' ]},
    { Item: 'Brunswick Stew', Price: 8.99, Pref: [ 'Mild', 'Hot', 'Flaming Hot' ]},
    { Item: 'Hamburger', Price: 8.99, Pref: [ 'Rare', 'Medium-rare', 'Medium', 'Well done' ]}, 
    { Item: 'Cheeseburger', Price: 9.99, Pref: ['Rare', 'Medium-rare', 'Medium', 'Well done']},
    { Item: 'Cajun Crawfish (5.0 lbs)', Price: 35.99, Pref: [ 'Mild', 'Hot', 'Flaming Hot' ]}
  ];

const breakfastMenu = [
    { item: 'Eggs', price: 8.99, pref: ['Scrambled', 'Fried', 'Sunny Side Up']},
  ];   

const sideMenu = [
    { item: 'Mashed Potatoes', price: 2.99, pref: ['Loaded', 'Cheesey', 'Buttery', 'Chives' ]},
    { item: 'Corn on the Cob', price: 2.99, pref: [ 'Cajun Corn', 'Grilled' ]},
    { item: 'Garlic Bread', price: 2.99, pref: [] },
    { item: 'Asparagus', price: 2.99, pref: ['Cheesey', 'Buttery']},
    { item: 'French Fries', price: 2.99, pref: ['Spicey', 'Cheesey', 'Regular' ]},
];

let total = 0;
let userSelection = [];

dinerSimulator = function () {
    prompt('Welcome to Porkies.');
    
    const menuChoice = prompt('Which menu would you like to choose from? Breakfast, Lunch or Dinner?');                 
        if (menuChoice.toLowerCase() === 'dinner') {
            prompt('Ok, we have excellent options on our dinner menu!');
            prompt(dinnerItems);
        } else if (menuChoice.toLowerCase() === 'lunch') {
            prompt('We have amazing lunch specials!');               
        } else if (menuChoice.toLowerCase() === 'breakfast') {
            prompt('Our 24 hour breakfast has great options.');
            prompt(breakfastMenu); 
        } else { menuChoice }; //how do i get it to repeat menu choice if a n/a value is entered?

                                                                                                      
const mainChoice = prompt('Which main choice would you like?');
        if(mainChoice.toLowerCase() === 'ny strip') {
        prompt('That is one of my favorite. How would you like that prepared? Rare, medium rare, or well done?')            
    } else if(mainChoice.toLowerCase() === 'ribeye steak') { 
        prompt('That is one of my favorite. How would you like that prepared? Rare, medium rare, or well done?')
    } else if(mainChoice.toLowerCase() === 'smoked brisket') { 
        prompt('That is one of my favorite. How would you like that prepared? Rare, medium rare, or well done?')
    } else if(mainChoice.toLowerCase() === 'hamburger') { 
        prompt('That is one of my favorite. How would you like that prepared? Rare, medium rare, or well done?')
    } else if(mainChoice.toLowerCase() === 'cheeseburger') { 
        prompt('That is one of my favorite. How would you like that prepared? Rare, medium rare or well done?')
    } else if (mainChoice.toLowerCase() === 'cajun crawfish') {
        prompt('That is one of my favorite. How spicey do you want it to be? Mild, Hot or Flaming Hot?')            
    } else if (mainChoice.toLowerCase() === 'crawfish') {
        prompt('That is one of my favorite. How spicey do you want it to be? Mild, Hot or Flaming Hot?')
    } else if (mainChoice.toLowerCase() === 'brunswick stew') {
        prompt('That is one of my favorite. How spicey do you want it to be? Mild, Hot or Flaming Hot?')
    } else { mainChoice}                                                                                                

    const sideChoice = prompt('Ok.');
        if(menuChoice.toLowerCase() === 'dinner') {
            prompt('What two sides would you like to order?');
            console.log(sideMenu)
        } else if (menuChoice.toLowerCase() === 'lunch') {
            prompt('What two sides would you like to order?');
            console.log(sideMenu)
        } else if (menuChoice.toLowerCase() === 'breakfast') {
            prompt('Breakfast comes with side of toast and grits.')
        } else { sideChoice};
    
};

dinerSimulator();

