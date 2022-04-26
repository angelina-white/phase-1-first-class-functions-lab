// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = () => 
{
    let newDrivers = [...drivers];
    return newDrivers.slice(0,2);
}

const returnLastTwoDrivers = () => 
{
    let newDrivers = [...drivers];
    return newDrivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (int) => 
{
    return function fareMultiplier(multiplier) {return int*multiplier};
}

const fareDoubler = (int) => createFareMultiplier(int)(2);

const fareTripler = (int) => createFareMultiplier(int)(3);

const selectDifferentDrivers = (arrayOfDrivers, funct) => 
{
    if (funct == returnFirstTwoDrivers)
    {
        return returnFirstTwoDrivers(arrayOfDrivers);
    }
    else if (funct == returnLastTwoDrivers)
    {
        return returnLastTwoDrivers(arrayOfDrivers);
    }
}

console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers));