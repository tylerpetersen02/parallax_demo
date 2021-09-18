let trees = document.getElementById('trees');
let lake = document.getElementById('lake');
let mount1 = document.getElementById('mountain1');
let mount2 = document.getElementById('mountain2');
let mount3 = document.getElementById('mountain3');
let mount4 = document.getElementById('mountain4');
let clouds = document.getElementById('clouds');
let moon = document.getElementById('moon');
let text = document.getElementById('text');
let header = document.getElementById('header');

window.addEventListener('scroll', function(){
  let value = window.scrollY;
  console.log(value);
  lake.style.top = value * 0.4 + 'px';
  mount1.style.top = value * 0.4 + 'px';
  mount2.style.top = value * 0.45 + 'px';
  mount3.style.top = value * 0.5 + 'px';
  mount4.style.top = value * 0.55 + 'px';
  moon.style.top = value * 0.8 + 'px';
  header.style.top = value * 0.8 + 'px';
})