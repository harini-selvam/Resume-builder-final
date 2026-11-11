let userfname = localStorage.getItem("fname") || "";
let userlname = localStorage.getItem("lname") || "";
let useremail = localStorage.getItem("mail") || "";
let userphn = localStorage.getItem("num") || "";
let userurl = localStorage.getItem("linkk") || "";
let userlocation = localStorage.getItem("loc") || "";
let userjob = localStorage.getItem("job-role") || "";
let userobj = localStorage.getItem("objective") || "";


document.getElementById("name").innerHTML =
userfname + " " + userlname;


if(userobj){
    document.getElementById("objective").innerHTML = userobj;
}
else{
    document.getElementById("objective").closest(".objective").style.display="none";
}


if(userjob){
    document.getElementById("role").innerHTML = userjob;
}
else{
    document.getElementById("role").closest(".header").style.display="none";
}


if(useremail){
    document.getElementById("email").innerHTML = useremail;
}
else{
    document.getElementById("email").parentElement.style.display="none";
}


if(userphn){
    document.getElementById("phone").innerHTML = userphn;
}
else{
    document.getElementById("phone").parentElement.style.display="none";
}


if(userurl){
    document.getElementById("url").innerHTML = userurl;
}
else{
    document.getElementById("url").parentElement.style.display="none";
}


if(userlocation){
    document.getElementById("location").innerHTML = userlocation;
}
else{
    document.getElementById("location").parentElement.style.display="none";
}

// EDUCATION DETAILS

let collegeDetails =
JSON.parse(localStorage.getItem("collegeDetails")) || [];


let educationHTML = "";


// College / Degree details

collegeDetails.forEach(function(college){


    if(college.degree){
        educationHTML +=
        "<b>Degree:</b> " + college.degree + "<br>";
    }


    if(college.college){
        educationHTML +=
        "<b>College:</b> " + college.college + "<br>";
    }


    if(college.start && college.end){
        educationHTML +=
        "<b>Duration:</b> " +
        college.start + " - " + college.end + "<br>";
    }


    if(college.percentage){
        educationHTML +=
        "<b>Percentage:</b> " +
        college.percentage + "%<br>";
    }


    educationHTML += "<br>";

});

// 12th Details

let school12 = localStorage.getItem("name") || "";
let syear12 = localStorage.getItem("syear") || "";
let lyear12 = localStorage.getItem("lyear") || "";
let percent12 = localStorage.getItem("percent") || "";

if(school12 || syear12 || lyear12 || percent12){


    educationHTML +=
    "<b>Higher Secondary (12th)</b><br>";


    if(school12){
        educationHTML +=
        "School: " + school12 + "<br>";
    }


    if(syear12){
        educationHTML +=
        "Year: " + syear12 + "<br>";
    }

     if(lyear12){
        educationHTML +=
        "Year: " + lyear12 + "<br>";
    }


    if(percent12){
        educationHTML +=
        "Percentage: " + percent12 + "%<br>";
    }


    educationHTML += "<br>";

}

// 10th Details

let school10 = localStorage.getItem("sname") || "";
let ssyear = localStorage.getItem("ssyear") || "";
let slyear = localStorage.getItem("slyear") || "";
let spercent = localStorage.getItem("spercent") || "";



if(school10 || ssyear || slyear || spercent){


    educationHTML +=
    "<b>SSLC (10th)</b><br>";


    if(school10){
        educationHTML +=
        "School: " + school10 + "<br>";
    }


    if(ssyear && slyear){
        educationHTML +=
        "Duration: " + ssyear + " - " + slyear + "<br>";
    }


    if(spercent){
        educationHTML +=
        "Percentage: " + spercent + "%";
    }

}

if(educationHTML){

    document.getElementById("education").innerHTML =
    educationHTML;

}
else{

    document.getElementById("education")
    .closest(".section").style.display="none";

}
let technicalSkills =
JSON.parse(localStorage.getItem("technicalSkills")) || [];


if(technicalSkills.length > 0){

    document.getElementById("technical").innerHTML =
    technicalSkills.join("<br>");

}
else{

    document.getElementById("technical")
    .closest(".section").style.display="none";

}



// SOFT SKILLS

let softSkills =
JSON.parse(localStorage.getItem("softSkills")) || [];


if(softSkills.length > 0){

    document.getElementById("softskill").innerHTML =
    softSkills.join("<br>");

}
else{

    document.getElementById("softskill")
    .parentElement.style.display="none";

}



// LANGUAGES

let languages =
JSON.parse(localStorage.getItem("languages")) || [];


if(languages.length > 0){

    document.getElementById("language").innerHTML =
    languages.join("<br>");

}
else{

    document.getElementById("language")
    .closest(".section").style.display="none";

}



// PROJECT DETAILS

let proname =
localStorage.getItem("proname") || "";

let prodesc =
localStorage.getItem("prodesc") || "";

let tool =
localStorage.getItem("tool") || "";



let projectHTML = "";



if(proname){

    projectHTML +=
    "<b>Project:</b> " + proname + "<br><br>";

}


if(prodesc){

    projectHTML +=
    "<b>Description:</b><br>" +
    prodesc + "<br><br>";

}


if(tool){

    projectHTML +=
    "<b>Tools:</b> " + tool;

}



if(projectHTML){

    document.getElementById("project").innerHTML =
    projectHTML;

}
else{

    document.getElementById("project")
    .parentElement.style.display="none";

}



// COURSE DETAILS

let course =
localStorage.getItem("course") || "";



if(course){

    document.getElementById("course").innerHTML =
    course;

}
else{

    document.getElementById("course")
    .parentElement.style.display="none";

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
// DOWNLOAD RESUME
function downloadResume(){
const element =
document.querySelector(".resume");
html2pdf()
.set({
    margin:[0,0,0,0],
    filename:"My_Resume.pdf",
    image:{
        type:"jpeg",
        quality:1
    },
    html2canvas:{
        scale:1.5,
        scrollY:0,
        useCORS:true
    },
    jsPDF:{
        unit:"mm",
        format:"a4",
        orientation:"portrait"
    },
    pagebreak:{
        mode:[]
    }
})
.from(element)
.save()
.then(function(){
    localStorage.clear();
    window.location.href='../index.html';
});

}