/*==================================================
    UMAIR SOHAIL PORTFOLIO
    app.js
==================================================*/

"use strict";

/*==========================================
    ELEMENTS
==========================================*/

const header = document.querySelector(".header");
const progressBar = document.getElementById("progress-bar");
const topBtn = document.getElementById("topBtn");
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");
const counters = document.querySelectorAll(".counter");
const revealElements = document.querySelectorAll(
    ".glass, .section-title, .project-card, .timeline-item"
);

/*==========================================
    MOBILE MENU
==========================================*/

if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        menuBtn.classList.toggle("open");

    });

}

navItems.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});

/*==========================================
    SMOOTH SCROLL
==========================================*/

navItems.forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(

            this.getAttribute("href")

        );

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});

/*==========================================
    HEADER EFFECT
==========================================*/

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.style.background =

            "rgba(5,8,22,.90)";

        header.style.backdropFilter =

            "blur(20px)";

    }

    else {

        header.style.background =

            "rgba(5,8,22,.65)";

    }

});

/*==========================================
    SCROLL PROGRESS BAR
==========================================*/

window.addEventListener("scroll", () => {

    const totalHeight =

        document.documentElement.scrollHeight -

        window.innerHeight;

    const progress =

        (window.scrollY / totalHeight) * 100;

    progressBar.style.width =

        progress + "%";

});

/*==========================================
    BACK TO TOP
==========================================*/

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "flex";

    }

    else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/*==========================================
    REVEAL ANIMATION
==========================================*/

const observer = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

},

{

threshold:.15

}

);

revealElements.forEach(el=>{

el.classList.add("reveal");

observer.observe(el);

});

/*==========================================
    COUNTER ANIMATION
==========================================*/

function animateCounter(counter){

const target=

+counter.dataset.target;

let current=0;

const increment=

target/80;

const update=()=>{

current+=increment;

if(current<target){

counter.innerText=

Math.ceil(current);

requestAnimationFrame(update);

}

else{

counter.innerText=target;

}

};

update();

}

const counterObserver=

new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

animateCounter(

entry.target

);

counterObserver.unobserve(

entry.target

);

}

});

},

{

threshold:.5

}

);

counters.forEach(counter=>{

counterObserver.observe(counter);

});

/*==========================================
    ACTIVE NAVIGATION
==========================================*/

const sections=

document.querySelectorAll("section");

window.addEventListener(

"scroll",

()=>{

let current="";

sections.forEach(section=>{

const top=

section.offsetTop-150;

if(window.scrollY>=top){

current=

section.getAttribute("id");

}

});

navItems.forEach(link=>{

link.classList.remove("current");

if(

link.getAttribute("href")==="#"+current

){

link.classList.add("current");

}

});

}

);

/*==========================================
    FLOATING HERO CARD
==========================================*/

const heroCard=

document.querySelector(".hero-card");

if(heroCard){

window.addEventListener(

"mousemove",

(e)=>{

const x=

(window.innerWidth/2-e.clientX)/35;

const y=

(window.innerHeight/2-e.clientY)/35;

heroCard.style.transform=

`rotateY(${x}deg)
 rotateX(${-y}deg)`;

});

}

/*==========================================
    PARALLAX BLOBS
==========================================*/

const blur1=

document.querySelector(".blur1");

const blur2=

document.querySelector(".blur2");

const blur3=

document.querySelector(".blur3");

window.addEventListener(

"mousemove",

e=>{

const x=e.clientX/80;

const y=e.clientY/80;

if(blur1){

blur1.style.transform=

`translate(${x}px,${y}px)`;

}

if(blur2){

blur2.style.transform=

`translate(${-x}px,${y}px)`;

}

if(blur3){

blur3.style.transform=

`translate(${y}px,${-x}px)`;

}

}

);

console.log(
"%cPortfolio Loaded Successfully",
"color:#5b8cff;font-size:16px;font-weight:bold;"
);