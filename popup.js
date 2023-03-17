// Changing The Extension settings to allow all teams to use the code. 
const title = document.getElementById("Title");
title.innerText = Data['Title']
const team = document.getElementById("teamName");
team.innerText = Data['Team-Name']
team.setAttribute("href", Data['Team-Link'])



const images = document.getElementsByClassName("image");
const textItems = document.querySelectorAll("span");
const sun = "https://www.uplooder.net/img/image/55/7aa9993fc291bc170abea048589896cf/sun.svg";
const moon = "https://www.uplooder.net/img/image/2/addf703a24a12d030968858e0879b11e/moon.svg"
const container = document.getElementsByClassName("theme-container")[0];
const themeIcon = document.getElementById("theme-icon");

const imagesSourceLight = {
    "1": "./images/tabIcons/eLearning.png",
    "2": "./images/tabIcons/StudentsServices.png",
    "3": "./images/tabIcons/AcademicCalendar.png",
    "4": "./images/tabIcons/Registration.png",
    "5": "./images/tabIcons/OfficeEmail.png",
}

const imagesSourceDark = {
    "1": "./images/tabIcons/eLearning-light.png",
    "2": "./images/tabIcons/StudentsServices-light.png",
    "3": "./images/tabIcons/AcademicCalendar-light.png",
    "4": "./images/tabIcons/Registration-light.png",
    "5": "./images/tabIcons/OfficeEmail-light.png",
}
var darkmode = true;
var theme = "light";
document.body.style = "transition: 0.5s;"

container.addEventListener("click", setTheme);



function setTheme() {
    document.body.classList.toggle('dark');
    for (var i = 0; i < 6; i++) {
        textItems[i].classList.toggle('dark');
    }

    switch (theme) {
        case "dark":
            setLight();
            theme = "light";
            break;
        case "light":
            setDark();
            theme = "dark";
            break;
    }
}


function setLight() {
    darkmode = false;
    for (var i = 1; i < 6; i++) {
        images[i].src = imagesSourceLight[i]
    }
    container.classList.remove("shadow-dark");
    setTimeout(() => {
        container.classList.add("shadow-light");
        themeIcon.classList.remove("change");
    }, 300);
    themeIcon.classList.add("change");
    themeIcon.src = sun;
}


function setDark() {
    darkmode = true;
    for (var i = 1; i < 6; i++) {
        images[i].src = imagesSourceDark[i]
    }

    container.classList.remove("shadow-light");
    setTimeout(() => {
        container.classList.add("shadow-dark");
        themeIcon.classList.remove("change");
    }, 300);
    themeIcon.classList.add("change");
    themeIcon.src = moon;
}

if (darkmode == true) {
    theme = "light";
    setTheme()
}