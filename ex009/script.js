let paragraph = document.createElement("p")
paragraph.id = "javaP"
paragraph.innerHTML = "Paragraph created with JavaScript, click me to add a background color"
paragraph.style.color = "white"
paragraph.style.textAlign = "center"
paragraph.style.fontFamily = "arial"
paragraph.style.fontSize = "24px"
paragraph.style.padding = "20px"
document.getElementById("mainDiv").appendChild(paragraph)

paragraph.onclick = function() {
    paragraph.style.backgroundColor = "blue"
}

let eventTarget = document.getElementById("javaP")

eventTarget.addEventListener("mouseover", function() {
    paragraph.style.textDecoration = "underline"
})

function eventHandlerFunction() {
    document.getElementById("mainDiv").style.backgroundColor = "red"
}

document.getElementById("mainDiv").addEventListener("click", eventHandlerFunction)

