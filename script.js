"use strict";

function changeHeader(event, name){
    var texts = document.getElementsByClassName("text");
    var tabs = document.getElementsByClassName("button");
    for(var i = 0; i < texts.length; i ++){
        texts[i].style.display = "none";
        tabs[i].classList.remove("selected");
    }

    document.getElementById(name).style.display = "block";
    event.currentTarget.classList.add("selected");
}

changeHeader("veisle");
  