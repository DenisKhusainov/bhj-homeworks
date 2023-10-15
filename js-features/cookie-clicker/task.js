const clickMe = document.getElementById("cookie");
const counterOfClick = document.getElementById("clicker__counter");
clickMe.onclick = () => {
    counterOfClick.textContent++;
    if (clickMe.width === 200){
        clickMe.width = 180;
    }
    else{
        clickMe.width = 200;
    }
};