//personal

var userfname = localStorage.getItem("fname");
var userlname = localStorage.getItem("lname");
var useremail = localStorage.getItem("mail");
var userphn = localStorage.getItem("num");
var userurl = localStorage.getItem("linkk");
var userlocation = localStorage.getItem("loc");
var userjob = localStorage.getItem("job-role");
var userobj = localStorage.getItem("obj");

document.getElementById("name").innerHTML =
userfname + " " + userlname;

document.getElementById("objective").innerHTML =
userobj;

document.getElementById("role").innerHTML =
userjob;

document.getElementById("email").innerHTML =
useremail;

document.getElementById("phone").innerHTML =
userphn;

document.getElementById("url").innerHTML =
userurl;

// if userurl.length<0
// {
//     document.getElementById("url").closest(".url").style.display="none";
// }

document.getElementById("location").innerHTML =
userlocation;

// College Details
var collegeDetails = JSON.parse(localStorage.getItem("collegeDetails")) || [];

var collegeHTML = "";

collegeDetails.forEach(function(college, index){

    collegeHTML += 
    "<b>Degree:</b> " + college.degree + "<br>" +
    "<b>College:</b> " + college.college + "<br>" +
    "<b>Duration:</b> " + college.start + " - " + college.end + "<br>" +
    "<b>Percentage:</b> " + college.percentage + "%<br><br>";

});

// 12th Details
var school12 = localStorage.getItem("name");
var year12 = localStorage.getItem("year");
//var mark12 = localStorage.getItem("mark");
//var total12 = localStorage.getItem("tot");
var percent12 = localStorage.getItem("percent");

// 10th Details
var school10 = localStorage.getItem("sname");
var ssyear = localStorage.getItem("ssyear");
var slyear = localStorage.getItem("slyear");
//var smark = localStorage.getItem("smark");
//var stot = localStorage.getItem("stot");
var spercent = localStorage.getItem("spercent");

if(collegeDetails.length>0 ||
   school12 || year12 || percent12 ||
   school10 || ssyear || slyear || spercent){

document.getElementById("education").innerHTML =
collegeHTML +

"<b>Higher Secondary (12th)</b><br>" +
"School: " + school12 + "<br>" +
"Year: " + year12 + "<br>" +
"Percentage: " + percent12 + "%<br><br>" +

"<b>SSLC (10th)</b><br>" +
"School: " + school10 + "<br>" +
"Duration: " + ssyear + " - " + slyear + "<br>" +
"Percentage: " + spercent + "%";

}else{
document.getElementById("education").closest(".education").style.display="none";
}

let technicalSkills =
JSON.parse(localStorage.getItem("technicalSkills")) || [];

if (technicalSkills.length > 0) {

    document.getElementById("technical").innerHTML =
    technicalSkills.join("<br>");

} else {

    document.getElementById("technical")
    .closest(".technical").style.display = "none";
}


let softSkills =
JSON.parse(localStorage.getItem("softSkills")) || [];

if (softSkills.length > 0) {

    document.getElementById("softskill").innerHTML =
    softSkills.join("<br>");

} else {

    document.getElementById("softskill")
    .closest(".softskill").style.display = "none";
}

let languages =
JSON.parse(localStorage.getItem("languages")) || [];

if (languages.length > 0) {

    document.getElementById("language").innerHTML =
    languages.join("<br>");

} else {

    document.getElementById("language")
    .closest(".language").style.display = "none";
}

//project
var proname = localStorage.getItem("proname") || "";
var prodesc = localStorage.getItem("prodesc") || "";
var tool = localStorage.getItem("tool") || "";

if(proname || prodesc || tool){

var project = "";

if(proname){
project += "<b>Project:</b> " + proname + "<br><br>";
}

if(prodesc){
project += "<b>Description:</b><br>" + prodesc + "<br><br>";
}

if(tool){
project += "<b>Tools:</b> " + tool;
}

document.getElementById("project").innerHTML = project;

}else{
document.getElementById("project").closest(".project").style.display="none";
}

//course
var course = localStorage.getItem("course")||"";
if(course){
document.getElementById("course").innerHTML = course;
}else{
document.getElementById("course").closest(".course").style.display="none";
}

function downloadResume() {

    const element = document.querySelector(".resume");

    html2pdf().set({
        margin: [0, 0, 0, 0],
        filename: "My_Resume.pdf",
        image: {
            type: "jpeg",
            quality: 1
        },
        html2canvas: {
            scale: 1.5,
            scrollY: 0,
            useCORS: true
        },
        jsPDF: {
            unit: "mm",
            format: "a4",
            orientation: "portrait"
        },
        pagebreak: {
            mode: []
        }
    }).from(element).save();
}