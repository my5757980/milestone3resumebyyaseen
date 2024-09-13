var form = document.getElementById('resumeform');
var resumeOutput = document.getElementById('resumeOutput');
var resumeContent = document.getElementById('resumeContent');
function generateResume() {
    // Retrieve values from the form
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Create resume content
    var resumeHTML = "\n        <h3>".concat(firstName, " ").concat(lastName, "</h3>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n        <h4>Education</h4>\n        <p>").concat(education, "</p>\n        <h4>Experience</h4>\n        <p>").concat(experience, "</p>\n        <h4>Skills</h4>\n        <p>").concat(skills, "</p>\n    ");
    // Display the generated resume
    resumeContent.innerHTML = resumeHTML;
    resumeOutput.classList.remove('hidden');
}
// Add event listener to the button
var generateButton = document.getElementById('generateButton');
generateButton.addEventListener('click', generateResume);
