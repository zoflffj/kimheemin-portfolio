 $(function(){
    // $('.hamburger').on('click',function(){
    //      $('nav').toggleClass('on');
    //      $('.menu').css('width',300);
    //      $('.menu').css('background','#fff');
    //      $('.blind').toggleClass('active');
    //  });
 
    $('#open').on('click', function () {
      $('.menu').stop().animate({
        left: 0
      }, 300);
      $('.menu').css('background','#fff');
      $('.blind').toggleClass('active');
    });
    $('#close').on('click', function () {
      $('.menu').stop().animate({
        left: -280
      }, 300);
      $('.blind').removeClass('active');
    });
});