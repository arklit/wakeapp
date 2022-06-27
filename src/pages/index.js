import './index.scss'
import 'jquery'

$(window).on('load', function() {
  $('#status').fadeOut();
  $('#preloader').delay(350).fadeOut('slow');
  $('body').delay(350).css({'overflow':'visible'});
})

$('.header__login').click(function (e) {
  $(".popup").addClass('popup_opened')
})
$('.popup__join').click(function (e) {
  $(".popup").removeClass('popup_opened')
})
