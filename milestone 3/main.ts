// list elements
document.getElementById("resumeform")?.addEventListener("submit",function(event){event?.preventDefault()

    //type assertion
    const nameElement = document.getElementById("name")as HTMLInputElement;
    const emailElement = document.getElementById("name")as HTMLInputElement;
    const phoneElement = document.getElementById("name")as HTMLInputElement;
    const educationElement = document.getElementById("name")as HTMLInputElement;
    const experienceElement = document.getElementById("name")as HTMLInputElement;
    const skillsElement = document.getElementById("name")as HTMLInputElement;

if(nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement){
     const name= nameElement.value;
     const email=emailElement.value;
     const phone=phoneElement.value;
     const education=educationElement.value;
     const experience=experienceElement.value;
     const skills=skillsElement.value;

//create object resume
const resumeOutput=`
<h2>Resume</h2>
<p><strong>Name:</strong>${name}</p>
<p><strong>Email:</strong>${email}</p>
<p><strong>Phone Number:</strong>${name}</p>
<h3>Education:</h3>
<p>${education}</p>

<h3>Expeerience:</h3>
<p>${experience}</p>

<h3>Education:</h3>
<p>${education}</p>

<h3>Skills:</h3>
<p>${skills}</p>
`;
const resumeOutputElement = document.getElementById('resumeOutput')
if(resumeOutputElement){
    resumeOutputElement.innerHTML =resumeOutput
         console.error("The Resume output elements are ,missing");
   }
    else{
        console.error('One or more element are missing');    
    }        
  };
});