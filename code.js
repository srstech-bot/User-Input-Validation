


 function rollDice()
{   //link allows game to call through the paragraphg tag for crapsResults via this element with all 3 conditions and variables included
    let results = document.getElementById("crapsResults");

    //Generate a random number between 1 and 6 and store in variable
    let die1 = Math.floor(Math.random() * 6) + 1;

    let die2 = Math.floor(Math.random() * 6) + 1;
    //displays Die1 with subsequent number generated using Math.floor and Math.random
    console.log("Die 1: " + die1);
    //displays Die2 with subsequent number generated using Math.floor and Math.random
    console.log("Die 2: " + die2);
    //tells game to add results or number generation otherwise we're left with a list of numbers for d1 and d2 but no sums for our boolean conditions to make verifiable rules.
    let sum = die1 + die2;
    //OR operator and if operator is a Boolean (true or false) expression
    if (sum == 7 || sum == 11)
    {   
        console.log("CRAPS - you lose!");
        results.innerHTML ="CRAPS you lose!";
    }//AND operator this operator get added to if operator
    else if (die1 == die2 && die1 % 2 == 0)
    {
        console.log("You won!");
        results.innerHTML ="CRAPS you won!";
    }
    //else operator in this instance is executed after previous if and else if are not executed. This is why no condition is needed within parentheses. This condition is the final check or rule to the game.
    else 
    {
        console.log("You pushed!");
        results.innerHTML ="You pushed!";
    }
 }

 function checkForPalindrome()
 {
    //Calls for input field 
    let inputField = document.getElementById("palindromeField");
    //Link to results after condition checks are made
    let results = document.getElementById("palindromeResults");
    //Sets parameters for user input
    let inputValue = inputField.value;
    //Sets parameter for user text input to be counted length
    let stringLength = inputValue.length;
    //Condition if text input is greater than 0
    if(stringLength > 0)
    {   
        //Divides string length by 2 after round down.3.5 wound round down to 3 for example
        let iterationCount = Math.floor(stringLength/2);
        //Subtract 1 from string length of the last character entered starting from 0 not 1
        let lastCharacterIndex = inputValue.length -1;
        //True declaration precursor for palidrome boolean check
        let palindromeCheckResult = true;

        //Allowed to continue palindrome check
       for(let i = 0; i <iterationCount; i++)
        {       //Checks if iteration value [0 to start] is not equal at last character indexed minus i. i increments by 1 each succeeding iteration. Last character indexed decrements by 1 each iteration.
            if (inputValue[i] !== inputValue[lastCharacterIndex - i])
            {
                    console.log("NOT A PALINDROME!");
                    //Displays every time loop condition is not met via elements link ById
                    results.innerHTML = "NOT A PALINDROME!"
                    palindromeCheckResult = false;
                    //for if loop stops and passes to next condition 
                    break;
            }
        }//Default result if false loop breaks, true result is only boolean alternate.
        if (palindromeCheckResult)
        {
            console.log("This is a palindrome!");
            results.innerHTML = "This is a palindrome! Great job, can you find another?"
        }
    }
 }
 function userInfoValidation()
 {
    console.log("Checking user info");

    let firstNameField = document.getElementById("firstNameField");

    let lastNameFieldField = document.getElementById("lastNameField");

    let zipField =document.getElementById("zipField");

    let results = document.getElementById("userInfoResults");

    results.innerHTML = "";

    let firstNameValue = firstNameField.value;

    let lastNameValue = lastNameField.value;

    let zipValue = zipField.value;

    //concatenation
    let firstLastName = firstNameValue + " " + lastNameValue;

    console.log(firstLastName);

    if (firstLastName.length > 20)
    {
        results.innerHTML = "Slow down buddy! Too many characters there! Keep it under 20!"

        return;
    }
    
    let zipRegEx = /^\d{5}$/

    if (!zipRegEx.test(zipValue))
    {
         results.innerHTML = "Moving too fast again! Wrongly formatted there pal! Keep it to 5, no more no less!"

         return;
    }

    results.innerHTML = "You have reach the corrrect number!";
    console.log("input validated");
 }