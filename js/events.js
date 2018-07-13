//define functions here

function getIt() {
  $('p').on('click', function(){
    alert('Hey!')
    return
  })
}

function frameIt() {
  $('img').on('load', function() {
    const imgFrame = $('img:first-child')
    console.log(imgFrame)
  })
}


$(document).ready(function(){

// call functions here
getIt();

});
