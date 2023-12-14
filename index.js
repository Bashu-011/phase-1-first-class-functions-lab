const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers(drivers){
    return [drivers[0], drivers[1]];
}

function returnLastTwoDrivers(drivers){
    return [drivers[2], drivers[3]];
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier(x){
    return function fareMultiplier(value){
        return value * x
    }

}

function fareDoubler(x){
    const fareMultiplier = createFareMultiplier(2);
    return fareMultiplier(x)
}

function fareTripler(x){
    const fareMultiplier = createFareMultiplier(3);
    return fareMultiplier(x)
}

function selectDifferentDrivers(drivers, returnFirstTwoDriver){
    return returnFirstTwoDriver(drivers);

}