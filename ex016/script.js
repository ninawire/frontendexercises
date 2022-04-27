var links = document.getElementsByTagName("a");
console.log(links)

for (i = 0; i < links.length; i++) {
    links[i].className = "link-" +i;
}
