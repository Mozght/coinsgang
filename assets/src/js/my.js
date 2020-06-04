$(document).ready(function(){
  $('#gallery').owlCarousel({
      loop:true,
      margin:40,
      nav:true,
      items:1,
      dots: false
  });

  $('.partners_carousel').owlCarousel({
    loop:true,
    margin:0,
    items:3,
    dots:true,
    responsive:{
      0 : {
        loop:true,
        margin:0,
        items:1,
        dots:true
      }, 
      769 : {
        loop:true,
        margin:0,
        items:3,
        dots:true
      }
    }
  });
  $('.gallery_container').hide();
  $('.gallery_container').css('opacity','1');
  $('.see_accomodation').on('click',function(e){
    e.preventDefault();
    $('.gallery_container').fadeIn(200);
  });
  $('.gallery_container .close_gallery').on('click',function(e){
    e.preventDefault();
    $('.gallery_container').fadeOut(200);
  });
  /*
  $('.bar').hover(function(){
    $(this).addClass('active');
  },function(){
    $(this).removeClass('active');
  });
  */
  /*
  $('.bar .see_program').click(function(e){
    e.preventDefault();
    $('.bar>a').removeClass('active');
    $('.program').removeClass('active')
    if ($('.see_program.program').hasClass('active')) {
      $('.see_program.program').removeClass('active').css('opacity',0);
      $(this).removeClass('active');
    }
    else {
      $('.see_program.program').css('opacity',1).addClass('active');
      $(this).addClass('active');
    }
  });
  $('.bar .see_speakers').click(function(e){
    e.preventDefault();
    $('.program').removeClass('active')
    $('.bar>a').removeClass('active');

    if ($('.see_speakers.program').hasClass('active')) {
      $('.see_speakers.program').removeClass('active').css('opacity',0).parent().removeClass('active')
      $(this).removeClass('active');
    }
    else {
      $('.see_speakers.program').css('opacity',1).addClass('active');
      $(this).addClass('active');
    }
  });
  */
  /*
  if (!$('body').hasClass('white')) {
    $('.bar>a').click(function(e){
      e.preventDefault();
      if(!$(this).hasClass('active')) {
        if ($(this).data('id') === 'see_offer') {
          $('.program').removeClass('active').css('opacity', 0);
          $('.pannels').removeClass('active').css('opacity', 0);
          $('.bar>a').removeClass('active');
          $(this).addClass('active');
        } else {
          $('.pannels').addClass('active').css('opacity', 1);
          $('.bar>a').removeClass('active');
          var program_active = $('.program.active');
          var attr = $(this).data('id');
          $('.' + attr + '.program').css('opacity', 1).addClass('active');
          $(this).addClass('active');
          program_active.removeClass('active').css('opacity', 0);
        }
      }
    });
  }
  */

  $('.checkout .offer').click(function(){
    $('.checkout .offer').removeClass('active').find('input[type=radio]').prop("checked", false);
    $(this).addClass('active');
    $(this).find('input[type=radio]').prop("checked", true);
    var price = $(this).data('price');
    $('#total_value').text(price);
  })

  //window.intlTelInput(document.querySelector("#telephone"));

  $('#become_sponsor').on('click',function(e){
    e.preventDefault();
    $('.thanks').prev('.sponsor').css('opacity',0);
    $('.thanks').css('display','flex');
  });

  $('#accordion .accordionButton').click(function() {
    $('#accordion .content').removeClass('active');
    $(this).parent().addClass('active');
    var content = $(this).closest('.content').find('.accordionContent');
    $('#accordion .accordionContent').not(content).slideUp();
    content.slideDown();
  });

});
