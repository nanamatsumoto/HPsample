
$(function() {
  $('.hamburger').click(function() {
      $(this).toggleClass('active');

       if ($(this).hasClass('active')) {
          //  $('.globalMenuSp').addClass('active');
          $('.globalMenuSp').fadeIn(600)
       } else {
          //  $('.globalMenuSp').removeClass('active');
          $('.globalMenuSp').fadeOut(500)
       }
   });
 });

 function slideSwitch() {
   var $active = $('#slideshow img.active');

   if ( $active.length == 0 ) $active = $('#slideshow img:last');

   var $next =  $active.next().length ? $active.next()
      : $('#slideshow img:first');

   $active.addClass('last-active');

   $next.css({opacity: 0.0})
      .addClass('active')
      .animate({opacity: 1.0}, 3000, function() {
           $active.removeClass('active last-active');
      });
}

$(function() {
   setInterval( "slideSwitch()",3000 );
});

// For more check out zachsaucier.com
