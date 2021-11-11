const numbercheck = function (number1) {
    if (number1 > 100) {
        return "true"
    }
    return "false"
};
const result = numbercheck(101);
console.log(result);

//This is a function that produce something

const maxpeople = function (numberpeople) {
    if (numberpeople > 50) {
        return "It's too busy now, come back later"
    }
    return "Come in"
};
const countPeopleInside = maxpeople(49);
console.log(countPeopleInside);

const minAge = function (age) {
    if (age < 18) {
        return "this is a club for adults"
    }
    return "Come in"
};
const ageVisitor = minAge(19);
console.log(ageVisitor);


//This is a function that produce something

/*const calculateAverage = function (numbers) {
    const average = numbers.reduce((total, n) => total + n) / numbers.length;
    console.log(average);
};
calculateAverage([1, 2, 3, 4, 5, 6]);

const grades = [10, 11, 12, 15, 69];
calculateAverage(grades);*/

//Math.round = afronden!

/*const calculateAverage = function (numbers) {
    const average = numbers.reduce((total, n) => total + n) / numbers.length;
    console.log(Math.round(average));
};
calculateAverage([1, 2, 3, 4, 5, 6]);

const grades = [10, 11, 12, 15, 69];
calculateAverage(grades); //waaron kan hier geen math.round? ik krijg een error.
*/
const calculateAverage = function (numbers) {
    const average = numbers.reduce((total, n) => total + n) / numbers.length;
    console.log(Math.round(average));
};
calculateAverage([1, 2, 3, 4, 5, 6]);

/*const grades = [10, 11, 12, 15, 69];
calculateAverage(grades);
return calculateAverage;

const grades = [100, 202, 303, 400, 690];
calculateAverage(grades);
return calculateAverage;
*/
const grades = [10, 202, 303, 400, 690];
calculateAverage(grades);
console.log(calculateAverage);