let sleepyGreeting = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hello...')
    }, 2000);

    setTimeout(() => {
        reject(Error('Too Sleepy...'))
    }, 2000);///2000 is equal to 2 seconds///
});

sleepyGreeting
    .then(data => {  ///.then is keyword for javascript promises//////data is also///
        console.log(data);
    })
    .catch(err => {
        console.error(err); ///.catch and err linked to reject///
    });