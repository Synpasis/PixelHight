// Function for calculating grades
const calculate = () => {
    // Getting input from user into height variable.
    let distobj = document.querySelector("#distobj").value;
    let realobj = document.querySelector("#realobj").value;
    let foclen = document.querySelector("#foclen").value;
    let senhp = document.querySelector("#senhp").value;
    let senhm = document.querySelector("#senhm").value;

 
    // Checking the condition for the providing the
    // grade to student based on percentage

    let pixel_length = realobj*foclen*senhp/ distobj /senhm;

    // Checking the values are empty if empty than
    // show please fill them

    if (distobj== ""|| realobj == "" || foclen == "" || senhp == "" || senhm == "") { document.querySelector("#showdata").innerHTML = "Please enter all the fields";
    } else {
       // Checking the condition for the fail and pass
       document.querySelector(
          "#showdata"
       ).innerHTML =
          ` Object height in pixels: ${pixel_length} `;
       }
       
    };