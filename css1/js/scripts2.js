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

function getListNameElement() {
  var x = document.getElementById("list").parentNode.nodeName;
  document.getElementById("listName").innerHTML = x;
}

function changeColor() {
  document.getElementById("question").style.color = "red";
  document.getElementById("Answer").style.fontFamily = "Impact,Charcoal,sans-serif";
  document.body.style.backgroundColor = "red";
}

function getNazwaObrazka() {
  var nazwa = document.images.namedItem("wonsz-jpg").src;
  document.getElementById("obrazek").innerHTML = nazwa;
}

function getNazwaLinka() {
  var nazwa = document.links.item("anch").href;
  document.getElementById("linkeł").innerHTML = nazwa;
}

function getNazwaAnch() {
  var nazwa = document.anchors.item("wąż").innerHTML;
  document.getElementById("anch2").innerHTML = nazwa;
}
