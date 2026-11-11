var userfname = localStorage.getItem("fname") || "";
var userlname = localStorage.getItem("lname") || "";
var useremail = localStorage.getItem("mail") || "";
var userphn = localStorage.getItem("num") || "";
var userurl = localStorage.getItem("linkk") || "";
var userlocation = localStorage.getItem("loc") || "";
var userjob = localStorage.getItem("job-role");
var userobj = localStorage.getItem("obj");

document.getElementById("name").innerHTML = userfname + " " + userlname;
document.getElementById("role").innerHTML = userjob;
document.getElementById("objective").innerHTML = userobj;
document.getElementById("email").innerHTML = useremail;
document.getElementById("phone").innerHTML = userphn;
document.getElementById("url").innerHTML = userurl;
document.getElementById("location").innerHTML = userlocation;

// EDUCATION

let educationHTML = "";
var deg = localStorage.getItem("degree") || "";
var clgname = localStorage.getItem("clgname") || "";
var csyear = localStorage.getItem("csyear") || "";
var clyear = localStorage.getItem("clyear") || "";
var cpercent = localStorage.getItem("cpercent") || "";


let school12 = localStorage.getItem("name") || "";
let syear12 = localStorage.getItem("syear") || "";
let lyear12 = localStorage.getItem("lyear") || "";
let percent12 = localStorage.getItem("percent") || "";


var school10 = localStorage.getItem("sname") || "";
var ssyear = localStorage.getItem("ssyear") || "";
var slyear = localStorage.getItem("slyear") || "";
var spercent = localStorage.getItem("spercent") || "";

if(deg){
    educationHTML += "<b>Degree:</b> " + deg + "<br>";
}

if(clgname){
    educationHTML += "<b>College:</b> " + clgname + "<br>";
}

if(csyear && clyear){
    educationHTML += "<b>Duration:</b> " + csyear + " - " + clyear + "<br>";
}

if(cpercent){
    educationHTML += "<b>Percentage:</b> " + cpercent + "%<br>";
}


if(deg || clgname || csyear || clyear || cpercent){
    educationHTML += "<br>";
}


if(school12 || syear12 || lyear12 || percent12){

    educationHTML += "<b>Higher Secondary (12th)</b><br>";

    if(school12)
        educationHTML += "School: " + school12 + "<br>";

    if(syear12)
        educationHTML += "Year: " + year12 + "<br>";

     if(lyear12)
        educationHTML += "Year: " + year12 + "<br>";

    if(percent12)
        educationHTML += "Percentage: " + percent12 + "%<br>";

    educationHTML += "<br>";
}
if(school10 || ssyear || slyear || spercent){

    educationHTML += "<b>SSLC (10th)</b><br>";

    if(school10)
        educationHTML += "School: " + school10 + "<br>";

    if(ssyear && slyear)
        educationHTML += "Duration: " + ssyear + " - " + slyear + "<br>";

    if(spercent)
        educationHTML += "Percentage: " + spercent + "%";

}
if(educationHTML){

    document.getElementById("education").innerHTML = educationHTML;

}else{

    document.getElementById("education")
    .closest(".section").style.display="none";

}
// TECHNICAL SKILLS
var tech = [];

["html","css","javascript","python","sql","othertech"].forEach(function(key){
    var value = localStorage.getItem(key);
    if(value){
        tech.push(value);
    }
});

if(tech.length > 0){
    document.getElementById("technical").innerHTML = tech.join("<br>");
}else{
    document.getElementById("technical").closest(".section").style.display="none";
}


// SOFT SKILLS
var soft = [];

["communication","teamwork","creativity","adaptability","othersoft"].forEach(function(key){
    var value = localStorage.getItem(key);
    if(value){
        soft.push(value);
    }
});

if(soft.length > 0){
    document.getElementById("softskill").innerHTML = soft.join("<br>");
}else{
    document.getElementById("softskill").closest(".section").style.display="none";
}


// LANGUAGES
var language = [];

["tamil","english","hindi","otherlang"].forEach(function(key){
    var value = localStorage.getItem(key);
    if(value){
        language.push(value);
    }
});

if(language.length > 0){
    document.getElementById("language").innerHTML = language.join("<br>");
}else{
    document.getElementById("language").closest(".section").style.display="none";
}


// PROJECT

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
document.getElementById("project").closest(".section").style.display="none";
}

// COURSE
var course = localStorage.getItem("course")||"";
if(course){
document.getElementById("course").innerHTML = course;
}else{
document.getElementById("course").closest(".section").style.display="none";
}

//EXPERIENCE
var role = localStorage.getItem("jname") || "";
var company = localStorage.getItem("company") || "";
var duration = localStorage.getItem("duration") || "";
var description = localStorage.getItem("jdescription") || "";
var experienceHTML = "";


if(role){
    experienceHTML += "<b>" + role + "</b><br>";
}


if(company){
    experienceHTML += company + "<br>";
}


if(duration){
    experienceHTML += duration + "<br>";
}


if(description){
    experienceHTML += "<br>" + description;
}

if(experienceHTML){

    document.getElementById("experience").innerHTML =
    experienceHTML;

}
else{

    document.getElementById("experience")
    .closest(".section").style.display = "none";

}

function downloadResume() {

    const element = document.querySelector(".resume");

    html2pdf().set({
        margin: 5,
        filename: "My_Resume.pdf",
        image: {
            type: "jpeg",
            quality: 1
        },
        html2canvas: {
            scale: 2,
            scrollY: 0,
            useCORS: true
        },
        jsPDF: {
            unit: "mm",
            format: "a4",
            orientation: "portrait"
        },
        pagebreak: {
            mode: ["avoid-all","css","legacy"]
        }
    }).from(element).save()
    .then(function(){
    localStorage.clear();
    window.location.href='../index.html';
});
}
