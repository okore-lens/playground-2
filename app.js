// declaring all our constant variables at the top
const showBtnEl = document.getElementById("show-btn");
const inputEl = document.getElementById("name");
const nameWrapperEl = document.getElementById("name-wrapper");

let enteredName = "";

const handleInputChanges = (ev) => {
	enteredName = ev.target.value;
};

// declaring a function
function displayName() {
	console.log(enteredName);
}

// a named function
showBtnEl.addEventListener("click", displayName);
// handle changes
inputEl.addEventListener("input", handleInputChanges);

// calling a function
// displayName();

// pointing to a function
// displayName;

// onchange(ev)

// an anonymous arrow function
// inputEl.addEventListener("focus", () => {
// 	console.log("Focused");
// });

// nameWrapperEl.addEventListener("click", () => {
// 	console.log("Our Good Old Wrapper");
// });

// func called

// displayName()

// input
// ---onChange --> input's event and does something with it
// --helper function --> event from onChange and then utilises it
