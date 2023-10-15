
let findStartCount = document.getElementById("timer");
const counter = function (){
    findStartCount.textContent --;
if (findStartCount.textContent < 0){
    alert("Вы победили в конкурсе");
    clearInterval(timeWin);
    findStartCount.textContent = 0;
}

}
const timeWin = setInterval(counter, 10);

