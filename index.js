
function lowerCaseDrivers(drivers){

    return drivers.map((driver)=>driver.toLowerCase())
} 

function nameToAttributes(drivers){
  
  return drivers.map((driver)=>{
    const driverFirst=(driver.split(" "))[0];
    const driverLast = (driver.split(" "))[1];
    let obj = {
      firstName: driverFirst,
      lastName: driverLast
    }
    return obj
  })
}

function attributesToPhrase(drivers){
  return drivers.map((driver)=>
    `${driver.name} is from ${driver.hometown}`
  )

  }