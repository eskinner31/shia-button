var button = document.getElementById('button')
var tracks = document.getElementsByClassName('track')
var i = 0;

button.addEventListener('click',function(e){
  if(i <= 2){
    tracks[i].play();
  }
  i++
  if(i === 3){
    i = 0;
  }
})
