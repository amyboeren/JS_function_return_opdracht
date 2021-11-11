const add = function(number1, number2){
    const sum = number1 + number2;
    return sum;
};

const result = add(4, 5);
console.log(result);
// antwoord console = 9
//Je kunt alleen het return-keyword binnen een function gebruiken
//return is een keyword, net als function en const
//'return sum;' is een return statement. Dus a line with the keyword return in it. Ook alleen 'return' zonder sum is een return statement.

//Return stops the function. Dus maar 1 return mogelijk. maar Kan wel met if statements. 
/*const add = function(number1, number2){
    const sum = number1 + number2;
    if (sum > 10){
        return sum;
    }
    return "too low"
};*/

const doubleArray = function(numbers) {
    const doubled = numbers.map(n => n * 2);
    return doubled;
};

const result2 = doubleArray([1, 2, 3]);
console.log(result2);
//antwoord: [2,4,6]

/*When JavaScript comes across a return statement the following things happen:

1 the function stops executing
2 if there's a value after the return keyword it is returned to the caller of the function
3 the program continues running where the function was originally called

The return statement can be used for the following reasons:
1 to exit a function (where we don't care about the return value)
2 to exit a function and return a specific value

Functions with different roles
Let's discuss the different roles of functions so we can see how return is used in different types of functions.

Generally speaking functions can be used to:

1 do something
2 produce or calculate something
3 do and produce something
The difference between these types of functions might seem small, but if you get used to seeing functions in these categories you'll make your developer life a lot easier in the future.

Functions that do something
A function that does something can do things like:

1 print something to the console
2 display an alert
3 change the background color of a webpage
4 add a button to a webpage
5 send an email
6 write to a database

Functions that do something often don't need a return statement. They just do something and then we're at the end of the function.

Sometimes we'll check inside of the function "do we need to do this?" if the answer is no we can use return to exit the function early. For example: if we need to empty a list in a webpage but the list is already empty we can use return to exit the function early.

Functions that produce something
A function that produces something returns one or more values. It does not do something. Some examples:

1 add two numbers
2 calculate the income tax
3 calculate the number of days between two dates
4 if there's a student older than 50 in a list of student objects
5 find all the sweet fruits in a list of fruits
6 transform a collection of countries so that they all have a unique id

Functions that produce or calculate something always use a return statement. (Except some arrow functions, see note about arrow functions above).

Functions that do both
Functions in this category both do something and produce something. It's a best practice to have little or no functions that fall in this category.