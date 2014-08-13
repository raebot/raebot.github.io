$(document).ready(function($){

  $('.links a').hover(
    function toggleSwingAnimation(){
      $(this).toggleClass('animated swing');
    }
  );
});