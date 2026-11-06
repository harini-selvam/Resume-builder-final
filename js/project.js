      function next(event){
            event.preventDefault();
            const resumeType = sessionStorage.getItem("resumeType");
            if(resumeType=="fresher"){
                window.location.href = "fresher_template.html"
            }
             else{
                window.location.href = "experience.html"
             }   
        
            var pname = document.getElementById("proname").value;
            var pdes = document.getElementById("prodesc").value;
            var ptool = document.getElementById("tool").value;
            var cour = document.getElementById("course").value;
            var jrole = document.getElementById("job-role").value;
            var objective = document.getElementById("obj").value;

            localStorage.setItem("proname",pname);
            localStorage.setItem("prodesc",pdes);
            localStorage.setItem("tool",ptool)
            localStorage.setItem("course",cour);
            localStorage.setItem("job-role",jrole);
            localStorage.setItem("obj",objective);
            return false;
        }

        function back(){
        window.location.href = "../html/skill.html"
        }
