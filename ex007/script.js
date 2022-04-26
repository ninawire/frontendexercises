function count() {
    let lastNumber = parseInt(document.getElementById("number").value);
    let result = [];

    for (let i = 1; i <= lastNumber; i++) {
        result.push(i)
    }
    document.getElementById("result").innerHTML = result.join(" ");
}