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
    localStorage.setItem("refresh", "true");
}

function loadCountry() {
    country = localStorage.getItem("myCountry")
    var showCountry = document.createElement("showContry");
    showCountry.innerHTML = country;
    document.getElementById("title").appendChild(showCountry);
}


function moveForward(){    
    progress = parseInt(localStorage.getItem("currentProgress"))
    localStorage.setItem("currentProgress", progress + 1)
    if (localStorage.getItem("currentProgress") == number_of_questions){
        final_score()
    }
}

function makeProgress() {
    
    progress = parseInt(localStorage.getItem("currentProgress"))
    percentage = Math.round(progress / number_of_questions * 100)

    $(".progress-bar").css("width", percentage + "%").text(percentage + " %");
        
    //setTimeout("makeProgress()", 500);
}


function final_score(){
}

function update_score(){
    score_node = document.createElement("score_node")
    score_node.innerHTML = "Score: " + localStorage.getItem("score")
    score = document.getElementById("score")
    while (score.firstChild){
        score.removeChild(score.firstChild)
    }
    score.appendChild(score_node)
}
