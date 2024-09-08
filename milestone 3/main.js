var _a;
// list elements
(_a = document.getElementById("resumeform")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event === null || event === void 0 ? void 0 : event.preventDefault();
    //type assertion
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("name");
    var phoneElement = document.getElementById("name");
    var educationElement = document.getElementById("name");
    var experienceElement = document.getElementById("name");
    var skillsElement = document.getElementById("name");
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        //create object resume
        var resumeOutput = "\n<h2>Resume</h2>\n<p><strong>Name:</strong>".concat(name_1, "</p>\n<p><strong>Email:</strong>").concat(email, "</p>\n<p><strong>Phone Number:</strong>").concat(name_1, "</p>\n<h3>Education:</h3>\n<p>").concat(education, "</p>\n\n<h3>Expeerience:</h3>\n<p>").concat(experience, "</p>\n\n<h3>Education:</h3>\n<p>").concat(education, "</p>\n\n<h3>Skills:</h3>\n<p>").concat(skills, "</p>\n");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            console.error("The Resume output elements are ,missing");
        }
        else {
            console.error('One or more element are missing');
        }
    }
    ;
});
