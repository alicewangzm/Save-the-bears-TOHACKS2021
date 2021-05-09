var country = "Canada";
var background_jpg = "";

function getCountry() {
    country = document.getElementById("Country").value;
    localStorage.setItem("myCountry", country);
    background_jpg = null;
    switch (country) {
        case 'Canada':
            background_jpg = ""
            break;
        case 'China':
            background_jpg = ""
            break;
        case 'Egypt':
            background_jpg = ""
            break;
        default:
            background_jpg = ""
            break;
    }
    location.href = "bear.html";
}

function loadCountry() {
    country = localStorage.getItem("myCountry")
    var showCountry = document.createElement("showContry");
    showCountry.innerHTML = country;
    document.getElementById("title").appendChild(showCountry);
}


var progress = null;

function moveForward(){
    progress = localStorage.getItem("currentProgress")
}

