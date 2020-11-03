// Code your solution here

function findMatching(drivers, name){
    let sameName = drivers.filter(driver => 
      driver.toLowerCase() == name.toLowerCase()
    )
    return sameName;
}

function fuzzyMatch(drivers, name){
    let similarName = drivers.filter(driver => 
        driver.charAt(0,1,2) === name.charAt(0,1,2)
        )
    return similarName
}   

function matchName(drivers, string){
    let sameObject = drivers.filter(driver => 
       driver["name"] === string
        )
    return sameObject
}