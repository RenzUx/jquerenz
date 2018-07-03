 var e = $('#scroll-to-top');
  var d = $(document).height(), c = $(window).height();
  $(window).scroll(function() {    
  	var s = $(this).scrollTop(), p = (1-s/(d-c))*100;
    (s>100) ? e.stop().css('display','block').animate({'bottom':'20px'}, 100) :
    e.stop().animate({'bottom':'-10px'},100,function(){ $(this).css('display','none'); });
    e.find('span').css('top', p+'%');
  }).trigger('scroll');
$(document).ready(function(){$(&quot;.blanterMenu&quot;).click(function(){$(&quot;.darkshadow,.slidemenu&quot;).toggleClass(&quot;shows&quot;);});});
$(document).ready(function(){$(&quot;.darkshadow&quot;).click(function(){$(&quot;.darkshadow,.slidemenu&quot;).removeClass(&quot;shows&quot;);});});
$(document).ready(function(){$(&quot;.showbmenu&quot;).click(function(){$(&quot;ul.bmenu&quot;).slideToggle(&quot;fast&quot;)})});
$(function(){var t,i,s,e;$(".ripple").click(function(h){0===$(this).find(".ink").length&&$(this).prepend("<span class='ink'></span>"),(t=$(this).find(".ink")).removeClass("animate"),t.height()||t.width()||(i=Math.max($(this).outerWidth(),$(this).outerHeight()),t.css({height:i,width:i})),s=h.pageX-$(this).offset().left-t.width()/2,e=h.pageY-$(this).offset().top-t.height()/2,t.css({top:e+"px",left:s+"px"}).addClass("animate")})});
$(function(){$(window).scroll(function(){var e=$(this).scrollTop()+$(this).height();$(".elem-to-reveal").each(function(){var l=$(this);l.hasClass("elem-revealed")||l.offset().top<e&&l.addClass("elem-revealed")})}).trigger("scroll")});
$(document).ready(function(){var o=$("#nav").offset().top,n=function(){$(window).scrollTop()>o?$("#nav").css({position:"sticky",top:0,"z-index":9999}):$("#nav").css({position:"relative"})};n(),$(window).scroll(function(){n()})});
