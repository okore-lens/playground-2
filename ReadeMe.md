### Javascript Roadmap

## Naming convention

- camel case --> showResultsToday

## DOM Manipulation

## Declarations

# variable declarations

- let, const , "var"

1. let
   -> we can change later on
   let name = "lens";
   let age = "665";
   let currentTime = 21:26:15

currentTime = 21:26:30
name="Mary"

2. const
   -> constant
   const idNumber = 23456785

   <!-- error... cannot redeclare constants -->
   <!-- idNumber = 3454623  -->

3. var
   --> legacy code (previous versions)

# function declarations

1. function myName(){
   <!-- Do something -->

   }

2. arrow function
   const myName = ()=>{
   <!-- Do something -->

   }

3. anonymous functions
   --> function(){}
   --> ()=>{}

_key words in functions_

- function, parameter, argument

 <!-- const displayAName = (parameter)=>{
    display parameter
 } -->

const displayName = (name)=>{
alert("Your name is " + name)
}

 <!-- a function must be called, uncontrolled func leads to breaking of your code -->

displayName("Mary")

# object

-- properties , how to access it and manipulate it
const user = {
firstName: "John",
lastName: "Doe",
Gender:"female", //string
calculateTime:new Date(), // func
age:40, // nunber
}
