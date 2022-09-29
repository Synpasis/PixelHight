// Function for calculating grades

const calculate_pixels = () => {
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

    if (distobj== ""|| realobj == "" || foclen == "" || senhp == "" || senhm == "") { document.querySelector("#showdata_pixels").innerHTML = "Please enter all the fields";
    } else {
       // Checking the condition for the fail and pass
       document.querySelector(
          "#showdata_pixels"
       ).innerHTML =
          ` Object height in pixels: ${pixel_length} `;
       }
       
    };

const calculate_height = () => {

    let camtilt = document.querySelector("#camtilt").value;
    let fildang = document.querySelector("#fildang").value;
    let objlen = document.querySelector("#objlen").value;

    let obj_height = objlen*Math.cos(Math.PI/2-(camtilt-fildang/2)*Math.PI/180)

    if (camtilt== ""|| fildang == "" || objlen == "" ) { document.querySelector("#showdata_height").innerHTML = "Please enter all the fields";
    } else {
       // Checking the condition for the fail and pass
       document.querySelector(
          "#showdata_height"
       ).innerHTML =
          ` Object height in meters: ${obj_height} `;
       }

    };

const calculate_altitude = () => {

    let camtilt = document.querySelector("#camtilt_three").value;
    let fildang = document.querySelector("#fildang_three").value;
    let disttar = document.querySelector("#disttar").value;

    let req_altitude = disttar*Math.cos(Math.PI/2-(camtilt-fildang/2)*Math.PI/180)

    if (camtilt== ""|| fildang == "" || objlen == "" ) { document.querySelector("#showdata_altitude").innerHTML = "Please enter all the fields";
    } else {
       // Checking the condition for the fail and pass
       document.querySelector(
          "#showdata_altitude"
       ).innerHTML =
          ` Object height in meters: ${req_altitude} `;
       }

    };