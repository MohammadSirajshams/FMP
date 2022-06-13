var inputField=document.getElementById("inputField")
var contactButton=document.getElementById("contactButton")
var account=document.getElementsByClassName("signup-input")
function send(){
    if(inputField.value!=""){
        alert("Plz Fill Every Field")
    }
//    else{
//        alert("plz again fill the form")
// }
}

function login(){
    window.location.href="./account.html"
}
function googlePage(){
    window.location.href="https://accounts.google.com"
}
function facebookPage(){
    window.location.href="https://www.facebook.com"
}
function twitterPage(){
    window.location.href="https://twitter.com/i/flow/login"
}

// <-------------------------image slider function-------------------->

var slideImg=document.getElementById("slideImg")
var images=new Array("images/mainredmibanner.jpg","images/MainApple-Watch-Series-6_web.jpg","images/Mainbikebanner.jpg",
"images/Maincarbanner.jpg","images/mainpcbanner.png","images/mainsamsunglaptopbanner.jpg","images/mainceilingfanbanner.jpeg",
"images/MainAC-banner.jpg","images/mainrefrigeratorbanner.jpg");

var len=images.length;
var i=0;

function slider(){
    if(i>len-1){
        i=0;
    }
    slideImg.src=images[i]
    i++;
    setTimeout("slider()",7000)
}

// <---------------------modal popoup function---------------------->

// function popUp(){
//     var blur=document.getElementById("blur")
//     blur.classList.toggle("active")
// }


window.addEventListener('scroll',function(){
    var scroll=document.querySelector("scrollup")
    scroll.classList.toggle("active",window.scrollY>500)
})

function scrolltop(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}


// <________________________login&sign button function start__________________________>

function login(){
    window.location.href="./login.html"
}
function signup(){
    window.location.href="./account.html"
}
// <________________________login&sign button function start__________________________>


function homeContact(){
    window.location.href="./contact.html"
    window.location.href="./home.html"
}
function homeAccount(){
    window.location.href="./account.html"
}
function homeManfashion(){
    window.location.href="./categories.html"
}
function homeContact(){
    window.location.href="./contact.html"
}
function homeContact(){
    window.location.href="./contact.html"
}