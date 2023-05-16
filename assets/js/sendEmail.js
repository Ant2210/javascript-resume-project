function sendMail(contactForm) {
    emailjs.send("gmail", "rosie", 
    {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            alert("Thank you for your message, we aim to respond to all messages within 24 hours.");
            $("#contact-form").children().val("");
        },
        function(error) {
            console.log("FAILED", error);
            alert("Message could not be sent, please try again or try an alternative contact method. Sorry for any inconvenience.")
        }
    );
    return false;
}