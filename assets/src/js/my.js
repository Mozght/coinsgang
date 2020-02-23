$(document).ready(function(){
  $('#gallery').owlCarousel({
      loop:true,
      margin:40,
      nav:false,
      items:1,
      dots: false
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
  $('.bar').hover(function(){
    $(this).addClass('active');
  },function(){
    $(this).removeClass('active');
  });
  $('.bar').click(function(e){
    e.preventDefault();
    if ($('.program').hasClass('active')) {
      $('.program').removeClass('active').css('opacity',0);
    }
    else {
      $('.program').css('opacity',1).addClass('active');
    }
  });
});
