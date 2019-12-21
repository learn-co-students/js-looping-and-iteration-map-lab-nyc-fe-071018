let drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

const drivers2 = ['Bobby Smith', 'Sammy Watkins', 'Sally Jenkins', 'Annette Sawyer', 'Sarah Hucklebee', 'bobby ridge'];

const drivers3 = [
  { name: 'Bobby',   hometown: 'Pittsburgh'  },
  { name: 'Sammy',   hometown: 'New York'    },
  { name: 'Sally',   hometown: 'Cleveland'   },
  { name: 'Annette', hometown: 'Los Angeles' },
  { name: 'Bobby',   hometown: 'Tampa Bay'   }
];

let newDrivers2 = {
  firstName: [],
  lastName: []
}


function lowerCaseDrivers(drivers){
  return drivers.map( (driver) => driver.toLowerCase());
}
//console.log(newDrivers);


newDrivers2 = drivers2.reduce(function (driver, first, last){
  driver['firsName'] = first;
  driver['lastName'] = last;
  return driver;
})

function nameToAttributes(drivers){
   return drivers.map(function (driver) {
     let name1 = driver.split(' ')[0];
     let name2 = driver.split(' ')[1];
    return { firstName: name1, lastName: name2}
   })
 }

console.log(newDrivers2)

function attributesToPhrase(driver){
  return driver.map((driver) => driver['name'] + ' is from ' + driver['hometown'])
}

//console.log(newDrivers3)