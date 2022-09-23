let blueSide1 = document.getElementById("divRight");
let redSide1 = document.getElementById("divLeft");

let blueIndex1 = 50;
let redIndex1 = 50;

let text11 = document.getElementById("text11");

window.addEventListener("keydown", function (event) {
  if ((event.key == "s")) {
    console.log((text11.innerText = "'BLUE' team Clicked"));
    redIndex1 = redIndex1 + 10;
    blueIndex1 = blueIndex1 - 10;
    redSide1.style.width = `${redIndex1}%`
    blueSide1.style.width = `${blueIndex1}%`
    if(redIndex1 == 100) {
      this.alert('BLUE wins')
    }
  } 
  else if (event.key == "l") {
    console.log((text11.innerText = "'RED' team clicked"));
    blueIndex1 = blueIndex1 + 10;
    redIndex1 = redIndex1 - 10;
    redSide1.style.width = `${redIndex1}%`
    blueSide1.style.width = `${blueIndex1}%`
    if(blueIndex1 == 100) {
        this.alert('RED wins')
    }
  }
});