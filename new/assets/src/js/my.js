$(document).ready(function(){
  $('.partners_carousel').owlCarousel({
    loop:true,
    margin:40,
    items:6,
    dots:true,
    autoplay: true,
    responsive:{
      0 : {
        loop:true,
        margin:0,
        items:1,
        dots:true
      },
      420 : {
        loop:true,
        margin:20,
        items:3,
        dots:true
      },
      769 : {
        loop:true,
        margin:40,
        items:5,
        dots:true
      },
      1440 : {
        loop:true,
        margin:40,
        items:5,
        dots:true
      },
      1441 : {
        loop:true,
        margin:40,
        items:6,
        dots:true
      }
    }
  });

  $('#prevoius-events').owlCarousel({
    loop:false,
    margin:0,
    items:1,
    dots:false,
    nav: true,
    autoplay: false,
    info: true,
    navText: ['',''],
    onTranslated: function(event){
      $('#prevoius-events-current').text(event.item.index+1);
      $('#prevoius-events-total').text(event.item.count);
    },
    onInitialized: function(event){
      $('#prevoius-events-current').text(event.item.index+1);
      $('#prevoius-events-total').text(event.item.count);
    }
  });

  /*$('.cg-top-speaker').each(function(){
    if ($(this).next('.cg-top-speaker__info').length>0) {
      $(this).next('.cg-top-speaker__info').height($(this).height()-40);
    }
  });
  */

  $('select').selectBoxIt({
    autoWidth: false,
    nativeMousedown: true,
    showFirstOption: false,
    defaultText:" ",
  });
  if ($('.cg-cookie-disabled-area').length > 0 ) {
    $('body').addClass('scrollDisable');
  }
  $('.cg-cookie-disabled-area, #cookie_allow_btn').click(function(e){
    e.preventDefault();
    $('.cg-cookie-disabled-area').remove();
    $('body').removeClass('scrollDisable');
    $('.cg-cookie-wrapper').addClass('hide');
  });

  var h = $('nav.navbar').outerHeight();



  $('.cg-accordion').on('show.bs.collapse', function (e) {
    $(e.target).prev().addClass('cg-bordered');
  });

  $('.cg-accordion').on('hidden.bs.collapse', function (e) {
    $('.card-header').removeClass('cg-bordered');
  });

  $(document).on('click','.navbar-toggler',function(){
    $( 'body' ).toggleClass( 'scrollDisable' );
    $( 'header' ).toggleClass( 'cg-layer-top' );
  });

  if ($('body').hasClass('cg-invert')) { //detect not mobile and do some menu animation
    if(!isMobile.any) {
      $(window).scroll(function(){
        if ($(window).scrollTop() > h && !$('body').hasClass('cg-invert')) {
          $('#navigation').removeClass('show');
          setTimeout(function(){
            $('#navigation').addClass('fixed-top');
            $('header').css('padding-top',h);
          },200);
        } else {
          setTimeout(function(){
            if ($('.fixed-top').length > 0) {
              $('#navigation').addClass('fixed-top-remove');
              setTimeout(function(){
                $('#navigation').removeClass('fixed-top-remove');
                $('#navigation').removeClass('fixed-top');
                $('header').css('padding-top',0);
              },200);
              setTimeout(function(){
                $('#navigation').addClass('show');
              },200);
            }
          },200);
        }
      });
    }
  }



  $(".ajax_form .btn-primary").click(function(e){
    e.preventDefault();
    fail = false;
    // тут выполняется код валидации формы
    // если все гут  в нужное место вставляем  fail = true
    if ( ! fail ) {
      $('#thankyouModal').modal('show');
    }
  });

  $('.cg-close-thanks').on('click',function(e){
    e.preventDefault();
    $('#thankyouModal').modal('hide');
  });

  $('.cg-subscription .btn').on('click',function(e){
    e.preventDefault();
    $('.cg-subscription .form-control').empty();
    $('.cg-subscription-result').show();
  });
});

$(".cg-top-speaker-flip").click(function(e){
  e.preventDefault();

  var avatar = $(this).find('.cg-imgcontainer').html();
  var name  = $(this).find('.cg-top-speaker-name').text();
  var title  = $(this).find('.cg-top-speaker-title').html();
  var fulltext  = $(this).find('.cg-top-speaker__info-fulltext').html();

  $('#speakerReadMore .cg-speaker-wrapper .cg-imgcontainer').html(avatar);
  $('#speakerReadMore .cg-speaker-wrapper .cg-top-speaker-name').text(name);
  $('#speakerReadMore .cg-speaker-wrapper .cg-top-speaker-title').html(title);
  $('#speakerReadMore .cg-speaker-wrapper .cg-top-speaker-fulltext').html(fulltext);

  $('#speakerReadMore').modal('show');

});

var required = 0;

$('.ajax_form input, .ajax_form select').bind('change keyup blur click', function () {
  if ( $(this).val() != '' ) {
    $(this).removeClass('error');
    $(this).next('.error_name').hide();
  }
  var empty = true;
  var i = 0;
  $('.ajax_form input').each(function(){
    if ($(this).prop('required')) {
      if ($(this).val().trim() == "") {
        i++
      }
    }
  });

  $('.ajax_form select').each(function(){
    if ($(this).prop('required')) {
      if ($(this).val() == null) {
        i++;
      }

    }
  });

  $('.ajax_form input[type=checkbox]').each(function(){
    if ($(this).prop('required')) {
      if (!$(this).prop('checked')) {
        i++
      }
    }
  });

  console.log(i);



  if ( i == 0 ) {
    $('.ajax_form').find('.btn.disabled').removeClass('disabled').removeAttr('disabled');
  }
  else {
    $('.ajax_form').find('.btn').addClass('disabled');
  }
});
