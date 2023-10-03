function speakNumber(number) {
  
  if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(number.toString());
      speechSynthesis.speak(utterance);
 
  }
}

var div = document.getElementById('top');


var position = 0;

var speed = 1; 
var direction = 2; 
function moveTo() {

position += speed * direction;


div.style.left = position + 'px';


if (position >= window.innerWidth - div.offsetWidth) {
 
  direction = -1;
}

if (position <= 0) {
  
  direction = 1;
}
}

setInterval(moveTo, 20); 