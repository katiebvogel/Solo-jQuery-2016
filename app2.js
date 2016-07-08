$(document).ready(function(){

  $('.color-button').on('click', function(){
    var color = $(this).data('color');
    appendBox(color);
    updateCount(color);
  });

  function updateCount(color){
    var $domElement = $('#' + color + 'Count');
    console.log($domElement.text());
    var currentNumber = $domElement.text();
    var newCount = parseInt(currentNumber) + 1;
    console.log(newCount);
    $domElement.text(newCount);
  }

function appendBox(color){
  $('.container').append('<div class = "color-cube ' + color +'"><div>');
}



});  //doc.ready.close
