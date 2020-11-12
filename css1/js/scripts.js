var wiek_pabla = parseInt("11");

const questions_table = [
    ["Ile lat ma Paweł?", wiek_pabla],
    ["Co jest najbardziej niebezpiecznym zwierzęciem w rzece?", "Wąż"],
    ["Jaka jest prędkość lecącej jaskółki?", "Afrykańskiej czy Europejskiej?"],
    ["Na jakiej ulicy mieści się Pablo&Fadro sp. b.r.o.", "Bujwida"],
];

let asked_questions = [questions_table.length];

let wonsz_angery = parseFloat(0.1);

let last_question;

function nextNumber() {
    var question_number;
    if (asked_questions.length > questions_table.length) {
        return 5;
    }
    do {
        question_number = Math.random();
        question_number = Math.floor(question_number * 10) % 4;
    } while (asked_questions.includes(question_number))
    last_question = question_number;
    return question_number;

}

function checkAnswer(answer){
    return answer.valueOf() == questions_table[last_question][1].valueOf();
}

function getAnswer(){
    var input = document.getElementById("Answer").innerText;
    if (checkAnswer(input)){
        window.alert("You choose wisely!");
        wonsz_get_angery(-0.3);
        asked_questions.push(last_question);
        start();

    } else{
        window.alert("You choose poorly!");
        wonsz_get_angery(0.3);
    }
}


function wonsz_get_angery(angery) {
    wonsz_angery += angery;
    var wonsz = document.getElementById("wonsz-jpg");
    document.getElementById("wonsz-jpg").style.opacity = wonsz_angery;

    if (document.getElementById("wonsz-jpg").style.opacity >=1) {
        document.writeln("<h1> Przegrałeś! </h1>");
    }
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

function hello() {
  window.alert("Spotkałeś węża! Aby wąż nie był niebezpieczny musisz odpowiedzieć na kilka zagadek!")
}

function nieKlikaj() {
    document.getElementById("noclick");
    document.writeln("<h1> Ostrzegaliśmy, żebyś nie klikał! </h1>");
}

hello();
