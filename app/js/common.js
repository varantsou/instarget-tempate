'use strict'

$(function() {
     autoHeightBlock();

     $('.show-hide-menu').on('click', function(){
          $('body').toggleClass('open-menu');
     });

});


function autoHeightBlock(){
     var item = $('.reviews-item .reviews-item__desctiption'),

          maxHeight = 0;

     item.each(function(){
          var heightItem = $(this).outerHeight();
          if ( heightItem > maxHeight ){
               maxHeight = heightItem;
          }
     });

     item.css('height', maxHeight);
}

$(document).ready(function(){

     if ($(".list-of-cases").length){
          $(".list-of-cases").slick({
               dots: false,
               infinite: true,
               arrows: true,
               fade:true,
               autoplay: false,
               prevArrow:"<button type='button' class='slick-prev slick-arrow'></button>",
               nextArrow:"<button type='button' class='slick-next slick-arrow'></button>"
          });
     }

     if ($(".reviews-list").length){
          $(".reviews-list").slick({
               dots: false,
               infinite: true,
               arrows: false,
               fade:false,
               autoplay: false,
               slidesToShow: 3,
               responsive: [
                    {
                      breakpoint: 991,
                      settings: {
                         slidesToShow: 2,
                      }
                    },
                    {
                      breakpoint: 767,
                      settings: {
                         slidesToShow: 1,
                      }
                    },
               ]
          });
     }
});


$(window).on('scroll', function(){
     var  documentTopOffset = document.documentElement.scrollTop,
          w_w = $(window).width();

     if (w_w < 767 && documentTopOffset > 1){
          $('body').addClass('scrollPage');
     }    else {
          $('body').removeClass('scrollPage');
     }
});


$(document).ready(function(){
     $('.popup-with-form').magnificPopup({
        type: 'inline',
        focus: '#name',
     });

     $('.registration, .autorisation, .restore-password').magnificPopup({
        type: 'inline',
        focus: '#name',
     });
});


$(".scroll-to-secrion").click(function () {
     var elementClick = $(this).attr("href"),
          destination = $(elementClick).offset().top;

     $('html, body').animate({
          scrollTop: destination
     }, 600);
    return false;
});
