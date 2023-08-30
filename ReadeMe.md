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

# data types

1. string :: ""
2. number :: 6,8,43
3. object :: {property:value(any data type),method:func} , arrays,functions
4. null :: null
5. undefined :: undefined
6. boolean :: true, false --> falsy/truthy

# key words

# object

-- properties , methods , how to access it and manipulate it
const user = {
firstName: "John",
lastName: "Doe",
Gender:"female", //string
age:40, // nunber
calculateRandomNumber: Math.random(), // func
subjectScores:{
maths:60,
english:90
}
}

# arrays

-- list of any data type
const array1 = [1,2,3,4,5]; //numbers
const array11 = ["a","b","d"] // strings
const array12 = [1,"c",4,"d"] // numbers and strings
const array13 = [{name:"Otiato",gender:"male"},{name:"Person",gender:"binary"}] // objects
const array14 = [
[1,2,3,4,5], ["a","b","c"]
] // arrays
const array2 = new Array() // legacy codes
