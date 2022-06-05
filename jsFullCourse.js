/*
let myAge = 19;
 console.log(myAge);


 let humanAge = 19;
 let humanDogRatio = 7;
    myDogAge = humanAge * humanDogRatio;
console.log(myDogAge);


//reassigning values to variables
let count = 35;
count = 4;
console.log(count);

//count +1
count = count + 1
console.log(count);

//exercise
let bonusPoints = 50;
bonusPoints = bonusPoints + 50;
console.log(bonusPoints)

bonusPoints = bonusPoints - 75;
console.log(bonusPoints)

bonusPoints = bonusPoints + 45;
console.log(bonusPoints)


function number(){
     console.log(42);
}
number()


function increase(){
    console.log(1)
}
increase()

//create a function that sums up the lap times
let lap1 = 34;
let lap2 = 33;
let lap3 = 36;

function lapTime(){
    laps= lap1 + lap2 + lap3;
    console.log(laps)
}
lapTime()


let lapsCompleted = 0
function added(){
    lapsCompleted=lapsCompleted + 1
    console.log(lapsCompleted)
}
added()
added()
added()
*/

let count=0;
function added(){
    count = count + 1;
    document.getElementById('counter').innerText = count;
}

function reduced(){
    count = count - 1;
    document.getElementById('counter').innerText = count;
}

function saved() {
    console.log(count);
}

let userName = 'Nelson';
let message = 'you have three new notifications';
let mesageToUser = "Hey " + userName + ", " + message
console.log(mesageToUser);

let myName = 'Nelson';
let greeting = 'Hi, my name is ';
let myGreeting =  greeting + myName;
console.log(myGreeting);

