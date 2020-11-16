function lessonClickAlt(event) {
    if (event.altKey) {
        document.getElementById("alt-result").innerHTML = "BRAVO!";
    } else {
        document.getElementById("alt-result").innerHTML = "Coś słabo";
    }
    document.getElementById("feedback").blur();
}

function lessonClickCtrl(event) {
    if (event.ctrlKey) {
        document.getElementById("ctrl-result").innerHTML = "BRAVO!"
    } else {
        document.getElementById("ctrl-result").innerHTML = "Coś słabo"
    }
    document.getElementById("feedback").blur();
}

function lessonClickShift(event) {
    if (event.shiftKey) {
        document.getElementById("shift-result").innerHTML = "BRAVO!"
    } else {
        document.getElementById("shift-result").innerHTML = "Coś słabo"
    }
    document.getElementById("feedback").blur();
}

function lessonClickFDown() {
    document.getElementById("F-result").innerHTML = "TRZYMAJJJJJ";
}


function lessonClickFUp() {
    document.getElementById("F-result").innerHTML = "Nieźle";
}

function findForfiter(event) {
    var forfiter = document.getElementById("forfiter-jpg");
    var forviterX = forfiter.offsetLeft
    var forviterY = forfiter.offsetTop

    if (event.screenX < forviterX + 300 && event.screenX > forviterX) {
        if (event.screenY < forviterY + 200 && event.screenY > forviterY + 100) {
            document.getElementById("forfiter-result").innerHTML = "Genialnie! Teraz wypełnij feedback pls";
            document.getElementById("feedback").value = "";

        }
    }

}

function hotForfiter(event) {
    document.getElementById("forfiter-result").innerHTML = "BLISKO!";
}

function move_forfiter() {
    var forfiter = document.getElementById("forfiter-jpg");
    var pos = Math.random();
    pos = Math.floor(pos * 10) % 4;
    switch (pos) {
        case 0:
            forfiter.style.top = "50.2%";
            break;
        case 1:
            forfiter.style.top = "49.9%";
            break;
        case 2:
            forfiter.style.left = "50.2%";
            break;
        case 3:
            forfiter.style.left = "49.9%";
            break;
    }
}

function focusFeedback() {
    document.getElementById("feedback").value = "";
    document.getElementById("feedback").placeholder = "Pls wpisz coś miłego";
}

function blurFeedback() {
    var feedback = document.getElementById("feedback");
    if(feedback.value === ""){
        feedback.placeholder = "No weź coś wpisz pls :(";
    }
}

function submitFeedback() {
    document.alert("Dzięki za feedback :)")
}

function resetFeedback() {
    document.alert("Ale weź coś wpisz :(")
    document.getElementById("feedback").placeholder = "O tu wpisz ";
}