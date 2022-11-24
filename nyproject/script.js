const form = document.querySelector("form"),
        nextBtn = form.querySelector(".nextBtn"),
        backBtn = form.querySelector(".backBtn"),
        allInput = form.querySelectorAll(".first input");

nextBtn.addEventListener("click", ()=>{
   
    allInput.forEach(input => {
        if(input.value !="")
        {
            /*we can use these variables for further accessibility*/ 
            form.classList.add('secActive');
            fname = document.getElementById("firstname").value;
            lname = document.getElementById("lastname").value;
            dob = document.getElementById("dob").value;
            email = document.getElementById("email").value;
            fathername = document.getElementById("fathername").value;
            mothername = document.getElementById("mothername").value;
            gender = document.getElementById("gender").value;
            nation = document.getElementById("nationality").value;
            adress = document.getElementById("adress").value;
            city = document.getElementById("city").value;
            country = document.getElementById("country").value;
            
            
           mobilenumber = document.getElementById("mnumber").value;

            homenumber = document.getElementById("hnumber").value;
            hscIn = document.getElementById("hscIn").value;
            hsc = document.getElementById("hsc").value;
            hmark = document.getElementById("hmark").value;
            sscIn = document.getElementById("sscIn").value;
            ssc = document.getElementById("ssc").value;
            smark = document.getElementById("smark").value;
            currentPursuing = document.getElementById("current").value;
            currentIN = document.getElementById("CeduIn").value;
            overal = document.getElementById("overal").value;
            back = document.getElementById("back").value;
            check = document.getElementById("check").value;
            
            
            

           

           


            localStorage.setItem("fname",fname);
            localStorage.setItem("lname",lname);
            localStorage.setItem("dob",dob);
            localStorage.setItem("email",email);
            localStorage.setItem("father",fathername);
            localStorage.setItem("mother",mothername);
            localStorage.setItem("gender",gender);
            localStorage.setItem("nation",nation);
            localStorage.setItem("adress",adress);
            localStorage.setItem("city",city);
            localStorage.setItem("country",country);
            localStorage.setItem("mobile",mobilenumber);
            localStorage.setItem("home",homenumber);
            localStorage.setItem("hscIn",hscIn);
            localStorage.setItem("hsc",hsc);
            localStorage.setItem("hmark",hmark);
            localStorage.setItem("sscIn",sscIn);
            localStorage.setItem("ssc",ssc);
            localStorage.setItem("smark",smark);
            localStorage.setItem("currentpursuing",currentPursuing);
            localStorage.setItem("currentIN",currentIN);
            localStorage.setItem("overal",overal);
            localStorage.setItem("back",back);
            
            


        }       
        else{
            form.classList.remove('secActive');
            
        }

    })
})

backBtn.addEventListener("click",()=> form.classList.remove('secActive'));






