
// 1. Force the initialization immediately at the very top of the file
try {
    emailjs.init("SeXrgpUAhn0FjCvOv");
    console.log("EmailJS initialized successfully!");
} catch (error) {
    console.error("EmailJS initialization failed:", error);
}

document.addEventListener("DOMContentLoaded", () => {
    const inquiryForm = document.getElementById("inquiry-form");

    inquiryForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // 2. These IDs must match your EmailJS Dashboard exactly
        const serviceID = "service_j3jff0r"; 
        const templateID = "template_20bkgq2";

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                alert("MessaSge Sent Successfully!");
            })
            .catch((err) => {
                console.error("Transmission Error:", err);
                alert("Check the console (F12) for the specific error!");
            });
    });
});