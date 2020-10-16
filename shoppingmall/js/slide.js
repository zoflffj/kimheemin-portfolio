$(function(){
    $('.swiper-container').height();
    
    //swiper 
      var swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        autoplay: {
          delay: 1500,
          disableOnInteraction: false, 
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        }
      });

});