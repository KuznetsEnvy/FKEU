var st, headerSub_limit = 0;

function setWhitespace() {
  $('.js-whitespace').animate({ height: $('header').height() }, 200, "swing");
}

$(window).on('load', function() {
    st = $(window).scrollTop();
    setWhitespace();
    if ( $('.headerSub_limit').length > 0 ) {
        headerSub_limit = 54;
    }
});
