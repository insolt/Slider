let i=1;
let plik="<img src=\"images/"+i+".jpg\" alt=\"\">";
document.getElementById("photo").innerHTML=plik;

function left() {
    i=i-1;
    console.log(i);
    if (i<1) {
        i=3;
        document.getElementById("photo").innerHTML="<img src=\"images/"+i+".jpg\" alt=\"\">";
    } else {
        plik="<img src=\"images/"+i+".jpg\" alt=\"\">";
        document.getElementById("photo").innerHTML=plik;
    }
}

function right() {
    i=i+1;
    console.log(i);
    if (i>3) {
        i=1;
        document.getElementById("photo").innerHTML="<img src=\"images/"+i+".jpg\" alt=\"\">";
    } else {
        plik="<img src=\"images/"+i+".jpg\" alt=\"\">";
        document.getElementById("photo").innerHTML=plik;
    }
}

let toLeft=document.getElementById("left");
toLeft.addEventListener("click", left);
let toRight=document.getElementById("right");
toRight.addEventListener("click", right);