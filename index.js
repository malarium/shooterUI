const bullet = document.getElementsByClassName('inner_bullets'); //single bullet
const bulletBox = document.getElementsByClassName('outer_div--bullets'); //bullet container
const pointer = document.querySelector("#pointer");

const checkAmmo = () => {
  let ammo = bulletBox[0].childElementCount;
  console.log(ammo);
  if (ammo > 15) {
    pointer.style.borderColor = "rgb(0, 255, 0)";
  } else if (ammo <= 15 && ammo > 10) {
    pointer.style.borderColor = "rgb(100, 255, 0)";
  } else if (ammo <= 10 && ammo > 6) {
    pointer.style.borderColor = "rgb(255, 100, 0)";
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

const shot = () => {
  let last = bulletBox[0].childElementCount;
  if (last) {
    bullet[last-1].remove();
    checkAmmo();
  }
}

const visualShot = () => {
    document.body.style.animation = "shot .1s";
    setTimeout(function(){ document.body.style.animation = null; }, 100);
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
