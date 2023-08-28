### Javascript Roadmap

## Naming convention

- camel case --> myName

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

displayName("Lens")

# object

-- properties , how to access it and manipulate it
const user = {
firstName: "John",
lastName: "Doe",
Gender:"female",
calculateTime:new Date(),
}
