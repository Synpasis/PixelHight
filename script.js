// Function for calculating grades

const calculate_pixels = () => {
    // Getting input from user into height variable.
    let distobj = document.querySelector("#distobj").value;
    let realobj = document.querySelector("#realobj").value;
    let foclen = document.querySelector("#foclen").value;
    let senhp = document.querySelector("#senhp").value;
    let senhm = document.querySelector("#senhm").value;
    let objpix = document.querySelector("#objpix").value;

    const dict = {
      0 : "Real object height in meters",
      1 : "Focal length in millimeters",
      2 : "Sensor height in pixels",
      3 : "Distance to object in meters",
      4 : "Sensor height in millimeters",
      5 : "Object height in pixels"
    }

 
    // Checking the condition for the providing the
    // grade to student based on percentage

    let pixel_length = realobj*foclen*senhp/ distobj /senhm;

    var leftHandSide = [realobj, foclen, senhp];
    var rightHandSide = [distobj, senhm, objpix];
   
    var leftCount = [];
    var rightCount = [];

    var res = 1;
    var unk;
    var unkNum;

   var reg = /\d+|d*\.d+/g;

    for (let i=0; i<leftHandSide.length; i++) {
      // if(leftHandSide[i]=="") {
         if (!leftHandSide[i].match(reg)) {
         leftCount.push(i);
      }
    }

    for (let i=0; i<rightHandSide.length; i++) {
      // if(rightHandSide[i]!=reg) {
         if (!rightHandSide[i].match(reg)) {
         rightCount.push(i);
      }
    }
    

    // Checking the values are empty if empty than
    // show please fill them

   //  if (distobj== ""|| realobj == "" || foclen == "" || senhp == "" || senhm == "") { document.querySelector("#showdata_pixels").innerHTML = "Please enter all the fields";
    if (rightCount.length>1 || leftCount.length>1 || (leftCount.length == 1 && rightCount.length == 1)) {
      document.querySelector("#showdata_pixels").innerHTML = "Please enter all the fields";
    } else {
       // Checking the condition for the fail and pass

       if (leftCount.length) {
         unk = leftHandSide[leftCount[0]];
         unkNum = leftCount[0];
         for (let i=0; i<rightHandSide.length; i++) {
            res*=rightHandSide[i];
         }
         for (let i=0; i<leftHandSide.length; i++) {
            if (i!=leftCount[0]){
               res = res / leftHandSide[i];
            }
         }
         unk = res;
         res = 1;
       } else {
         unk = rightHandSide[rightCount[0]];
         unkNum = rightCount[0]+3;
         for (let i=0; i<leftHandSide.length; i++) {
            res*=leftHandSide[i];
         }
         for (let i=0; i<rightHandSide.length; i++) {
            if (i!=rightCount[0]){
               res = res / rightHandSide[i];
            }
         }
         unk = res;
         res = 1;
       }

       document.querySelector(
          "#showdata_pixels"
       ).innerHTML =
          ` ${dict[unkNum]}: ${unk} `;
       }
       
    };

const calculate_height = () => {

    let camtilt = document.querySelector("#camtilt").value;
    let fildang = document.querySelector("#fildang").value;
    let objlen = document.querySelector("#objlen").value;

    const dict = {
      0 : "Camera tilt in angles",
      1 : "Field of view in degrees",
      2 : "Object length in meters",
    }

    let obj_height = objlen*Math.cos(Math.PI/2-(camtilt)*Math.PI/180)  

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
          ` Required altitude in meters: ${req_altitude} `;
       }

    };