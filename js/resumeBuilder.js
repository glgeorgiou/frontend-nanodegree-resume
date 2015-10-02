
/*
This is empty on purpose! Your code to build the resume will go here.
*/

/**
* Append Name and role into page header using HTMLheaderName & HTMLheaderRole variables from helper.js
* and replace the %data% value with attributes and append them into index.html
*/


//Bio Object
var bio = {
	"name" : "Georgios Georgiou",
	"role" : "Front End practitioner",
	"contacts" : {
		"mobile" : "+306987412365",
		"email" : "info@ggeorgiou.gr",
		"github" : "glgeorgiou",
		"twitter" : "ggeorgiogr",
		"location" : "Athens, Greece"
	},
	"welcomeMessage" : "Welcome to my resume",
	"skills" : ["HTML","CSS","WordPress","Javascript"],
	"bioPic" : "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/3/005/09b/281/16988e9.jpg"
}


//Education Object

var education = {
	"schools" : [
	{
		"name" : "University of Wales, Newport",
		"location" :"Newport",
		"degree" : "Bachelor",
		"majors" : "CS",
		"dates" : 1999,
		"url" : "www.newport.ac.uk"
	},
	{
		"name" : "Ecole MBA",
		"location" :"France",
		"degree" : "MBA in IT",
		"majors" : "MBA",
		"dates" : 2005,
		"url" : "www.escem.fr"
	}
  ],
  	"onLineCourses" : [
  		{
  			"title" : "Javascript Intro",
  			"school" : "Udacity",
  			"dates" : 2015,
  			"url" : "www.udacity.com"
  		}
  	]
  }

  //Work Object
  var work = {
  	"jobs" : [
  	{
  		"employer" :"Employer 1",
  		"title" : "Job title 1",
  		"dates" : "2013",
      "location" : "Athens, Greece",
  		"description" : "This is a description of the job in to employer 1"
  	},
  	{
  		"employer" :"Employer 2",
  		"title" : "Job title 2",
  		"dates" : "2014",
  		"location" : "Patra, Greece",
      "description" : "This is a description of the job in to employer 2"
  	}]
  }

  //Projects Object

  var projects = {
  	"projects" : [
  	{
  		"title" : "Sample project 1",
  		"dates" : 2014,
  		"description" : "bla bla bla",
  		"images" : 
        [
  			"http://www.project1",
  			"http://www.project2"
  		  ]
  	 }
  	]
  }

/***
* Add Name and role
*/
var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
$("#header").append(formattedName);
$("#header").append(formattedRole);


  /**
  * skills evaluation using if
  */
if (bio.skills.length > 0) 
{
  $("#header").append(HTMLskillsStart); //Append the ul element so that to appear
  //Append each li element
  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
   $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
   $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
   $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
   $("#skills").append(formattedSkill);
}

/**
* Jobs using for-in loop
*/

for (job in work.jobs) 
{
  $("#workExperience").append(HTMLworkStart); //Append the work element

  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
  var formattedEmployerTitle = formattedEmployer+formattedTitle; //Concatenation
  var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
  var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
  var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

  $(".work-entry:last").append(formattedEmployerTitle); //append to the last element of the class
  $(".work-entry:last").append(formattedDates);
  $(".work-entry:last").append(formattedLocation);
  $(".work-entry:last").append(formattedDescription);
}