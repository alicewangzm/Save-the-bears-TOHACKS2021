var country = "Canada"
var background_jpg = ""

function get_country () {
    country = document.getElementById("Country").value
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
    location.href = "bear.html"
}