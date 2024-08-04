
/*
CHAPTER 1
Q#1:-
alert("Welcome to Javascript");
Q#2:-
alert("Error! Please enter the password");
Q#3:-
alert("Welcome to JS land...\nHappy Ending ");
Q#4:-
alert("Welcome to JS land...");
alert(" Happy Ending ");
Q#5:-
console.log("Hello...I can run JS through my web browser's console");
*/

/*
CHAPTER 2
var username;
var myName="Syed Hammad Alam";
var message="Hello World";
alert(message);
var myBio="20 years old";
var myStatus="Certified Web developer";
alert(myName);
alert(myBio);
alert(myStatus);

let Message = "pizza";

for ( i = Message.length; i > 0; i--) {
  alert(Message.substring(0, i));
}

var email="hammadalam@gmail.com";
alert("My email is " + email);

var book="A smarter way to learn Javascript";
alert(book);

document.write("Yah! I can write HTML through JavaScript");
var aName=" Hammad here ";
alert(aName);
document.write("\n " + aName);
*/

/*
CHAPTER 5
var a=5;
var b=6;
var c=a+b;
document.write("Sum of "+ a + " and "+ b + " is "+ c +" ");
var div=a/b;
var mul=a*b;
var sub=a-b;
var mod=a%b;
document.write("\n Division of "+ a + " and "+ b + " is "+ div+ " ");
document.write("\n Muultiplication of "+ a + " and "+ b + " is "+ mul+ " ");
document.write("\n Subtraction of "+ a + " and "+ b + " is "+ sub+ " ");
document.write("\n Modulus of "+ a + " and "+ b + " is "+ mod + " ");

var number;
console.log("value before variable declaration is " + number);
number =3;
console.log("value after variable declaration is " + number);
number++;
number=number + 7;
console.log("value after addition is " + number);
number--;
var rem=number/3;
console.log(" The value of reminder is " + rem);

var ticket,price;
ticket=600;
price=5*ticket;
console.log("The price of 5 ticket is " + price);

var d;
var z=0;
for (var d = 0;d <11 ; d++)  {
    console.log(4*z );
    z++;
}

var celsius = 25; 
var fahrenheit = (celsius * 9 / 5) + 32;
console.log(`${celsius}°C is ${fahrenheit.toFixed(2)}°F`);
fahrenheit = 77;
celsius = (fahrenheit - 32) * 5 / 9;
console.log(`${fahrenheit}°F is ${celsius.toFixed(2)}°C`);
*/


/*
CHAPTER 12-13
function checkCharacter(input) {
        
        var asciiCode = input.charCodeAt(0);  
        if (asciiCode >= 48 && asciiCode <= 57) {
            console.log( "It is a number");
        }
        else if (asciiCode >= 65 && asciiCode <= 90) {
            console.log(" It is an uppercase letter");
        }
        else if (asciiCode >= 97 && asciiCode <= 122) {
            console.log(" It is a lowercase letter");
        }        
        else {
            console.log(" It is neither a number nor a letter");
        }
    }
    checkCharacter('A');
    checkCharacter('a');
    checkCharacter('5');
    checkCharacter('@');
    
var a=5,b=6;
if (a==b) {
    console.log("Both are equal");
}
else if (a>b) {
    console.log(a + " is greater ");
}
else {
    console.log(b + " is greater")
}

var Unumber=prompt("Enter a  number");
if (Unumber > 0) {
    alert("The number is positive ");
}
else{
    alert("The number is negative ");
}

function isVowel(char) {
const vowels = 'aeiouAEIOU';
if (vowels.includes(char)) {
    return true;
} else {
    return false;
}
}
console.log(isVowel('a'));
console.log(isVowel('b'));
console.log(isVowel('E'));
console.log(isVowel('Z')); 


var password="12345";
let enterpassword=prompt("Enter the password");
if (enterpassword== password){
    alert("Correct! You entered the correct password");
}
else{
    alert("Wrong password Re-enter it again");
}


var greeings;
var  hour=13;
if (hour < 18) {
    console.log("Good day");
}else{
    console.log("Good Evening");
}

function convertTime24To12(time24) {
    if (time24 < 0 || time24 >= 2400) {
        return "Invalid time. Please enter a valid 24-hour time format.";
    }
    let hours = Math.floor(time24 / 100);
    let minutes = time24 % 100;
    if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
        return "Invalid time. Please enter a valid 24-hour time format.";
    }
    let period = "AM";
    if (hours === 0) {
        hours = 12;
    } else if (hours === 12) {
        period = "PM";
    } else if (hours > 12) {
        hours -= 12;
        period = "PM";
    }
    return `${hours}:${minutes.toString().padStart(2, '0')} ${period}`;
}
let time24 = parseInt(prompt("Enter time in 24-hour format : "), 10);
let time12 = convertTime24To12(time24);
alert("The time in 12-hour format is: " + time12);
*/

/*
CHap 20-25

// var fName="Syed";
// var lName="Alam";
// var fullName=fName +" "+ lName;
// console.log(fullName);

// var sValue="Hi there! I am using Whatssapp";
// console.log("The length 0f the string is " + sValue.length);


var variable="Pakistani";
console.log(variable.indexOf("n"));

var a="Hello World";
console.log(a.lastIndexOf("l"));


var variable="Pakistani";
var charAtthree=variable[3];
console.log(charAtthree);


var city="Hyderabad";
console.log("The city is " +city );
var newCity=city.replace("Hyder","Islam");
console.log("The city after replacement is "+ newCity);

var word="Hammad and Ali are best friends and they do all their work on time";
wordTochange=word.replaceAll("and","&");
console.log("The word after replacement is: " + wordTochange);

var number="456";
var Num=Number(number);
console.log(Num);

var email=prompt("Enter the email ");
var eMail=email.split("@");
console.log('The domain of the email is: ' + eMail );
x
var cUpper="Peanuts";
var convertedUpper=cUpper.toUpperCase()
console.log(convertedUpper);
var convertedLower=cUpper.toLowerCase();
console.log(convertedLower);

var DotNum=35.56;
var Dotted=DotNum*100;
console.log(Dotted)


var a="3",b="3"
var x =a+b;
console.log(x);
var y =a-b;
console.log(y);

const array=[
    "cake",
    "Apple",
    "Cookie",
    "Patties"
]
function searchArray(userInput) {
    const lowerCaseInput = userInput.toLowerCase();
    const found = array.map(item => item.toLowerCase()).includes(lowerCaseInput);
    if (found) {
        console.log(`${userInput} is found in the list`);
    } else {
        console.log(`${userInput} is not found in the list`);
    }
}
const userInput = prompt("Enter an item to search:"); 
searchArray(userInput);

function writeColumnWise(str) {
    for (let i = 0; i < str.length; i++) {
        console.log(str[i]);
    }
}
const exampleString = "University of Karachi";
writeColumnWise(exampleString);

function countVowelsAndConsonants(str) {
    const vowels = 'aeiouAEIOU';
    var vowelCount = 0;
    var consonantCount = 0;
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        if (/[a-zA-Z]/.test(char)) {
            if (vowels.includes(char)) {
                vowelCount++;
            } else {
                consonantCount++;
            }
        }
    }

    return { vowels: vowelCount, consonants: consonantCount };
}

const exampleString = "Pakistan";
const counts = countVowelsAndConsonants(exampleString);
console.log(`Vowels: ${counts.vowels}, Consonants: ${counts.consonants}`);
*/