window.people = [];

function restorePeople() {
  window.people.push('Giuseppe');
  window.people.push('Andrea');
  window.people.push('Emanuela');
  window.people.push('Pawel');
  window.people.push('Rosario');
  window.people.push('Cesare');
  window.people.push('Alphonso');
  window.people.push('Dario');
  window.people.push('Gennaro');
  window.people.push('Fabio');
  window.people.push('Ciccio');
}

restorePeople();

var myShakeEvent = new Shake();

myShakeEvent.start();

window.addEventListener('shake', function() {
  var randomIndex = Math.floor(Math.random() * people.length);
  var person = people.splice(randomIndex, 1)[0];
  document.querySelector('h1').innerHTML = person;

  if(people.length > 1) { 
    document.querySelector('h2').innerHTML = 'Still ' + people.length + ' people to go!';
  } else if (people.length == 1) {
    document.querySelector('h2').innerHTML = 'Still ' + people.length + ' person to go!';
  } else {
    restorePeople();
    document.querySelector('h2').innerHTML = 'Still all people to go!';
  }

}, false);
