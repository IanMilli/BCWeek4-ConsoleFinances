let finances = [
['Jan-2010', 867884],
['Feb-2010', 984655],
['Mar-2010', 322013],
['Apr-2010', -69417],
['May-2010', 310503],
['Jun-2010', 522857],
['Jul-2010', 1033096],
['Aug-2010', 604885],
['Sep-2010', -216386],
['Oct-2010', 477532],
['Nov-2010', 893810],
['Dec-2010', -80353],
['Jan-2011', 779806],
['Feb-2011', -335203],
['Mar-2011', 697845],
['Apr-2011', 793163],
['May-2011', 485070],
['Jun-2011', 584122],
['Jul-2011', 62729],
['Aug-2011', 668179],
['Sep-2011', 899906],
['Oct-2011', 834719],
['Nov-2011', 132003],
['Dec-2011', 309978],
['Jan-2012', -755566],
['Feb-2012', 1170593],
['Mar-2012', 252788],
['Apr-2012', 1151518],
['May-2012', 817256],
['Jun-2012', 570757],
['Jul-2012', 506702],
['Aug-2012', -1022534],
['Sep-2012', 475062],
['Oct-2012', 779976],
['Nov-2012', 144175],
['Dec-2012', 542494],
['Jan-2013', 359333],
['Feb-2013', 321469],
['Mar-2013', 67780],
['Apr-2013', 471435],
['May-2013', 565603],
['Jun-2013', 872480],
['Jul-2013', 789480],
['Aug-2013', 999942],
['Sep-2013', -1196225],
['Oct-2013', 268997],
['Nov-2013', -687986],
['Dec-2013', 1150461],
['Jan-2014', 682458],
['Feb-2014', 617856],
['Mar-2014', 824098],
['Apr-2014', 581943],
['May-2014', 132864],
['Jun-2014', 448062],
['Jul-2014', 689161],
['Aug-2014', 800701],
['Sep-2014', 1166643],
['Oct-2014', 947333],
['Nov-2014', 578668],
['Dec-2014', 988505],
['Jan-2015', 1139715],
['Feb-2015', 1029471],
['Mar-2015', 687533],
['Apr-2015', -524626],
['May-2015', 158620],
['Jun-2015', 87795],
['Jul-2015', 423389],
['Aug-2015', 840723],
['Sep-2015', 568529],
['Oct-2015', 332067],
['Nov-2015', 989499],
['Dec-2015', 778237],
['Jan-2016', 650000],
['Feb-2016', -1100387],
['Mar-2016', -174946],
['Apr-2016', 757143],
['May-2016', 445709],
['Jun-2016', 712961],
['Jul-2016', -1163797],
['Aug-2016', 569899],
['Sep-2016', 768450],
['Oct-2016', 102685],
['Nov-2016', 795914],
['Dec-2016', 60988],
['Jan-2017', 138230],
['Feb-2017', 671099]
];
    // To complete the following challlenge requirements we have been provided with the following for loop which operates by itterating along the length of the finances array of arrays to produce the data in the console log to demonstrate to us how to seperate the string element of date and the number element of amount into different variables.
    
    for (let i = 0; i < finances.length; i++) {
        const [date, amount] = finances[i];
        console.log(date);
        console.log(amount)
        
    }
    
    //the challenge to be completed is Unit 4 Challenge: Console Finances

//Overview

//In this challenge, you'll be using the concepts you've learned to complete the required activity. This activity presents a real-world situation in which your newfound JavaScript skills will come in handy. You are tasked with creating code for analyzing the financial records of a company. You have been provided with a financial dataset in the `starter/index.js` file.(this refers to the array of arrays data set "finances" 1. Create a new GitHub repo called `Console-Finances`. Then, clone it to your computer.


// Task 1

//Create a new GitHub repo called `Console-Finances`. Then, clone it to your computer.Copy the starter files in your local git repository.


// this has been done, 

//URL for github repository is: https://github.com/IanMilli/BCWeek4-ConsoleFinances


   


    
    arrayLength = finances.length;
    console.log (finances.length);
    // this gives a total 0f 86 which on checking above the array runs from line 2-line 87 
    //with one month per line therefore this is the correct answer for number of months.
    //if the array ran along one line though to get the answer we would need a for loop such as:
    
    let months = 0;
    const month = (finances) => {
        // For each element of the `myArray`
        for (let i in finances) {
            // If the element is an array
            // recursively call `month` to calculate
            // the length of the current element
            // Otherwise, just increment the `months`
            if (Array.isArray(finances[i])) {
                month(finances[i]);
            } else {
                months++;
            }
        }
    };
    
    month(finances);
    console.log(months); 
    document.write(months);// Output: 12
           //this returns the same answer of 86.
    // Explanation of process:
    //*have defined a variable of month and equaled it to the function 'getElementByID' 
    //then selected the type of element I want to count- in this case the string element.
    // * i defined a variable for the length of the months data set and equaled it to 0.
    //* i created a for loop where i is greater than  0 and less than the total for  finances.length
    //* i then checked for instances of string objects.
    //* i console logged the result.
    //* to test the result i  deleted a "data " element from the array and this resulted in a console log
    // of 
    
    