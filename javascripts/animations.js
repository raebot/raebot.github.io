$(document).ready(function($){

  $('.links a').hover(
    function toggleSwingAnimation(){
      $(this).toggleClass('animated swing');
    }
  );

  $('.visage').hover(
    function toggleWobbleAnimation(){
      $(this).toggleClass('animated wobble');
    }
  );
});