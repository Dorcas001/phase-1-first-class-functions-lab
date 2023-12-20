// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers(){
    const newA = drivers.slice(0, 2)
    return newA;

}
function returnLastTwoDrivers(){
    const lastTwo = drivers.slice(-2)
    return lastTwo;


}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num1){
    return function (num2) {
        return num1 * num2;
      };
}
function fareDoubler(fares){
    return fares*2;

}
function fareTripler(fares){
    return fares*3;

}
function selectDifferentDrivers(drivers, FirstTwoDrivers){
    return FirstTwoDrivers(drivers)
}
selectDifferentDrivers()

