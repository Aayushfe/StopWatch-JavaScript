//Referencing the variables that we will use

let start= document.getElementById("start")
let stop= document.getElementById("stop")
let reset= document.getElementById("reset")
let seconds= document.getElementById("seconds")
let milliseconds= document.getElementById("miliseconds");

let msec = 0;
let sec = 0;
 
let timeInterval;



//Main function
function timer(){
    msec++;
    if(msec<9){
        milliseconds.innerHTML = "0"+msec;
    }
    if(msec>9){
        milliseconds.innerHTML = msec;
    }
    if(msec>99){
        sec++;
        seconds.innerHTML = "0"+sec;
        msec = 0;
        milliseconds.innerHTML = "0"+ msec;
    }
    if(sec>9){
        seconds.innerHTML = sec;
    }
};
// Event Listeners
start.addEventListener("click",()=>{    
    timeInterval = setInterval(timer, 10)
});
stop.addEventListener("click",()=>{
    clearInterval(timeInterval);
});
reset.addEventListener("click",()=>{
    clearInterval(timeInterval);
    milliseconds.innerHTML ="00";
    seconds.innerHTML = "00";
});







// //Referencing the variables;;
// let start = document.getElementById("start");
// let stop = document.getElementById("stop");
// let reset = document.getElementById("reset");
// let seconds = document.getElementById("seconds");
// let miliseconds = document.getElementById("miliseconds");

// let sec = 0;
// let msec = 0;

// let timeInterval;

// //MAin function;;

// const timer = () => {
//   msec++;
//   if (msec < 9) {
//     miliseconds.innerHTML = "0" + msec;
//   } 
//   //For increasing milliseconds and adding a Zero when value is less than 10;;

//   if (msec > 9) {
//     miliseconds.innerHTML = msec;
//   } 
//   //For increasing the milliseconds;;
  
//   if (msec > 99) {
//     sec++;
//     seconds.innerHTML = "0" + sec;
//     msec = 0;
//     miliseconds.innerHTML = "0" + 0;
//   } 
//   //For increment the value of second when it reaches 100 and adding zero to the seconds;;
  
//   if (sec > 9) {
//     seconds.innerHTML = sec;
//   } 
//   //For doing increment the second's value;;
// };

// //Event Listners;;

// start.addEventListener("click", () => {
//   timeInterval = setInterval(timer, 10);
// });

// stop.addEventListener("click", () => {
//   clearInterval(timeInterval);
// });

// reset.addEventListener("click", () => {
//   clearInterval(timeInterval);
//   sec = "00";
//   msec = "00";
//   seconds.innerHTML = sec;
//   miliseconds.innerHTML = msec;
// });
