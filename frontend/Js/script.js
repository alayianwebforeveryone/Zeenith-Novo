// script.js


const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
});



// activ case navigation













// =================================================form validation ==================================================================================


document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();  // Prevent the form from submitting by default

        let valid = true;

        // Validate Name field
        const nameInput = document.getElementById("name");
        const nameError = nameInput.nextElementSibling;
        if (nameInput.value.trim() === "") {
            nameError.classList.remove("hidden");
            nameError.innerHTML = "<span class='font-medium'>Oops!</span> Name is required.";
            valid = false;
        } else {
            nameError.classList.add("hidden");
        }

        // Validate Email field
        const emailInput = document.getElementById("email");
        const emailError = emailInput.nextElementSibling;
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!emailPattern.test(emailInput.value)) {
            emailError.classList.remove("hidden");
            emailError.innerHTML = "<span class='font-medium'>Oops!</span> Please enter a valid email.";
            valid = false;
        } else {
            emailError.classList.add("hidden");
        }

        // Validate Subject field
        const subjectInput = document.getElementById("subject");
        const subjectError = subjectInput.nextElementSibling;
        if (subjectInput.value.trim() === "") {
            subjectError.classList.remove("hidden");
            subjectError.innerHTML = "<span class='font-medium'>Oops!</span> Subject is required.";
            valid = false;
        } else {
            subjectError.classList.add("hidden");
        }

        // Validate Message field
        const messageInput = document.getElementById("message");
        const messageError = messageInput.nextElementSibling;
        if (messageInput.value.trim() === "") {
            messageError.classList.remove("hidden");
            messageError.innerHTML = "<span class='font-medium'>Oops!</span> Message is required.";
            valid = false;
        } else {
            messageError.classList.add("hidden");
        }

        if (valid) {
            form.submit();  // Submit the form if all validations pass
        }
    });
});

// ======================================form linking with email============================================================================================


function sendEmail() {
    let prams = {

        email: document.getElementById("email").value,
        name: document.getElementById("name").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,

    }

    console.log(prams.email)
    console.log(prams.name)
    console.log(prams.subject)
    console.log(prams.message)

    emailjs.send("service_wctf078", "template_bf4fjms", prams).then(alert('form submited successfully'))
}

