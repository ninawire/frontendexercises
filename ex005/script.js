function cleanSign() {
    document.getElementById("green").style.backgroundColor = "white";
    document.getElementById("red").style.backgroundColor = "white";
    document.getElementById("yellow").style.backgroundColor = "white";
}

function light() {
    let lid = Math.floor(Math.random() * 3);
    cleanSign();
    switch (lid) {
        case 0:
            document.getElementById("red").style.backgroundColor = "red"
            break;
        case 1:
            document.getElementById("yellow").style.backgroundColor = "yellow"
            break;
        case 2:
            document.getElementById("green").style.backgroundColor = "green"
            break;
    }
}