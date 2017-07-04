
$(document).ready(function() {
 $(".slider_2s").each(function () { 
 	var obj = $(this);
 	$(obj).append("<div class='nav'></div>");
 	$(obj).find("li").each(function () {
   $(obj).find(".nav").append("<span rel='"+$(this).index()+"'></span>"); // добавляем блок навигации
   $(this).addClass("slider_2s"+$(this).index());
 });
  $(obj).find("span").first().addClass("on");
});
});
function sliderJS (obj, sl) { // slider function
 var ul = $(sl).find("ul"); 
 var bl = $(sl).find("li.slider_2s"+obj);
 var step = $(bl).width();
 $(ul).animate({marginLeft: "-"+step*obj}, 500);
}
$(document).on("click", ".slider_2s .nav span", function() { 
 var sl = $(this).closest(".slider_2s");
 $(sl).find("span").removeClass("on");
 $(this).addClass("on");
 var obj = $(this).attr("rel");
 sliderJS(obj, sl);
 return false;
});
$(window).scroll(function() {
    var sb_m = 0; /* отступ сверху и снизу */
    var mb = 150; /* высота подвала с запасом */
    var st = $(window).scrollTop();
    var sb = $(".fixed_blog");
    var sbi = $(".fixed_blog");
    var sb_ot = sb.offset().top;
    var sbi_ot = sbi.offset().top;
    var sb_h = sb.height();
  
    if(sb_h + $(document).scrollTop() + sb_m + mb < $(document).height()) {
       if(st > sb_ot) {
            var h = Math.round(st - sb_ot) + sb_m;
            sb.css({"paddingTop" : h});
        }
        else {
            sb.css({"paddingTop" : 0});
        }
    }
});
