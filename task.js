/*
1. Transportation
2. Food Choice
*/

const number_of_questions = 10;

Answers = ['c', 'd', 'c', 'b', 'a', 'a', 'b', 'c', 'a', 'd']

function checkRefresh() {
    if (localStorage.getItem('refresh') == "true"){
        localStorage.setItem("currentProgress", 0)
        localStorage.setItem("score", 100)
        localStorage.setItem("refresh", "false")
        makeProgress()
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
    makeProgress()   
}

function sleep(milliseconds) {
    let timeStart = new Date().getTime();
    while (true) {
      let elapsedTime = new Date().getTime() - timeStart;
      if (elapsedTime > milliseconds) {
        break;
      }
    }
  }


for (var i = 1; i < number_of_questions + 1; i++) {
    btn_id = "btn" + i.toString()
    var button = document.getElementById(btn_id)
    //button.disabled = true
    button.addEventListener('change', function(){stateHandle(button, i)})
}

function stateHandle(button, i) {
    if (document.getElementById("Q" + i.toString()).elements['trivia'].value == "") {
      button.disabled = true; //button remains disabled
    } else {
      button.disabled = false; //button is enabled
    }
}
a