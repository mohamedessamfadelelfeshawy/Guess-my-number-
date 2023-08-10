//learning
"use strict";

/* const years = (oldAge) => {
  console.log(2045 - oldAge);
};
const testArray = [13, 33, 44, 21, 22, 33, 77];
console.log(testArray);
console.log(testArray[0]);
console.log(testArray[2]);
console.log(testArray[testArray.length - 1]);
console.log(testArray.length);

const newArray = [testArray[0], testArray[2], testArray[3]];
console.log(newArray);

years(testArray[5]);

 //array
const learnArray = ["ahmed", "omer", 23, 44, 89];
learnArray.push("yamean");
console.log(learnArray);
learnArray.unshift(44);
console.log(learnArray);
learnArray.pop();
console.log(learnArray);
learnArray.shift();
console.log(learnArray.includes("omer"));
learnArray.indexOf(23);
console.log(learnArray);

//object  

const tjonas = [2, 4, "omer"];
const tjonasObject = {
  firstnme: "mohamed",
  lastname: "essam",
  age: 22,
  fculity: "mansoura",
  jop: "lerning",
  skills: ["html", "css", "js", "react"],
};

const tjonasObject = {
  firstnme: "mohamed",
  lastname: "essam",
  age: 22,
  fculity: "mansoura",
  jop: "lerning",
  skills: ["html", "css", "js", "react"],
  frindes: ["ayman", "ameer", "arabi", "opi"],
};

const location2 = prompt("chose test object");

console.log(tjonasObject.fculity);

console.log(tjonasObject[location2]);

console.log(
  `${tjonasObject.firstnme}has ${tjonasObject.frindes.length}frindes best friends is ${tjonasObject.frindes[0]}`
);


const jonas = {
  firstnme: "jonas",
  lastname: "essam",
  birthyear: 2001,
  age: 46,
  fculity: "mansoura",
  jop: "teacher",
  skills: ["html", "css", "js", "react"],
  frindes: ["ayman", "ameer", "arabi", "opi"],
  calcge: function () {
    console.log(this);
    return 2023 - this.birthyear;
  },
  hasLisanse: true,
};
//console.log(tjonasObject.calcge());

//console.log(tjonasObject.hasLisanse);

const testdata =
  jonas.hasLisanse == true
    ? console.log(
        `${jonas.firstnme} is a ${jonas.age} -years old ${jonas.jop} , and he has a driver's licence`
      )
    : console.log(
        `${jonas.firstnme} is a ${jonas.age} -years old ${jonas.jop} , and he don't have a driver's licence`
      );



      //looppp
      for (let x = 0; x < 10; x++) {
  console.log(`best num is ${x}`);
}

const someyear = [2000, 2001, 2004, 2007, 2009];
let ages = [];
for (let i = 0; i < someyear.length; i++) {
  // ages.push(2023 - someyear[i]);
  if (someyear[i] === 2004) {
    //continue;
    break;
  }
  console.log(someyear[i]);
}
//console.log(ages);


for (let exercise = 1; exercise < 5; exercise++) {
  console.log(`excrcise${exercise}`);
  for (let once = 1; once < 4; once++) {
    console.log(`exercise is ${exercise} once ${once}`);
  }
}


 //  max  min  in  arrayyyyyy

const nums = [20, 10, 33, 53, 99];

const num2 = [270, 5, 4, 3, 2];

const num3 = nums.concat(num2); // دمج 2  array

const mainAndMax = (numbers) => {
  let testmax = numbers[0];
  let testmin = numbers[0];

  //  max in array
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > testmin) testmax = numbers[i];
  }
  //  debugger;   or from sourse
  console.log(testmax);

  //  min in array
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < testmin) testmin = numbers[i];
  }
  console.log(testmin);

  const tempreture = testmax - testmin;
  console.log(tempreture);
};
mainAndMax(nums);



let days = 1;
const printForecast = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(`${arr[i]} C in ${days}days`);
    days++;
  }
};

printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);







//challenge part2  2222222222222222222
const values = [100, 125, 555, 44, 500, 600, 700];

const calcTip = (billValue) => {
  if (billValue >= 50 && billValue < 300) {
    console.log(billValue * (15 / 100));
    return billValue * (15 / 100);
  } else {
    console.log(billValue * (20 / 100));
    return billValue * (20 / 100);
  }
};
const resultTips = calcTip(values[3]);
const arraytips = [resultTips];
const all = [calcTip(values[3]), calcTip(values[2]), calcTip(values[1])];
console.log(all);
console.log(arraytips);

const totalvalue = Number(values[3]) + Number(resultTips);

const arayTotalValue = [totalvalue];
console.log(arayTotalValue);

// test222222222
console.log("---------------------");
const resultTips2 = calcTip(values[2]);
const arraytips2 = [resultTips2];
console.log(arraytips2);

const totalvalue2 = Number(values[2]) + Number(resultTips2);

const arayTotalValue2 = [totalvalue2];
console.log(arayTotalValue2);


//challenge part2  33333333333333333333

const datamark = {
  fullname: "mark",
  mass: 78,
  height: 1.69,
  calcBmi: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const dtaJone = {
  fullname: "jone",
  mass: 92,
  height: 1.95,
  calcBmi: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};
console.log(datamark.calcBmi(), dtaJone.calcBmi());

const testHigher =
  datamark.calcBmi() > dtaJone.calcBmi()
    ? console.log(
        `${datamark.fullname} 's Bmi (${datamark.calcBmi()}) is higher than ${
          dtaJone.fullname
        } 's (${dtaJone.calcBmi()}) !`
      )
    : console.log(
        `${dtaJone.fullname} 's Bmi (${dtaJone.calcBmi()}) is higher than ${
          datamark.fullname
        } 's (${datamark.calcBmi()}) !`
      );

      

//challenge part2  44444444444444

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = (billValue) => {
  if (billValue >= 50 && billValue < 300) {
    //console.log(billValue * (15 / 100));
    return billValue * (15 / 100);
  } else {
    //console.log(billValue * (20 / 100));
    return billValue * (20 / 100);
  }
};

for (let i = 0; i <= bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
}
console.log(bills);
console.log(tips);
console.log(totals);

const arr = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

let average = 0;  //خززننننن

const calcAvarage = function () {
  for (let i = 0; i < arr.length; i++) {
    average = (average + arr[i]) / arr.length;
  }
};

calcAvarage();
console.log(average);
 */

//   Developer Skills & Editor Setup
//  Coding Challenge1 1111111111111
