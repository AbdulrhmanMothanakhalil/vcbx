


let landingpage = document.querySelector(".background");

let images = ["p1.jpg","p2.jpg","p3.jpg","p4.jpg","p5.jpg","p6.jpg","p7.jpg","hh1.jpg","hh2.jpg","hh3.jpg"];


landingpage.style.backgroundImage = 'url("imgs/p1.jpg")';




setInterval( () =>{
    let randomnumber = Math.floor(Math.random() * images.length);



    landingpage.style.backgroundImage = 'url("imgs/' + images[randomnumber] + '")';







    console.log(randomnumber);


},4000);




let countdowndate = new Date("MAY 20,2023 23:59:00").getTime();

let counter = setInterval(() => {
    let datenow = new Date().getTime();


    let datediff = countdowndate - datenow;


    let days = Math.floor(datediff / (1000 * 60 * 60 * 24));


    let hours = Math.floor((datediff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    let minutes = Math.floor((datediff % (1000 * 60 * 60)) / (1000 * 60));

    let seconds = Math.floor((datediff % (1000 * 60)) / 1000);

    

 

    //show days text in html page

    document.querySelector(".days").innerHTML= days;
    document.querySelector(".hours").innerHTML= hours < 10 ? `0${hours}`:hours;
    document.querySelector(".minutes").innerHTML= minutes < 10 ? `0${minutes}`:minutes;
    document.querySelector(".seconds").innerHTML= seconds < 10 ? `0${seconds}`:seconds ;

  




},1000)



   
