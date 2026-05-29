let attempts = 0

function checkCode() {
    // 1. Get the value from the input box
    let userInput = document.getElementById("key").value;
    let feedback = document.getElementById("message");
    let container = document.getElementById("container");

    // 2. The 'if' statement
    if (userInput === "1&LO43&Y0U") {
        // If correct, redirect to the next page
        window.location.href = "welcome.html";
    } else {
        // check attempts and try again
        attempts = attempts + 1
        if (attempts >= 5) {
            feedback.innerHTML = "Verification failed. Redirecting home.";
            container.style.display = "none";
            setTimeout(function() {
                window.location.href = "./index.html";
            }, 5000);
        } else if (attempts < 5) {
            let triesLeft = 5 - attempts
            feedback.innerHTML = "Try again, " + triesLeft + " attempts left.";
        }
    }
}