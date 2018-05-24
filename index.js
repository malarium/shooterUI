const bullet = document.getElementsByClassName('inner_bullets'); //single bullet
const bulletBox = document.getElementsByClassName('outer_div--bullets'); //bullet container
const pointer = document.querySelector("#pointer");
const cover = document.querySelector("#cover");

const checkAmmo = () => {
  let ammo = bulletBox[0].childElementCount;
  console.log(ammo);
  if (ammo > 15) {
    pointer.style.borderColor = "rgb(0, 255, 0)";
  } else if (ammo <= 10 && ammo > 6) {
    pointer.style.borderColor = "rgb(200, 100, 0)";
  } else if (ammo <= 5) {
    pointer.style.borderColor = "rgb(255, 0, 0)";
  }
}

const addBullet = () => {
  let newBullet = document.createElement('div');
  newBullet.classList.add('inner_bullets');
  bulletBox[0].appendChild(newBullet);
}

const reload = () => {
  let amount = 20 - (bulletBox[0].childElementCount);
  for (let a=1; a<=amount; a++) {
    addBullet();
    checkAmmo();
  }
}
reload();

const blood = () => {
  let picture = Math.floor((Math.random() * 6) + 1); //take random picture of blood
  if(Math.floor((Math.random() * 2))) { //let fate decide if we show the blood
    cover.style.backgroundImage = "url(images/blood"+`${picture}`+".png)";
    cover.style.animation = "blood .5s";
  }
  setTimeout(function(){ cover.style.animation = null; }, 500);
}

const shot = () => {
  let last = bulletBox[0].childElementCount;
  if (last) {
    bullet[last-1].remove();
    checkAmmo();
    blood();
  }
}

const visualShot = () => {
    // document.body.style.animation = "shot .1s";
    // setTimeout(function(){ document.body.style.animation = null; }, 100);
}

document.body.addEventListener('click', function(e) { //executes after mouse fires - take away one bullet from the Box
  let last = bulletBox[0].childElementCount;
  if (last) {
  shot();
  visualShot();
}
});


document.body.onkeyup = function(e){ //executes after spacebar pressed - reload
    if(e.keyCode == 32){
        reload();
    }
}
