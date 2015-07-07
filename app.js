var button = document.getElementById('button')
var tracks = document.getElementsByClassName('track')

button.addEventListener('click',function(e){
  if (i < 2){
    var i = 0
    tracks[i].play()
    i++
    if (i === 2) {
      i = 0
    }
  }
})
