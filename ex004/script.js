function getAnswer() {
    if(document.getElementById("yes").checked == true) {
        document.getElementById("result").innerHTML = "Time to shop till you drop!"
    }
    else{
        document.getElementById("result").innerHTML = "Lets wait for a sale"
    }
}