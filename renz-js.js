$(document).ready(function () { if ($("#renz-link,.renz-link").attr("href") != "https://zandaisk91.blogspot.com/") {
        window.location.href = "https://zandaisk91.blogspot.com"; }});

$(document).ready(function() {
    var stickyNavTop = $('#nav').offset().top;
    var stickyNav = function(){
        var scrollTop = $(window).scrollTop();
        if (scrollTop > stickyNavTop) {
            $('#nav').css({ 'position': 'sticky', 'top':0, 'z-index':9999 });
        } else {
            $('#nav').css({ 'position': 'relative' });
        }
    };
    stickyNav();
    $(window).scroll(function() {
        stickyNav();
    });
});


// reveal elements
  $(function(){
$(window).scroll(function(){
  var viTop = $(this).scrollTop() + $(this).height();
  $('.elem-to-reveal').each(function(){
    var $t = $(this);
    if(!$t.hasClass('elem-revealed')){
      var top = $t.offset().top;
      if(top < viTop){
        $t.addClass('elem-revealed');
      }
    }
  });
}).trigger('scroll');
  });