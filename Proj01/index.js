const colorGrid = document.querySelector("input[type='color']");
const submitBtn = document.getElementById("btn");
const quaD = document.getElementById("quadro");

submitBtn.onclick = function (){
    quaD.style.backgroundColor = colorGrid.value;
}