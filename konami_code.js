const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

console.log(code)

function init() {
  
const body = document.querySelector("body");

body.addEventListener("keydown",function(event) {
alert("I was keydowned!");
console.log(event)
  
})
 console.log(body) 
}

init()


const  = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
 
console.log()
 
function init() {
  
}










function onKeyDownHandler(e) {
  const key = parseInt(e.detail || e.which);
 
  if (key === alphabet[index]) {
    index++;
 
    if (index === alphabet.length) {
      alert("Hurray!");
 
      index = 0;
    }
  } else {
    index = 0;
  }
}