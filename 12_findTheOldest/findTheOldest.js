const findTheOldest = function(people) {

    const todaysDate = new Date()
    const newArray = people.map((person)=>{
        if (person.yearOfDeath){
            return person.yearOfDeath - person.yearOfBirth
        }else{
            return todaysDate.getFullYear() - person.yearOfBirth
        }
        
    })
    
    let i = newArray.indexOf(Math.max(...newArray))

    return people[i]
};

// Do not edit below this line
module.exports = findTheOldest;
