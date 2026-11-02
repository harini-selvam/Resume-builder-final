    function finish(event){
        event.preventDefault();
        var jrole = document.getElementById("jname").value;
        var jduration = document.getElementById("duration").value;
        var jcompany = document.getElementById("company").value;
        var jdesc = document.getElementById("jdescription").value;

        localStorage.setItem("jname",jrole);
        localStorage.setItem("duration",jduration);
        localStorage.setItem("company",jcompany);
        localStorage.setItem("jdescription",jdesc);        
        window.location.href = "template.html";
        return false;
    };

        function back(){
        window.location.href = "project.html";
        }