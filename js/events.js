//define functions here

function getIt() {
  $('p').on('click', function(){
    alert('Hey!')
    return
  })
}

function frameIt() {
  $('img').on('load', function() {
    const imgFrame = $('img')
    imgFrame.class = 'tasty'
    return
  })
}


$(document).ready(function(){

// call functions here
getIt();

});
