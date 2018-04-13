/*eslint-env browser*/
//
////STEP 1 
//var date = new Date();
//
//function daysInMonth (month, year) {
//	"use strict";
//    return new Date(year, month, 0).getDate();
//}
//
//daysInMonth(7, 2009); // 31
//// February
//daysInMonth(2, 2009); // 28
//daysInMonth(2, 2008); // 29

//STEP 2
//var date = window.prompt("Please enter a date formatted like MM/DD/YYYY");
//var month = (date.charAt(0)) + (date.charAt(1));
//window.console.log(month);
////UP PART WORKS
//
//if (month.charAt(0) === "0") {
//	var singledigitmonth = month.slice(0, 1);
//	window.console.log(singledigitmonth);
//} else if (month.charAt(1) === "1") {
//	var month = parseFloat(month);
//	
//	window.alert("The  ")
//} else {
//	window.alert("You entered something incorrectly!");
//}
//

//STEP 3 
//var date = new Date();
//
//var weekdays = date.getDay();
//
////	Friday				Saturday		Sunday
//if (weekdays === 5 || weekdays === 6 || weekdays === 0) {
//	
//	window.console.log("Today is the weekend!");
//} else {
//	
//	window.console.log("That date is not the weekend!");
//}
//window.console.log(weekdays);


//STEP 4 
////var Weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//var toda = window.prompt("What is today? Ex: Wednesday");
//var today = toda.toLowerCase();
//
//
//var yesterday = function (today) {
//	"use strict";
//	if(today === "sunday"){
//	   	window.console.log("Yesterday's date was Saturday!");
//	   } else if (today === "monday"){
//	   	window.console.log("Yesterday's date was Sunday!");
//	   } else if (today === "tuesday"){
//	   	window.console.log("Yesterday's date was Monday!");
//	   } else if (today === "wednesday"){
//	   	window.console.log("Yesterday's date was Tuesday!");
//	   } else if (today === "thursday"){
//	   	window.console.log("Yesterday's date was Wednesday!");
//	   } else if (today === "friday"){
//	   	window.console.log("Yesterday's date was Thursday!");
//	   } else if (today === "saturday"){
//	   	window.console.log("Yesterday's date was Friday!");
//	   } else {
//		   window.console.log("You input something incorrectly");
//	   }
//};
//
//yesterday(today);


//STEP 5

//var date = new Date();
//
//var todaysDate = date.toDateString();
//
//var todayLetter = todaysDate.charAt(0);
//
//window.console.log(todayLetter);



