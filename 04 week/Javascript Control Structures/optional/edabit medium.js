// https://edabit.com/challenge/4gzDuDkompAqujpRi
// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

function addUp(number) {
  var sum = 0;
  var i = 0;
  while (i <= number) {
    sum += i;
    i++;
  }
  return sum;
}

// https://edabit.com/challenge/Q3n42rEWanZSTmsJm
// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

function minMax(arr) {
  var min = arr[0];
  var max = arr[0];
  var minMaxArray = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    } else {
      continue;
    }
  }
  minMaxArray.push(min);
  minMaxArray.push(max);
  return minMaxArray;
}

// https://edabit.com/challenge/Mc6Xi4PRw7fDzeMDB
// Create a function that takes a string and returns a string in which each character is repeated once.

function doubleChar(string) {
  var resultString = String();
  for (i = 0; i < string.length; i++) {
    resultString += string[i];
    resultString += string[i];
  }
  return resultString;
}

// https://edabit.com/challenge/Mo6Coy4PpTbZgtDKd
// A set is a collection of unique items. A set can be formed from an array by removing all duplicate items.

function set(array) {
  var uniqueChars = [...new Set(array)];
  return uniqueChars;
}

// https://edabit.com/challenge/hscAGyt4iNZ3PKy3g
/* Write a function that returns the number of users in a chatroom based on the following rules:

If there is no one, return "no one online".
If there is 1 person, return "user1 online".
If there are 2 people, return "user1 and user2 online".
If there are n>2 people, return the first two names and add "and n-2 more online".
*/
function chatroomStatus(users) {
  var status = "";
  switch (users.length) {
    case 0:
      status = "no one online";
      break;
    case 1:
      status = users[0] + " online";
      break;
    case 2:
      status = users[0] + " and " + users[1] + " online";
      break;
    default: {
      status =
        users[0] +
        ", " +
        users[1] +
        " and " +
        (users.length - 2) +
        " more online";
    }
  }
  return status;
}
