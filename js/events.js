//define functions here

function getIt() {
  $('p').on('click', function(){
    alert('Hey!')
    return
  })
}

function frameIt() {
  $('img').on('loaded', function() {
    alert('Image loaded!')
    $('img').addClass('tasty')
  })
  return
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

function submitIt() {
  $('form').on('submit', function() {
    alert('Your form is going to be submitted now.')
    return
  })
}


$(document).ready(function(){

// call functions here

getIt();
frameIt();
pressIt();
submitIt();

});
