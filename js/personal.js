  function save(event){
        event.preventDefault(); 
        var ufname = document.getElementById("fname").value;
        var ulname = document.getElementById("lname").value;
        var emailid = document.getElementById("mail").value;
        var phn = document.getElementById("num").value;
        var url = document.getElementById("linkk").value;
        var loca = document.getElementById("loc").value;
        localStorage.setItem("fname",ufname.toUpperCase());
        localStorage.setItem("lname",ulname.toUpperCase());
        localStorage.setItem("mail",emailid);
        localStorage.setItem("num",phn);
        localStorage.setItem("linkk",url);
        localStorage.setItem("loc",loca);
        window.location.href = "../html/education_detail.html";
        return false;
        }