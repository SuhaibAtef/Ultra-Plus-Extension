// Changing The Extension settings to allow all teams to use the code. 
const title = document.getElementById("Title");
title.innerText = Data['Title']
const team = document.getElementById("teamName");
team.innerText = Data['Team-Name']
team.setAttribute("href", Data['Team-Link'])
var r = document.querySelector(':root');
var colorPicker = document.getElementById("colorPicker");
colorPicker.setAttribute("value", Data["mainColor"]);
r.style.setProperty('--main-bg-color', Data["mainColor"]);

colorPicker.addEventListener("change", editColor, false);

function editColor(event) {
    r.style.setProperty('--main-bg-color', event.target.value);
    ;
}


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


var darkmode;
var response = await chrome.storage.sync.get().then((item) => {
    darkmode = item['darkmode'];
    console.log(darkmode);

});


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
    chrome.storage.sync.set({ darkmode: false })
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
    chrome.storage.sync.set({ darkmode: true })
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

if (darkmode) {
    theme = "light";
    setTheme();
}



function createClass(name, rules) {
    var style = document.createElement('style');
    style.type = 'text/css';
    document.getElementsByTagName('head')[0].appendChild(style);
    if (!(style.sheet || {}).insertRule)
        (style.styleSheet || style.sheet).addRule(name, rules);
    else
        style.sheet.insertRule(name + "{" + rules + "}", 0);
}
createClass('.whatever', "background-color: green;");

function applyClass(name, element, doRemove) {
    if (typeof element.valueOf() == "string") {
        element = document.getElementById(element);
    }
    if (!element) return;
    if (doRemove) {
        element.className = element.className.replace(new RegExp("\\b" + name + "\\b", "g"));
    } else {
        element.className = element.className + " " + name;
    }
}