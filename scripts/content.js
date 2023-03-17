window.addEventListener("load", myMain, false);

function myMain(evt) {
    // darkMode();
    addLinks();

}

function darkMode() {
    document.body.style.backgroundColor = "#000000"; // Background Color
    document.querySelector(".main-inner").style.backgroundColor = "#000000"; // main inner color

    // Text Color is white
    var allTextElements = document.getElementsByTagName("*");
    for (var i = 0; i < allTextElements.length; i++) {
        allTextElements[i].style.color = "#ffffff";
    }

    // Navigation Bar
    document.querySelector(".navbar-brand").innerText = "Ultra Bytes"; // Title 
    document.querySelector(".moremenu .nav-link.active").style.borderBottomColor = "#FF0000"; // Active tab border color
    document.querySelector(".navbar").style.borderBottom = "#FF0000 2px solid"; // Line 
    document.querySelector(".navbar").style.boxShadow = "0 0 10px #FF0000"; // Glow

    // Links at top
    collection = document.querySelectorAll(".navbar-light .navigation .nav-link");
    for (var i = 0; i < collection.length; i++) {
        collection[i].style.color = "#FF0000";
    }
    //icons
    collection = document.querySelectorAll(".icon");
    for (var i = 0; i < collection.length; i++) {
        collection[i].style.color = "#FF0000";
    }
}


function addLinks() {
    var jsInitChecktimer = setInterval(checkForJS_Finish, 111);

    function checkForJS_Finish() {
        if (typeof SOME_GLOBAL_VAR != "undefined"
            || document.querySelector("#page-container-1 > div > div")
        ) {
            clearInterval(jsInitChecktimer);
            var list = document.querySelector('#page-container-1 > div > div'); // List of cards 
            const listItems = list.children;
            for (var i = 0; i < listItems.length; i++) {
                // console.log(list[i].id);
                var item = listItems[i];
                // aalink coursename mr-2 mb-1  / #course-info-container-190-3 > div > div > a 
                title = item.querySelector("a.aalink span.multiline").textContent.replace(/\s/g, '').split('-')[0];
                if (coursesResources.hasOwnProperty(title)) {
                    // console.log(dict[title]); // aquire link for the element.
                    var btn = document.createElement("a");
                    btn.innerHTML = "Ultra Bytes Resources";
                    btn.classList.add("btn", "btn-primary", "btn-sm", "rounded-0");
                    btn.href = coursesResources[title];
                    btn.target = "_blank";
                    btn.style.width = "100%";
                    var btn2 = document.createElement("a");
                    btn2.innerHTML = "البوست الشامل";
                    btn2.classList.add("btn", "btn-danger", "btn-sm", "rounded-0");
                    btn2.href = coursesPosts[title];
                    btn2.style.width = "100%";
                    btn2.target = "_blank";
                    var diva = document.createElement("div");
                    diva.appendChild(btn);
                    diva.appendChild(btn2);
                    item.appendChild(diva);
                }

            }
        }
    }
}