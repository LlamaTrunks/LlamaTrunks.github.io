
// Display value when called

function verifyCreds() {
    console.log("verifyCreds() started");
    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;
    var badgeNumb = document.getElementById("badgeID").value;
    var fullName = firstName + " " + lastName;

    // Show on console log
    console.log("Full name is " + fullName);

    // If statement is false 

    if (fullName.length > 20 || fullName.length < 2) {
        document.getElementById("loginStatus").innerHTML =
            "User does not exist. Please enter a valid full name.";

        // If statement is false

    } else if (badgeNumb > 999 || badgeNumb < 100) {  // 
        document.getElementById("loginStatus").innerHTML =
            "Invalid Badge Number! Please submit a valid badge number.";

        //If statement is true

    } else {
        alert("Welcome, " + fullName);
        location.replace("UATmission2.html");
    }

}


