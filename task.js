/*
1. Transportation
2. Food Choice
*/

const number_of_questions = 10;

Answers = ['c', 'b', 'a']

function checkRefresh() {
    if (localStorage.getItem('refresh') == "true"){
        localStorage.setItem("currentProgress", 0)
        localStorage.setItem("score", 100)
        localStorage.setItem("refresh", "false")
    }
}

function deduct_score(amount=10){
    score = localStorage.getItem("score")
    localStorage.setItem("score", score - amount)
}

function collectAnswer() {
    const form = document.getElementById("Q" + localStorage.getItem("currentProgress"))
    user_input = form.elements['trivia'].value
    answer_id = parseInt(localStorage.getItem("currentProgress"))
    if (Answers[answer_id-1] != user_input){
        deduct_score()      
    }
    update_score()
    setTimeout("makeProgress()", 3000)     
}