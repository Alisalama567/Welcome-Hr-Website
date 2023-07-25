let char = document.querySelector(".char")
let chart1 = document.querySelector(".chart1")

let stat = document.querySelector(".stat")
let stat1 = document.querySelector(".stat1")

stat1.onclick = function () {
  char.style.display="none"
  chart1.style.display="block"
}
stat.onclick = function () {
  char.style.display="block"
  chart1.style.display="none"
}