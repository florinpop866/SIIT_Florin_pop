// 1. Display in the console the numbers from 1 to 20.

for (var i = 1; i <= 20; i++) {
    console.log(i);
}
console.log("_______");

// 2. Display in the console the odd numbers from 1 to 20.

for (var i = 0; i < 20; i++) {
    if ((i % 2) == 0) {
    }
    else console.log(i);
}

console.log("_______");

// 3. Compute the sum of the elements of an array and display it in the console:

var numbers = [1, 2, 3, 4,];
console.log("numbers are: " + numbers);

var sum = 0;

for (var i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
}
console.log("The total is: " + sum);

console.log("_______");


// 4. Compute the maximum of the elements of an array and display it in the console.

var numbersList = [1, 2, 3, 4, 6, 5];
console.log("Numbers are: " + numbersList);

var maxNum = 0;

for (var i = 0; i < numbersList.length; i++) {
    if (maxNum < numbersList[i]) {
        maxNum = numbersList[i];
    }
}
console.log("The maximum number is: " + maxNum);

console.log("_______");

// 5. Compute how many times a certain element appears in an array.

var list = [1, 2, 3, 4, 2, 1, 1];
var element = 1;

var count = 0;

for (var i = 0; i < list.length; i++) {
    if (element == list[i]) {
        count++;
    }
}

console.log("The number " + element + " appears " + count + " times.");


console.log("END");

// 6. Using nested control structures (doua for + if) for generate the following pattern.
