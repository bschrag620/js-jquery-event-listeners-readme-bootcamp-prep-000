//define functions here

function getIt() {
  $('p').on('click', function(){
    alert('Hey!')
    return
  })
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty')
    return
  })
}

function pressIt() {
  $('input#typing').on('keydown', function(e) {
    if (e.which === 71) {
      alert('g pressed')
      return
    }
    return
  })
}


$(document).ready(function(){

// call functions here
getIt();
frameIt();
pressIt();
});
