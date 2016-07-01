$(document).ready(function(){
var redCount = 0;
var yellowCount = 0;
var greenCount = 0;
var blueCount = 0;
var $newdiv = $("<div class = 'color-cube'></div>")
var blockListRed = [];
var blockListYellow = [];
var blockListGreen = [];
var blockListBlue = [];

$('button[data-class="red"]').on('click', function(event){
  redCount++ ;
  blockListRed.push(redCount);
  $('.answerFieldRed').empty();
  $('.answerFieldRed').append('<p>'+ redCount + '</p>');
  // $('.container').append($newdiv);
  addBlocks();

})

$('button[data-class="yellow"]').on('click', function(event){
  yellowCount ++;
  blockListRed.push(yellowCount);
  $('.answerFieldYellow').empty();
  $('.answerFieldYellow').append('<p>'+ yellowCount + '</p>');
  addBlocks();

})

$('button[data-class="green"]').on('click', function(event){
  greenCount ++;
  blockListGreen.push(greenCount);
  $('.answerFieldGreen').empty();
  $('.answerFieldGreen').append('<p>'+ greenCount + '</p>');
  addBlocks();
})

$('button[data-class="blue"]').on('click', function(event){
  blueCount ++;
  blockListBlue.push(blueCount);
  $('.answerFieldBlue').empty();
  $('.answerFieldBlue').append('<p>'+ blueCount + '</p>');

  addBlocks();
})

function addBlocks(){
    $('.color-cube').append("<div class = 'color-cube'></div>").css("background-color", 'red');

}

//I couldn't get the color of the box to REMAIN the correct color!  I was answerFieldBlue
//to write separate functions for different blocks, but the last function
//called would overwrite the color of the previous blocks. 


});
