function deleteForfiter() {
  var doc = document.getElementById("list");
  list.removeChild(list.childNodes[0]);
}

function addForfiter() {
  var newForfiter= document.createElement("LI");
  var textnode = document.createTextNode("Forfiter");
  newForfiter.appendChild(textnode);

  var list = document.getElementById("list");
  list.insertBefore(newForfiter, list.childNodes[0]);
}

function replaceForfiter() {
  var textnode = document.createTextNode("Aligator");
  var item = document.getElementById("list").childNodes[0];
  item.replaceChild(textnode, item.childNodes[0]);
}

function changeColor() {
  document.getElementById("question").style.color = "red";
  document.getElementById("Answer").style.fontFamily = "Impact,Charcoal,sans-serif";
  document.getElementById("wonsz-background").style.backgroundImage = "url(../img/back.png)"
}
