/*
This is empty on purpose! Your code to build the resume will go here.
 */

/**
* Append Name and role into page header using HTMLheaderName & HTMLheaderRole variables from helper.js
* and replace the %data% value with attributes and append them into index.html
*/
var myName = "Georgios Georgiou"; 
var formattedName = HTMLheaderName.replace("%data%",myName);
var myRrole = "Web Implementer";
var formattedRole = HTMLheaderRole.replace("%data%",myRrole);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);