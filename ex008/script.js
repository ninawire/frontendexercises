let eventTarget = document.getElementById("sale");


const random_hex_color_code = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
  };

eventTarget.addEventListener("click", function() {
    eventTarget.style.backgroundColor = random_hex_color_code();
})

document.getElementById("change").addEventListener("mouseenter", function() {
  document.getElementById("change").innerHTML = "Like click or mouse over..."
})

document.getElementById("change").addEventListener("mouseleave", function() {
  document.getElementById("change").innerHTML = "change elements on HTML with events"
})

document.getElementById("drag").addEventListener("drag", function() {
  document.getElementById("drag").innerHTML = ""
})
