const form = document.getElementById('resumeform') as HTMLFormElement;
const resumeOutput = document.getElementById('resumeOutput') as HTMLDivElement;
const resumeContent = document.getElementById('resumeContent') as HTMLDivElement;

function generateResume(): void {
    // Retrieve values from the form
    const firstName = (document.getElementById('firstName') as HTMLInputElement).value;
    const lastName = (document.getElementById('lastName') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    // Create resume content
    const resumeHTML = `
        <h3>${firstName} ${lastName}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <h4>Education</h4>
        <p>${education}</p>
        <h4>Experience</h4>
        <p>${experience}</p>
        <h4>Skills</h4>
        <p>${skills}</p>
    `;

    // Display the generated resume
    resumeContent.innerHTML = resumeHTML;
    resumeOutput.classList.remove('hidden');
}

// Add event listener to the button
const generateButton = document.getElementById('generateButton') as HTMLButtonElement;
generateButton.addEventListener('click', generateResume);