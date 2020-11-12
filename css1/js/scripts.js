const questions_table = [
    ["Ile lat ma Paweł?", 11],
    ["Co jest najbardziej niebezpiecznym zwierzęciem w rzece?", "Wąż"],
    ["Jaka jest prędkość lecącej jaskółki?", "Afrykańskiej czy Europejskiej?"],
    ["Na jakiej ulicy mieści się Pablo&Fadro sp. b.r.o.", "Bujwida"],
];

let asked_questions = [questions_table.length];

var wonsz_angery = parseInt("0.9");

let last_question;

function nextNumber() {
    var question_number;
    if (questions_table.length === asked_questions.length) {
        return asked_questions.length;
    }
    do {
        question_number = Math.random();
        question_number = Math.floor(question_number * 10) % 4;
    } while (asked_questions.includes(question_number))
    asked_questions.push(question_number);
    last_question = question_number;
    return question_number;

}

function checkAnswer(answer){
    return answer.valueOf() == questions_table[last_question][1].valueOf();
}

function getAnswer(){
    asked_questions.push(last_question);
    var input = document.getElementById("Answer").innerText;
    if (checkAnswer(input)){
        window.alert("You choose wisely!");
    } else{
        window.alert("You choose poorly!");
        wonsz_get_angery();
    }
}

function wonsz_get_angery() {
    var wonsz = document.getElementById("wonsz-jpg");
    document.getElementById("wonsz-jpg").style.opacity = wonsz_angery;
}

function parseAnswer() {
  document.getElementById("wonszButton").addEventListener("click", getAnswer);
}

function start() {
  var question = questions_table[nextNumber()][0];
  var elem = document.getElementById("question").innerHTML = question;
}

function answer() {
  var ans = window.prompt("Podaj odpowiedź!");
  if (ans != null) {
    document.getElementById("Answer").innerHTML = ans;
  }
}

function widocznoscWonsza() {
  document.getElementById("Answer").style.opacity = 0.2;
}

function hello() {
  window.alert("Spotkałeś węża! Aby wąż nie był niebezpieczny musisz odpowiedzieć na kilka zagadek!");
}
