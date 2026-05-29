function checkCode() {
    // 1. Get the value from the input box
    let userInput = document.getElementById("inputbox").value.toLocaleLowerCase();
    let feedback = document.getElementById("message");

    // 2. The 'if' statement
    if (userInput === "kara") {
        // If correct, redirect to the next page
        window.location.href = "./friends/kara-verification.html";
    } else {
        // If wrong, show an error message
        feedback.innerHTML = "oops! you don't get one :<";
    }
}