 $(function(){
    $('#open').on('click', function () {
      $('#close').css('display','flex');
      $('.menu').stop().animate({
        right:0
      }, 500);   
    });
    $('#close').on('click', function () {
      $('#close').css('display','none');
      $('.menu').stop().animate({
        right:'-100%'
      }, 300); 
    });

});