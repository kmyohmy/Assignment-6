///*eslint-env browser*/
////
////STEP 1
var origstring = window.prompt("Plaease enter one word");

var arguments = origstring.length;
var alphabetical = origstring.split('');
window.console.log(alphabetical);
alphabetical = alphabetical.sort().join('');

window.alert('Here is that word in alphabetical order: ' + alphabetical);
//////STEP 2
//
//var string = window.prompt("Plaease enter a phrase all lowercase");
//
//var words = string.split(' ');
//
//window.console.log(words);
//
//var i;
//for (i = 0; i < words.length; i += 1) {
//	var uppercased = words[i].toString().charAt(0).toUpperCase;
//
//	window.console.log(uppercased);
//}

////STEP 3
//
//var input = window.prompt("Please enter a phrase");
//
//function countVowel(input) {
//	"use strict";
//	var i, counter;
//	counter = 0;
//	
//	for (i = 0; i < input.length; i += 1) {
//		if (input.charAt(i) === 'a' || input.charAt(i) === 'e' || input.charAt(i) === 'i' || input.charAt(i) === 'o' || input.charAt(i) === 'u') {
//			counter += 1;
//		}
//	
//	}
//	
//	
//	window.console.log(counter);
//}
//
//countVowel(input);
////STEP 4 
//
//var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
//window.console.log(alphabet);
//
//var uniqueID = '';
//
//var i;
//
//for (i = 0; i < 15; i += 1){
//uniqueID += alphabet[Math.round((Math.random()*27))];
//
//}
//
//window.console.log(uniqueID);
////STEP 5
//// Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.Sample Data and OutputSample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])Expected output: "United States of America"
//
//
//var countryNames = [];
//var countryLengtharr = [];
//
//for (i = 0; i < 3; i += 1){
//	
//countryNam = window.prompt("Please enter a country name");
//	
//	countryNames.push(countryNam);
//	countryNames.push(countryLengtharr);
//}
//window.console.log(countryNames);
//
//function countryNameLength(countryNames) {
//	"use strict";
//	var i;
//	for (i = 0; i < countryNames.length; i += 1) {
//		var countrylength = countryNames[i].length;
//		countryLengtharr = countrylength;
//		
//		window.console.log(countryNames);
//	}
//	
//}
//
//
//countryNameLength(countryNames);