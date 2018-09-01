global.jQuery = require('jquery');
var $ = global.jQuery;

require('jquery.easing');

function routesLayout() {
  $('.project').hide();

  var hash = window.location.hash;
  hash = hash.replace(/^#/, '');

  if (hash === '') {
    $('.project').hide();
    $('.project-panel').show();
  } else {
    $('.project-panel').hide();
    $("#" + hash).fadeIn();
  }
}

$(document).ready(function() {

  routesLayout();

  $(window).on("load", function() {
    $('.page-loader').css('display', 'block');
    setTimeout(function(){
      $('.page-loader').fadeOut(250);
    }, 250);
	})

  $(window).on("load hashchange", function() {
    routesLayout();
	})
});
