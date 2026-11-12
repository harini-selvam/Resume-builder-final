let techOther = [];
        let softOther = [];
        let langOther = [];

        function addtech(){
            let value = document.getElementById("othertech").value;
            if(value!=""){
                techOther.push(value);
                document.getElementById("othertech").value="";
                showTech();
            }
        }

        function showTech(){
            document.getElementById("techList").innerHTML =
            techOther.join("<br>");
        }

        function addsoft(){
            let value = document.getElementById("othersoft").value;
            if(value!=""){
                softOther.push(value);
                document.getElementById("othersoft").value="";
                showSoft();
            }
        }

        function showSoft(){
            document.getElementById("softList").innerHTML =
            softOther.join("<br>");
        }

        function addlang(){
            let value = document.getElementById("otherlang").value;
            if(value!=""){
                langOther.push(value);
                document.getElementById("otherlang").value="";
                showLang();
            }
        }

        function showLang(){
                document.getElementById("langList").innerHTML =langOther.join("<br>");
        }

       function move(){
            let technical = [];
            if(html.checked) technical.push("HTML");
            if(css.checked) technical.push("CSS");
            if(javascript.checked) technical.push("Java Script");
            if(python.checked) technical.push("Python");
            if(sql.checked) technical.push("SQL");
            technical = technical.concat(techOther);

            let soft = [];
            if(communication.checked) soft.push("Communication");
            if(teamwork.checked) soft.push("Teamwork");
            if(creativity.checked) soft.push("Creativity");
            if(adaptability.checked) soft.push("Adaptability");
            soft = soft.concat(softOther);

            let languages=[];
            if(tamil.checked) languages.push("Tamil");
            if(english.checked) languages.push("English");
            if(hindi.checked) languages.push("Hindi");
            languages = languages.concat(langOther);

            localStorage.setItem("technicalSkills",JSON.stringify(technical));
            localStorage.setItem("softSkills",JSON.stringify(soft));
            localStorage.setItem("languages",JSON.stringify(languages));

            window.location.href="../html/project.html";
        }
        function back(){
        window.location.href = "../html/education_detail.html";
        }