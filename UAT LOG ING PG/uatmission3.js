
// Here is where the function will go to start countdown
function BeginCountdown() {
    console.log("BeginCountdown() started");

    // Variable to display info on the screen
    var currTime = currTime = 10;
    for (var i = 10; i >= 0; i--) {

        //to be executed after the timer expires
        setTimeout(function () {
            if (currTime >= 6) { //If conditions are true
                document.getElementById("CountdownTracker").innerHTML = currTime;
            } else { //if conditions are not true
                document.getElementById("CountdownTracker").innerHTML =
                    "Warning Less than half way to launch, time left = " + currTime;

            }

            currTime = currTime - 1;

        },
            i * 925);



    }
    //to be executed after the timer expires
    setTimeout(function () {
        document.getElementById("CountdownTracker").innerHTML = "Blastoff!";
    },

        //After 10 seconds Blastoff! Will display

        10000);
}

